// Photo Bot → Telegram. Needs env TELEGRAM_BOT_TOKEN.
// Optional: TELEGRAM_CHAT_ID (fixed group), PHOTOBOT_PIN (protects sending).
const TG = (token, method) => `https://api.telegram.org/bot${token}/${method}`;

function pinOk(req) {
  const need = process.env.PHOTOBOT_PIN;
  if (!need) return true;
  return (req.headers['x-photobot-pin'] || '') === need;
}

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const fixedChat = process.env.TELEGRAM_CHAT_ID;
  const action = (req.query && req.query.action) || '';

  if (req.method === 'GET' && action === 'status') {
    return res.status(200).json({ configured: !!token, pinRequired: !!process.env.PHOTOBOT_PIN, chatFixed: !!fixedChat });
  }
  if (!token) return res.status(503).json({ ok: false, error: 'Bot token not set in Vercel' });
  if (!pinOk(req)) return res.status(401).json({ ok: false, error: 'Wrong PIN' });

  if (req.method === 'GET' && action === 'chats') {
    const r = await fetch(TG(token, 'getUpdates') + '?limit=100&allowed_updates=' + encodeURIComponent(JSON.stringify(['message', 'my_chat_member', 'channel_post'])));
    const j = await r.json();
    if (!j.ok) return res.status(502).json({ ok: false, error: j.description || 'Telegram error' });
    const seen = new Map();
    for (const u of j.result || []) {
      const chat = (u.message && u.message.chat) || (u.my_chat_member && u.my_chat_member.chat) || (u.channel_post && u.channel_post.chat);
      if (chat && chat.type !== 'private') seen.set(String(chat.id), { id: chat.id, title: chat.title || String(chat.id), type: chat.type });
    }
    return res.status(200).json({ ok: true, chats: [...seen.values()] });
  }

  if (req.method === 'POST') {
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
    const chatId = fixedChat || body.chatId;
    const photos = Array.isArray(body.photos) ? body.photos.slice(0, 10) : [];
    if (!chatId) return res.status(400).json({ ok: false, error: 'No group chosen' });
    if (!photos.length) return res.status(400).json({ ok: false, error: 'No photos' });

    const form = new FormData();
    form.append('chat_id', String(chatId));
    let method;
    if (photos.length === 1) {
      method = 'sendPhoto';
      form.append('photo', new Blob([Buffer.from(photos[0].data, 'base64')], { type: 'image/jpeg' }), 'poster.jpg');
      if (photos[0].caption) form.append('caption', String(photos[0].caption).slice(0, 1024));
    } else {
      method = 'sendMediaGroup';
      const media = photos.map((p, i) => {
        form.append(`p${i}`, new Blob([Buffer.from(p.data, 'base64')], { type: 'image/jpeg' }), `poster${i + 1}.jpg`);
        const m = { type: 'photo', media: `attach://p${i}` };
        if (p.caption) m.caption = String(p.caption).slice(0, 1024);
        return m;
      });
      form.append('media', JSON.stringify(media));
    }
    const r = await fetch(TG(token, method), { method: 'POST', body: form });
    const j = await r.json().catch(() => ({}));
    if (!j.ok) return res.status(502).json({ ok: false, error: j.description || `Telegram HTTP ${r.status}` });
    return res.status(200).json({ ok: true, sent: photos.length });
  }

  res.status(405).json({ ok: false, error: 'Method not allowed' });
};

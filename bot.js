import { WechatyBuilder } from 'wechaty';

const bot = WechatyBuilder.build({
  name: 'wechat-demo',
  puppet: process.env.WECHATY_PUPPET,
});

bot.on('scan', (qrcode, status) => {
  const qrcodeTerminal = require('qrcode-terminal');
  qrcodeTerminal.generate(qrcode, { small: true });
  console.log(`Scan QR Code to login (${status})`);
});

bot.on('login', (user) => {
  console.log(`${user.name()} logged in`);
});

bot.on('message', async (message) => {
  console.log(`Message received: ${message}`);
});

bot.start()
  .then(() => console.log('🤖 WeChat bot started.'))
  .catch((e) => console.error(e));


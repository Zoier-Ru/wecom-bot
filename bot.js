import { WechatyBuilder } from 'wechaty'

const bot = WechatyBuilder.build({
  name: 'wecom-bot',
  puppet: process.env.WECHATY_PUPPET, // 从变量中读取
})

bot
  .on('scan', (qrcode, status) => {
    console.log(`扫码登录状态：${status}\n请使用微信扫描下方二维码登录：`)
    require('qrcode-terminal').generate(qrcode, { small: true })
  })
  .on('login', user => {
    console.log(`🤖 登录成功：${user}`)
  })
  .on('message', message => {
    console.log(`📨 收到消息：${message}`)
  })

bot.start()
  .catch(e => console.error('❌ 启动失败：', e))


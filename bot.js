const { WechatyBuilder } = require('wechaty')

const bot = WechatyBuilder.build({
  name: 'wechat-bot',
})

bot
  .on('scan', (qrcode, status) => {
    console.log(`Scan QR Code to login: ${status}\n`)
    require('qrcode-terminal').generate(qrcode, { small: true })
  })
  .on('login', user => {
    console.log(`🤖 ${user.name()} logged in`)
  })
  .on('message', message => {
    console.log(`📨 ${message}`)
  })

bot.start()
  .then(() => console.log('🤖 Bot started.'))
  .catch(e => console.error(e))


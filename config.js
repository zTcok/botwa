global.owner = ['62857043685323']  
global.mods = ['62857043685323'] 
global.prems = ['62857043685323']

// YANG ATAS ITU UBAH JADI NOMOR LU
// & YG BAWAH INI, NOMOR,NAMA,EMAIL LU
global.fsizedoc = '45000000000' // default 10TB
global.fpagedoc = '19'
global.namedoc = 'YT: myukonet'
global.nameowner = 'Myuko Developer'
global.mail = 'myukodeveloper@gmail.com'
global.nolu = '6281977815539'
global.numberowner = '6281977815539' 
global.dana = '6281977815539'
global.pulsa = '6281977815539'
global.gopay = '6281977815539'

// YG BAWAH ITU, ISI NAMA BOT, DAN MEDSOS LU

global.namebot = 'Guta Bot 4- MultiDevice'
global.gc = 'https://chat.whatsapp.com/Gn77x6DP4GJ1lOHrrt5lFb'
global.sourceUrl = "https://Instagram.com/thisapin_"
global.instagram = 'https://instagram.com/thisapin_'
global.flythumb = 'https://telegra.ph/file/c2200a3352936bb68378a.jpg' //Ini thumbnail menu dll
global.version = '6.0'

// BAWAH INI GOSAH DIGANTI, KECUALI KLO KEY NYA ABIS

global.lolkey = '4ec4c2205a943c2dc163cd7e' //key ini udah Prem, cuma gk di custom aja
global.rose = 'Rk-relyXsakkarin';
global.zenzkey = 'BagasPrdn'
global.btc = 'Admin'

// BAWAH INI WM, SERAH LU MW ISI APA

global.wm = 'The Next WhatsApp Bot'
global.watermark = wm
global.wm2 = 'Myuko Developer'
global.wm3 = 'Guta Bot 4'
global.wm4 = 'Gura Bot 4'
global.fla = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text='
global.wait = 'Loading, please wait...'
global.eror = 'Server Error'
global.benar = 'Benar\n'
global.salah = 'Salah\n'
global.web = global.sourceUrl

// YG BAWAH ITU, UBAH, UNTUK WM STIKER

global.stiker_wait = 'Sedang Di Proses...'
global.packname = 'Created By Gura Bot 4\n'
global.author = 'Myuko Developer'

// UDAH COY, YG BAWAH INI GOSAH DI APA" IN

global.APIs = { 
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  zeks: 'https://api.zeks.xyz',
  zekais: 'http://zekais.com',
  lolhuman: 'https://api.lolhuman.xyz',
  tio: 'https://api.botcahx.live',
  popcat: 'https://api.popcat.xyz',
  rey: 'https://sekha.me'
}
global.APIKeys = { // Tambahkan Apikey nya disini

  'https://sekha.me': 'apirey',
  'https://api.xteam.xyz': 'd37372311698ed1d',
  'https://pencarikode.xyz': 'pais', 
  'https://zekais.com': 'apikeymu',
  'https://api.botcahx.live': 'QaepQXxR',
  'https://api.lolhuman.xyz': 'ayakaviki',
}

/*Yang Ini Untuk Setting Rpg Game Yah Kak*/
global.multiplier = 45
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

/*Yang Ini Jangan Di Ubah Yah Kak*/
let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
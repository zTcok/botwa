/* 
Script By Reelly XD
  � YT: ReellyXD
  � IG: reellyxd
Buy Script? 
  � WA: +62 857-0436-85323
  � TELE: t.me/rely_xd
  � Github: github.com/ReellyXD
*/

const axios = require('axios')

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*Example*: ${usedPrefix + command} Sazumi Viki`
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  try {
    let response = await axios.get(`https://api.lolhuman.xyz/api/textprome2/glitch?apikey=${global.lolkey}&text1=${text.split` `[0]}&text2=${text.split` `[1] || ''}`, { responseType: 'arraybuffer' })
    let buffer = Buffer.from(response.data, 'binary')
    conn.sendFile(m.chat, buffer, 'image.jpg', '', m)
  } catch (e) {
    conn.reply(m.chat, 'Terjadi kesalahan saat memproses permintaan.', m)
    console.log(e)
  }
}

handler.help = ['glitch']
handler.tags = ['maker']
handler.command = /^glitch$/i
handler.register = true
handler.limit = true

module.exports = handler
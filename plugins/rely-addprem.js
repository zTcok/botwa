/* 
Script By Reelly XD
   YT: ReellyXD
   IG: reellyxd
Buy Script? 
   WA: +62 857-0436-85323
   TELE: t.me/rely_xd
   Github: github.com/ReellyXD
*/


let { MessageType } = require('@adiwajshing/baileys');

let handler = async (m, { conn, text, usedPrefix }) => {
  function no(number) {
    return number.replace(/\s/g, '').replace(/([@+-])/g, '');
  }

  var hl = [];
  hl[0] = text.split('|')[0];
  hl[0] = no(hl[0]) + "@s.whatsapp.net";
  hl[1] = text.split('|')[1];
    
 	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: 'š',
			key: m.key,
		}
	})

  if (!text) return m.reply(`*Example*: .addprem @user | 7`);
  if (typeof db.data.users[hl[0]] == 'undefined') throw 'The user doesn t exist in the database';

  var jumlahHari = 86400000 * hl[1];
  var now = new Date() * 1;

  global.db.data.users[hl[0]].premium = true;

  if (now < global.db.data.users[hl[0]].premiumDate) global.db.data.users[hl[0]].premiumDate += jumlahHari;
  else global.db.data.users[hl[0]].premiumDate = now + jumlahHari;

  let username = `@${hl[0].split('@')[0]}`;
  let expiredDate = new Date(global.db.data.users[hl[0]].premiumDate);
  let expiredText = expiredDate.toDateString();

  let response = `ā¢   *SUCCESSFULLY ADDED PREMIUM*\n\nā  ā¦  Added to: ${username}\nā  ā¦  Will end on: ${expiredText}\nā  ā¦  Number of premium days added: ${hl[1]}`;

  m.reply(response, m.chat, { mentionedJid: [hl[0]] });
  m.reply(response, hl[0], { mentionedJid: [hl[0]] });
}

handler.help = ['addprem *@user | days*'];
handler.tags = ['owner'];
handler.command = /^(addprem)$/i;
handler.owner = true;
handler.fail = null;
module.exports = handler;

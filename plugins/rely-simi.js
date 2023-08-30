
const axios = require('axios');

let handler = async (m, { text }) => {
  if (!text) {
    throw '*Example*: .simi Hai Simi!';
  }

  let message = encodeURIComponent(text);
  let level = 12;
  let lc = 'id';
  let callName = 'frieren';
  let apiKey = '${global.rose}';
  let apiUrl = `https://api.itsrose.life/others/simi?message=${message}&level=${level}&lc=${lc}&call_name=${callName}&apikey=${apiKey}`;

  try {
    let response = await axios.get(apiUrl);
    let data = response.data;

    if (data.status === true) {
      let result = data.result;
      let simiSentence = result.simi.sentence;
      m.reply(simiSentence);
    } else {
      throw 'Gagal mendapatkan respons dari Simi.';
    }
  } catch (error) {
    console.error(error);
    m.reply('Terjadi kesalahan saat berkomunikasi dengan Simi.');
    m.reply(`Detail Error:\n\n${error.message}`);
  }
};

handler.help = ['simi'];
handler.tags = ['internet'];
handler.command = /^simi$/i;

module.exports = handler;
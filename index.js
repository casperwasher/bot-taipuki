require('./kespler')
const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@adiwajshing/baileys")
const fs = require('fs')
const pino = require('pino')
const chalk = require('chalk')
const path = require('path')
const _ = require('lodash')
const axios = require('axios')
const FileType = require('file-type')
const yargs = require('yargs/yargs')
const lolcatjs = require('lolcatjs')
const { Boom } = require('@hapi/boom')
const PhoneNumber = require('awesome-phonenumber')
const { hello } = require('./casper-file/welcome/hello/hello')
const { bye } = require('./casper-file/welcome/bye/bye')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./casper-file/lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./casper-file/lib/myfunc')
//=================================================//
var low
try {
low = require('lowdb')
} catch (e) {
low = require('./casper-file/lib/lowdb')}
//=================================================//
const { Low, JSONFile } = low
const mongoDB = require('./casper-file/lib/mongoDB')
//=================================================//
global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')
//=================================================//
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
//=================================================//
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
/https?:\/\//.test(opts['db'] || '') ?
new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
new mongoDB(opts['db']) :
new JSONFile(`casper-file/dbnye/database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
if (global.db.data !== null) return
global.db.READ = true
await global.db.read()
global.db.READ = false
global.db.data = {
users: {},
chats: {},
database: {},
game: {},
settings: {},
setting: {},
others: {},
sticker: {},
...(global.db.data || {})}
  global.db.chain = _.chain(global.db.data)}
loadDatabase()
//=================================================//
// save database every 30seconds
if (global.db) setInterval(async () => {
if (global.db.data) await global.db.write()
  }, 30 * 1000)
//=================================================//
async function startkesper() {
const { state, saveCreds } = await useMultiFileAuthState(global.sessionName)
const kesper = makeWASocket({
logger: pino({ level: 'silent' }),
printQRInTerminal: true,
browser: ['Casper Multi Device','Safari','1.0.0'],
auth: state})
//=================================================//
if (kesper.user && kesper.user.id) kesper.user.jid = jidDecode(kesper.user.id)
store.bind(kesper.ev)
//=================================================//
kesper.ev.on('messages.upsert', async chatUpdate => {
try {
mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast') return
if (!kesper.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
m = smsg(kesper, mek, store)
require("./kesper")(kesper, m, chatUpdate, store)
} catch (err) {
console.log(err)}})
//=================================================//
kesper.ev.on('group-participants.update', async (anu) => {
//console.log(anu)
if (!wlcm.includes(anu.id)) return
try {
let metadata = await kesper.groupMetadata(anu.id)
let participants = anu.participants
for (let num of participants) {
// Get Profile Picture User
try {
ppuser = await kesper.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'}
//=================================================//
// Get Profile Picture Group
try {
ppgroup = await kesper.profilePictureUrl(anu.id, 'image')
} catch {
ppgroup = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'}
//=================================================//
if (anu.action == 'add') {
var buffer = await getBuffer(ppuser)
let fgclink = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6285765134804@whatsapp.net"}, "message": {orderMessage: {itemCount: 9999999,status: 200, thumbnail: buffer, surface: 200, message: `${metadata.subject}`, orderTitle: 'memek', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
he = `HELLO 👋 SELAMAT DATANG DI GROUP ${metadata.subject} @${num.split("@")[0]}\n\n${metadata.desc}`
let link = `https://youtube.com/c/Asmoudeous666`
let buttons = [
{buttonId: `Casper`, buttonText: {displayText: hello}, type: 1},
]
let buttonMessage = {
document: fs.readFileSync('./casper-file/lib/tes.xlsx'),
mimetype: feler,
jpegThumbnail:buffer,
mentions: [num],
fileName: `HELLO 👋 SELAMAT DATANG DI GROUP ${metadata.subject}`,
fileLength: 99999999999999,
caption: he,
footer: `© Casper`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: `Jangan Lupa Tersenyum ☺️`,
body: `SUBSCRIBE Casper`,
mediaType:2,
thumbnail: buffer,
sourceUrl: link,
mediaUrl: link,}}}
//=================================================//
kesper.sendMessage(anu.id, buttonMessage, {quoted:fgclink})
} else if (anu.action == 'remove') {
let fgclink = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6285765134804@whatsapp.net"}, "message": {orderMessage: {itemCount: 9999999,status: 200, thumbnail: buffer, surface: 200, message: `${metadata.subject}`, orderTitle: 'memek', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
he = `SELAMAT TINGGAL KAWAN 👋 ${metadata.subject} @${num.split("@")[0]}\n\n${metadata.desc}`
let link = `https://youtube.com/c/Asmoudeous666`
let buttons = [
{buttonId: `Casper`, buttonText: {displayText: bye}, type: 1},
]
let buttonMessage = {
document: fs.readFileSync('./casper-file/lib/tes.xlsx'),
mimetype: feler,
jpegThumbnail:buffer,
mentions: [num],
fileName: `SELAMAT TINGGAL 👋 ${metadata.subject}`,
fileLength: 99999999999999,
caption: he,
footer: `© Casper`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: `Jangan Lupa Tersenyum ☺️`,
body: `SUBSCRIBE Casper`,
mediaType:2,
thumbnail: buffer,
sourceUrl: link,
mediaUrl: link,}}}
kesper.sendMessage(anu.id, buttonMessage, {quoted:fgclink})}}
} catch (err) {
/*console.log(err)*/}})
kesper.ev.on('group-participants.update', async (anu) => {
//console.log(anu)
if (!wlcmm.includes(anu.id)) return
try {
let metadata = await kesper.groupMetadata(anu.id)
let participants = anu.participants
for (let num of participants) {
// Get Profile Picture User
try {
ppuser = await kesper.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'}
//=================================================//
// Get Profile Picture Group
try {
ppgroup = await kesper.profilePictureUrl(anu.id, 'image')
} catch {
ppgroup = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'}
if (anu.action == 'demote') {
var buffer = await getBuffer(ppuser)
let fgclink = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6285765134804@whatsapp.net"}, "message": {orderMessage: {itemCount: 9999999,status: 200, thumbnail: buffer, surface: 200, message: `${metadata.subject}`, orderTitle: 'memek', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
he = `YAH DI DEMOTE 😂 ${metadata.subject} @${num.split("@")[0]}\n\n${metadata.desc}`
let link = `https://eclass.iainsalatiga.ac.id/app/upload/users/1/10892/my_files/XhiroMhonshine.html'`
let buttons = [
{buttonId: `CASPER`, buttonText: {displayText: 'KASIAN'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync('./casper-file/lib/tes.xlsx'),
mimetype: feler,
jpegThumbnail:buffer,
mentions: [num],
fileName: `KASIAN SIH DI DEMOTE 😂 ${metadata.subject}`,
fileLength: 99999999999999,
caption: he,
footer: `© CASPER`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: `YANG SABAR YAH MAKANYA JADI ADMIN YANG BETUL 😡️`,
body: `SUBSCRIBE CASPER`,
mediaType:2,
thumbnail: buffer,
sourceUrl: link,
mediaUrl: link,}}}
kesper.sendMessage(anu.id, buttonMessage, {quoted:fgclink})
} else if (anu.action == 'promote') {
let fgclink = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6285765134804@whatsapp.net"}, "message": {orderMessage: {itemCount: 9999999,status: 200, thumbnail: buffer, surface: 200, message: `${metadata.subject}`, orderTitle: 'memek', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
he = `CIEEE JADI ADMIN 😘 ${metadata.subject} @${num.split("@")[0]}\n\n${metadata.desc}`
let link = `https://eclass.iainsalatiga.ac.id/app/upload/users/1/10892/my_files/XhiroMhonshine.html'`
let buttons = [
{buttonId: `CASPER`, buttonText: {displayText: 'SELAMAT'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync('./casper-file/lib/tes.xlsx'),
mimetype: feler,
jpegThumbnail:buffer,
mentions: [num],
fileName: `SELAMAT TELAH JADI ADMIN 🤗 ${metadata.subject}`,
fileLength: 99999999999999,
caption: he,
footer: `© CASPER`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: `JADI LAH ADMIN YANG BIJAK KAWAN 🌷️`,
body: `SUBSCRIBE CASPER`,
mediaType:2,
thumbnail: buffer,
sourceUrl: link,
mediaUrl: link,}}}
kesper.sendMessage(anu.id, buttonMessage, {quoted:fgclink})}}
} catch (err) {
/*console.log(err)*/}})
//=================================================//
// Setting
kesper.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid}
//=================================================//
kesper.ev.on('contacts.update', update => {
for (let contact of update) {
let id = kesper.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }}})
//=================================================//
kesper.getName = (jid, withoutContact  = false) => {
id = kesper.decodeJid(jid)
withoutContact = kesper.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = kesper.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === kesper.decodeJid(kesper.user.id) ?
kesper.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')}
//=================================================//
kesper.sendContact = async (jid, kon, quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
list.push({
displayName: await kesper.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await kesper.getName(i + '@s.whatsapp.net')}\nFN:${await kesper.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:denyp857@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://https://www.instagram.com/capser_aseli/?hl=id\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`})}
//=================================================//
kesper.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })}
//=================================================//
kesper.setStatus = (status) => {
kesper.query({
tag: 'iq',
attrs: {
to: '@s.whatsapp.net',
type: 'set',
xmlns: 'status',
},
content: [{
tag: 'status',
attrs: {},
content: Buffer.from(status, 'utf-8')
}]
})
return status}
//=================================================//

//Kalau Mau Self Lu Buat Jadi false
kesper.public = true
//=================================================//
kesper.serializeM = (m) => smsg(kesper, m, store)
kesper.ev.on('connection.update', async (update) => {
	const {
		connection,
		lastDisconnect
	} = update
try{
		if (connection === 'close') {
			let reason = new Boom(lastDisconnect?.error)?.output.statusCode
			if (reason === DisconnectReason.badSession) {
				console.log(`Bad Session File, Please Delete Session and Scan Again`);
				startkesper()
			} else if (reason === DisconnectReason.connectionClosed) {
				console.log("Connection closed, reconnecting....");
				startkesper();
			} else if (reason === DisconnectReason.connectionLost) {
				console.log("Connection Lost from Server, reconnecting...");
				startkesper();
			} else if (reason === DisconnectReason.connectionReplaced) {
				console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First");
				startkesper()
			} else if (reason === DisconnectReason.loggedOut) {
				console.log(`Device Logged Out, Please Scan Again And Run.`);
				startkesper();
			} else if (reason === DisconnectReason.restartRequired) {
				console.log("Restart Required, Restarting...");
				startkesper();
			} else if (reason === DisconnectReason.timedOut) {
				console.log("Connection TimedOut, Reconnecting...");
				startkesper();
			} else kesper.end(`Unknown DisconnectReason: ${reason}|${connection}`)
		}
		if (update.connection == "connecting" || update.receivedPendingNotifications == "false") {
			lolcatjs.fromString(`[Sedang mengkoneksikan]`)
		}
		if (update.connection == "open" || update.receivedPendingNotifications == "true") {
			lolcatjs.fromString(`[Connecting to] WhatsApp web`)
			lolcatjs.fromString(`[Connected] ` + JSON.stringify(kesper.user, null, 2))
		}
	
} catch (err) {
	  console.log('error di connection.update'+err)
	  startkesper();
	}
})

//=================================================//
kesper.ev.on('creds.update', saveCreds)
// Add Other

  /**
  *
  * @param {*} jid
  * @param {*} url
  * @param {*} caption
  * @param {*} quoted
  * @param {*} options
  */
  //=================================================//
kesper.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
let mime = '';
let res = await axios.head(url)
mime = res.headers['content-type']
if (mime.split("/")[1] === "gif") {
return kesper.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback:true, ...options}, { quoted: quoted, ...options})}
let type = mime.split("/")[0]+"Message"
if(mime === "application/pdf"){
return kesper.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options}, { quoted: quoted, ...options })}
if(mime.split("/")[0] === "image"){
return kesper.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options}, { quoted: quoted, ...options})}
if(mime.split("/")[0] === "video"){
return kesper.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options}, { quoted: quoted, ...options })}
if(mime.split("/")[0] === "audio"){
return kesper.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options}, { quoted: quoted, ...options })}}
//=================================================//
/** Send List Messaage
  *
  *@param {*} jid
  *@param {*} text
  *@param {*} footer
  *@param {*} title
  *@param {*} butText
  *@param [*] sections
  *@param {*} quoted
  */
  //=================================================//
kesper.sendListMsg = (jid, text = '', footer = '', title = '' , butText = '', sects = [], quoted) => {
let sections = sects
var listMes = {
text: text,
footer: footer,
title: title,
buttonText: butText,
sections}
kesper.sendMessage(jid, listMes, { quoted: quoted })}
//=================================================//
/** Send Button 5 Message
 * 
 * @param {*} jid
 * @param {*} text
 * @param {*} footer
 * @param {*} button
 * @returns 
 */
 //=================================================//
kesper.send5ButMsg = (jid, text = '' , footer = '', but = []) =>{
let templateButtons = but
var templateMessage = {
text: text,
footer: footer,
templateButtons: templateButtons}
kesper.sendMessage(jid, templateMessage)}
//=================================================//
/** Send Button 5 Image
 *
 * @param {*} jid
 * @param {*} text
 * @param {*} footer
 * @param {*} image
 * @param [*] button
 * @param {*} options
 * @returns
 */
 //=================================================//
kesper.send5ButImg = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
let message = await prepareWAMessageMedia({ image: img }, { upload: kesper.waUploadToServer })
var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
"hydratedContentText": text,
"hydratedFooterText": footer,
"hydratedButtons": but}}
}), options)
kesper.relayMessage(jid, template.message, { messageId: template.key.id })}
//=================================================//
/** Send Button 5 Video
 *
 * @param {*} jid
 * @param {*} text
 * @param {*} footer
 * @param {*} Video
 * @param [*] button
 * @param {*} options
 * @returns
 */
 //=================================================//
kesper.send5ButVid = async (jid , text = '' , footer = '', vid, but = [], options = {}) =>{
let message = await prepareWAMessageMedia({ video: vid }, { upload: kesper.waUploadToServer })
var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
videoMessage: message.videoMessage,
"hydratedContentText": text,
"hydratedFooterText": footer,
"hydratedButtons": but}}
}), options)
kesper.relayMessage(jid, template.message, { messageId: template.key.id })}
//=================================================//
/** Send Button 5 Gif
 *
 * @param {*} jid
 * @param {*} text
 * @param {*} footer
 * @param {*} Gif
 * @param [*] button
 * @param {*} options
 * @returns
 */
 //=================================================//
kesper.send5ButGif = async (jid , text = '' , footer = '', gif, but = [], options = {}) =>{
let message = await prepareWAMessageMedia({ video: gif, gifPlayback: true }, { upload: kesper.waUploadToServer })
var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
videoMessage: message.videoMessage,
"hydratedContentText": text,
"hydratedFooterText": footer,
"hydratedButtons": but}}
}), options)
kesper.relayMessage(jid, template.message, { messageId: template.key.id })}
//=================================================//
/**
 * 
 * @param {*} jid 
 * @param {*} buttons 
 * @param {*} caption 
 * @param {*} footer 
 * @param {*} quoted 
 * @param {*} options 
 */
 //=================================================//
kesper.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
let buttonMessage = {
text,
footer,
buttons,
headerType: 2,
...options}
kesper.sendMessage(jid, buttonMessage, { quoted, ...options })}
//=================================================//
/**
 * 
 * @param {*} jid 
 * @param {*} text 
 * @param {*} quoted 
 * @param {*} options 
 * @returns 
 */
 //=================================================//
kesper.sendText = (jid, text, quoted = '', options) => kesper.sendMessage(jid, { text: text, ...options }, { quoted })
//=================================================//
/**
 * 
 * @param {*} jid 
 * @param {*} path 
 * @param {*} caption 
 * @param {*} quoted 
 * @param {*} options 
 * @returns 
 */
 //=================================================//
kesper.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await kesper.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })}
//=================================================//
/**
 * 
 * @param {*} jid 
 * @param {*} path 
 * @param {*} caption 
 * @param {*} quoted 
 * @param {*} options 
 * @returns 
 */
 //=================================================//
kesper.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await kesper.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })}
//=================================================//
/**
 * 
 * @param {*} jid 
 * @param {*} path 
 * @param {*} quoted 
 * @param {*} mime 
 * @param {*} options 
 * @returns 
 */
 //=================================================//
kesper.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await kesper.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })}
//=================================================//
/**
 * 
 * @param {*} jid 
 * @param {*} text 
 * @param {*} quoted 
 * @param {*} options 
 * @returns 
 */
 //=================================================//
kesper.sendTextWithMentions = async (jid, text, quoted, options = {}) => kesper.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })
//=================================================//
/**
 * 
 * @param {*} jid 
 * @param {*} path 
 * @param {*} quoted 
 * @param {*} options 
 * @returns 
 */
 //=================================================//
kesper.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)}
//=================================================//
await kesper.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer}
//=================================================//
/**
 * 
 * @param {*} jid 
 * @param {*} path 
 * @param {*} quoted 
 * @param {*} options 
 * @returns 
 */
 //=================================================//
kesper.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)}
//=================================================//
await kesper.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer}
//=================================================//
/**
 * 
 * @param {*} message 
 * @param {*} filename 
 * @param {*} attachExtension 
 * @returns 
 */
 //=================================================//
kesper.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
// save to file
await fs.writeFileSync(trueFileName, buffer)
return trueFileName}
//=================================================//
kesper.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
return buffer} 
//=================================================//
/**
 * 
 * @param {*} jid 
 * @param {*} path 
 * @param {*} filename
 * @param {*} caption
 * @param {*} quoted 
 * @param {*} options 
 * @returns 
 */
 //=================================================//
kesper.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
let types = await kesper.getFile(path, true)
let { mime, ext, res, data, filename } = types
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }}
let type = '', mimetype = mime, pathFile = filename
if (options.asDocument) type = 'document'
if (options.asSticker || /webp/.test(mime)) {
let { writeExif } = require('./casper-file/lib/exif')
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = 'sticker'
mimetype = 'image/webp'}
else if (/image/.test(mime)) type = 'image'
else if (/video/.test(mime)) type = 'video'
else if (/audio/.test(mime)) type = 'audio'
else type = 'document'
await kesper.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)}
//=================================================//
/**
 * 
 * @param {*} jid 
 * @param {*} message 
 * @param {*} forceForward 
 * @param {*} options 
 * @returns 
 */
 //=================================================//
kesper.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message}}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo}} : {})} : {})
await kesper.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage}
//=================================================//
kesper.cMod = (jid, copy, text = '', sender = kesper.user.id, options = {}) => {
//let copy = message.toJSON()
let mtype = Object.keys(copy.message)[0]
let isEphemeral = mtype === 'ephemeralMessage'
if (isEphemeral) {
mtype = Object.keys(copy.message.ephemeralMessage.message)[0]}
let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
let content = msg[mtype]
if (typeof content === 'string') msg[mtype] = text || content
else if (content.caption) content.caption = text || content.caption
else if (content.text) content.text = text || content.text
if (typeof content !== 'string') msg[mtype] = {
...content,
...options}
if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
copy.key.remoteJid = jid
copy.key.fromMe = sender === kesper.user.id
return proto.WebMessageInfo.fromObject(copy)}
//=================================================//
/**
 * 
 * @param {*} path 
 * @returns 
 */
 //=================================================//
kesper.getFile = async (PATH, save) => {
let res
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
//if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'}
filename = path.join(__filename, '../casper-file/dbnye/' + new Date * 1 + '.' + type.ext)
if (data && save) fs.promises.writeFile(filename, data)
return {
res,
filename,
size: await getSizeMedia(data),
...type,
data}}
kesper.sendFile = async(jid, PATH, fileName, quoted = {}, options = {}) => {
let types = await kesper.getFile(PATH, true)
let { filename, size, ext, mime, data } = types
let type = '', mimetype = mime, pathFile = filename
if (options.asDocument) type = 'document'
if (options.asSticker || /webp/.test(mime)) {
let { writeExif } = require('./casper-file/lib/sticker.js')
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: global.packname, author: global.packname2, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = 'sticker'
mimetype = 'image/webp'}
else if (/image/.test(mime)) type = 'image'
else if (/video/.test(mime)) type = 'video'
else if (/audio/.test(mime)) type = 'audio'
else type = 'document'
await kesper.sendMessage(jid, { [type]: { url: pathFile }, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)}
kesper.parseMention = async(text) => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}
return kesper}
//=================================================//
startkesper()
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})

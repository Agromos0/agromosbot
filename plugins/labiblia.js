let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let path = require('path')
let util = require('util')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './+18.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)
let vn = './media/mariana.mp3'
let menu =`
â­ââã ðâ¡ðâ¡ð ãââ®
ââââââââââââââââââââââââ 
ââ¤ *ððola, ${username}ð*
ââââââââââââââââââââââââ 
â°âââ¡ðâ¡ðâ¡ðââââ¯
âââââââââââââââ
â *<MENU +18/>*
ââââââââââââââââââââââââ 
â   *ð¥µð¥  IMAGENESð¥µð¥*
â£ â¬ð _${usedPrefix}imglesbians_
â£ â¬ð _${usedPrefix}porno_
â£ â¬ð _${usedPrefix}randomnsfw_
â£ â¬ð _${usedPrefix}sideboobs_
â£ â¬ð _${usedPrefix}hentai_
â£ â¬ð _${usedPrefix}pene_
â£ â¬ð _${usedPrefix}ecchi_
â£ â¬ð _${usedPrefix}pussy_
â£ â¬ð _${usedPrefix}boobs_
â£ â¬ð _${usedPrefix}panties_
â£ â¬ð _${usedPrefix}porno2_
â£ â¬ð _${usedPrefix}yaoi_
â£ â¬ð _${usedPrefix}yuri_
â£ â¬ð _${usedPrefix}pack_
â£ â¬ð _${usedPrefix}pack2_
â£ â¬ð _${usedPrefix}pack3_
â£ â¬ð _${usedPrefix}loli2_
â£ â¬ð _${usedPrefix}muslos_
â£ â¬ð _${usedPrefix}muslitos_
â£ â¬ð _${usedPrefix}booty_
â£ â¬ð _${usedPrefix}htrap_
â£ â¬ð _${usedPrefix}furro_
â£ â¬ð _${usedPrefix}nsfwass_
â£ â¬ð _${usedPrefix}bdsm_
â£ â¬ð _${usedPrefix}cum_
â£ â¬ð _${usedPrefix}ero_
â£ â¬ð _${usedPrefix}femdom_
â£ â¬ð _${usedPrefix}foot_
â£ â¬ð _${usedPrefix}pies_
â£ â¬ð _${usedPrefix}glass_
â£ â¬ð _${usedPrefix}yuri_
â£ â¬ð _${usedPrefix}nsfwloli_
ââââââââââââââââââââââââ 
â  *VIDEOSð¥µð¥*
â£ â¬ð _${usedPrefix}video_
â£ â¬ð _${usedPrefix}pornobivid_
â£ â¬ð _${usedPrefix}pornoaleatorio_
â£ â¬ð _${usedPrefix}pornovid/pornovideo_
â£ â¬ð _${usedPrefix}pornogayvid_
â£ â¬ð _${usedPrefix}pornolesbivid/pornolesbianavid_
ââââââââââââââââââââââââ 
â  *STICKERSð¥µð¥*
â£ â¬ð _${usedPrefix}pornogif_
â£ â¬ð _${usedPrefix}porno2_
â£ â¬ð _${usedPrefix}yaoigif_
â£ â¬ð _${usedPrefix}nekogif_
â£ â¬ð _${usedPrefix}yurigif_
âââââââââââââââ`.trim()
let mentionedJid = [who]
conn.sendButtonImg(m.chat, pp, menu, 'AGROMOS SP - Bot', 'MENU DESCARGAS', `#menudescargas`, m, false, { contextInfo: { mentionedJid }})   
await await await await await await conn.sendFile(m.chat, vn, 'ora.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})}
handler.command = /^(labiblia)$/i
handler.fail = null
module.exports = handler

const fs = require('fs')

//===========================//

const {
smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize
} = require('./lib/myfunction')

//===========================//

global.d = new Date()
global.calender = d.toLocaleDateString('id')

//===========================//

//General Settings 
global.apikey = 'ptla_6pKq2Q5hGxajeMBrRdazQLkG1NSpXwIIi1FYZNmkUkQ' //Ganti pake apikey panel lu
global.capikey = 'ptlc_USy1wdkOexq5IIfootLXskwsgoZvDu1oQvgybJ0qlWC' //Ganti Pake Capikey Panel Lu
global.domain = 'https://zetsubo-stardust.zxvision.biz.id'
global.eggsnya = '15' //Ganti Pake Eggs Panel Lu
global.location = '1' //Ganti Pake Location Panel Lu

//===========================//

global.prefa = ['','!','.',',','🐤','🗿']
global.owner = ['254726856795']
global.ownMain = '254726856795'
global.NamaOwner = ' 🏴‍☠️⃝🅐ϲԑ 𝚔𝖎𝐫қ𖤍🔥' //gausah diganti 
global.sessionName = 'ryokunsession'
global.connect = true // Ubah Ke False Jika Ingin Menggunakan Qr Code
global.namabot = '𒋨🏴‍☠️⃝𝘼𝘾𝙀☠️𝘽𝙊𝙏⃝𒋨🉑' //ganti aj klo mau
global.author = '🏴‍☠️⃝🅐ϲԑ 𝚔𝖎𝐫қ𖤍🔥' //ganti aj klo mau
global.packname = 'ɪ αɱ 𝙰ϲе™⟬𝟭⟭' //ganti aj klo mau
global.yt = 'https://t.me/+njMXs03qRLQ3ZmNk' //gausah diganti

//===========================//

global.listr = ` │⬡ 1GB Cpu: 50% - 3.000/bln
 │⬡ 2GB Cpu: 70% - 5.000/bln
 │⬡ 3GB Cpu: 90% - 7.000/bln
 │⬡ 4GB Cpu: 110% - 9.000/bln
 │⬡ 5GB Cpu: 130% - 11.000/bln
 │⬡ 6GB Cpu: 150% - 13.000/bln
 │⬡ 7GB Cpu: 170% - 15.000/bln
 │⬡ 8GB Cpu: 200% - 17.000/bln`
 
//===========================//

global.country = `254`
global.system = {
gmail: `acejobbie98@gmail.com`,
}

//===========================//

global.decor = {
	menut: '❏═┅═━–〈',
	menub: '┊•',
	menub2: '┊',
	menuf: '┗––––––––––✦',
	hiasan: '꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷',

	menut: '––––––『',
menuh: '』––––––',
menub: '┊☃︎ ',
menuf: '┗━═┅═━––––––๑\n',
	menua: '',
	menus: '☃︎',

	htki: '––––––『',
	htka: '』––––––',
	haki: '┅━━━═┅═❏',
	haka: '❏═┅═━━━┅',
	lopr: 'Ⓟ',
	lolm: 'Ⓛ',
	htjava: '❃'
}

//===========================//

global.rpg = {
emoticon(string) {
string = string.toLowerCase()
let emot = {
level: '📊',
limit: '🎫',
health: '❤️',
exp: '✨',
atm: '💳',
money: '💰',
bank: '🏦',
potion: '🥤',
diamond: '💎',
common: '📦',
uncommon: '🛍️',
mythic: '🎁',
legendary: '🗃️',
superior: '💼',
pet: '🔖',
trash: '🗑',
armor: '🥼',
sword: '⚔️',
pickaxe: '⛏️',
fishingrod: '🎣',
wood: '🪵',
rock: '🪨',
string: '🕸️',
horse: '🐴',
cat: '🐱',
dog: '🐶',
fox: '🦊',
robo: '🤖',
petfood: '🍖',
iron: '⛓️',
gold: '🪙',
emerald: '❇️',
upgrader: '🧰',
bibitanggur: '🌱',
bibitjeruk: '🌿',
bibitapel: '☘️',
bibitmangga: '🍀',
bibitpisang: '🌴',
anggur: '🍇',
jeruk: '🍊',
apel: '🍎',
mangga: '🥭',
pisang: '🍌',
botol: '🍾',
kardus: '📦',
kaleng: '🏮',
plastik: '📜',
gelas: '🧋',
chip: '♋',
umpan: '🪱',
skata: '🧩'
}
let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emot[results[0][0]]
}
}

//===========================//

   //Respon
global.mess = { // bagian ini gausah diganti 
ingroup: 'Gabisa lah kocak, Fitur ini khusus untuk group💢',
admin: `❗Lu Bukan Admin Bego, Lu Gabakal Bisa Make Fitur Ini. Awokawokawok 😝`,
owner: `Waduhh! ,Lu bukan \`owner\` gw bg🗣️`,
premium: 'You are not a premium user, Lu gabisa akses fitur ini karna lu bukan premium, aowkawokawok🐦',
seller: 'Lu bukan seller, Jadi gabakal bisa make😹',
usingsetpp: 'Setpp hanya bisa dipake owner, lu kira gw bego? 🤓',
wait: '*🕙 processing...🗿🚬*',
succes: '🌆 Success 🗿🚬',
bugrespon: `✅ deploying bugs.....🗿🚬`
}

//===========================//

// #@whiskeysockets/baileys ^6.3.0
global.autOwn = 'req(62-8S57547ms11).287p'
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})
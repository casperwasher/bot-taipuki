const fs = require('fs')
const chalk = require('chalk')


global.wlcmm = []
global.wlcm = []
global.ntnsfw = []
global.ntnsfww = []
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.youtube = 'https://www.youtube.com/@Asmoudeous666'
global.ig = 'capser_aseli'
global.linkgrupss = "-"
global.email = 'casperhasril@gmail.com'
global.region = 'japan'
global.ownername = 'Casper'
global.botname = 'Casper Bot Esempe'
global.footer = 'Casper'
global.owner = ['50663996399','62882003133773']
global.premium = ['50663996399','62882003133773']
global.packname = 'Casper'
global.ownerr = ['Casper']
global.author = 'Casper'
global.sessionName = './sesi/casper' //sesinya gausah di ganti kontol
global.prefa = ['','!','.',',','🐤','🗿']
global.sp = '⭔'


global.mess = {
    nsfw: '*Fitur NSFW tidak diaktifkan, chat admin grup supaya diaktifkan*_',
    wait: '*Loading...*_',    
}
global.f1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.f2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.f3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.f4 = 'application/zip'
global.f5 = 'application/pdf'
global.f6 = 'application/vnd.android.package-archive'
global.limitawal = {
    premium: "Infinity",
    free: 100
}
   global.rpg = {
   darahawal: 100,
   besiawal: 5,
   goldawal: 1,
   emeraldawal: 1,
   umpanawal: 1,
   potionawal: 1
}
global.thumb = fs.readFileSync("./casper-file/file/thumb.jpg")
global.log0 = fs.readFileSync("./casper-file/file/thumb.jpg")


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
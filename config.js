const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email =""
global.location="India,India"


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Calcutta";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_51_11_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzksXG4gICAgICAgIDczLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjUzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTIzLFxuICAgICAgICA5NixcbiAgICAgICAgMjA2LFxuICAgICAgICAzNixcbiAgICAgICAgODgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDU1LFxuICAgICAgICA2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM3LFxuICAgICAgICA2NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDcxLFxuICAgICAgICA3MyxcbiAgICAgICAgMjMxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTExLFxuICAgICAgICAwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjAzLFxuICAgICAgICA3NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTIzLFxuICAgICAgICA4NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5OSxcbiAgICAgICAgOTksXG4gICAgICAgIDc2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTksXG4gICAgICAgIDUwLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTg2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxODcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDU2LFxuICAgICAgICA1MCxcbiAgICAgICAgNDksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjI4LFxuICAgICAgICA3OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTk3LFxuICAgICAgICA5LFxuICAgICAgICA2NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDksXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTEsXG4gICAgICAgIDcsXG4gICAgICAgIDQ4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDQ4LFxuICAgICAgICA4NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTc4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTM0LFxuICAgICAgICA4NyxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA5NixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI0LFxuICAgICAgICA2OCxcbiAgICAgICAgNDksXG4gICAgICAgIDkwLFxuICAgICAgICAyNixcbiAgICAgICAgODIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDUwLFxuICAgICAgICA0NixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTMsXG4gICAgICAgIDE0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjAzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTU0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMixcbiAgICAgICAgMTc4LFxuICAgICAgICA0OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwLFxuICAgICAgICAzOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTkzLFxuICBcImFkdlNlY3JldEtleVwiOiBcInpXV0J3RGdmQkJ5V1l5a3hpWnE2U24vUlJKdXg5QW9rdktQQ2NKdGJ6ZXM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInprYVdkU09CUy1lZnpibUxoemVrSHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmEwZjE0NzEtZmJhZS00MjBlLWExYjMtOWM0NGRmMWQzYTdlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNSxcbiAgICAgIDEwNCxcbiAgICAgIDE0OSxcbiAgICAgIDQ5LFxuICAgICAgMTc5LFxuICAgICAgMjMsXG4gICAgICAxMjYsXG4gICAgICAxNzAsXG4gICAgICA1NyxcbiAgICAgIDIxMCxcbiAgICAgIDE0MCxcbiAgICAgIDE4NSxcbiAgICAgIDg1LFxuICAgICAgMTA0LFxuICAgICAgMTA2LFxuICAgICAgMTkzLFxuICAgICAgMTA1LFxuICAgICAgMTM5LFxuICAgICAgMTI3LFxuICAgICAgMzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMzLFxuICAgICAgMTYyLFxuICAgICAgNTAsXG4gICAgICA3OCxcbiAgICAgIDIxNyxcbiAgICAgIDI0NixcbiAgICAgIDc4LFxuICAgICAgNDIsXG4gICAgICAzMyxcbiAgICAgIDE2NSxcbiAgICAgIDIyMSxcbiAgICAgIDE2MixcbiAgICAgIDU0LFxuICAgICAgMjEsXG4gICAgICAxODMsXG4gICAgICAyMjMsXG4gICAgICA4MCxcbiAgICAgIDUsXG4gICAgICA3LFxuICAgICAgMTEwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjNaQkxUWE0xXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTgwNzQwMTU0NTQ6ODdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJTVURPIFVTRVIgU0hBUlZBTiA2NTUzNVwiLFxuICAgIFwibGlkXCI6IFwiMTAwNDUwOTEzMjQzMTg3Ojg3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0l2Qm1pZ1E1NFN1dVFZWURpQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRDBBcjR5MTdPOEl1alVhNXdDUzZyai9ld0F4Q0VZNnZISnpRcVRXVi9taz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJzckNlcWhKVVBzNVdVMHRUM0oxdGlBMzR4NEgyYXVrMzdzUkxjTStYbCtvOGFsczRvTDJpNWg2WXQ3N2IxNk85bnJraGRXeHFWRER6V0JwRElvaUJDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI5amVLRkJkTUF0STcyTVM5SGlEOVlsVDBkQkhVS1FBbTNxU0dZbCtCa01hRmtBcmVIQXJXdUMzWGlyNEY3c3hIUnRRV3hOYXcrNXNEaTFwSzhNRm1pQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTgwNzQwMTU0NTQ6ODdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwOTA0NjgzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTnNTXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOc1MuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJMTmNVbUkrcnYzT2xaSUJ5R3FMeWx6ZE5SM1RmVUF0bys0bSt5YkpYTmxRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg0MzIwMzk1LFwiY3VycmVudEluZGV4XCI6MTIsXCJkZXZpY2VJbmRleGVzXCI6WzAsM119LFwidGltZXN0YW1wXCI6XCIxNzMwODc2ODM1ODY0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Sudo user sharvan 65535",
  ownername:process.env.OWNER_NAME|| "NO NAME",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

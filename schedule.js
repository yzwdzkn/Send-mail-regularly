const schedule = require('node-schedule');
const Axios = require('axios');
const nodemailer = require("nodemailer");
function haha(){
    schedule.scheduleJob({ hour: 17, minute: 21 }, function () {
        console.log("启动任务:" + new Date());
        demo()
    });
}
async function demo(){
    getHoneyedWords().then(res => {
        console.log(res.data);
        sendMail(res.data)
    });
}
// 发送邮件函数
async function sendMail(text) {
    var user = "1049674046@qq.com";//自己的邮箱
    var pass = "gxnpmaajfmqqbeeb"; //qq邮箱授权码,如何获取授权码请百度
    var to = "384685326@qq.com";//对方的邮箱
    // var to = "zkn1049674046@163.com"
    let transporter = nodemailer.createTransport({
      host: "smtp.qq.com",
      port: 587,
      secure: false,
      auth: {
        user: user, // 用户账号
        pass: pass, //授权码,通过QQ获取
      },
    });
    let info = await transporter.sendMail({
      from: `亲爱的老公<${user}>`, // sender address
      to: `亲爱的老婆<${to}>`, // list of receivers
      subject: "亲爱的老婆", // Subject line
      text: text, // plain text body
    });
    console.log("发送成功");
}
  
function getHoneyedWords() {
      //http://lwfcll.top:3000/pyq 朋友圈
      //http://lwfcll.top:3000/nmsl 骂人
      //http://lwfcll.top:3000/chp  情话
      var url = 'http://lwfcll.top:3000/chp';
      //获取这个接口的信息
      return Axios.get(url);
}
module.exports = {
    haha
}
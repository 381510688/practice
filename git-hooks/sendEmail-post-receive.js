/**
 * Created by ligang on 2018/10/24.
 */
const nodemailer  = require('nodemailer');

const mailTransport = nodemailer.createTransport({
  host : 'smtp.qq.com',
  secureConnection: true, // 使用SSL方式（安全方式，防止被窃取信息）
  auth : {
    user : '381510688@qq.com',
    pass : 'ebjdmnnoeexubhfh'
  },
});

const options = {
  from: '李刚<381510688@qq.com>',
  to: '381510688@qq.com,ligang@idss-cn.com',
  // cc: ''  //抄送
  subject: '一封来自Node Mailer的邮件',
  text: '一封来自Node Mailer的邮件',
  html: '<h1>好，这是一封来自NodeMailer的邮件！</h1><p><img src="cid:00000001"/></p>'
};

mailTransport.sendMail(options, function(err, msg){
  if(err){
    console.log(err);
  } else {
    console.log(msg);
  }
});
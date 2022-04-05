//this file is needed to authenticate users being logged in
// const nodemailer = require('nodemailer');
// const sendgridTransport = require ('nodemailer-sendgrid-trainsport');


// const transporter = nodemailer.createTestAccount.createTransport(sendgridTransport({
//   auth: {
//     api_key: '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'
//   }
// }));

const withAuth = (req, res, next) => {
  if (!req.session.user_id) {
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = withAuth;

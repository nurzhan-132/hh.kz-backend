const express = require('express');
const router = express.Router();
const { sendVerificationMail, verifyCode } = require('./controllers')

router.post('/api/auth/sendmail', sendVerificationMail);
router.post('/api/auth/verifycode', verifyCode);

module.exports = router;
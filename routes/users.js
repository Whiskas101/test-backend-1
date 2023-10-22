const express = require('express');
const router = express.Router();

const { registerUser, deleteUser, login, addReport, getAllReports, fetchReportsByEmail } = require('../controllers/users')


router.route('/register')
    .post(registerUser);

router.route('/delete')
    .post(deleteUser);

router.route('/login')
    .post(login);

router.route('/add/report')
    .post(addReport);

router.route('/fetch/reports')
    .post(getAllReports)

router.route('/fetch/by/email')
    .post(fetchReportsByEmail)

module.exports = router;
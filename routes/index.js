/**
 * Des: 前台路由器
 * Author: jack
 * Date: 2023-06-18
 * Modify: 2023-06-18
 */
const express = require('express');
const router = express.Router();
// const jwt = require('jsonwebtoken')

/* 前台 */
router.get('/', function(req, res, next) {
    res.render('index', { title: '首页'});
});


module.exports = router;
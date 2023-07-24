/**
 * Des: 前台路由器
 * Author: jack
 * Date: 2023-06-18
 * Modify: 2023-06-18
 */
const express = require('express')
const router = express.Router()
// const fs = require('fs')
// const jwt = require('jsonwebtoken')

/* 前台 */
router.get('/a', function(req, res, next) {
    // res.render('index', { title: '首页'});
   // let data = fs.readFile('./../views/index/index.html')
    res.send('hello world-indexapi');
});


module.exports = router;
var express = require('express');
var router = express.Router();

// 用户注册
router.get('/reg', function(req, res, next) {
  res.render('user/reg', { title: '用户注册' });
});

router.get('/reg', function(req, res, next) {
  res.render('user/reg', { title: '用户注册' });
});

//登陆
router.get('/login', function(req, res, next) {
  res.render('user/login', { title: '登陆' });
});

//登出
router.get('/logout', function(req, res, next) {

});

module.exports = router;

var express = require('express');
var router = express.Router();

// 用户注册
router.get('/reg', function(req, res, next) {
  res.render('user/reg', { title: '用户注册' });
});

//接收用户注册
//Content-Type:application/x-www-form-urlencoded
//username=rrr&email=rr&password=rrr&repassword=rrr
router.post('/reg', function(req, res) {
 var user = req.body;
  if(user.password != user.repassword){
    return res.redirect('/users/reg');//重写向
  }
  user.password = md5(user.password);
  M('User').findOne({username:user.username},function(err,result){
      console.error(result);
      if(result){
          return res.redirect('/users/reg');//重写向
      }else{
          new M('User')(user).save(function(err,user){
              if(err){
                  return res.redirect('/users/reg');//重写向
              }
              req.session.user = user;
              res.redirect('/');//返回首页
          });
      }
  });

});

//登陆
router.get('/login', function(req, res, next) {
  res.render('user/login', { title: '登陆' });
});
//登陆功能
router.post('/login', function(req, res) {
  var user = req.body;
  user.password = md5(user.password);
  M('User').findOne(user,function(err,user){
      if(err){
          return res.redirect('/users/login');//重写向
      }
      req.session.user = user;
      res.redirect('/');//注册成功后重定向到首页
  })
});
//登出
router.get('/logout', function(req, res, next) {
    req.session.user = null;
    res.redirect('/');//注册成功后重定向到首页
});

function md5(str){
  return require('crypto').createHash('md5').update(str).digest('hex');
}
module.exports = router;

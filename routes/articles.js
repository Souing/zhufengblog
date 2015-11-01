var express = require('express');
var router = express.Router();

// 发表文章  /articles/add
router.get('/add', function(req, res, next) {
    res.render('article/add', { title: '发表文章' });
});

router.post('/add', function(req, res, next) {
  req.body.user = req.session.user._id;
   new M('Article')(req.body).save(function(err,article){
       if(err){
           return res.redirect('/articles/add');
       }
       res.redirect('/');
   });
});


module.exports = router;

var express = require('express');
var router = express.Router();

// 发表文章  /articles/add
router.get('/add', function(req, res, next) {
    res.render('article/add', { title: '发表文章' });
});


module.exports = router;

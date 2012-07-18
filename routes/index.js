
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express 3 Beta7' });
};
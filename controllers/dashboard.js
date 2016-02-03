// GET dashboard

exports.getDashboard = function(req, res) {
  res.render('dashboard', {
    title: 'Dashboard'
  });
};

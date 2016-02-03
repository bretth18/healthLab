// HANDLES /GET REQUEST

exports.getChat = function(req, res) {
  res.render('chat', {
    title: 'Chat'
  });
};

exports.getAppointments = function(req, res) {
  res.render('appointments', {
    title: 'Appointments'
  });
};

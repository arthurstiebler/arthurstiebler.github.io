module.exports = (req, res) => {
  const currentDateTime = new Date();
  res.status(200).json({
    date: currentDateTime.toDateString(),
    time: currentDateTime.toTimeString(),
    iso: currentDateTime.toISOString()
  });
};
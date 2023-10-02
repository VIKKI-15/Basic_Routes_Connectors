module.exports = (req, res) => {
  res.status(404);
  res.send(
    " <h1 align='center' margin='auto' >Error 404: Resource not found</h1>"
  );
};

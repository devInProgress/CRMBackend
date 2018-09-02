const routes = (app) => {
  app.route('/contact')
    .get((req, res, next) => {
      console.log(`request url ${req.originalUrl}`);
      console.log(`request method ${req.method}`);
      next();
    }, (req, res, next) => {
      res.send('GET request served');
    })
    .post((req, res) => res.send('POST request served'));

  app.route('/contact/:contactId')
    .put((req, res) => res.send('PUT request served'))
    .delete((req, res) => res.send('DELETE request served'));
}

export default routes;
import * as Controller from "../controllers/crmController";


const routes = (app) => {
  app.route('/contact')
    .get((req, res, next) => {
      console.log(`request url ${req.originalUrl}`);
      console.log(`request method ${req.method}`);
      next();
    }, (req, res, next) => {
      res.send('GET request served');
    })
    .post(Controller.addNewContact);

  app.route('/contact/:contactId')
    .put((req, res) => res.send('PUT request served'))
    .delete((req, res) => res.send('DELETE request served'));
}

export default routes;
import * as Controller from "../controllers/crmController";


const routes = (app) => {
  app.route('/contact')
    .get(Controller.getContacts)
    .post(Controller.addNewContact);

  app.route('/contact/:contactId')
    .get(Controller.getContactById)
    .put((req, res) => res.send('PUT request served'))
    .delete((req, res) => res.send('DELETE request served'));
}

export default routes;
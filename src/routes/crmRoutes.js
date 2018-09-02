import * as Controller from "../controllers/crmController";


const routes = (app) => {
  app.route('/contact')
    .get(Controller.getContacts)
    .post(Controller.addNewContact);

  app.route('/contact/:contactId')
    .get(Controller.getContactById)
    .put(Controller.updateContactById)
    .delete(Controller.deleteContactById);
}

export default routes;
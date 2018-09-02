import express from 'express';
import routes from './src/routes/crmRoutes';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();
const PORT = 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.use(express.static('public'));

app.listen(PORT, () => console.log(`The backend server has started at ${PORT}`));
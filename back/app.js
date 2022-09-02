import express from 'express';
import mongoose from 'mongoose';
import helmet from 'helmet';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import bodyparser from 'body-parser';

//appel des fichier routes
import AuthRoute from './routes/authRoute.js'
import UserRoute from './routes/userRoutes.js';

//config pour variable envirronement
dotenv.config();
//variable pour app
const app = express();

//Utilisation du __dirname avec ES_modules (https://flaviocopes.com/fix-dirname-not-defined-es-module-scope/)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//analyse le corps de la requête HTTP (analyse requete entrante, assemble les morceau avec les donnee du formulaire et cree l'objet avec les donnée)
app.use(bodyparser.json({ limit: '30mb', extended: true }));
app.use(bodyparser.urlencoded({ limit: '30mb', extended: true }));

// sécuriser vos app Express en définissant divers en-têtes HTTP
app.use(helmet());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});

app.use(express.json());

//connection a mongoose
mongoose
  .connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


//Gère la ressource "images" de manière statique à chaque fois qu'elle reçoit une requête vers la route "/images"
app.use('/images', express.static(path.join(__dirname, 'images')));

//routes
app.use('/api/auth', AuthRoute);
app.use('/api/user', UserRoute);

export default app;

import express from 'express';
import mongoose from 'mongoose';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import bodyparser from 'body-parser';
import cors from 'cors';

//appel des fichier routes
import AuthRoute from './routes/authRoute.js'
import UserRoute from './routes/userRoutes.js';
import PostRoute from './routes/PostRoute.js';
import UploadRoute from './routes/UploadRoute.js';
import UploadRouteProfil from './routes/UploadRouteProfil.js';
import { checkUser, requireAuth } from './middleware/authCheck.js';

//config pour variable envirronement
dotenv.config();
//variable pour app
const app = express();
const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  allowedHeaders: ['sessionId', 'Content-Type'],
  exposedHeaders: ['sessionId'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
};
app.use(cors(corsOptions));

app.use(cookieParser());

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


// jwt
app.get('*', checkUser);
app.get('/jwtid', requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id);
});


//connection a mongoose
mongoose
  .connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


//Gère la ressource "images" de manière statique à chaque fois qu'elle reçoit une requête vers la route "/images"
app.use(express.static('public'));
app.use('/images', express.static('images'))

//routes
app.use('/auth', AuthRoute);
app.use('/user', UserRoute);
app.use('/posts', PostRoute);
app.use('/upload', UploadRoute);
app.use('/uploadprofil', UploadRouteProfil);

export default app;

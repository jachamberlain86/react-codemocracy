import express from 'express';
const app = express();
import router from './router.js';
import cors from 'cors';

app.use( cors() );
app.use( express.json() );
app.use( router );

app.listen( 4000 );
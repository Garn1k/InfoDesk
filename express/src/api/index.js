import express from 'express';
import acceptabilityController from './acceptability.api';
import auth from './auth.api';
import secondAcceptabilityController from './secondAcceptability.api';

const app = express();

app.use('/auth', auth);
app.use('/acceptability', acceptabilityController);
app.use('/secondAcceptability', secondAcceptabilityController);

export default app;

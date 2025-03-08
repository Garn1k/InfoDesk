import express from 'express';
import auth from './auth.api';
import acceptabilityController from './acceptability.api';
import secondAcceptabilityController from './secondAcceptability.api';
import mpsController from './mps.api';
import committeeController from './committee.api';
import factionController from './faction.api';
import unitsController from './units.api';
import text1Controller from './text1.api';
import text2Controller from './text2.api';
import usersController from './users.api';

const app = express();

app.use('/auth', auth);
app.use('/acceptability', acceptabilityController);
app.use('/secondAcceptability', secondAcceptabilityController);
app.use('/mps', mpsController);
app.use('/committee', committeeController);
app.use('/faction', factionController);
app.use('/units', unitsController);
app.use('/text1', text1Controller);
app.use('/text2', text2Controller);
app.use('/users', usersController);

export default app;

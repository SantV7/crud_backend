import express, { type Express } from 'express';
import { router } from './src/routes/userRouter.ts';

export const app: Express = express();

app.use(express.json())

app.use(router)

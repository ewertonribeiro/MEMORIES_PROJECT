import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { postRouter } from './Routes/postRoutes';
import { InitDb } from './Db/INITDB';

dotenv.config();

InitDb();

const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(cors());

const port = process.env.PORT;

server.use('/posts', postRouter);

server.listen(port, () => console.log(`Serer is running on port : ${port}`));

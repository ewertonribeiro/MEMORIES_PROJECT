import { connect } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const uri = process.env.MONGODB_URI as string;

export async function InitDb(): Promise<void> {
  try {
    await connect(uri);
    console.log('Mongo Db Connected!');
  } catch (e) {
    console.log(`Error:${e}`);
  }
}

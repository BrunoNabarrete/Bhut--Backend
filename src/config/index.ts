import { config } from 'dotenv';
import { object, string } from 'yup';
config();

const envSchema = object({
    MONGODB_CONN_STR: string().required(),
    QUEUE_CONN_STR: string().required()
});

export const environment = envSchema.validateSync({
    MONGODB_CONN_STR: process.env.MONGODB_CONN_STR,
    QUEUE_CONN_STR: process.env.QUEUE_CONN_STR,
});

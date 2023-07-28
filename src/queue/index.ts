import amqplib from 'amqplib';
import { environment } from '../config';
import logger from '../config/logger';
import consumer from './Consumer';
import producer from './Producer';

export class Queue {
    private connection!: amqplib.Connection;

    async start() {
        try {
            this.connection = await amqplib.connect(environment.QUEUE_CONN_STR);

            consumer.configure(this.connection);
            producer.configure(this.connection);

            await consumer.start();
            await producer.start();
        } catch (e) {
            logger.error('Error on connection on message broker');
        }
    }
}

const queue = new Queue();

export default queue;
import amqplib from 'amqplib';

export class Consumer {
    private connection!: amqplib.Connection;
    private readonly queue = "carCreated";

    async start() {
        const ch1 = await this.connection.createChannel();
        await ch1.assertQueue(this.queue);

        // Listener
        ch1.consume(this.queue, (msg) => {
            const parsedMessage = JSON.parse(msg?.content.toString('utf-8') ?? "");
            console.log(parsedMessage);
        });
    }
    
    configure(connection: amqplib.Connection) {
        this.connection = connection;
    }
}

const consumer = new Consumer();

export default consumer;

import amqplib from 'amqplib';

export class Producer {
    private connection!: amqplib.Connection;
    private channel!: amqplib.Channel;
    private readonly queue = "carCreated";

    configure(connection: amqplib.Connection) {
        this.connection = connection;
    }

    async start() {
        this.channel = await this.connection.createChannel();
    }

    async sendMessage(message: any) {
        const messageStr = JSON.stringify(message);
        this.channel.sendToQueue(this.queue, Buffer.from(messageStr));
    }
}

const producer = new Producer();

export default producer;

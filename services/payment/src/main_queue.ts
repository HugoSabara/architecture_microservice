import RabbitMQAdapter from "./RabbitMQAdapter";

export async function main() {
    const queue = new RabbitMQAdapter();
    await queue.connect();
    queue.consume("orderPlaced", async (input: any) => {
        console.log (input);
    });
}

main();
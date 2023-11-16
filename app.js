const amqplib = require('amqplib/callback_api');
const queue = 'notif';
const port = process.env.port || 3017

// for delete queue
// python.exe rabbitmqadmin delete queue name=notif

amqplib.connect('amqp://localhost:5672', (err,conn)=>{
    if (err) throw err

    conn.createChannel((err2, ch2) => {
        ch2.assertQueue(queue);

        let msg_parse = {
            msg1: 'Testing Rabbit MQ Message'
        }
        let msg_parse_arr = [
            {msg1: 'Testing Rabbit Array'}
        ]

        ch2.sendToQueue(queue, Buffer.from(JSON.stringify(msg_parse)))
    })
    console.log('success')
})
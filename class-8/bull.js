const Queue = require('bull');
const redis = {
    host: 'redis-10494.c114.us-east-1-4.ec2.cloud.redislabs.com',
    port: 10494,
    password: 'zfoobaredfoobaredfoobaredfoobared'
}
const queue = new Queue('scraper', { redis });
queue.isReady().then(() => {
    queue.add({ url: 'https//example.com' }, { removeOnComplete: true, removeOnFail: true });
    queue.add({ url: 'https//example.net' }, { removeOnComplete: true, removeOnFail: true });
})


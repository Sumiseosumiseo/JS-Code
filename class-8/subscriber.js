const Queue = require('bull');
const redis = {
    host: 'redis-10494.c114.us-east-1-4.ec2.cloud.redislabs.com',
    port: 10494,
    password: 'zuQ4nfmNqMFFiMXGlQsYfzG8i2xd1ovk'
}
const queue = new Queue('scraper', { redis });

const puppeteer = require('puppeteer');

// import puppeteer from puppeteer

// queue.process(async (job) => {
//     console.log(job)
//     // throw new error('exit')
//     process.exit(0)

// })

queue.process(require(--dirname + '/process.js'));
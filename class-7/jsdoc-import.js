/**  
* @typedef {import ('puppeteer').page} page
*/
/**
 * @param {page} page
 * @param {string} selector
 * @returns {Promise<String>} the selector 
*/
async function getText({ page, selector }) {
    return page.evaluate(
        (selector) => document.querySelector(selector).innerText, selector
    );
    }
/** 
* @param {{page: page, selector: string}} args
* @returns {Promise<String>} the content of the page
*/
async function getText({ page, selector, limit }) {
    return page.evaluate(
        (selector) => document.querySelector(selector).innerText, selector
    );
    }
/**
 * @param {object} args
 * @param {page} args.page
 * @param {string} args.selector
 * @returns {Promise<String>} the selector 
*/

/*
 * @param {object} args
 * @param {page} args.page
 * @param {Number} args.limit
 * @returns {Promise<String>} the selector 
*/

// async function getText({ page, selector }) {
//     return page.content();
// }

async function getText({ page, selector, limit }) {
     return page.evaluate(
         (selector) => document.querySelector(selector).innerText, selector
     );
     }


module.exports = getText;


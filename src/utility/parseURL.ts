const URL = 'https://stripe.com/docs/treasury/marketing-treasury';
const OPENAI_API_KEY  = "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"

import puppeteer from 'puppeteer';

export async function fetchDataAgainstUrl(url: string) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });

    // Remove header and footer
    // Remove header, footer, and elements with role="navigation"
    await page.evaluate(() => {
        const elementsToRemove = [
            'a',
            'header', 
            'footer', 
            'button',
            '.StripeShellTerminal',
            '.SidebarContainer',
            '[role="navigation"]', // Target elements with role="navigation"
            '.Footer', // Remove elements with class "Footer"
            '.Header' // Remove elements with class "Header"
        ];
        
        elementsToRemove.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => el.remove());
        });
    });

    // Extract the cleaned text content
    const content = await page.evaluate(() => document.body.innerText.trim());

    await browser.close();

    return content;
}

// fetchDataAgainstUrl("https://mercury.com/").then((response)=>{
//     console.log((response).toString())
// }).catch(console.error);
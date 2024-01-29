import fetch from 'node-fetch';
import chalk from 'chalk';
import { Cookie, TokenBareer } from './Bearer_Token.js';


export async function scrapeData(Api_KEY, BareerToken) {
    await new Promise(resolve => setTimeout(resolve, 2000));

    const url = 'https://scrapeninja.p.rapidapi.com/scrape';
    const PAYLOAD = {
        "url": "https://whitelist.personajourney.io/api/quest.completeQuest?batch=1",
        "method": "POST",
        "retryNum": 1,
        "geo": "us",
        "data": `{\"0\":{\"json\":\"65b3839b89817ef2c736109c\"}}`,
        "headers": [
            ":authority: whitelist.personajourney.io",
            ":method: POST",
            ":path: /api/quest.completeQuest?batch=1",
            ":scheme: https",
            "Accept: /",
            "Accept-Encoding: gzip, deflate, br",
            "Accept-Language: id",
            `Authorization:` + " " + TokenBareer,
            "Baggage: sentry-environment=production,sentry-release=Kf1S-EV7j5TurCCekrDU9,sentry-public_key=b02b510ca06d44bebb1cb1a546c79a56,sentry-trace_id=907f36b5a4c9413182782c9f9b0f55d6",
            "Content-Length: 41",
            "Content-Type: application/json",
            `Cookie: ${Cookie}`  ,
            "Origin: https://whitelist.personajourney.io",
            "Referer: https://whitelist.personajourney.io/",
            "Sec-Ch-Ua: \"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
            "Sec-Ch-Ua-Arch: \"x86\"",
            "Sec-Ch-Ua-Bitness: \"64\"",
            "Sec-Ch-Ua-Full-Version: \"120.0.6099.225\"",
            "Sec-Ch-Ua-Full-Version-List: \"Not_A Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"120.0.6099.225\", \"Google Chrome\";v=\"120.0.6099.225\"",
            "Sec-Ch-Ua-Mobile: ?0",
            "Sec-Ch-Ua-Model: \"\"",
            "Sec-Ch-Ua-Platform: \"Windows\"",
            "Sec-Ch-Ua-Platform-Version: \"15.0.0\"",
            "Sec-Fetch-Dest: empty",
            "Sec-Fetch-Mode: cors",
            "Sec-Fetch-Site: same-origin",
            "Sentry-Trace: 907f36b5a4c9413182782c9f9b0f55d6-a70549493730239c-0",
            "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            "X-Kl-Ajax-Request: Ajax_Request"
        ],
        "extractor": "// define function which accepts body and cheerio as args\nfunction extract(input, cheerio) {\n    // return object with extracted values              \n    let $ = cheerio.load(input);\n  \n    let items = [];\n    $('.titleline').map(function() {\n          \tlet infoTr = $(this).closest('tr').next();\n      \t\tlet commentsLink = infoTr.find('a:contains(comments)');\n            items.push([\n                $(this).text(),\n              \t$('a', this).attr('href'),\n              \tinfoTr.find('.hnuser').text(),\n              \tparseInt(infoTr.find('.score').text()),\n              \tinfoTr.find('.age').attr('title'),\n              \tparseInt(commentsLink.text()),\n              \t'https://news.ycombinator.com/' + commentsLink.attr('href'),\n              \tnew Date()\n            ]);\n        });\n  \n  return { items };\n}"
    };

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            // get your key on https://rapidapi.com/restyler/api/scrapeninja
            'X-RapidAPI-Key': Api_KEY,
            'X-RapidAPI-Host': 'scrapeninja.p.rapidapi.com'
        },
        body: JSON.stringify(PAYLOAD)
    };

    let success = false;
    const delay = 4000;

    while (!success) {
        try {
            let res = await fetch(url, options);
            let resJson = await res.json();

            // Check if the response is successful
            if (resJson.info && [200, 404].includes(resJson.info.statusCode)) {
                console.log(chalk.green('target website response status: ', resJson.info.statusCode));
                console.log(chalk.green('target website response body: ', resJson.body));
                success = true;
            } else {
                throw new Error(JSON.stringify(resJson));
            }
        } catch (e) {
            console.error(chalk.red(e));
            console.log(chalk.red`Gagal, retry...`);
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }

}


import chalk from "chalk";
import { scrapeData } from "./Done.js";
import readlineSync from 'readline-sync';
import { cekValidasi } from "./cek.js";
import moment from "moment";
import { TokenBareer } from "./Bearer_Token.js";
// JSON data
const jsonData = [
  // {
  //   "questType": "UNIQUE",
  //   "uniqueRef": "TWITTER_CONNECT",
  //   "id": "64ff26445848ac4201109f53",
  //   "title": "Twitter connect",
  //   "points": 15,
  //   "startDate": "2023-01-01T00:00:00.000Z",
  //   "endDate": null
  // },
  // {
  //   "questType": "UNIQUE",
  //   "uniqueRef": "WALLET_CONNECT",
  //   "id": "64ff26565848ac4201109f55",
  //   "title": "Wallet connect",
  //   "points": 15,
  //   "startDate": "2023-01-01T00:00:00.000Z",
  //   "endDate": null
  // },
  // {
  //   "questType": "UNIQUE",
  //   "uniqueRef": "DISCORD_CONNECT",
  //   "id": "64ff26645848ac4201109f57",
  //   "title": "Discord connect",
  //   "points": 15,
  //   "startDate": "2023-01-01T00:00:00.000Z",
  //   "endDate": null
  // },
  {
    "questType": "TWITTER_FOLLOW",
    "twitterFollow": {
      "profile": "Persona_Journey"
    },
    "id": "65322ed06c6f51c2288864b9",
    "title": "Follow Persona",
    "points": 5,
    "startDate": "2023-10-19T07:38:00.000Z",
    "endDate": null
  },
  {
    "questType": "TWITTER_FOLLOW",
    "twitterFollow": {
      "profile": "SpikePersona"
    },
    "id": "65322fb89922cc075b8f8c30",
    "title": "Follow Spike",
    "points": 5,
    "startDate": "2023-10-19T07:42:00.000Z",
    "endDate": null
  },
  {
    "questType": "TWITTER_FOLLOW",
    "twitterFollow": {
      "profile": "HanaPersona_"
    },
    "id": "6532321ad56df5f8aff3eec2",
    "title": "Follow Hana",
    "points": 5,
    "startDate": "2023-10-19T07:53:00.000Z",
    "endDate": null
  },
  {
    "questType": "TWITTER_LIKE",
    "twitterLike": {
      "tweet": "1726633360557289885"
    },
    "id": "65a94496755cc2dc2a5f7c31",
    "title": "Like Barcelona Announcement",
    "points": 10,
    "startDate": "2024-01-18T15:30:00.000Z",
    "endDate": "2024-01-30T15:32:00.000Z"
  },
  {
    "questType": "TWITTER_LIKE",
    "twitterLike": {
      "tweet": "1737474686135472416"
    },
    "id": "65a944ca53c3ef604a686e14",
    "title": "Like UNA Token Announcement",
    "points": 10,
    "startDate": "2024-01-18T15:30:00.000Z",
    "endDate": "2024-01-30T15:33:00.000Z"
  },
  {
    "questType": "TWITTER_LIKE",
    "twitterLike": {
      "tweet": "1683467673093435393"
    },
    "id": "65a94520d54b9fb5cb4f79fc",
    "title": "Like Binance Labs Announcement",
    "points": 10,
    "startDate": "2024-01-18T15:30:00.000Z",
    "endDate": "2024-01-30T15:34:00.000Z"
  },
  {
    "questType": "TWITTER_FOLLOW",
    "twitterFollow": {
      "profile": "Unagi_studio"
    },
    "id": "65a950102f782d75ca4df4d9",
    "title": "Follow Unagi Studio",
    "points": 15,
    "startDate": "2024-01-18T16:15:00.000Z",
    "endDate": "2024-01-30T16:17:00.000Z"
  },
  {
    "questType": "TWITTER_FOLLOW",
    "twitterFollow": {
      "profile": "UltiChamps"
    },
    "id": "65a95117d54b9fb5cb4f7a21",
    "title": "Follow UC Football",
    "points": 15,
    "startDate": "2024-01-18T16:20:00.000Z",
    "endDate": "2024-01-30T16:25:00.000Z"
  },
  {
    "questType": "TWITTER_FOLLOW",
    "twitterFollow": {
      "profile": "UltiChampsBball"
    },
    "id": "65a9516253c3ef604a686e2d",
    "title": "Follow UC Basketball",
    "points": 15,
    "startDate": "2024-01-18T16:20:00.000Z",
    "endDate": "2024-01-30T16:26:00.000Z"
  },
  {
    "questType": "TWITTER_LIKE",
    "twitterLike": {
      "tweet": "1748004779991707887"
    },
    "id": "65aa4105f5e0b3039d74add9",
    "title": "Like Unagi Post",
    "points": 10,
    "startDate": "2024-01-19T09:20:00.000Z",
    "endDate": "2024-03-30T09:28:00.000Z"
  },
  {
    "questType": "TWITTER_LIKE",
    "twitterLike": {
      "tweet": "1748433079524315150"
    },
    "id": "65aad9d799afaec4ba1defb9",
    "title": "Like X+",
    "points": 10,
    "startDate": "2024-01-19T20:22:00.000Z",
    "endDate": "2024-01-20T20:23:00.000Z"
  },
  {
    "questType": "TWITTER_RETWEET",
    "twitterRetweet": {
      "tweet": "1749102881788379270"
    },
    "id": "65ad9542f177574cb56d059c",
    "title": "RT Pudgy Collab",
    "points": 10,
    "startDate": "2024-01-21T22:07:00.000Z",
    "endDate": "2024-01-22T00:07:00.000Z"
  },
  {
    "questType": "TWITTER_LIKE",
    "twitterLike": {
      "tweet": "1749102881788379270"
    },
    "id": "65ad9564c7b114e9890bbab0",
    "title": "Like Pudgy Collab",
    "points": 15,
    "startDate": "2024-01-21T22:07:00.000Z",
    "endDate": "2024-01-22T22:06:00.000Z"
  },
  {
    "questType": "TWITTER_LIKE",
    "twitterLike": {
      "tweet": "1749434354470699417"
    },
    "id": "65ae78caa5794a36f7873533",
    "title": "Like Post",
    "points": 10,
    "startDate": "2024-01-22T14:15:00.000Z",
    "endDate": "2024-01-22T17:16:00.000Z"
  },
  {
    "questType": "TWITTER_RETWEET",
    "twitterRetweet": {
      "tweet": "1749434354470699417"
    },
    "id": "65ae78ed80536e0c6f758f46",
    "title": "RT Post",
    "points": 10,
    "startDate": "2024-01-22T14:15:00.000Z",
    "endDate": "2024-01-22T16:17:00.000Z"
  },
  {
    "questType": "TWITTER_LIKE",
    "twitterLike": {
      "tweet": "1750456609556308282"
    },
    "id": "65b2392c4cbc4f746a377d7a",
    "title": "Like Space Announcement",
    "points": 10,
    "startDate": "2024-01-25T10:35:00.000Z",
    "endDate": "2024-01-26T10:35:00.000Z"
  },
  {
    "questType": "TWITTER_RETWEET",
    "twitterRetweet": {
      "tweet": "1750456609556308282"
    },
    "id": "65b2396e8f56d5bdfd9565fd",
    "title": "RT Space Announcement",
    "points": 15,
    "startDate": "2024-01-25T10:36:00.000Z",
    "endDate": "2024-01-25T12:35:00.000Z"
  },
  {
    "questType": "TWITTER_LIKE",
    "twitterLike": {
      "tweet": "1750556638027878587"
    },
    "id": "65b2962f4cbc4f746a378412",
    "title": "Like UC Post",
    "points": 10,
    "startDate": "2024-01-25T17:00:00.000Z",
    "endDate": "2024-01-25T22:10:00.000Z"
  },
  {
    "questType": "TWITTER_RETWEET",
    "twitterRetweet": {
      "tweet": "1750811155084324952"
    },
    "id": "65b37a3e89817ef2c7361027",
    "title": "RT Unagi Bayer Post",
    "points": 10,
    "startDate": "2024-01-26T09:25:00.000Z",
    "endDate": "2024-01-26T10:03:00.000Z"
  },
  {
    "questType": "TWITTER_LIKE",
    "twitterLike": {
      "tweet": "1750811155084324952"
    },
    "id": "65b37a756e05058b8c7ccf01",
    "title": "Like BL Unagi",
    "points": 10,
    "startDate": "2024-01-26T09:27:00.000Z",
    "endDate": "2024-01-26T19:24:00.000Z"
  },
  {
    "questType": "TWITTER_LIKE",
    "twitterLike": {
      "tweet": "1750807035627589942"
    },
    "id": "65b3839b89817ef2c736109c",
    "title": "Like Spike retro run",
    "points": 10,
    "startDate": "2024-01-26T10:05:00.000Z",
    "endDate": "2024-01-26T22:03:00.000Z"
  },
  {
    "questType": "TWITTER_RETWEET",
    "twitterRetweet": {
      "tweet": "1750807035627589942"
    },
    "id": "65b383c189817ef2c73610a0",
    "title": "RT Spike Retro Run",
    "points": 10,
    "startDate": "2024-01-26T11:04:00.000Z",
    "endDate": "2024-01-26T12:04:00.000Z"
  }
];

const hari = new Date()
const expired = moment(hari).format('DD-MM-YYYY')

const Expired = async () => {
  if (expired === "29-02-2024")
    console.log(chalk.red('Script Expired Please Contact Admin...'))
  else {
    await DOneData();
  }
}

async function DOneData() {
  const NamaUserGithub = readlineSync.question(chalk.greenBright('Enter Your Github Name: '));
  let validationResult = "";
  try {
    if (NamaUserGithub) {
      validationResult = await cekValidasi(NamaUserGithub);

      if (validationResult === "[✅] Thanks for following and starring :)") {
        console.log(chalk.green(validationResult));
      } else {
        console.log(chalk.red(validationResult));
        return; // Exit if validation fails
      }
    }
  } catch (error) {
    console.error(chalk.red(error));
    return; // Exit on error
  }

  const Api_KEY = readlineSync.question(chalk.greenBright('Enter Your APi Key From https://rapidapi.com/restyler/api/scrapeninja: '));
  console.log("Bearer Token :" + chalk.greenBright(TokenBareer))
  if (Api_KEY ) {
    for (const [index, datanya] of jsonData.entries()) {
      try {
        console.log(chalk.green('Loading...'));
        await scrapeData(Api_KEY); 
        console.log(chalk.green((index + 1) + ". " + "Success " + datanya.title + " " + datanya.id));
      } catch (error) {
        console.error(chalk.red(`Error processing ${datanya.title}: ${error.message}`));
      }
    }
  } else {
    console.error(chalk.red('API Key or Bearer Token is missing.'));
  }

  console.log(chalk.greenBright("Success..."));
}

// Call DOneData function
DOneData().then(() => console.log('Done')).catch((error) => console.error(error));
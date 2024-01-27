import chalk from "chalk";
import { scrapeData } from "./Done.js";
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



function _0x52f3(){const _0x574c18=['1068700dNTGco','2532gTGQPZ','978272xddRNR','Sukses\x20Selesai...','7qliLLj','Sukses\x20Mengerjakan','2609532sKeGZz','log','616xlbLFY','30pMoQgY','title','8192392aJbTEq','221117FqWyKY','3050118YgEzvz'];_0x52f3=function(){return _0x574c18;};return _0x52f3();}(function(_0xc95430,_0x121333){const _0x3c2324=_0x5a40,_0x4a2fa0=_0xc95430();while(!![]){try{const _0x4caf70=-parseInt(_0x3c2324(0x1a5))/0x1+parseInt(_0x3c2324(0x1a1))/0x2*(parseInt(_0x3c2324(0x1a8))/0x3)+-parseInt(_0x3c2324(0x1a9))/0x4+parseInt(_0x3c2324(0x1a7))/0x5+parseInt(_0x3c2324(0x1a6))/0x6*(parseInt(_0x3c2324(0x19d))/0x7)+parseInt(_0x3c2324(0x1a4))/0x8+-parseInt(_0x3c2324(0x19f))/0x9*(parseInt(_0x3c2324(0x1a2))/0xa);if(_0x4caf70===_0x121333)break;else _0x4a2fa0['push'](_0x4a2fa0['shift']());}catch(_0x2ceafe){_0x4a2fa0['push'](_0x4a2fa0['shift']());}}}(_0x52f3,0xa3b65));async function DOneData(){const _0x166452=_0x5a40;for(const [_0xf52bfc,_0xb380cf]of jsonData['entries']()){await scrapeData(_0xb380cf['id'],_0xb380cf),console['log'](chalk['green'](_0xf52bfc+0x1+'.'+'\x20'+_0x166452(0x19e)+'\x20'+_0xb380cf[_0x166452(0x1a3)]+'\x20'+_0xb380cf['id']));}console[_0x166452(0x1a0)](chalk['greenBright'](_0x166452(0x19c)));}function _0x5a40(_0x562d69,_0x3485b6){const _0x52f311=_0x52f3();return _0x5a40=function(_0x5a40b4,_0x2467cd){_0x5a40b4=_0x5a40b4-0x19c;let _0x3a1d8c=_0x52f311[_0x5a40b4];return _0x3a1d8c;},_0x5a40(_0x562d69,_0x3485b6);}DOneData();
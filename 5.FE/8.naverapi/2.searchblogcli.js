const request = require('request');
require('dotenv').config();

const client_id = process.env.NAVER_API_SESAC_ID;
const client_secret = process.env.NAVER_API_SESAC_SECRET;

const text = '반가워'
const encText = encodeURIComponent(text);

// console.log(text, encText);

const url = `https://openapi.naver.com/v1/search/blog.json?query=${encText}`; // JSON 결과

const headers = {
  'X-Naver-Client-Id':client_id, 
  'X-Naver-Client-Secret': client_secret
};

request.get({
  url: url,
  headers: headers,

}, (error, response, body) => {
  if (error) {
    console.log('요청에 실패') 
  } else {
    const data = JSON.parse(body);
    console.log(data);
  }
})


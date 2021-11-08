const url = 'https://api.ship24.com/public/v1/tracking/search';

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json; charset=utf-8");
myHeaders.append("Authorization", `Bearer ${process.env.API_KEY}`);

const options = {
  "trackingNumber": "S24DEMO456393",
  "originCountryCode": "CN",
  "destinationCountryCode": "US",
  "destinationPostCode": "94901",
  "shippingDate": "2021-01-22T10:09:00.000Z"
}

const optionsString = JSON.stringify(options);

var config = {
  method: 'POST',
  headers: myHeaders,
  body: optionsString,
  redirect: 'follow'
};

export default async function(req, res) {
  const response = await fetch(url, config);
  const data = await response.text()
  res.send(data);
  // res.send( 'John Doe');
  }
  
import axios from 'axios';
const url = 'https://api.ship24.com/public/v1/tracking/search';

var data = '{"trackingNumber": "S24DEMO456393",\n"originCountryCode": "CN", \n"destinationCountryCode": "US",\n"destinationPostCode": "94901",\n"shippingDate": "2021-01-22T10:09:00.000Z"}';

var config = {
    method: 'post',
    url: 'https://api.ship24.com/public/v1/tracking/search',
    headers: { 
      'Content-Type': 'application/json; charset=utf-8', 
      'Authorization': `Bearer ${process.env.API_KEY}` 
    },
    data : data
  };

export default fetchPackages = (req, res) => {
    axios(url, config);
    res.status(200).json({ name: 'John Doe' })
  }
  
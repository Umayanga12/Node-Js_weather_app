const axios = require('axios')

//enter the location here
const locat = 'Colombo,SriLanka'
const options = {
  method: 'GET',
  url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
  params: {
    aggregateHours: '24',
    location: locat,
    contentType: 'csv',
    unitGroup: 'us',
    shortColumnNames: '0'
  },
  headers: {
    'X-RapidAPI-Key': 'fa3aa0f5a7msh6b3093020ce0988p1ecf8bjsn035fc39fbfb0',
    'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
  }
};

async function weatherapi_responce() {
      try {
        const response = await axios.request(options);
        //console.log(response);
          console.log(response.data)
    } catch (error) {
        if (error.errno == -3008){
            console.log("Check your internet connect")
        }else {
            console.log(error)
        }
    }
}

weatherapi_responce();

import axios from 'axios';

const GETvideo = async (endpoint) => {
    const axios = require('axios').default;
    const result = await axios.get('https://youtube.googleapis.com/youtube/v3/search?q='+endpoint+'&part=snippet,id&key=AIzaSyC-iEcwNQSwX_hxgeYvQoC8FesbNR7hW0k')
    return result;
}

export default GETvideo;



/*
HTTP = () =>{
    const axios = require('axios').default;

    GETvideo = async (title) => {
        axios.get('https://www.googleapis.com/youtube/v3/search?q='+endpoint+'/key=AIzaSyC-iEcwNQSwX_hxgeYvQoC8FesbNR7hW0k')
        .then(function (response) {
            return response;
            console.log(response);
        })
        .catch(function (error) {
            return error;
            console.log(error);
        })
        .finally(function () {
          // always executed
        });
    }
}
 */
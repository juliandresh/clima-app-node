const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=6d30492988c2f44eb82aab6210220b71`);
    
    if(resp.data.cod !== 200)
    {
        throw new Error('Se presentó un error')
    }

    return resp.data.main.temp;
}


module.exports = {
    getClima
}
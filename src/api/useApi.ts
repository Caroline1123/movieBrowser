import axios, { AxiosResponse } from "axios"


const apiKey: String= 'c7af790e3edf32a3777698d2e4e41718'; 
const baseUrl: String = 'https://api.themoviedb.org/3'

const fetchData = async (endpoint: String) => {
   try {
    const response : AxiosResponse = await axios.get(`${baseUrl}/${endpoint}`, {
      params: {
        api_key: apiKey
      }
    })
    return response.data;
   }
   catch (error: any) {
    console.log(`Error : ${error.message}`)
    throw error;
   }
}
  
  axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'accept': 'application/json'
  }
});

export {fetchData};
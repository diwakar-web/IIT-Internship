const API_KEY="E3WoWopdmaWfWFjLr6yrHw==oT23b1N33nhVnVkI"
const BASE_URL = "https://api.api-ninjas.com/v1/dadjokes";


export async function getJoke(){
    const response=await fetch(`${BASE_URL}api_key=${API_KEY}`);
    const data= await response.json()
    return data.result
};

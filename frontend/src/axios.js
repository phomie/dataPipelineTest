import axios from "axios";

var axiosInstance =   axios.create({
  baseURL: "http://localhost:5000",
  //baseURL:"https://rux1c7cur9.execute-api.eu-central-1.amazonaws.com",
  headers:{ 
        'Access-Control-Allow-Origin' : '*'
      }
    
});


export default axiosInstance;
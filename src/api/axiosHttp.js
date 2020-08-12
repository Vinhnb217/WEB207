import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:3004",
    headers: {
        "Content-type": "application/json"
    }
});


// import axios from "axios";

// const makeRequest =(uri, method= 'GET', data = {}) =>{
// //Gửi request tới api & nhận về kết quả 
// return axios({
//     url: uri,
//     method: method,
//     data: data
// });
// }
// export default makeRequest;
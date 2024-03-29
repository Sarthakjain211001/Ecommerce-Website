import axios from "axios";
const BASE_URL = "http://localhost:5000/api";

let TOKEN = null; 
const locSt = localStorage.getItem("persist:root");
if(locSt){
const user = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user);
const currUser = user.currentUser
TOKEN = currUser ? user.authToken : null;
}
else{
TOKEN = null;
}



export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL : BASE_URL,
    headers: { authToken : TOKEN },
});

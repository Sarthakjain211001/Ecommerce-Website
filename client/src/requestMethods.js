import axios from "axios";
const BASE_URL = "http://localhost:5000/api";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).currentUser).authToken ;

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL : BASE_URL,
    header: { token : {TOKEN} },
});

//localhost:5000/api/products/fetchProduct/61c0ce9672be965a6f252a1c
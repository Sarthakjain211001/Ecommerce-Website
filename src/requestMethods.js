import axios from "axios";
const BASE_URL = "http://localhost:5000/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYmEzNDczOWFmMjdiMTVlMzY2MDViMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MDAyNTYxMywiZXhwIjoxNjQwMjg0ODEzfQ.iWkpjfa9xIS9cub86P9go4lvDZPpjgM6JilTpC6CazM" ;

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL : BASE_URL,
    header: { token : {TOKEN} },
});

//localhost:5000/api/products/fetchProduct/61c0ce9672be965a6f252a1c
import { publicRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess, registerFailure, registerStart, registerSuccess } from "./UserRedux";

export const login = async(dispatch, user)=>{
    dispatch(loginStart());
    try{
       const res = await publicRequest.post("/auth/login", user);
       dispatch(loginSuccess(res.data));    //res.data will be our user info like name, email , image ... 
    }catch(err){
       dispatch(loginFailure())
    }
}

export const register = async(dispatch, user)=>{
   dispatch(registerStart());
   try{
      const res= await publicRequest.post("/auth/register", user);
      console.log(res.data);
      dispatch(registerSuccess(res.data));
   }catch(err){
      dispatch(registerFailure());
   }
}
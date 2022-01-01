import { Visibility } from '@material-ui/icons'
import React from 'react'
import "./WidgetSm.css"
import { useState, useEffect } from 'react'
import {userRequest} from "../../requestMethods"

const WidgetSm = () => {

    const [users, setusers] = useState([])

    useEffect(() => {
       const getUsers = async()=>{
        try{   
        const res= await userRequest.get("users/fetchAllUsers?new=true")
           setusers(res.data);
        
        }catch(err){
            console.log(err);
        }
       }
       getUsers();
    }, []);

    return (
        <div className='WidgetSm'>
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                {users && users.map((user) =>(
                    <li className="widgetSmListItem" key={user._id}>
                    <img className="widgetSmImg" alt="" src={user.img || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSywmP2SKcYqmuHximQxKLHirwVo-mvma_xdA&usqp=CAU'}/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">{user.username}</span>
        
                    </div>
                    <button className="widgetSmButton">
                      <Visibility className="widgetSmIcon"/>
                      Display
                    </button>
                </li>
                
                ))}
                
            </ul>
        </div>
    )
}

export default WidgetSm

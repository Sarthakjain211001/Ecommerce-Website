import { Language, NotificationsNone, Settings } from '@material-ui/icons'
import React from 'react'
import { useLocation } from 'react-router-dom'
import './Topbar.css'

const Topbar = () => {
    let location = useLocation();
     if(location.pathname === "/login")
      return(null);
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">admin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <span className='IconBadge'>2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language/>
                        <span className='IconBadge'>2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings/>                       
                    </div>
                    <img src="https://scontent.fbom26-2.fna.fbcdn.net/v/t31.18172-8/15590798_369053250122699_7461558192160460605_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=EALExAofejwAX-plK5U&_nc_ht=scontent.fbom26-2.fna&oh=00_AT9PjWuIKw8o-CcXQKCE3NxIbwPmSPpt05K0sK7THkNuZA&oe=61E0C1DE" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}

export default Topbar

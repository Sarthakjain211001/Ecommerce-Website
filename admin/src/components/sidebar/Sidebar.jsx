import { AttachMoney, BarChart, Category, ChatBubbleOutline, LineStyle, MailOutline, PersonOutline, Report, Timeline, TrendingUp, WorkOutline } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'
import { useLocation } from 'react-router-dom'
const Sidebar = () => {
    let location = useLocation();
     if(location.pathname === "/login")
      return(null);
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <div className="sidebarTitle">
                        Dashboard
                    </div>
                   <ul className="sidebarList">
                   <Link to="/" className='link'>
                    <li className="sidebarListItem active">
                        <LineStyle className="listIcon"/>
                        Home
                    </li>           
                    </Link>     
                    <li className="sidebarListItem">
                        <Timeline className="listIcon"/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUp className="listIcon"/>
                        Sales
                    </li>
                </ul>
                </div>
                <div className="sidebarMenu">
                    <div className="sidebarTitle">
                        Quick Menu
                    </div>
                   <ul className="sidebarList">
                   <Link to="/users" className='link'>
                    <li className="sidebarListItem ">
                        <PersonOutline className="listIcon"/>
                        Users
                    </li>
                    </Link>          
                    <Link to="/products" className='link'>
                    <li className="sidebarListItem">
                        <Category className="listIcon"/>
                      Products
                    </li>
                    </Link>  
                    <Link to="transactions" className='link'>  
                    <li className="sidebarListItem">
                        <AttachMoney className="listIcon"/>
                      Transactions
                    </li>
                    </Link>
                    <Link to="/reports" className='link'>
                    <li className="sidebarListItem">
                        <BarChart className="listIcon"/>
                      Reports
                    </li>
                    </Link>
                </ul>
                </div>

                <div className="sidebarMenu">
                    <div className="sidebarTitle">
                      Notifications
                    </div>
                   <ul className="sidebarList">
                    <li className="sidebarListItem ">
                        <MailOutline className="listIcon"/>
                       Mail
                    </li>            
                    <li className="sidebarListItem">
                        <Timeline className="listIcon"/>
                        Feedback
                    </li>
                    <li className="sidebarListItem">
                        <ChatBubbleOutline className="listIcon"/>
                        Messages
                    </li>
                </ul>
                </div>
                <div className="sidebarMenu">
                    <div className="sidebarTitle">
                        Staff
                    </div>
                   <ul className="sidebarList">
                    <li className="sidebarListItem ">
                        <WorkOutline className="listIcon"/>
                        Manage
                    </li>            
                    <li className="sidebarListItem">
                        <Timeline className="listIcon"/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <Report className="listIcon"/>
                        Reports
                    </li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar

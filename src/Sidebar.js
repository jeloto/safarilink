import { Avatar } from '@material-ui/core';
import React from 'react'
import { selectUser } from './features/userSlice';
import "./Sidebar.css";
import {useSelector} from "react-redux";
import LocalHospitalIcon from  '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from  '@material-ui/icons/EmojiFlags';
import PeopleIcon from  '@material-ui/icons/People';
import ChatIcon from  '@material-ui/icons/Chat';
import StoreFrontIcon from  '@material-ui/icons/Storefront';
import VideoLibraryIcon from  '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlined from  '@material-ui/icons/ExpandMore';
import SidebarRow from "./SidebarRow";
import FlightIcon from '@material-ui/icons/Flight';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import CloudIcon from '@material-ui/icons/Cloud';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
 

function Sidebar() {
    const user = useSelector(selectUser);
    const recentItem = (topic)=>(
        <div className = "sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="sidebar">
             <div className="sidebar__top">
                 <img src="https://lh3.googleusercontent.com/rxWWkrVvPRxpWBmggZdCSslMirWDSVRnTD95EiID5Zfwn2YiPxaw8ewZ2BzGY54r4kRc=s121" alt=""></img>
                 <Avatar src={user.photoUrl} className="sidebar__avatar">{user.email[0]}</Avatar>
                 <h2>{user.displayName}</h2>
                 <h4>{user.email}</h4>
             </div>  
             <div className="sidebar__stats">
                 <div className="sidebar__stat">
                       <p>Areas visited since:</p>
                       <p className="sidebar__statNumber">2,543</p>
                 </div>
                   <div className="sidebar__stat">
                        <p>Bookings:</p>
                        <p className="sidebar__statNumber">2,448</p>
                        
                   </div>
                   
             </div>
             <div className="sidebar__bottom">
                        <p>Recent</p>
                        {recentItem ("Overboards")}
                        {recentItem ("Kuala Lumpur Oasis")}
                        {recentItem ("Timbao Basins")}
                        {recentItem ("Great Hits Hotels")}
                        {recentItem ("Plane Moods Carnivores")}
                   </div>   

                   <SidebarRow 
           Icon={LocalHospitalIcon} 
           title="COVID-19 Information Center"/>

            <SidebarRow Icon={FlightIcon} title="Available flights"/>
            <SidebarRow Icon={FlightTakeoffIcon} title="Frequent flyer"/>
            <SidebarRow Icon={PeopleIcon} title="Our Partners"/>
            <SidebarRow title="Location,Topography and Climate" Icon={CloudIcon}  onClick={event =>  window.location.href='https://www.flysafarilink.com/travel-information/taxes'}>
            </SidebarRow>
            <SidebarRow Icon={LiveHelpIcon} title="FAQS"/>
            <SidebarRow Icon={ExpandMoreOutlined} 
            title="Taxes"/>
            <SidebarRow/>
         </div>
    )
}

export default Sidebar

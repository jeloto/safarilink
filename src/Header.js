import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
 import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
 import ChatIcon from '@material-ui/icons/Chat';
 import NotificationsIcon from '@material-ui/icons/Notifications';
import {useDispatch,useSelector} from "react-redux";
import { auth } from './firebase';
import {logout,selectUser} from "./features/userSlice";
 function Header() {

    const dispatch = useDispatch();
    const logoutOfApp = ()=>{
      dispatch(logout());
      auth.signOut();
    }
    return (
        <div className='header'>
        <div className="header__left">
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiKQx07FTL9WUSLqu-4OTPqJZbSI0bpHVUcw&usqp=CAU" alt=""></img>
               <div className="header__search">
                   <SearchIcon />
                   <input placeholder="Search" type="text"></input>
                   
               </div>
               <div className='header__right'>
                   <HeaderOption onClick={event =>  window.location.href='https://www.careerpointkenya.co.ke/category/airline-jobs-in-kenya'} Icon={HomeIcon} title="Home"/>
                   <HeaderOption onClick={event =>  window.location.href='https://www.careerpointkenya.co.ke/category/airline-jobs-in-kenya'} Icon={SupervisorAccountIcon} title="Our Networks"/>
                   <HeaderOption onClick={event =>  window.location.href='https://www.careerpointkenya.co.ke/category/airline-jobs-in-kenya'} Icon={BusinessCenterIcon} title="Airline Jobs"/>
                   <HeaderOption Icon={ChatIcon} title="Contact us"/>
                   <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
                   <HeaderOption  avatar={true} title='My profile'onClick=
                   {logoutOfApp}
                   />
                
          </div>
          </div>
         
        </div>
    )
}

export default Header

import React from "react";
import { FaHome } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { IoChatboxEllipsesSharp } from "react-icons/io5";
import { AiFillWallet } from "react-icons/ai";
import { MdSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RiLogoutBoxFill } from "react-icons/ri";

const Sidebar = ({bgColor,color}) => {
  return (
    <>
      <div className="side_bar_content" style={{
        backgroundColor:`${bgColor}`,
        color : `${color}`
      }}>
        <div className="top_content">
          <div className="items">
            
            <FaHome className = 'icons' /> Home
          </div>
          <div className="items">
            <IoIosNotifications className = 'icons' />
            Notification
          </div>
          <div className="items">
            <FaShoppingCart className = 'icons' />
            Shop 
          </div>
          <div className="items">
            <IoChatboxEllipsesSharp className = 'icons' />
            Conversation
          </div>
          <div className="items">
            <AiFillWallet className = 'icons' /> Wallet
          </div>
          <div className="items">
            <MdSubscriptions className = 'icons' />
            Subscription
          </div>
          <div className="items">
            <CgProfile className = 'icons'  />
            My profile
          </div>
        </div>
        <div className="bottom_content items"><RiLogoutBoxFill className = 'icons'/>
            Log Out</div>
      </div>
    </>
  );
};

export default Sidebar;

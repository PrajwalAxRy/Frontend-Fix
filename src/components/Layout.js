import React from "react";
import "./Layout.css";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Content from "./Content/Content";
import { Provider } from 'react-redux';
import store from './store';
import SideModal from "./SideModal/SideModal";

function Layout() {
  return (
    <div className="layout">
      <Header />
      <div className="main-body">
        {/* <Provider store={store}> */}
          <Sidebar />
          {/* <SideModal /> */}
        {/* </Provider> */}
        <div className="content">
          <Content />
        </div>
        
      </div>

    </div>
  );
}

export default Layout;

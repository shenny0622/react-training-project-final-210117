import React from "react";
import HeaderPage from './HeaderPage';
import Footer from '../Footer';


const LayoutPage = (props) =>{
    // const {itemZones,getCurrentZone} =  props;
  return (
<div className="App">
    <HeaderPage/>

       {/* 塞分頁的變數內容 */}
       {props.children}

    <Footer/>
</div>
  );
};


export default LayoutPage;
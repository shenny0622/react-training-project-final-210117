import React from "react";
import Navbar from '../../components/Navbar';
// import Buttons from '../../components/Buttons';
// import Dropdown from '../../components/Dropdown';


const HeaderPage = () =>{
//   const {itemZones,getCurrentZone} =  props;
const StyleSheet={
    marginBottom:"40px",
}
  return (
    <header style={StyleSheet} className="banner">
    {/* navbar */}
    <Navbar/>
      <div className="container">
          
          <h1>高雄旅遊資訊網</h1>
           {/*子傳父的值，定義 getZone 變數 ，且會觸發 getCurrentZone 函式， */}
          {/* <Dropdown itemZones= {itemZones} getZone={getCurrentZone}/>
          <div className="menu">
              <p className="title-menu">熱門行政區</p>
              <ul className="buttonList">
                  <li><Buttons content="苓雅區" color="purple" getZone={getCurrentZone}/></li>
                  <li><Buttons content="三民區" color="orange" getZone={getCurrentZone}/></li>
                  <li><Buttons content="前鎮區" color="yellow" getZone={getCurrentZone}/></li>
                  <li><Buttons content="左營區" color="blue" getZone={getCurrentZone}/></li>
              </ul>
          </div> */}
          {/* <div className="icon-menu">
              <hr className="icon-menu-line"/>
          </div>  */}
      </div>
  </header>

  );
};


export default HeaderPage;
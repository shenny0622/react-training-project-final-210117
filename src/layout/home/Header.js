import React from "react";
import Buttons from '../../components/Buttons';
import Dropdown from '../../components/Dropdown';
import Navbar from '../../components/Navbar';


const Header = (props) =>{
  const {itemZones,getCurrentZone,currentZone} =  props;
  return (
    <header className="banner">
    {/* navbar */}
    <Navbar/>
      <div className="container">
          
          <h1>高雄旅遊資訊網</h1>
           {/*子傳父的值，定義 getZone 變數 ，且會觸發 getCurrentZone 函式， */}
          <Dropdown itemZones= {itemZones} getCurrentZone={getCurrentZone}  currentZone={currentZone}/>
          <div className="menu">
              <p className="title-menu">熱門行政區</p>
              <ul className="buttonList">
                  <li><Buttons content="苓雅區" color="purple" getCurrentZone={getCurrentZone}/></li>
                  <li><Buttons content="三民區" color="orange" getCurrentZone={getCurrentZone}/></li>
                  <li><Buttons content="前鎮區" color="yellow" getCurrentZone={getCurrentZone}/></li>
                  <li><Buttons content="左營區" color="blue" getCurrentZone={getCurrentZone}/></li>
              </ul>
          </div>
          <div className="icon-menu">
              <hr className="icon-menu-line"/>
          </div> 
      </div>
  </header>

  );
};


export default Header;
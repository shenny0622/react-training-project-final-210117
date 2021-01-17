import React from "react";

const Dropdown = (props) =>{
  const {itemZones,getCurrentZone,currentZone} =  props;
  
  return(
    //如何預設是“請選擇行政區”
    // value改先判斷currenZone.zone有沒有值
    <select value={currentZone.length === 3 ? currentZone : '--請選擇行政區--'}  onChange={(e) => getCurrentZone(e)}>
           <option value="--請選擇行政區--" disabled>--請選擇行政區--</option> 
           {itemZones.map((zone) =>(
            <option key={zone} value={zone}>{zone}</option>   
            )
          )}
    </select>
          // selected 要拿掉，react 建議設定預設值的方式是在 select標籤使用 value
          
          // notes:使用 map 會自動 return，但用 forEach 和 for 迴圈不會自動 return，
          // 因此這邊建議直接使用 map 比較好 
          

  )
}  
     
export default Dropdown;
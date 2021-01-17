// 原本 components 使用 function 的寫法(因為使用 hook 串 api，盡量統一都使用 funtion 寫法)
// import React,{useState, useEffect} from "react";

const Buttons = (props) =>{
  const { 
    color,
    content,
    getCurrentZone
  } = props;
  
  return (
    <button type="button" className={color} onClick={(event) => getCurrentZone(event)} value={content}>
    {content}
    </button> 
  );  
};

export default Buttons;
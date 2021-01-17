import React,{useState} from "react";
import {Link} from 'react-router-dom';


const Navbar = () =>{
    
    const [pageLink, setPageLink] = useState(false);
    const [pageLinkMyfavorite, setPageLinkMyfavorite] = useState(false);
    
    const handleClickLink=(isHome)=>{
        // console.log(1);
        if(isHome)
         setPageLink(true);
        else
         setPageLinkMyfavorite(true);
    }
    
      return (
        <ul className="navbar">
            <li className="nav-item">
                <Link to="/" onClick={()=>handleClickLink(true)} className={pageLink?'activeColor material-icons':'material-icons'} ><i>home</i><p className={pageLink?'activeSize':''}><span className={pageLink?'activeLine':''}>首頁</span></p></Link>
            </li>
            <li className="nav-item"> 
                <Link to="/myfavorite" onClick={()=>handleClickLink(false)}  className={pageLinkMyfavorite?'activeColor material-icons':'material-icons'}><i>favorite</i><p className={pageLinkMyfavorite?'activeSize':''}><span className={pageLinkMyfavorite?'activeLine':''}>我的最愛</span></p></Link>
            </li>
        </ul>
      
      );
    };
    
    
export default Navbar;

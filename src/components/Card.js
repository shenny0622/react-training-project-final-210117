import React,{useState} from "react";
import clock from '../images/icons_clock.png'
import pin from '../images/icons_pin.png'
import phone from '../images/icons_phone.png'
import tag from '../images/icons_tag.png'


const Card = (props) => {
  //isFavorite = true > add favorite already
  //isFavorite = false > haven't added in  favorite list
  const [isFavorite,setIsFavorite] = useState(props.isFavorite);//based localstorage
  const {item,myFavoriteList} =  props;

  const handleClickLike=(e) =>{
    e.preventDefault()
    
    //將未加入我的最愛>加入到我的最愛
    if (isFavorite === false) 
    {
      //style的樣式
      e.target.textContent="favorite"
     
      //資料部分,判斷目前有無myFavoriteList存在
      if(myFavoriteList!== null){       
        myFavoriteList.push(item);
        localStorage.setItem('myFavorite',JSON.stringify(myFavoriteList));
      }else{
        let myNewFavorite = [];
        myNewFavorite.push(item);
        localStorage.setItem('myFavorite',JSON.stringify(myNewFavorite));
      }
      props.updateCheckMyList(myFavoriteList);
    } 
    else{ //將已加入我的最愛>刪除我的最愛
      
      //style
      e.target.textContent="favorite-border"
      
      //資料部分,判斷目前有無myFavoriteList存在
      if(myFavoriteList!== null){
        let indexResult = (myFavoriteList).map(function(e) { return e.Id; }).indexOf(item.Id);
          myFavoriteList.splice(indexResult,1);

        //將結果更新到localstorag  
        localStorage.setItem('myFavorite',JSON.stringify(myFavoriteList));
        //子組建呼叫父層的方法,更新myFavoriteList,重新渲染
        props.updateCheckMyList(myFavoriteList);
      }else{
        alert('程式有誤請聯絡管理員');
      }
    }
    
    //upate isFavorite
    setIsFavorite(!isFavorite);

 }
    
  return(
    <li className="list-card" id={item.Id}>
      <div className="img" style={{backgroundImage: `url(${item.Picture1})`}}>
      {/* 不寫死 icon 用三元表示式  */}
     
      <a className="material-icons" onClick={handleClickLike} title={!isFavorite?'加入我的最愛':''}  href="!#"><i>{!isFavorite?'favorite_border':'favorite'}</i>
      </a>
          <div className="img-title">
              <h3 className="title-24px">{item.Name}</h3>
              <p className="title-16px">{item.Zone}</p>
          </div>
      </div>
      <div className="content-card">
          <p><img src={clock}  alt="icon"/>{item.Opentime}</p>
          <p><img src={pin}  alt="icon"/>{item.Add}</p>
          <div className="card_down_area">
            <p><img src={phone}  alt="icon"/>{item.Tel}</p>
            <p><img className={(item.Ticketinfo !== "")?'':'d-none'} src={tag}  alt="icon"/>{item.Ticketinfo}</p>
          </div>
      </div>
    </li>

  )
};
export default Card;
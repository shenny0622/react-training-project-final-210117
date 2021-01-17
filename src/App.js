import './css/App.css';
import React,{useState, useEffect} from "react";
import {HashRouter,Route,Switch} from "react-router-dom";
import Home from "./views/Home";
import MyFavorite from "./views/MyFavorite";
import Layout from "./layout/home/Layout";
import LayoutPage from "./layout/page/LayoutPage";
 

const App = () =>{
  //宣告變數
  const [dataAPI,setDataAPI] = useState({
    cards: [],
    error: null,
    isLoaded: false,
  });

  const [zone, setZone] = useState({
    itemZones:[], //宣告一個新的陣列(不重複區域)
    cardsByZone:[],       //宣告一個新的陣列(下拉選單和按鈕撈到的值跟父層 API 資料做比對)，getCurrentZone 出來得到的
    currentZone:'請選擇行政區'
  })

  //分頁
  const [currentPage, setCurrentPage] = useState(1);//預設當前 page
  const [cardsPerPage] = useState(4);
   

//API 資料
// 初始值 (一載入網頁進來要做的事，因為後面是空陣列所以只為執行一次)
useEffect(()=>{
    fetch( 'https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json',{method:"GET"})
      .then(res => res.json())
      .then(
        (data) => {
          //setDataAPI : 要更新 API 狀態  
          setDataAPI({
            isLoaded: true,
            cards: data.result.records,
          });
          //Zone 地區資料
          setZone({
            cardsByZone:[],
            currentZone:'--請選擇行政區--',
            // 過濾重複的區域資料，並存在 itemZones 的新陣列中
            itemZones: data.result.records.map((item)=>(item.Zone)).filter(function(element, index, arr){
                return arr.indexOf(element) === index;
            })
  
          });
        },
        (sError) => {
          setDataAPI({
            isLoaded: true,
            error:sError,
          });
        }
      );
      
      //scroll 效果
      function handleScroll(e) {
        if (document.documentElement.scrollTop > 100) {
          document.querySelector('.goTop').style.display = 'block'; 
         } else{
           document.querySelector('.goTop').style.display = 'none';
         }
      }

      //scroll 監聽應該綁在 window
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
},[]);

const { cards } = dataAPI;
const { itemZones,cardsByZone,currentZone,} = zone;

  // 1.fifter 篩選
  // 2.綁定 state >宣告變數給他一個空陣列

const getCurrentZone =(e) =>{
    // let zone = e.target.value
    // 在 getCurrentZone function 中，cardsByZone 在跑完 filter 後狀態會改變

    setCurrentPage(1); //修正分頁 bug:讓每一次點選新景點分頁預設值都是第一頁
    
    setZone({
        ...zone, // keep 住當前的狀態 
        currentZone:e.target.value,
        // element 是一個物件，cardsByZone 是一個新陣列 物件
        cardsByZone: cards.filter(function(element){
            return element.Zone === e.target.value;
        })

      });   
}

//handleScrollTop 監聽事件
const handleScrollTop =(e)=>{
    document.documentElement.scrollTop =0;
}

 //分頁處理
 const indexOfLastCard = currentPage * cardsPerPage;//當下所在 page 最後一個卡片內容
 const indexOfFirstCard = indexOfLastCard - cardsPerPage;//當下所在 page 第一個卡片內容
 const currentCards = cardsByZone.slice(indexOfFirstCard, indexOfLastCard);//slice去頭不含尾 取得部分資料

 // Change page
 const paginate = pageNumber => {
  setCurrentPage(pageNumber);
 }


return (
<HashRouter>
    <Switch>
      <Route exact path="/">
        <Layout currentZone={currentZone} getCurrentZone={getCurrentZone} itemZones= {itemZones}>
        <Home currentZone={currentZone} currentCards={currentCards} cardsByZone={cardsByZone} cardsPerPage={cardsPerPage} paginate={paginate} currentPage ={currentPage} handleScrollTop={handleScrollTop}/>
        </Layout>
      </Route>
    
      <Route path="/myfavorite">
        <LayoutPage>
        <MyFavorite handleScrollTop={handleScrollTop}/>
        </LayoutPage>
      </Route>
     
    </Switch>
</HashRouter>
  );
}

export default App;
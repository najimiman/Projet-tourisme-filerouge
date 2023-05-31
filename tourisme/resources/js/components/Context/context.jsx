import axios from "axios";
import React, { useEffect, useState } from "react";

export const ThemeContext=React.createContext();
export default function Themeprovider(Props){

// const [data,setData]=useState([])
const [APIData, setAPIData] = useState([]);
const [APIDataplage,setAPIDataplage]=useState([]);
const [datades, setDatades] = useState({});
const [showFull, setShowFull] = useState({});
const [APIDataFavorite,setAPIDataFavorite]=useState([]);
const [name,setName]=useState('');
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [avatar,setAvatar]=useState('');
const [iduserT,setIduserT]=useState('');

const [show, setShow] = useState(false);
const [error, setError] = useState('');
const [favoritehearth, setFavoritehearth] = useState(false);
function getcity(){
    axios.get(`http://127.0.0.1:8000/api/cityplace`).then(res => {
            console.log(res.data);
            setAPIData(res.data);
        })
            
}
function getplages(){
    axios.get(`http://127.0.0.1:8000/api/plages`).then(res => {
            console.log(res.data);
            setAPIDataplage(res.data);
            localStorage.setItem('datacity',JSON.stringify(res.data));
        })
            
}

function handelfilter(valuecity){
    console.log("value ciiiiiiiiiiity",valuecity);
    if(valuecity!="vide"){
        axios.get('http://127.0.0.1:8000/api/filter_datacity', {
            params: {
              filtercity: valuecity
            }
          }).then(res => {
                setAPIData(res.data);
                console.log(res.data);
        })
        axios.get('http://127.0.0.1:8000/api/filter_dataplages', {
        params: {
          filtercity: valuecity
        }
      }).then(res => {
            setAPIDataplage(res.data);
            console.log(res.data);
    })
    }
    else if(valuecity=="vide"){
        getcity();
        getplages();
    }
}


const handelclikc=(e)=>{
    const filterValue = e.target.getAttribute('id');
    console.log("hadi filter value",filterValue);
    if(filterValue=='city'|| filterValue=='plages'){
        setShow(true);
      }
      else if(filterValue=='contact' || filterValue=='home' || filterValue=='Auth' || filterValue=='favorite'){
        setShow(false);
      }
  }

function handleModal(id){
    axios.get(`http://127.0.0.1:8000/api/edit/${id}`)
    .then(res => {
      console.log(res.data)
      setDatades(res.data);
    })
    console.log(`Opening modal for item with ID ${id}`);
  };
//read more read less
function toggleConseil(id){
    console.log("id",id);
    setShowFull(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };


function handelregistre(){
    // name,email,password
    console.log(name);
    console.log(email);
    console.log(password);
    const role="user";
    axios.post('http://127.0.0.1:8000/api/register',{name,email,password,role}).then(res=>{
        setTokenid(res.data.token.tokenable_id);
        console.log(res.data);
        setName("");
        setEmail("");
        setPassword("");
    })
}
async function handellogin(){
  console.log(email);
    console.log(password);
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login',{email,password});
      if (response.status === 200) {
        // setShowavatar(true);
        console.log(response.data.token);
        setAvatar(response.data.token.email)
      } 
      // else{
      //   setError('Invalid username or password');
      //   setShowavatar(false);
      // }
      localStorage.setItem('user-info',JSON.stringify(response));
    } catch (error) {
      setError('Invalid username or password');
      localStorage.clear();
      // setShowavatar(false);
    }
  }
  function handelelogout() {
    localStorage.clear();
    setAvatar('');
  }
//   function getfavorite(){
//     axios.get('http://127.0.0.1:8000/api/getFavorite').then(res => {
//       setAPIDataFavorite(res.data);
//       console.log(res.data);
// })
//   }
  function getfavorite(iduser){
    if(iduserT!=' '){
      // let user=JSON.parse(localStorage.getItem('user-info'));
      // console.log(user.data.token.id);
      // let iduser=iduserT;
      axios.get(`http://127.0.0.1:8000/api/getmyfavorite?iduser=${iduser}`).then(res=>{
        console.log(res.data);
        setAPIDataFavorite(res.data);
      })
    }
  }

  function handelefavorite(idcityplages){
    if(avatar!=' '){
      let user=JSON.parse(localStorage.getItem('user-info'));
      console.log(user.data.token.id);
      let cityplages_id=idcityplages;
      let User_id=user.data.token.id;
      const filteredData=APIDataFavorite.find((item) => item.cityplages_id === cityplages_id);
      if(!filteredData){
        axios.post('http://127.0.0.1:8000/api/addfavorite',{cityplages_id,User_id}).then(res => {
              console.log(res.data);
              getfavorite(User_id);
            })
      }
      else{
        alert('this existe déja');
      }
    }
    else{
      alert('login');
    }
  }
  // function handelcomparefavoriteandcityplages(){
  //   const filteredData=APIDataFavorite.find((item) => item.cityplages_id === cityplages_id); 
  // }
  

useEffect(()=>{
    getcity();
    getplages();
    
    // handelfilter();
    if(localStorage.getItem('user-info')){
      // setShowavatar(true);
      let user=JSON.parse(localStorage.getItem('user-info'));
      let favoritehearthm=JSON.parse(localStorage.getItem('datacity'));
      
      // console.log(user.data.token.email);
      setAvatar(user.data.token.email);
      setIduserT(user.data.token.id);
      // console.log(user.data.token.id);
      getfavorite(user.data.token.id);

      favoritehearthm.map((value) => {
        console.log('mm',value.id);
        const existe = APIDataFavorite.find((item) => item.cityplages_id === value.id && item.User_id === user.data.token.id);
        // console.log('mmmmmmmmmmmm',existe);
        if(existe){
          console.log('yes existe');
          // return { ...value, favoritehearth: true };
          
        }
        
        else{
          // return { ...value, favoritehearth: false };
          console.log('not');
        }
        
      });
      }
    },[])



return (
    <ThemeContext.Provider value={{APIData,handelfilter,handelregistre,setName,setEmail,setPassword,handleModal,datades,
    getplages,APIDataplage,showFull,toggleConseil,handelclikc,show,handellogin,avatar,handelelogout,handelefavorite,APIDataFavorite}}>
        {Props.children}
    </ThemeContext.Provider>
);
}


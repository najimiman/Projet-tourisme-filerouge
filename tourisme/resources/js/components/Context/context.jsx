import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
// const [error, setError] = useState('');
const [count, setCount] = useState(0);
//comment
const [Datacomment,setDatacomment]=useState([]);
const [image,setImage]=useState('');
const [nomplace,setNomplace]=useState('');
const [description,setDescription]=useState('');
const [nomuser,setNomuser]=useState('');
const [alertData, setAlertData] = useState(null);
const navigate = useNavigate();

//get liste place city
function getcity(){
    axios.get(`http://127.0.0.1:8000/api/cityplace`).then(res => {
            console.log(res.data);
            setAPIData(res.data);
        })
            
}
//get liste plages
function getplages(){
    axios.get(`http://127.0.0.1:8000/api/plages`).then(res => {
            console.log(res.data);
            setAPIDataplage(res.data);
            // localStorage.setItem('datacity',JSON.stringify(res.data));
        })
            
}
//filter par city
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

//show and hide dropdown city
const handelclikc=(e)=>{
    const filterValue = e.target.getAttribute('id');
    // console.log("hadi filter value",filterValue);
    if(filterValue=='city'|| filterValue=='plages'){
        setShow(true);
      }
      else if(filterValue=='contact' || filterValue=='home' || filterValue=='Auth' || filterValue=='favorite'){
        setShow(false);
      }
  }

//model description place city
function handleModal(id){
    axios.get(`http://127.0.0.1:8000/api/edit/${id}`)
    .then(res => {
      console.log(res.data)
      setDatades(res.data);
    })
  };

//read more read less
function toggleConseil(id){
    console.log("id",id);
    setShowFull(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

//authentification registre
async function handelregistre(){
try {
   console.log(name);
    console.log(email);
    console.log(password);
    const role="user";
  const response = await axios.post('http://127.0.0.1:8000/api/register',{name,email,password,role});
 if (response.status === 200) {
    setAlertData(['success','success Registre go to login' + name,'Registresuccess'])
    setName("");
    setEmail("");
    setPassword("");
  } 
}catch(error) {
    // console.log(error.response.statusText)
    // console.log(error.response.data.error)
    setAlertData(['danger',error.response.data.error,'RegistreError'])
}

}

//authentification login
async function handellogin(){
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login',{email,password});
     if (response.status === 200) {
        // setShowavatar(true);
        //console.log(response.data.token);
        setAvatar(response.data.user.email);
        setIduserT(response.data.user.id);
        // showAlert('success','login', 3000);
        setAlertData(['success','success login hello ' + response.data.user.name,'loginsuccess',2000])
      } 
      // else{
      //   setError('Invalid username or password');
      //   setShowavatar(false);
      // }
      localStorage.setItem('user-info',JSON.stringify(response));
      appelefavorite();
    }catch(error) {
        console.log(error.response.statusText)
        //setAlertData('error', error.response.statusText,2000)
        setAlertData(['danger',error.response.statusText,'loginError'])
    }
  }

//appele liste favorite de user
  function appelefavorite(){
    let user=JSON.parse(localStorage.getItem('user-info'));
    getfavorite(user.data.user.id);
  }

  //authentification logout
  function handelelogout() {
    localStorage.clear();
    setAvatar('');
    getfavorite('');
  }

//get favorite user
  function getfavorite(iduser){
    // console.log('hada avatar likayn f favorite',iduser);
    if(iduserT!=' '){
      axios.get(`http://127.0.0.1:8000/api/getmyfavorite?iduser=${iduser}`).then(res=>{
        console.log(res.data);
        setAPIDataFavorite(res.data);
        setCount(res.data.length);
      })
    }
  }

//add favorite
  function handelefavorite(idcityplages){
    if(avatar!=''){
      let user=JSON.parse(localStorage.getItem('user-info'));
      // console.log(user.data.token.id);
      let cityplages_id=idcityplages;
      let User_id=user.data.user.id;
      const filteredData=APIDataFavorite.find((item) => item.cityplages_id === cityplages_id);
      if(!filteredData){
        axios.post('http://127.0.0.1:8000/api/addfavorite',{cityplages_id,User_id}).then(res => {
              console.log(res);
              getfavorite(User_id);
            })
      }
      else{
        alert('this existe déja');
      }
    }
    else{
      // alert('login');
      console.log('for favorite login')
      setAlertData(['danger','for favorite login','favorite'])
      // setTimeout(() => {
      //   setAlertData(['danger','for favorite login','favorite']);
      // }, 2000);
    }
  }

  //delete favorite
  const onDelete = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/destroy/${id}`)
      .then((res) => {
        console.log(res.data);
        appelefavorite();
      })
      .catch((error) => {
        console.error(error);
      });
  }

//add comment 
  function Addcomment(){
    // name,email,password
    console.log(image);
    console.log(nomplace);
    console.log(description);
    // const User_id=iduserT;
    if(iduserT!=' '){
    const formData=new FormData();
    formData.append('image',image);
    formData.append('nomplace',nomplace);
    formData.append('description',description);
    formData.append('User_id',iduserT);
    axios.post('http://127.0.0.1:8000/api/addcommentaire',formData).then(res=>{
        console.log(res.data);
        getComment();
        setAlertData(['success','success','commentsuccess'])
        
    })
  }
}

//afficher les commandes 
function getComment(){
  // console.log('hada avatar likayn f favorite',iduser);
  if(iduserT!=' '){
    axios.get('http://127.0.0.1:8000/api/getComment').then(res=>{
      console.log(res.data);
      setDatacomment(res.data);
    })
  }
}

useEffect(()=>{
    getcity();
    getplages();
    getComment();
    if(localStorage.getItem('user-info')){
      let usere=JSON.parse(localStorage.getItem('user-info'));
    
      setAvatar(usere.data.user.email);
      setIduserT(usere.data.user.id);
      setNomuser(usere.data.user.name);
      console.log(usere.data.user.id);
      getfavorite(usere.data.user.id);
      }
    },[iduserT])



return (
    <ThemeContext.Provider value={{APIData,handelfilter,handelregistre,setName,setEmail,setPassword,handleModal,datades,
    getplages,APIDataplage,showFull,toggleConseil,handelclikc,show,handellogin,avatar,handelelogout,handelefavorite,APIDataFavorite,onDelete,count,
    setImage,setNomplace,setDescription,Addcomment,Datacomment,nomuser,alertData}}>
        {Props.children}
    </ThemeContext.Provider>
);
}


import axios from "axios";
import React, { useEffect, useState } from "react";

export const ThemeContext=React.createContext();
export default function Themeprovider(Props){

// const [data,setData]=useState([])
const [APIData, setAPIData] = useState([]);
const [APIDataplage,setAPIDataplage]=useState([]);
const [datades, setDatades] = useState({});
const [showFull, setShowFull] = useState({});
const [name,setName]=useState('');
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [tokenid,setTokenid]=useState('');

const [show, setShow] = useState(false);
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
      else if(filterValue=='contact' || filterValue=='home' || filterValue=='Auth'){
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
        // console.log(res.data.token.tokenable_id);
    })
}
function handellogin(){
  console.log(email);
    console.log(password);
    axios.post('http://127.0.0.1:8000/api/login',{email,password}).then(res=>{
        // setTokenid(res.data);
        console.log(res.data);
        // console.log(res.data.token.tokenable_id);
    })
}

useEffect(()=>{
    getcity();
    getplages();
    // handelfilter();
},[])



return (
    <ThemeContext.Provider value={{APIData,handelfilter,handelregistre,setName,setEmail,setPassword,handleModal,datades,
    getplages,APIDataplage,showFull,toggleConseil,handelclikc,show,handellogin}}>
        {Props.children}
    </ThemeContext.Provider>
);
}


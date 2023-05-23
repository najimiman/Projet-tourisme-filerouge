import axios from "axios";
import React, { useEffect, useState } from "react";

export const ThemeContext=React.createContext();
export default function Themeprovider(Props){

// const [data,setData]=useState([])
const [APIData, setAPIData] = useState([]);
const [datades, setDatades] = useState({});
const [name,setName]=useState('');
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [tokenid,setTokenid]=useState('');
function getcity(){
    axios.get(`http://127.0.0.1:8000/api/cityplace`).then(res => {
            console.log(res.data);
            setAPIData(res.data);
        })
            
}

function handelfilter(valuecity){
    console.log(valuecity);
    axios.get('http://127.0.0.1:8000/api/filter_data', {
        params: {
          filtercity: valuecity
        }
      }).then(res => {
        if(valuecity!="vide"){
            setAPIData(res.data);
            console.log(res.data);
        }
        else if(valuecity=="vide"){
            getcity();
        }
    })
}
function handleModal(id){
    axios.get(`http://127.0.0.1:8000/api/edit/${id}`)
    .then(res => {
      console.log(res.data)
      setDatades(res.data);
    })
    console.log(`Opening modal for item with ID ${id}`);
  };

function handelregistre(){
    // name,email,password
    console.log(name);
    console.log(email);
    console.log(password);
    axios.post('http://127.0.0.1:8000/api/register',{name,email,password}).then(res=>{
        setTokenid(res.data.token.tokenable_id);
        console.log(res.data);
        // console.log(res.data.token.tokenable_id);
    })
}

useEffect(()=>{
    getcity();
    // handelfilter();
},[])
return (
    <ThemeContext.Provider value={{APIData,handelfilter,handelregistre,setName,setEmail,setPassword,handleModal,datades}}>
        {Props.children}
    </ThemeContext.Provider>
);
}


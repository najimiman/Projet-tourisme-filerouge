import axios from "axios";
import React, { useEffect, useState } from "react";

export const ThemeContext=React.createContext();
export default function Themeprovider(Props){

// const [data,setData]=useState([])
const [APIData, setAPIData] = useState([]);
// const [filtercity,setFiltercity]=useState('');
function getcity(){
    axios.get(`http://127.0.0.1:8000/api/index`).then(res => {
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

useEffect(()=>{
    getcity();
    // handelfilter();
},[])
return (
    <ThemeContext.Provider value={{APIData,handelfilter}}>
        {Props.children}
    </ThemeContext.Provider>
);
}


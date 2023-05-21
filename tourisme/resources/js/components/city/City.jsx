import axios from "axios";
import React, { useEffect, useState } from "react";
// import "./City.css";
import Modal from "./Model";
import { ThemeContext } from "../Context/context";
import { FaHeart } from "react-icons/fa";

export default function City() {
    // const [APIData, setAPIData] = useState([]);
    const [isExpanded, setIsExpanded] = useState(false);
    const [showFull, setShowFull] = useState({});
    const [showDescription, setShowDescription] = useState({});
    const [datades, setDatades] = useState({});

    const { APIData} = React.useContext(ThemeContext)
    // useEffect(() => {
    //     axios.get(`http://127.0.0.1:8000/api/index`).then(res => {
    //         console.log(res.data);
    //         setAPIData(res.data);
    //     })
    // }, [])
 
    const toggleDescription = index => {
        // Toggle showFull state for the clicked item
        setShowFull(prevState => ({
          ...prevState,
          [index]: !prevState[index]
        }));
      };
      const handleModal = (id,index) => {
        axios.get(`http://127.0.0.1:8000/api/edit/${id}`)
        .then(res => {
          console.log(res.data)
          setDatades(res.data);
        })
        // Open the modal with the data for the item with the specified ID
        console.log(`Opening modal for item with ID ${id}`);
        setShowDescription(prevState => ({
            ...prevState,
            [index]: !prevState[index]
          }));
      };

    // console.log(props);
    return (
        <div className="p-2">
            {/* style={{backgroundImage:`url("im1.jpg")`,backgroundSize:'contain'}} */}
            {/* <h1>hello city</h1> */}
            <div class="container">
                <div class="row">

                    {APIData.map((data,index) => {
                        return (
                            <div class="col-md-6 mb-4" style={{ position: 'relative'}}  key={index}>
                                <div class="card" style={{borderRadius:'30px', boxShadow:'10px 10px 15px #7f8080' }}>
                                    <div class="view overlay hm-white-slight p-1">
                                        <img src={'/les images de tourisme/' + data.image} class="img-fluid" alt="photo" style={{borderRadius:'30px'}}/>
                                        <div style={{ position: 'absolute', top: '320px', right: '15px', zIndex: '4' }}>
                                            <i class="fa fa-map-o" style={{ fontSize: '15px', verticalAlign: 'top', color: '#FFF' }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                </svg>
                                            </i>
                                            <a style={{ color: '#FFF', fontWeight: '600' }} target="_blank" rel="nofollow noopener" href={data.maps}>Google map</a>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <h4 class="card-title">{data.placeincity}</h4>
                                        <p class="card-text">
                                           
                                        {showFull[index]
                                            ? data.conseil
                                            : `${data.conseil.slice(0, 100)}`}
                                            {data.conseil.length > 100 && (
                                            <button type="button" class="btn btn-link" onClick={() => toggleDescription(index)}>
                                            {showFull[index] ? 'Read Less' : 'Read More'}
                                        </button>
                                        )}
                                            
                                        </p>
                                        <button type="button" onClick={() => handleModal(data.id,index)} class="btn btn-outline-primary waves-effect" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Description
                                        </button>
                                        <button class="btn waves-effect">
                                            {/* <FontAwesomeIcon icon={image.favorite ? faHeart : faHeartRegular} /> */}
                                            <FaHeart style={{color: 'red', fontSize: '35px'}}/>
                                        </button>
                                        {showDescription[index] && (<Modal modeldescription={datades}  />)}
                                       
                                    </div>

                                </div>
                            </div>
                        )
                    })}

                </div>
               
            </div>
        </div>
    );
}
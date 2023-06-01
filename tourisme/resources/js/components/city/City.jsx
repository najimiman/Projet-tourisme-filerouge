import axios from "axios";
import React, { useEffect, useState } from "react";
// import "./City.css";
import Modal from "./Model";
import { ThemeContext } from "../Context/context";
import { FaHeart } from "react-icons/fa";

export default function City() {
    const { APIData,handleModal,datades,showFull,toggleConseil,handelefavorite,APIDataFavorite} = React.useContext(ThemeContext)
    const isFavorite = (item) => {
        return APIDataFavorite.some((fav) => fav.cityplages_id === item.id);
        };
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
                                            <a style={{ color: '#FFF', fontWeight: '600' }} target="_blank" rel="nofollow noopener" href={data.googlemaps}>Google map</a>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <h4 class="card-title">{data.nom}</h4>
                                        <p class="card-text">
                                           
                                        {showFull[data.id]
                                            ? data.conseil
                                            : `${data.conseil.slice(0, 100)}`}
                                            {data.conseil.length > 100 && (
                                            <button type="button" class="btn btn-link" onClick={() => toggleConseil(data.id)}>
                                            {showFull[data.id] ? 'Read Less' : 'Read More'}
                                        </button>
                                        )}
                                            
                                        </p>
                                        <button type="button" onClick={() => handleModal(data.id)} class="btn btn-outline-primary waves-effect" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Description
                                        </button>
                                        <button class="btn waves-effect" onClick={()=>handelefavorite(data.id)}>
                                            {/* <FontAwesomeIcon icon={image.favorite ? faHeart : faHeartRegular} /> */}
                                            {/* <FaHeart style={{color: 'red', fontSize: '35px'}}/> */}
                                            {/* {isFavorite(data) ? <FaHeart style={{color: 'red', fontSize: '35px'}} /> : null} */}
                                            {isFavorite(data) ?<FaHeart style={{color: 'red', fontSize: '20px'}} /> : <FaHeart style={{fontSize: '20px'}}/>}
                                        </button>
                                        {<Modal modeldescription={datades}  />}
                                    </div>

                                </div>
                            </div>
                        );
                    })}

                </div>
               
            </div>
        </div>
    );
}
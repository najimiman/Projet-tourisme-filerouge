import React from "react"
import { ThemeContext } from "../Context/context"
import axios from "axios"

export default function Favorite() {
    const { APIDataFavorite, onDelete } = React.useContext(ThemeContext)
    return (
        <div class="modal fade modal-lg" id="exampleModalfavorite"
            tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">liste des favoris</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="container-fluid">
                            {APIDataFavorite.map((value) => {
                                return (
                                    <div class="row g-0 itemside mb-2">
                                        <div class="col-md-5">
                                            <img src={'/les images de tourisme/' + value.image} style={{ borderRadius: '30px' }} width="300px" height="200px" alt="Canvas Logo" class="img-favorite" />
                                        </div>
                                        <div class="col-md-7">
                                            <div class="card-body">
                                                <h5 class="card-title"><small class="text-muted">{value.nom}</small></h5>
                                                <p class="card-text">{value.city} </p>
                                                <p>{value.conseil}</p>
                                                <h6>
                                                <i class="fa fa-map-o" style={{ fontSize: '15px', verticalAlign: 'top', color: 'black' }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                    </svg>
                                                </i>
                                                
                                                <a style={{ color: 'black', fontWeight: '600' }} target="_blank" rel="nofollow noopener" href={value.googlemaps}>Google map</a>
                                                </h6>
                                                <p class="card-text"> <a onClick={() => onDelete(value.fvid)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                </svg>
                                                </a>
                                                </p>
                                                {/* <button onClick={()=>onDelete(value.id)}>delete</button> */}
                                            </div>
                                        </div>
                                    </div>

                                )
                            })}
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
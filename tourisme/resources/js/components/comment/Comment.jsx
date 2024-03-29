import { useState } from "react";
import React from "react";
import { ThemeContext } from "../Context/context";

export default function Comment() {
    const { Datacomment, nomuser, showFull, toggleConseil } = React.useContext(ThemeContext)
    // const data = [1, 2, 3, 4, 55, 6];
    return (
        <div>
            <section class="card-area row">
                {Datacomment.map(item => (
                    <section class="card-section col-md-5 mb-3">
                        <div class="card-comment">
                            <div class="flip-card">
                                <div class="flip-card__container">
                                    <div class="card-front">
                                        <div class="card-front__tp card-front__tp--city">
                                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                viewBox="0 0 60 60" style={{ enableBackground: 'new 0 0 60 60' }} xml:space="preserve" class="card-front__icon">
                                                <g>
                                                    <path d="M49.7,22c-1.1,0-2,0.9-2,2v32.2c0,1.1,0.9,2,2,2s2-0.9,2-2V24C51.7,22.9,50.8,22,49.7,22z" />
                                                    <path d="M13,29.5c1.1,0,2-0.9,2-2s-0.9-2-2-2H5.7v-3h20.8c1.1,0,2-0.9,2-2s-0.9-2-2-2H5.7v-3h20.8c1.1,0,2-0.9,2-2s-0.9-2-2-2H5.7
                             V7.1h24.8v15.3c0,1.1,0.9,2,2,2s2-0.9,2-2V5.1c0-1.1-0.9-2-2-2H3.7c-1.1,0-2,0.9-2,2v51c0,1.1,0.9,2,2,2s2-0.9,2-2V36.5H13
                             c1.1,0,2-0.9,2-2s-0.9-2-2-2H5.7v-3H13z"/>
                                                    <path d="M58,11.9c0-0.1,0-0.1,0-0.2c0-0.1,0-0.1-0.1-0.2c0-0.1,0-0.1-0.1-0.2c0-0.1-0.1-0.1-0.1-0.2c0,0,0-0.1-0.1-0.1c0,0,0,0,0,0
                             c0-0.1-0.1-0.1-0.1-0.2c0,0-0.1-0.1-0.1-0.1c0,0-0.1-0.1-0.1-0.1c-0.1,0-0.1-0.1-0.2-0.1c0,0-0.1-0.1-0.2-0.1
                             c-0.1,0-0.1-0.1-0.2-0.1c-0.1,0-0.1,0-0.2-0.1c-0.1,0-0.1,0-0.2-0.1c0,0-0.1,0-0.1,0c-0.1,0-0.2,0-0.2,0c0,0,0,0,0,0
                             c0,0-0.1,0-0.1,0c-0.1,0-0.2,0-0.2,0c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0.1c-0.1,0-0.1,0.1-0.2,0.1c0,0-0.1,0-0.1,0.1l-12.6,7.8
                             c0,0,0,0,0,0c-0.1,0-0.1,0.1-0.2,0.1c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.2c0,0.1-0.1,0.1-0.1,0.2
                             c0,0.1-0.1,0.1-0.1,0.2c0,0.1,0,0.1-0.1,0.2c0,0.1,0,0.1-0.1,0.2c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0v5.4H22.1
                             c-1.1,0-2,0.9-2,2v28.9c0,1.1,0.9,2,2,2s2-0.9,2-2V29.3h17.3v26.9c0,1.1,0.9,2,2,2s2-0.9,2-2V21l8.6-5.3v40.5c0,1.1,0.9,2,2,2
                             s2-0.9,2-2V12.1C58,12,58,12,58,11.9z"/>
                                                    <path d="M28,31L28,31c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S29.1,31,28,31z" />
                                                    <path d="M33.5,31L33.5,31c-1.1,0-2,0.9-2,2s0.9,2,2,2c1.1,0,2-0.9,2-2S34.6,31,33.5,31z" />
                                                    <path d="M28,36L28,36c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S29.1,36,28,36z" />
                                                    <path d="M33.5,36L33.5,36c-1.1,0-2,0.9-2,2s0.9,2,2,2c1.1,0,2-0.9,2-2S34.6,36,33.5,36z" />
                                                </g>
                                            </svg>

                                            <h2 class="card-front__heading">
                                                {item.nomplace}
                                            </h2>
                                            <p class="card-front__text-price">
                                                {nomuser}
                                            </p>
                                        </div>

                                        <div class="card-front__bt">
                                            <p class="card-front__text-view card-front__text-view--city">
                                            Découvrir
                                            </p>
                                        </div>
                                    </div>
                                    <div class="card-back">
                                        {/* <video class="video__container" autoplay muted loop>
                          <source class="video__media" src="https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761" type="video/mp4"/>
                      </video> */}
                                        <img class="card-img-top hover-shadow" src={'/imagescomment/' + item.image} alt="Card image cap" />
                                    </div>
                                </div>
                            </div>

                            <div class="inside-page">
                                <div class="inside-page__container">
                                    <h3 class="inside-page__heading inside-page__heading--city">
                                        {item.nomplace}
                                    </h3>
                                    <p class="inside-page__text text-break">
                                        {showFull[item.id]
                                            ? item.description
                                            : `${item.description.slice(0, 20)}`}
                                        {item.description.length > 20 && (
                                            <button type="button" class="btn btn-link" onClick={() => toggleConseil(item.id)}>
                                                {showFull[item.id] ? 'Read Less' : 'Read More'}
                                            </button>
                                        )}

                                        {/* {item.description} */}
                                    </p>
                                    {/* <a href="#" class="inside-page__btn inside-page__btn--city">View deals</a> */}
                                </div>
                            </div>
                        </div>
                    </section>
                ))}


            </section>

        </div>
    )
}
import Typical from "react-typical";
import React from "react";
export default function Home(){
    return (
        <div >
        <div id="carouselExampleInterval" style={{position:'relative'}} class="carousel slide" data-bs-ride="carousel">
   <div class="carousel-inner">
     <div class="content">
       <Typical
         id="text"
         loop={Infinity}
         steps={["Bienvenue au Maroc !",1000,"Plongez dans l'univers fascinant des palais, des jardins, des mosquées et des monuments historiques du Maroc, une destination culturelle et artistique de renommée mondiale.",10000, "Explorez les villes impériales, les souks animés, les oasis verdoyantes et les déserts spectaculaires du Maroc, une terre de contrastes et d'émerveillement.",10000]}
         wrapper="h1"
       />
     </div>
     <div class="carousel-indicators">
       <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
       <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="1" ></button>
       <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="2" ></button>
     </div>
     <div class="carousel-item active"  data-bs-interval="10000">
       {/* <img src="maroc-agadir-marina.png" class="d-block w-100 p-3" alt="..."/> */}
       {/* <video class="video-fluid d-block videos"  src="sahara.mp4" type="video/mp4" loop muted autoPlay="autoPlay"></video> */}
       <video class="d-block w-100" loop muted autoPlay="autoPlay" src="sahara.mp4" type="video/mp4"/>
     </div>
     <div class="carousel-item" data-bs-interval="10000">
       {/* <img src="cap-spartel.png" class="d-block w-100 p-3" alt="..."/> */}
       <video class="d-block w-100" loop muted autoPlay="autoPlay" src="video3.mp4" type="video/mp4">
         {/* <source  class="" src="video2.mp4" type="video/mp4"></source> */}
       </video>
     </div>
     <div class="carousel-item" data-bs-interval="10000">
     <video class="d-block w-100" loop muted autoPlay="autoPlay" src="video1.mp4" type="video/mp4"/>
     </div>
   </div>
   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
     <span class="visually-hidden">Previous</span>
   </button>
   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
     <span class="carousel-control-next-icon" aria-hidden="true"></span>
     <span class="visually-hidden">Next</span>
   </button>
 </div>
   </div>
    )
}
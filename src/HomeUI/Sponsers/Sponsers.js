import React from 'react'
import Sponsor2 from "../../Assets/bizinsider.png"
import Sponsor3 from "../../Assets/mashable.png"
import Sponsor4 from "../../Assets/TechCrunch.png"

const images =[Sponsor2,Sponsor3,Sponsor4]

const Sponsers = () => {
  return (
    <>
    <div class="row">
     {images.map((image)=>{
        return(
        <div class="col-lg-4 my-5 p-5 col-xs-12">
            <img  src={image} alt=""/>
      </div>
        );
     })}
      
      </div>
    </>
  )
}

export default Sponsers
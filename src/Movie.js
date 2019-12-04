import React from 'react'
import './App.css'
const Movie = (props) => {
    return (
         <div className="col-md-3 mb-5">
        <div className="card card-body bg-dark text-center h-100">


            
               


                <img className="image-styling" src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="Card image cap"   />
                

                
                <h5 className="text-light card-title">
            {props.cast}
          </h5>
                

                




       
</div>
</div>

 )
}

export default Movie

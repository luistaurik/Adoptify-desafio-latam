import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Components/Album.css";
import Tag from  "../Components/Tag";

function Album({photo,petName,petDescription,breed,age,petType}) {

    return (
        <>
                    <div className="card col">
                    <img src={photo} className="card-img-top" alt={`${petName}+", "+${petDescription}`}/>
                        <div className="card-body">
                            <h5 className="card-title">{petName}</h5>
                            <p className="card-text description">{petDescription}</p>
                            <p className="card-text breed">{breed}</p>
                            <p className="card-text age">{age}</p>
                            <Tag petType={petType}/>
                        </div>
                    </div>
        </>
    )

}


export default Album;

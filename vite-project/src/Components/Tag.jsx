import React from "react";

function Tag({petType}){

    function colorHandler(petType){
        let colorType = ""
    
        if(petType === "Turtle"){
          colorType = "primary"
        } else if (petType === "Dog") {
          colorType = "success"
        }  else if (petType === "Cat") {
          colorType = "warning"
        }  else if (petType === "Bird") {
          colorType = "danger"
        }  else{
          colorType = "info"
        }
      
        return colorType; 
      }
    
    const tagColor = colorHandler(petType);
    console.log(tagColor)
    console.log(petType)

    return (
        <button className={`btn btn-${tagColor}`}>{petType}</button>
    )
}

export default Tag;
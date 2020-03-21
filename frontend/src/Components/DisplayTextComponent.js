import React from 'react';
import { Badge } from 'reactstrap';
 function DisplayTextComponent(props) {



  function colorMatchedCharacters() {

    let regex = new RegExp('(\\.|!|\\?|\\;|\\:|\\,)', "gi")
 
    let arr = props.text.split(regex)
  
    let colored = arr.map((element, i) => {
     
      if (regex.test(element)) {
      
        return <span key={i} style={{ color: 'red' ,fontSize:15}}> {element} </span>

      }
      else return element
    })
    return colored
  }

  return (

    <div className="mt-5 ">
      <p className="text-monospace font-weight-bold">
        {colorMatchedCharacters()}
      </p>
      <Badge color="success" className=" ml-3" style={{ height: 30, fontSize: 20 }}>Number of matches is {props.numberOfMatches} </Badge>

    </div>);
}

export default DisplayTextComponent;
import React from 'react'
import {Link} from 'react-router-dom'

// import ReactDOM from'reactdom'
class Medtimer extends React.Component {
render(){
  return(
    <div>
      <div style={{backgroundColor:"green",height:"15vh"}}> <h3 className="text-center">FOR HOW LONG WOULD YOU LIKE TO MEDITATE</h3></div>
      <div className="form-group,text-Right">
       
        <label>Select Duration</label>
         <br/>
         <select>
          <option>5 </option>
          <option>10 </option>
          <option>15 </option>
          <option>20 </option>
        
        </select>
        <label>Minutes</label>
        </div>
      </div>
      )
}


}



  export default Medtimer;
import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Medicines extends Component {
     
   
    render() {
        return (
            
            <div className= "row">
            <div className='col  float-center text-center pt-5' style={{width:"50vh" , height: "40vh"}}>
                 <h3>TO ADD NEW MEDICINE REMINDER PRESS "ADD".....</h3>
                <Link to="/addreminder"><button className=" btn btn-danger">ADD</button></Link>
                
                </div>
            
            <div className=" col text-center " style={{ borderStyle: "solid" , width:"30vh",height: "70vh" }}>
                     <h3>added medicines</h3>
                     <div className="row" style={{borderStyle:"solid"}}>
                     <div className="col-sm-1 " style={{borderStyle:"solid"}}>
                         SNo.
                         </div>
                         <div className="col" style={{borderStyle:"solid"}}>
                             medicine Name
                         </div>
                         <div className="col" style={{borderStyle:"solid"}}>
                             time
                         </div>
                         <div className="col" style={{borderStyle:"solid"}}>

                         </div>
                     </div>
            </div>
            </div>
        
        )
    }
}


export default Medicines;

import React from 'react';
import { Component } from 'react';
import * as FaIcons from 'react-icons/fa';
import image1 from '../images/image1.jpg'
import {Link,withRouter} from 'react-router-dom'

class Section extends Component {
   
   render(){
      
      return(
      
         <div  style={ImgDiv}>
    
      <div className="pt-5" >
      

          <p className='fw-bolder fs-5 text-center'><h1 style={{fontFamily: "cursive",color:"#0d0452"}}>David's Space</h1></p>
         <div style={{paddingTop:"5%"}}>   


           <div className="row text-center">
         
         
              <div className="col-sm-4 pt-3 pl-5 pr-3" >
                 <div style={{borderStyle:"solid",height:"20vh", backgroundColor:"antiquewhite",borderRadius:"20px", boxShadow: "0 10px 12px 0 rgba(0, 0, 0, 0.25)"}}>
                    <h style={{fontSize:"20px" }}>Medatation & Exercise</h>
                    <br/>
                    <div className="pb-3"></div>
                  <Link to = "/Meditationex" >  <button type="button" style={{borderRadius:15}} class="btn btn-success "><FaIcons.FaArrowRight style={{width:"100px",fontSize:"50px",height:"20px"}}/></button>   
                  </Link>
                           </div>
               
              </div>
              
              
              
              <div className="col-sm-4 pt-3 pl-3 pr-3">
                 <div style={{borderStyle:"solid",height:"20vh", backgroundColor:"antiquewhite",borderRadius:"20px", boxShadow: "0 10px 12px 0 rgba(0, 0, 0, 0.25)"}}>
                 <h style={{fontSize:"20px" }}>       
                 Thought Diary
                 </h>
                 <br/>
                 <div className="pb-3"></div>
                    <button type="button" style={{borderRadius:15}} class="btn btn-success "><FaIcons.FaArrowRight style={{width:"100px",fontSize:"50px",height:"20px"}}/></button>
                 
                 </div>
               </div>  
              
              
              
              <div className="col-sm-4 pt-3 pl-3 pr-5">
                 <div style={{borderStyle:"solid",height:"20vh", backgroundColor:"antiquewhite",borderRadius:"20px", boxShadow: "0 10px 12px 0 rgba(0, 0, 0, 0.25)"}}>  
                 <h style={{fontSize:"20px" }}>
                 Urgent Mental Help
                 </h>
                     <br/>
                     <div className="pb-3"></div>
                    <button type="button" style={{borderRadius:15}} class="btn btn-success "><FaIcons.FaArrowRight style={{width:"100px",fontSize:"50px",height:"20px"}}/></button>
                 
                 </div>
                </div> 
           </div>
           
           
           
           
           <div style={{height:"10vh"}}></div>
           <div className="row text-center">
              <div className="col-sm-4 pt-3 pl-5 pr-3">
                  <div style={{borderStyle:"solid",height:"20vh", backgroundColor:"antiquewhite",borderRadius:"20px", boxShadow: "0 10px 12px 0 rgba(0, 0, 0, 0.25)"}} >
                  <h style={{fontSize:"20px" }}>
                  Sleep Reminder
                  </h>
                  <br/>
                  <div className="pb-3"></div>

               <Link to= '/sleep'>     <button type="button" style={{borderRadius:15}} class="btn btn-success "><FaIcons.FaArrowRight style={{width:"100px",fontSize:"50px",height:"20px"}}/></button>
               </Link>
                  </div>
               </div>   
              <div className="col-sm-4 pt-3 pl-3 pr-3">
                   <div style={{borderStyle:"solid",height:"20vh", backgroundColor:"antiquewhite",borderRadius:"20px", boxShadow: "0 10px 12px 0 rgba(0, 0, 0, 0.25)"}}>
                   <h style={{fontSize:"20px" }}>
                   Forums & Group Chats
                    </h>
                    <br/>
                    <div className="pb-3"></div>
                    <button type="button" style={{borderRadius:15}} class="btn btn-success "><FaIcons.FaArrowRight style={{width:"100px",fontSize:"50px",height:"20px"}}/></button>
                 
                    </div>
                </div>    
              <div className="col-sm-4 pt-3 pl-3 pr-5">
                  <div style={{borderStyle:"solid",height:"20vh", backgroundColor:"antiquewhite",borderRadius:"20px", boxShadow: "0 10px 12px 0 rgba(0, 0, 0, 0.25)"}}>
                  <h style={{fontSize:"20px" }}>
                    Medicines Reminder
                  </h>
                   <br/>
                   <div className="pb-3"></div>
                   <Link to="/medicines">     <button type="button" style={{borderRadius:15}} class="btn btn-success "><FaIcons.FaArrowRight style={{width:"100px",fontSize:"50px",height:"20px"}}/></button>
                 </Link>
                   </div>
               </div> 

           </div>
             

    </div>
    </div>

    </div>
   )


}
}
      
      
      
const ImgDiv={
   backgroundImage: 'url('+image1+')',
   backgroundSize: "cover",
   backgroundAttachment: "fixed",
   height:"600px",
}




export default withRouter(Section);









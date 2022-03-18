import React ,{Component} from 'react'
import {Link,withRouter} from 'react-router-dom'
import image3 from '../../images/image3.jpeg'
import image4 from '../../images/image10.jpg'
import image5 from '../../images/image11.png'
class sleep extends Component{
    render(){
        return(
           <div> 

               <div style={{height:"20vh",backgroundColor:"#d9d2d9"}}>
                 <h2 style={{textAlign:"center",paddingTop:"7vh"}}>"Your future depends on your dreams, so go to sleep"</h2>
               </div>
             
             


               <div style={{backgroundColor:"#EBC9BC" ,height:"80vh"}}className= 'row pt-5'>
         
         <div onClick="location.href='./Meditation';"  className=' col ' style={{backgroundColor:"black" ,marginLeft:"20vh",marginRight:"20vh" ,marginBottom:"15vh",backgroundColor:"#EBC9B"}} >
         <Link to='/medSleep' style={{textDecoration:"none",color:"black"}}>
         <div className="row" style={{marginLeft:"20vh",backgroundColor:"white",height:"35vh",width:"40vh"}}>
          <img src={require('../../images/image10.jpg').default} height={210} width={100}/>
          </div>
         <div className="row floatCenter pt-2 " style={{marginLeft:"20vh",backgroundColor:"#d9d2d9",height:"22.5vh",width:"40vh"}}><h4 class='text-center' style={{}}>Meditation stories</h4>
         <p>Real purpose of meditation is to discover the true self within</p>
         </div>
         </Link>
      </div>           





      <div onClick="location.href='./Meditation';"  className=' col ' style={{ marginLeft:"20vh",marginRight:"20vh" ,marginBottom:"15vh",backgroundColor:"white"}} >
         <Link to='/sleepStories' style={{textDecoration:"none",color:"black"}}>
         <div className="row" style={{marginLeft:"20vh",backgroundColor:"white",height:"35vh",width:"40vh"}}>
          <img src={require('../../images/image10.jpg').default} height={210} width={100}/>
          </div>
         <div className="row floatCenter pt-2" style={{marginLeft:"20vh",backgroundColor:"#d9d2d9",height:"22.5vh",width:"40vh"}}><h4 class='text-center' style={{}}>Sleep stories</h4>
         <p>Real purpose of meditation is to discover the true self within</p>
         </div>
         </Link>
      </div>          
           </div></div>
        )
    }
}
export default sleep;
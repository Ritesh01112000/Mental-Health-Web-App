import React,{ Component } from 'react'
import {Link} from 'react-router-dom';
import image3 from '../images/image3.jpeg'
import image4 from '../images/image10.jpg'
import image5 from '../images/image11.png'
class Meditationex extends Component {
  render() {
      return (
       <div style={{backgroundColor:"#d9d2d9", height:"30vh"}}>       <div className= 'float center text-center pb-4 text-color'>
        <h2 style={{color:"black"}} ><b><u><i>Transform your life</i></u></b></h2>
        <p>Meditation & Exercise both help to promote health on all levels, including your Physical, Psychological & Emotional Well-being.</p>
        
        <p>Combining Meditation & Exercise is More Effective At Fighting Depression &Anxiety</p>
        </div>
       <div style={{backgroundColor:"#EBC9BC" ,height:"80vh"}}className= 'row pt-5'>
         
       <div onClick="location.href='./Meditation';"  className=' col ' style={{ marginLeft:"20vh",marginRight:"20vh" ,marginBottom:"15vh",backgroundColor:"white"}} >
       <Link to="./Meditation" style={{textDecoration:"none",color:"black"}}>
       <div className="row" style={{backgroundColor:"white",height:"35vh",}}>
        <img src={require('../images/image10.jpg').default} height={213} width={100}/>
        </div>
       <div className="row floatCenter " style={{backgroundColor:"#d9d2d9",height:"22.5vh",}}><h4 class='text-center' style={{}}>Meditation</h4>
       <p>Real purpose of meditation is to discover the true self within</p>
       </div>
       </Link>
    </div>               
       
       <div className= "col" style={{ marginLeft:"20vh",marginRight:"20vh", marginBottom:"15vh",backgroundColor:"white"}}>
       <div className="row" style={{backgroundColor:"white",height:"35vh"}}>
       <img src={require('../images/image11.png').default} height={213} width={100}/>
        
       </div>
       
       <div className="row floatCenter " style={{backgroundColor:"#d9d2d9",height:"22.5vh"}}><h4 class='text-center'>Exercise</h4></div>
       </div>
        </div></div>



      )
  }  
}
const ImgDiv={
  backgroundImage: 'url('+image3+')',
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  height:"600px",
}


const ImgDiv1={
  backgroundImage: 'url('+image4+')',
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  height:"300px",
}

const ImgDiv2={
  backgroundImage: 'url('+image5+')',
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  height:"300px",
}
export default Meditationex;

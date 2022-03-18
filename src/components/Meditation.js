import React,{Component} from 'react'
import image6 from '../images/image6.jpg'
import image7 from '../images/image7.png'
import {Link} from 'react-router-dom'
class Meditation extends Component{
   render(){
   return(
       <div style={{backgroundColor:"#EBC9BC",height:"110vh"}}>
         
        <div className="row">
            
       {/* <div className= "col" style={{backgroundImage:'url('+image7+')',height: '420px' ,width:"800px"}}>
            */}
           <div className='col pt-5 pl-3 pb-5' style={{marginLeft:"", width:"10vh"}} >
              <div className="pl-5" style={{paddingLeft:"200px"}} > <h3> <u>     PERFECT POSTURE FOR MEDITATION </u></h3>  </div>
            <div classname="" style={{marginTop:"70px",border:"solid" }}>   
               <img src={require('../images/image7.png').default} height={290} width={610} style={{marginLeft:'5px'}} ></img>
       </div>
       <div className="pt-5 pr-5 pl-2" >
          <Link to="Medtimer"> <button style={{marginLeft:"20px",marginRight:"20px" }}  className="  btn btn-danger btn-block">Let's Start</button></Link>
       </div> 
       </div>    
       <div className="col">
           <h3>   <u>    How to Meditate </u> </h3>
<p>Meditation is something everyone can do, here’s how.
Meditation is simpler (and harder) than most people think. Read these steps, make sure you’re somewhere where you can relax into this process, set a timer, and give it a shot:
<br/><br/>
1) Take a seat
Find place to sit that feels calm and quiet to you.
<br/>
2) Set a time limit
If you’re just beginning, it can help to choose a short time, such as five or 10 minutes.
<br/>
3) Notice your body
You can sit in a chair with your feet on the floor, you can sit loosely cross-legged, you can kneel—all are fine. Just make sure you are stable and in a position you can stay in for a while.
<br/>
4) Feel your breath
Follow the sensation of your breath as it goes in and as it goes out.
<br/>
5) Notice when your mind has wandered
Inevitably, your attention will leave the breath and wander to other places. When you get around to noticing that your mind has wandered—in a few seconds, a minute, five minutes—simply return your attention to the breath.
<br/>
6) Be kind to your wandering mind
Don’t judge yourself or obsess over the content of the thoughts you find yourself lost in. Just come back.
<br/>
7) Close with kindness
When you’re ready, gently lift your gaze (if your eyes are closed, open them). Take a moment and notice any sounds in the environment. Notice how your body feels right now. Notice your thoughts and emotions.
<br/>
That’s it! That’s the practice. You go away, you come back, and you try to do it as kindly as possible.</p>
       </div>
       </div>
       <div style={{height:"5vh"}}>

       </div>
      
       
       
       
       
       </div>
   


   )
}
}

export default Meditation;
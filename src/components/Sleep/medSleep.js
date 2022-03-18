import React,{Component} from 'react';
import audio from '../../static/audio.mp3'
import image from '../../images/image12.jpeg'

class medSleep extends Component{





// Import your audio file



  state = {

    // Get audio file in a variable
    audio1: new Audio(audio),
    audio2: new Audio(audio),
    // Set initial state of song
    isPlaying: false,
  };

  // Main function to handle both play and pause operations
  playPause = () => {

    // Get state of song
    let isPlaying = this.state.isPlaying;

    if (isPlaying) {
      // Pause the song if it is playing
      this.state.audio1.pause();
    } else {

      // Play the song if it is paused
      this.state.audio1.play();
    }

    // Change the state of song
    this.setState({ isPlaying: !isPlaying });
  };

  render() {
    return (
     <div style={{backgroundColor:"black",height:"100vh"}} >
          <div style={{height:"20vh"}} className="row">
                
                 <div className="col-sm-1"style={{paddingTop:"2vh"}}>
                 <img src={require('../../images/image12.jpeg').default} height={113} width={200}/>
                  </div>  
          
          
                 <div className="col"> 
                 <h2 style={{paddingTop:"8vh",paddingLeft:"20vh",color:"white"}}>Meditation for Sleep</h2>
                 <p style={{paddingLeft:"20vh",color:"white"}}>These guided meditations and sounds will ease you into a peaceful and restful sleep</p>
                 </div>
      </div>
     
     
     <div style={{paddingTop:"30px"}}>
        
           <div style={{ paddingTop:"40px",borderStyle:"solid",height:"20vh", backgroundColor:"#292929",borderRadius:"20px", boxShadow: "0 10px 12px 0 rgba(0, 0, 0, 0.25)"}}>       
            <div className="row text-center">
            <div className="col"><h3 style={{color:"white"}}>Getting back to sleep</h3> </div>  
           <div className="col" style={{color:"white"}}>      Duration: 15 min   </div> 
           <div className="col"><button  type="button" class="btn btn-light"  onClick={()=>{
                let isPlaying = this.state.isPlaying;

                if (isPlaying) {
                  // Pause the song if it is playing
                  this.state.audio1.pause();
                } else {
            
                  // Play the song if it is paused
                  this.state.audio1.play();
                      }
                      this.setState({ isPlaying: !isPlaying });
                 }}> Play | Pause </button> 
           </div> 
           </div>
           </div>


           <div style={{marginTop:"20px", paddingTop:"40px",borderStyle:"solid",height:"20vh", backgroundColor:"#292929",borderRadius:"20px", boxShadow: "0 10px 12px 0 rgba(0, 0, 0, 0.25)"}}>       
           <div className="row text-center">
           <div className="col"><h3 style={{color:"white"}}>Gradual full body relaxation </h3></div>
           <div className="col" style={{color:"white"}}>Duration : 20 Min </div>
           <div className="col"> <button   type="button" class="btn btn-light"  onClick={()=>{
                let isPlaying = this.state.isPlaying;

                if (isPlaying) {
                  // Pause the song if it is playing
                  this.state.audio1.pause();
                } else {
            
                  // Play the song if it is paused
                  this.state.audio1.play();
                      }
                      this.setState({ isPlaying: !isPlaying });
                 }}>Play | Pause</button></div>
           </div>
           </div>
         

           
           <div style={{ marginTop:"20px",paddingTop:"40px",borderStyle:"solid",height:"20vh", backgroundColor:"#292929",borderRadius:"20px", boxShadow: "0 10px 12px 0 rgba(0, 0, 0, 0.25)"}}>       
           <div className="row text-center">
           <div className="col"><h3 style={{color:"white"}}>Calming worry</h3> </div>
           <div className="col" style={{color:"white"}}>Duration : 25 Min</div>
          <div className="col"><button    type="button" class="btn btn-light" onClick={()=>{
                let isPlaying = this.state.isPlaying;

                if (isPlaying) {
                  // Pause the song if it is playing
                  this.state.audio1.pause();
                } else {
            
                  // Play the song if it is paused
                  this.state.audio1.play();
                      }
                      this.setState({ isPlaying: !isPlaying });
                 }}>Play | Pause</button></div>
           </div>
          </div>
      </div>
     </div>
    
    );
  }
}
export default medSleep;

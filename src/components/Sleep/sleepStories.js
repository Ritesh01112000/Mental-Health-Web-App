import React,{Component} from 'react';

import audio from '../../static/audio.mp3'
class sleepStories extends Component{





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
     <div >
     
     
     
     <div style={{paddingTop:"30px"}}>
        
           <div style={{ paddingTop:"40px",borderStyle:"solid",height:"20vh", backgroundColor:"antiquewhite",borderRadius:"20px", boxShadow: "0 10px 12px 0 rgba(0, 0, 0, 0.25)"}}>       
            <div className="row text-center">
            <div className="col">Getting back to sleep </div>  
           <div className="col">      Duration: 15 min   </div> 
           <div className="col"><button onClick={()=>{
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


           <div style={{marginTop:"20px", paddingTop:"40px",borderStyle:"solid",height:"20vh", backgroundColor:"antiquewhite",borderRadius:"20px", boxShadow: "0 10px 12px 0 rgba(0, 0, 0, 0.25)"}}>       
           <div className="row text-center">
           <div className="col">Violin Ambience 2 </div>
           <div className="col">Duration : 20 Min </div>
           <div className="col"> <button  onClick={()=>{
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
         

           
           <div style={{ marginTop:"20px",paddingTop:"40px",borderStyle:"solid",height:"20vh", backgroundColor:"antiquewhite",borderRadius:"20px", boxShadow: "0 10px 12px 0 rgba(0, 0, 0, 0.25)"}}>       
           <div className="row text-center">
           <div className="col">Violin Ambience3  </div>
           <div className="col">Duration : 25 Min</div>
          <div className="col"><button onClick={()=>{
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









export default sleepStories;
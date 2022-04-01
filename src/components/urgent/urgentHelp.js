import React,{Component} from 'react'
import {Link,withRouter} from 'react-router-dom'


class urgentHelp extends React.Component{
  render(){
      return(
         <div>
             <div>
                <h1> EMERGENCY MEDICAL SERVICES , 911</h1>
                <p>If the situation is potentially life-threatening , get immediate emergency assistance by calling 911,available 24 hours a day  </p>
             </div>
             <div>
               <h1>  NATIONAL SUICIDE PREVENTION LIFELINE</h1>
               <p>If you or someone you know is sucidial or in emotional distress, contact the National SUICIDE
                   Prevention Lifeline . Trained crises workers are available to talk 24 hours a day , 7 days a week.
                Your confidential and toll free call goes to the nearest crises center in the Lifeline National network.
                 These centers provide crises counselling and mental health referrals
               </p>
             </div>
             <div>
                 <h1>Find Treatment with SAMHSA</h1>
                 <p>SAMSHA provides an extensive list of hotlines and locators to assist you with findings access to the care you need</p>
             </div>
         </div>
      )
  }


}

export default urgentHelp;

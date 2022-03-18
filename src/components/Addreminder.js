import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Addreminder extends Component {
    constructor() {
        super();
        this.state = {
            currentTime:'',
            alarmTime: '',
            medicineName: '',
            
        };
         this.setAlarmTime = this.setAlarmTime.bind(this);
         this.setMedicine = this.setMedicine.bind(this);
    }



    componentDidMount() {
        this.clock = setInterval(
             ()=>this.setCurrentTime(),1000)

          this.interval = setInterval(
          ()=> this.checkAlarmClock(),1000)
         
        }

    componentWillUnmount() {
        clearInterval(this.clock);
        clearInterval(this.interval);
    }    


    setCurrentTime() {
        this.setState({ currentTime:new Date().toLocaleTimeString('en-US',{hour12:false}) })
    } 
    

    setAlarmTime(event) {
        event.preventDefault();
        const inputAlarmTimeModified = event.target.value + ':00'
           this.setState({
               alarmTime: inputAlarmTimeModified
           })
    }

    checkAlarmClock(){
        if(this.state.alarmTime== 'undefined' || !this.state.alarmTime) {
                               this.alarmMessage ="Enter time to take Medicine ";
                            }

                   else   {
                       this.alarmMessage = "Your Medicine Reminder will be set for" + this.state.alarmTime +".";
                       if(this.state.currentTime === this.state.alarmTime) {
                           alert("its time to take medicines");
                       }
                       else{
                           console.log("not yet");
                       }
                   }

    }
    
    setMedicine(event) {
        event.preventDefault();
        const inputMedicine = event.target.value
           this.setState({
               medicineName: inputMedicine
           })
    }
    
    myalert()
    {
        alert("added successfully")
    }

    
    
    render() {
        return (
         <div>   
               <div className= "text-center pt-5 pl-5  ">
                 <div style={{borderStyle:"solid", width: '80vh',height:'20vh'  }}>
                 <h3>Medicine Name</h3>
             <input type="text" name="medicineName" onChange={this.setMedicine}></input>
                {console.log(this.state.medicineName)}

             </div>
            
            </div>



            <div>
                  <div className='text-center pt-5 pl-5 '>
                   <div style={{borderStyle:"solid" ,width:'80vh' ,height:'17vh'  }}>  
                     It is {this.state.currentTime}

                    <h2> {this.alarmMessage}</h2>
         
            <form>
                <input type="time" onChange = {this.setAlarmTime}></input>
                            </form>
         
                     </div>
            </div>
         <br/>
         <br/>
            </div>
                 
            <div classname="float-center pl-5 ">
                
            <div className="text-center pl-5 ml-4" style={{ width: '80vh',height:'20vh'  }}>
            <div>
        <input type="radio" value="Male" name="gender" />   Before Meal
        <br/>
        <input type="radio" value="Female" name="gender" /> After Meal..
        
      </div>
      <br/>
            <Link to="/medicines"><button className=" float-center btn btn-danger " onClick={this.myalert}>Click To Add New Medicine</button></Link>
            </div>
            </div>
           
            </div>

        )

    }
}

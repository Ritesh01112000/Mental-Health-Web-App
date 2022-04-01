//import './App.css';
import React from 'react';
import Section from './components/Section'
import {BrowserRouter,Route,Switch} from 'react-router-dom' 
import Medicines from "./components/Medicines"
import Addreminder from './components/Addreminder';
import Meditationex from './components/Meditationex';
import Meditation from './components/Meditation';
import Medtimer from './components/Medtimer';
import music from './components/music';
import sleep from './components/Sleep/sleep';
import sleepStories from './components/Sleep/sleepStories';
import medSleep from './components/Sleep/medSleep';
import urgentHelp from './components/urgent/urgentHelp';
function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
          
         <switch>
    
          <Route exact path="/" component = {Section}></Route>
          <Route path ="/medicines" component = {Medicines}></Route>
          <Route path="/addreminder" component={Addreminder}></Route>
          <Route path="/Meditationex" component ={Meditationex}></Route>
          <Route path="/Meditation" component ={Meditation}></Route>
          <Route path="/Medtimer" component ={Medtimer}></Route>  
          <Route path="/music" component ={music}></Route>
          <Route path="/sleep" component ={sleep}></Route>
          <Route path="/sleepStories" component={sleepStories}></Route>
          <Route path="/medSleep" component={medSleep}></Route>
          <Route path="/urgentHelp" component={urgentHelp} ></Route>
         </switch>

      </BrowserRouter>
      
         </div>
  );
}

export default App;

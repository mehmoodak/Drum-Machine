import React, {Component} from 'react';

import './App.scss';
import DrumPad from "./Drumpad/Drumpad";
import Credits from "./Credits/Credits";

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      lastPlay: ''
    }

    this.playAudio = this.playAudio.bind(this);
  }

  componentDidMount(){
    document.addEventListener("keyup", (e) => this.playAudio(e.key.toUpperCase()));
  }

  componentWillUnmount(){
    document.removeEventListener("keyup", (e) => this.playAudio(e.key.toUpperCase()));
  }

  playAudio(id){

    if(["Q","W","E","A","S","D","Z","X","C"].indexOf(id) >= 0) {
      document.querySelector("#drum-pad-" + id + " .clip").currentTime = 0;
      document.querySelector("#drum-pad-" + id + " .clip").play();

      this.setState({
        lastPlay: document.querySelector("#drum-pad-" + id + " .inner-text").innerHTML.trim()
      });
    }

  }

  render() {

    let drumpadData = [
        {id: "Q", text:"Heater 1", audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},
        {id: "W", text:"Heater 2", audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},
        {id: "E", text:"Heater 3", audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},
        {id: "A", text:"Heater 4", audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},
        {id: "S", text:"Clap", audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},
        {id: "D", text:"Open HH", audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},
        {id: "Z", text:"Kick n'Hat", audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},
        {id: "X", text:"Kick", audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},
        {id: "C", text:"Closed HH", audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"},
    ]

    return (
        <div className="drum-machine-wrapper">
          <div className="title"> Drum Machine </div>
          <div id="drum-machine" className="on">
            <div className="drum-keys">

              {
                drumpadData.map( (data, index) =>
                    <DrumPad id={data.id} text={data.text} audioSrc={data.audioSrc} key={index} audioPlay={this.playAudio}/>
                )
              }

            </div>
            <div className="display-power">
              <div id="display">
                {this.state.lastPlay}
              </div>
            </div>
          </div>

          <Credits />
        </div>


    );
  }
}

export default App;

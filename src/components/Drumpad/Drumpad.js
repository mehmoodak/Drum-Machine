import React,{Component} from 'react';
import './drumpad.scss';

class DrumPad extends Component{

  render(){
    return (
        <div className="drum-pad"  id={"drum-pad-" + this.props.id} onClick={ () => this.props.audioPlay(this.props.id)}>
          <div className="text"> {this.props.id} <span className="inner-text"> {this.props.text} </span></div>
          <audio id={this.props.id} src={this.props.audioSrc} className="clip" onClick={ () => this.props.audioPlay(this.props.id)}></audio>
        </div>
    );
  }

}

export default DrumPad;
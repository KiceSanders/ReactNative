import React, { Component } from 'react';

import {
    View,
    Text
} from 'react-native';

import Board from './Board';
import Style from './Style';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: 'X'
    };
    this.turnHandler = this.turnHandler.bind(this);
    this.winHandler = this.winHandler.bind(this);
    this.win = ' ';
  }

  turnHandler(){
    let t = this.state.turn;
    this.setState({turn: this.state.turn == 'X' ? 'O' : 'X'});
    return t;
  }

  winHandler(inp){
    console.log("winHandler called with "+inp);
    this.win = inp;
  }

  renderArea() {
    let ret = [];
    if (this.win !== ' '){
      ret.push(<Text key="win">{this.win} WINS!</Text>);
    } else {
      ret.push(<Text key="turn">{this.state.turn} Turn</Text>);
      ret.push(<Board
          turnHandler={this.turnHandler}
          winHandler={this.winHandler}
          style={Style.board}/>);
    }
    return ret;
  }

  render() {
    return (
      <View style={Style.container}>
      {this.renderArea()}
      </View>
    )
  }
}

import React, { Component } from 'react';

import {
    Text,
    View
} from 'react-native';

import Style from './Style';
import Tile from './Tile';

export default class Board extends Component {
  constructor(props){
    super(props);
    this.state = {board: [
      [' ',' ',' '],
      [' ',' ',' '],
      [' ',' ',' ']
    ]}
  }

  updateBoard(row, col, char){
    let currTurn, nBoard = [];
    for (var i = 0; i < this.state.board.length; i++) {
      nBoard[i] = [];
      for (var j = 0; j < this.state.board[i].length; j++) {
        if(i == row && j == col){
          currTurn = this.props.turnHandler();
          nBoard[i][j] = currTurn;
        } else {
          nBoard[i][j] = this.state.board[i][j];
        }
      }
    }
    this.setState({
      board: nBoard
    })
    this.checkWin(nBoard);
  }

  checkWin(board){
    let r, c, curr, currInp;
    r = board.length;
    c = board[0].length;

    // horizontal
    for(var i = 0; i < r; i++){
      curr = 0;
      for(var j = 0; j < c; j++){
        if(j === 0){
          currInp = board[i][j];
        }
        if(board[i][j] !== currInp || currInp === ' '){
          // console.log("Broke on " + i + j+" was looking for "+ currInp);
          break;
        } else {
          curr++;
        }
      }
      if(curr === c){
        console.log("WINNER "+ currInp);
        this.props.winHandler(currInp);
        return true;
      }
    }

    // vertical
    for(var i = 0; i < r; i++){
      curr = 0;
      for(var j = 0; j < c; j++){
        if(j === 0){
          currInp = board[j][i];
        }
        if(board[j][i] !== currInp || currInp === ' '){
          break;
        } else {
          curr++;
        }
      }
      if(curr === r){
        console.log("WINNER "+ currInp);
        this.props.winHandler(currInp);
        return true;
      }
    }

    // diagonal forward
    curr = 0;
    for (var i = 0; i < r; i++) {
      if (i === 0) {
        currInp = board[i][i];
      }
      if(board[i][i] !== currInp || currInp === ' '){
        console.log("failed at "+ i + " expected "+ currInp);
        break;
      } else {
        curr++;
      }
    }
    if (curr === r) {
      console.log("WINNER "+ currInp);
      this.props.winHandler(currInp);
      return true;
    }

    // diagonal back
    curr = 0;
    for (var i = 0; i < r; i++) {
      if (i === 0) {
        currInp = board[i][c - 1 - i];
      }
      if(board[i][c- 1 - i] !== currInp || currInp === ' '){
        break;
      } else {
        curr++;
      }
    }
    if (curr === r) {
      console.log("WINNER "+ currInp);
      this.props.winHandler(currInp);
      return true;
    }
  }

  createButtons(){
    let tiles = [];
    for(var r=0; r < this.state.board.length; r++){
      let row = [];
      this.state.board[r].forEach( (c, index) => {
        row.push(
          <Tile char={c}
                onPress={this.updateBoard.bind(this, r, index, 'k')}
                key={r*index+index}/>);
      });
      tiles.push(
        <View key={r} style={Style.row}>
          {row}
        </View>);
    }
    return tiles;
  }

  render() {
    return (
      <View>
        {this.createButtons()}
      </View>
    );
  }
}

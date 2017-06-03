import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

import Style from './Style';

// props: char, update
export default class Tile extends React.Component {
  constructor(props){
    super(props);
    console.log("HI i'm TILE ");
  }
  _onPressButton(props) {
  }

  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={Style.tile}>
          <Text>{this.props.char}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

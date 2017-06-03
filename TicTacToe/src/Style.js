import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tile: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width:50,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  },
  row: {
    flexDirection:'row'
  },
  board: {
    flex:1
  }
});

export default Style;

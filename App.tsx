import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import TodoScreen from './assests/Screens/TodoScreen';

const App = () => {
  return (
    <SafeAreaView>
      <View style={{}}>
        <TodoScreen />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  // container:{
  //   flex:1,
  //   justifyContent:'center',
  //   alignItems:'center',
  //   backgroundColor:'#fff'
  // }
});

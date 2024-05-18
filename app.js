import { View } from 'react-native';
export default function App() {
  return (
    <View style={{flex:1,}}>
      <View style={{flex:1, flexDirection:'row'}}> 
      <View style={{flex:1, flexDirection:'column'}}>  
        <View style={{flex:1, backgroundColor:'white',}}></View>
        <View style={{flex:1, backgroundColor:'black',}}></View> 
    </View>

    <View style={{flex:1, flexDirection:'column'}}>
    <View style={{flex:1, flexDirection:'row'}}> 
        <View style={{flex:1, backgroundColor:'blue',}}></View> 
        <View style={{flex:1, backgroundColor:'red',}}></View> 
    </View>
    </View>
    </View>
    <View style={{flex:1, backgroundColor:'green',}}></View>
  </View>
  );
}
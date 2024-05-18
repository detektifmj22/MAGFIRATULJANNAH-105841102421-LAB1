import { View } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1,
      flexDirection:'column'}}>
    <View style={{
      flex: 1,backgroundColor:'red'}}> 
    </View>
    <View style={{flex: 1,backgroundColor:'green'}}> 
    </View>
    <View style={{flex: 1,backgroundColor:'blue'}}> 
    </View>
  </View>
  );
  }

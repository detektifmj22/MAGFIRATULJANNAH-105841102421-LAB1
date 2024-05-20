import { Text, View } from 'react-native';
const TextCustom =()=> {
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white',
            justifyContent:'flex-start',
            alignItems:'center',
            marginTop: 200,
            }}> 

            <Text style={{
                fontSize: 40,
                fontWeight: 'bold',
                marginTop : 20,
            }}>DAPUR RASA</Text>
        </View>
    )
}
export default TextCustom;
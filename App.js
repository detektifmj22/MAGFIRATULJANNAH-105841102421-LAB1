import { Text, View } from 'react-native';
const  ButtonCustom = () => {
    return (
        <View style = {{
            flex:1,
            backgroundColor: 'white',
            justifyContent:'center', //kolom
            alignItems:'flex-end', //baris
            flexDirection:'row',
            marginBottom: 100,
        }}>
            <ButtonComponent backgroundColor = 'red' text = 'Login'/>
            <ButtonComponent backgroundColor = 'green' text = 'Register'/>
            </View>
        )
    }

    const ButtonComponent = ({backgroundColor, text}) => {
        return (
            <View style = {{
                backgroundColor:backgroundColor,
                width: 150,
                height: 70,
                borderRadius: 10,
                marginRight:10
        }}>
            <Text style={{
                color: 'white',
                textAlign: 'center',
                lineHeight: 80,
                fontSize: 30,
                fontWeight: 'bold',
        }}>
            {text}
        </Text>
        </View>
    );
}

export default ButtonCustom;
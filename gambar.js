import { Image, View } from 'react-native'


const ImagesT = () => {
    return ( 
        <View style={{
            flex: 1,
            backgroundColor: 'white',
            justifyContent:'flex-start',
            alignItems:'center',
            }}>
        <Image source={require('./assets/images.jpg')}style={{width:400, height:300}}></Image>
        </View>
    )
}
export default ImagesT



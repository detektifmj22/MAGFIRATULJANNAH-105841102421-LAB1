import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from 'expo-font';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Tab = createBottomTabNavigator();

const HomeScreen = () => (
  <View style={styles.center}>
    <Text>Home Screen</Text>
  </View>
);

const ShopScreen = () => (
  <View style={styles.center}>
    <Text>Shop Screen</Text>
  </View>
);

const BagScreen = () => (
  <View style={styles.center}>
    <Text>Bag Screen</Text>
  </View>
);

const FavoritesScreen = () => (
  <View style={styles.center}>
    <Text>Favorites Screen</Text>
  </View>
);

const ProfileScreen = () => {
  const [fontsLoaded] = useFonts({
    'Metropolis-Bold': require('../assets/font/Metropolis-Bold.otf'),
  });

  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const userData = await response.json();

        const user = userData[0];

        const data = {
          name: user.name,
          email: user.email,
          profilePic: require('../assets/foto.jpeg'),
          options: [
            { id: '1', title: 'My orders', subtitle: 'Already have 21 orders' },
            { id: '2', title: 'Shipping addresses', subtitle: '1 address' },
            { id: '3', title: 'Payment methods', subtitle: 'Fira **34' },
            { id: '4', title: 'Promocodes', subtitle: 'You have special promocodes' },
            { id: '5', title: 'My reviews', subtitle: 'Reviews for 8 items' },
            { id: '6', title: 'Settings', subtitle: 'Notifications, password' },
          ],
        };
        setProfileData(data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, []);

  if (!fontsLoaded || !profileData) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Font tidak ditemukan atau data profil tidak tersedia!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { fontFamily: 'Metropolis-Bold' }]}>My Profile</Text>
      <View style={styles.profileHeader}>
        <Image source={profileData.profilePic} style={styles.profileImage} />
        <View>
          <Text style={styles.profileName}>{profileData.name}</Text>
          <Text style={styles.profileEmail}>{profileData.email}</Text>
        </View>
      </View>
      
      <FlatList
        data={profileData.options}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.optionContainer}>
            <Text style={styles.optionTitle}>{item.title}</Text>
            <Text style={styles.optionSubtitle}>{item.subtitle}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

function MyProfile() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconSource;

          switch (route.name) {
            case 'Home':
              iconSource = focused 
                ? require('../assets/icon/3.jpeg') 
                : require('../assets/icon/4.jpeg');
              break;
            case 'Shop':
              iconSource = focused 
                ? require('../assets/icon/2.jpeg') 
                : require('../assets/icon/1.jpeg');
              break;
            case 'Bag':
              iconSource = focused 
                ? require('../assets/icon/8.jpeg') 
                : require('../assets/icon/5.jpeg');
              break;
            case 'Favorites':
              iconSource = focused 
                ? require('../assets/icon/9.jpeg') 
                : require('../assets/icon/6.jpeg');
              break;
            case 'Profile':
              iconSource = focused 
                ? require('../assets/icon/10.jpeg') 
                : require('../assets/icon/7.jpeg');
              break;
            default:
              break;
          }

          return (
            <View style={styles.iconContainer}>
              <Image source={iconSource} style={[styles.icon]} />
            </View>
          );
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Shop" component={ShopScreen} />
      <Tab.Screen name="Bag" component={BagScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 35,
    marginTop: 10,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileEmail: {
    color: '#666',
  },
  optionContainer: {
    padding: 13,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 1,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  optionSubtitle: {
    color: '#888',
    marginTop: 5,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default MyProfile;

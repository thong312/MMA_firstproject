import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import FooterDemo from './components/FooterDemo';
import HeaderDemo from './components/HeaderDemo';
import BodyDemo from './components/BodyDemo';
import MenuItems from './components/MenuItems';
import LoginScreen from './components/LoginScreen';
// import { useState } from 'react';

export default function App() {
  // const{showTest, setShowTest}= useState(false)
  return (
    <>
      <View
        style={styles.container}>
        <HeaderDemo />
        <BodyDemo/>
        {/* <Pressable onPress={() => setShowTest(showTest) }>
          <Text
            style={styles.btn}
          >
           {showTest? 'click me': 'clicked'}
          </Text>

        </Pressable> */}
        {/* <LoginScreen /> */}
        {/* <MenuItems /> */}
        {/* <TextInput
        style={{
          borderColor:'black',
          borderWidth: 1
        }}
        /> */}
        {/* <Image style={{width: 100, height: 100}}
        resizeMode='repeat'
        source={{uri:'https://th.bing.com/th/id/OIP.bPt0cF5DBUiR5XLux9d0zgHaEd?rs=1&pid=ImgDetMain'}}
        /> */}
      </View>
      <View
        style={{
          backgroundColor: '#ecfeff'
        }}>
        <FooterDemo />
      </View>
    </>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecfeff',
  },
  btn: {
    fontSize: 16,
    color: 'yellow',
    backgroundColor: 'black',
    width: 100,
    margin:50,
  },
});

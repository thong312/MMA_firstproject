import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import FooterDemo from './components/FooterDemo';
import HeaderDemo from './components/HeaderDemo';
import BodyDemo from './components/BodyDemo';
import MenuItems from './components/MenuItems';
import LoginScreen from './components/LoginScreen';

export default function App() {
  return (
    <>
      <View
        style={styles.container}>
        <HeaderDemo />
        <LoginScreen/>
        {/* <MenuItems /> */}
        {/* <TextInput
        style={{
          borderColor:'black',
          borderWidth: 1
        }}
        /> */}
      </View>
      <View
        style={{
          backgroundColor:'#ecfeff'
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
});

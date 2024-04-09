import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FooterDemo from './components/FooterDemo';
import HeaderDemo from './components/HeaderDemo';
import BodyDemo from './components/BodyDemo';

export default function App() {
  return (
    <>
      <View
        style={styles.container}>
        <HeaderDemo />
        <BodyDemo />
      </View>
      <View
        style={{
          backgroundColor:'#495E57'
        }}>
      
        <FooterDemo />
      </View>
    </>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22d3ee',
  },
});

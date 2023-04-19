import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Pressable, View, Image, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        <Image 
          style={styles.menu}
          source={require('./assets/camera.png')}
        />
        <Image 
          style={styles.menu}
          source={require('./assets/menu.png')}
        />
      </View>
      <Image 
        source={require('./assets/google.png')}
        style={styles.logo}
      />
      <TextInput 
        style={styles.textInput}
        placeholder='Search or type URL'
        enterKeyHint='search'
        blurOnSubmit={true}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuContainer: {
    position: 'absolute',
    right: 10,
    top: 10,
    marginTop: '10%',
    flexDirection: 'row',
  },
  logo: {
    marginBottom: '20%'
  },
  textInput: {
    height: 80,
    width: '90%',
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#fff',
    padding: 15,
    fontSize: 24,
  },
});


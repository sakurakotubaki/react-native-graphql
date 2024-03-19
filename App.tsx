import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Welcome from './components/Welcome';
import { Pet } from './components/Pet';
import { PetQualities } from './components/PetQualProsp';

export default function App() {
  const petName = {
    firstName: "Roger",
    lastName: "Porticous"
  }

  const qualities = [
    {
      qualOne: "loyal",
      qualTwo: "friendly",
      qualThree: "protective",
      age: 3
    },
    {
      qualOne: "playful",
      qualTwo: "energetic",
      qualThree: "loving",
      age: 1
    }
  ]

  return (
    <View style={styles.container}>
      <Welcome name="Jack" age={37} gender={true} />
      <Pet petName={petName} type="Komodo Dragon" />
      <PetQualities qualities={qualities} />
      <Text>{constMessage}</Text>
    </View>
  );
}

const constMessage = "Hello World!";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
});

import {useState } from 'react';
import { Button,StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  //userinout is used in retrived the information and setUserInput is used to to give the variable its value
const[userInput,setUserInput]= useState('');

// arrow function from the =, it willl return variablewhen the button is pressed
const handlePress =() => {
console.log('User Input',userInput);
};

  return (
    <View style={styles.container}>
      <Text>Hello Yenziwe</Text>
     <TextInput
     //its like hint fro edittext in kotlin in andriod studio
     placeholder='Enter something'
     //HAS TO BE IN CURLY BRACKETS because of the system is set
     value={userInput}
     //onChange is an event that tiggers a function whenever the value of associated form element changes allowing dynamic updates and interaction
     onChangeText={setUserInput}
    
     />
     <Button 
     title='CLICK HERE'
     //similar to onsetclicklisner for kotlin
     onPress={handlePress}
     />
      <Text>userInput</Text>
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
});

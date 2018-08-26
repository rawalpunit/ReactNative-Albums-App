// import libs to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';
import Header from './src/components/header';


// create a component
// const App = () => {
//     return (
//         <Text>Some Other Text</Text>
//     );
// }; // this App function can also be written as below...no curly braces implies a return statement
const App = () => (
    // <Text>Some Text</Text>
    <Header headerText={'Albumssss!'}/>
);

// render the created component
AppRegistry.registerComponent('albums', () => App);

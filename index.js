// import libs to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


// create a component
// const App = () => {
//     return (
//         <Text>Some Other Text</Text>
//     );
// }; // this App function can also be written as below...no curly braces implies a return statement
const App = () => (
    <View>
        <Header headerText={'Albumssss!'} />
        <AlbumList />
    </View>
    
);

// render the created component
AppRegistry.registerComponent('albums', () => App);

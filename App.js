import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Home from './src/pages/Home';
import Signin from './src/pages/Signin';
import Routes from './src/routes/routes';

export default function App() {
  return (
    <Routes>
      <Home/>
    </Routes>
  );
}

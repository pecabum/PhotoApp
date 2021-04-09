/**
 * @format
 */

import { AppRegistry } from 'react-native';
import reactotron from 'reactotron-react-native';
import App from './App';
import { name as appName } from './app.json';

if (__DEV__) {
  import('./ReactotronConfig').then(() => reactotron.log('Reactotron Configured'));
}
AppRegistry.registerComponent(appName, () => App);

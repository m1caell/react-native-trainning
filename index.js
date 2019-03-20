import { AppRegistry } from 'react-native'
import App from './src/app'
import { Login } from './src/ui/screens/index'
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => Login)

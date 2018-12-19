import { Dimensions, Platform } from 'react-native'

let width;
let height;
let statusBar = 0;
let menuBar = 0;

if (Platform.OS == 'android') {
  const extraDimensions = require('react-native-extra-dimensions-android');
  width = extraDimensions.get('REAL_WINDOW_WIDTH');
  height = extraDimensions.get('REAL_WINDOW_HEIGHT');
  menuBar = extraDimensions.get('SOFT_MENU_BAR_HEIGHT');
  statusBar = extraDimensions.get('STATUS_BAR_HEIGHT');
} else {
  width = Dimensions.get('window').width;
  height = Dimensions.get('window').height;
}

export default {
  width,
  height: height + menuBar + statusBar,
  statusBar,
  menuBar
};

import React from 'react';
import { StyleSheet, Animated, Dimensions, Platform } from 'react-native';

let width;
let height;
let statusBar = 0;
let menuBar = 0;

if (Platform.OS === 'android') {
  const extraDimensions = require('react-native-extra-dimensions-android');
  width = extraDimensions.get('REAL_WINDOW_WIDTH');
  height = extraDimensions.get('REAL_WINDOW_HEIGHT');
  menuBar = extraDimensions.get('SOFT_MENU_BAR_HEIGHT');
  statusBar = extraDimensions.get('STATUS_BAR_HEIGHT');
} else {
  width = Dimensions.get('window').width;
  height = Dimensions.get('window').height;
}

class Transitioner extends React.Component {
  render() {
    const { component: Component, style, overlay_zIndex, ...rest } = this.props;
    const { color, ...restStyle } = style;
    const backgroundColor = color || 'transparent';

    return (
      <Animated.View style={[styles.container, restStyle]}>
        <Component {...rest} />
        <Animated.View style={[styles.overlay, { backgroundColor, zIndex: overlay_zIndex }]} />
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height,
    width,
    top: 0,
    left: 0
  },

  overlay: {
    position: 'absolute',
    height,
    width,
    top: 0,
    left: 0
  }
});

export default Transitioner;

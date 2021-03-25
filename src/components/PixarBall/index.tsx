import * as React from 'react';
import {Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: 160,
    height: 160,
  },
});

const PixarBall: React.FC = () => (
  <Image
    style={styles.image}
    resizeMode="cover"
    source={require('../../assets/images/pixar-ball.png')}
  />
);

export default PixarBall;

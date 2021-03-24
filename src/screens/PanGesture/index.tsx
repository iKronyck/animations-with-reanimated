import * as React from 'react';
import {View} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';
import Header from '../../components/Header';

interface PanGestureProps {
  navigation: NavigationScreenProp<any, any>;
}

const PanGesture: React.FC<PanGestureProps> = ({navigation}) => (
  <View>
    <Header tittle="Pan Gesture" onBack={() => navigation.goBack()} />
  </View>
);

export default PanGesture;

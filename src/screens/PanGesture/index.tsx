import * as React from 'react';
import {View, Dimensions} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDecay,
} from 'react-native-reanimated';
import Header from '../../components/Header';
import {clamp, withBouncing} from 'react-native-redash';
import PixarBall from '../../components/PixarBall';

interface PanGestureProps {
  navigation: NavigationScreenProp<any, any>;
}

const PanGesture: React.FC<PanGestureProps> = ({navigation}) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const {width, height} = Dimensions.get('screen');

  const boundX = width - 160;
  const boundY = height - 307;

  const style = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: translateX.value},
        {translateY: translateY.value},
      ],
    };
  });

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {offsetX: number; offsetY: number}
  >({
    onStart: (_, ctx) => {
      ctx.offsetX = translateX.value;
      ctx.offsetY = translateY.value;
    },
    onActive: (event, ctx) => {
      translateX.value = clamp(ctx.offsetX + event.translationX, 0, boundX);
      translateY.value = clamp(ctx.offsetY + event.translationY, 0, boundY);
    },
    onEnd: event => {
      translateX.value = withBouncing(
        withDecay({
          velocity: event.velocityX,
        }),
        0,
        boundX,
      );
      translateY.value = withBouncing(
        withDecay({
          velocity: event.velocityY,
        }),
        0,
        boundY,
      );
    },
  });

  return (
    <View>
      <Header tittle="Pan Gesture" onBack={() => navigation.goBack()} />
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={style}>
          <PixarBall />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default PanGesture;

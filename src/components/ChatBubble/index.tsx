import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import colors from '../../theme/colors';

interface ChatBubbleProps {
  progress: Animated.SharedValue<number>;
}

interface CircleProps {
  start: number;
  end: number;
  progress: Animated.SharedValue<number>;
}

const Circle: React.FC<CircleProps> = ({start, end, progress}) => {
  const style = useAnimatedStyle(() => {
    const opacity = interpolate(
      progress.value,
      [start, end],
      [0.5, 1],
      Extrapolate.CLAMP,
    );
    const scale = interpolate(
      progress.value,
      [start, end],
      [1, 1.4],
      Extrapolate.CLAMP,
    );
    return {opacity, transform: [{scale}]};
  });
  return <Animated.View style={[styles.circle, style]} />;
};

const ChatBubble: React.FC<ChatBubbleProps> = ({progress}) => {
  const bubbles = [0, 1, 2];
  const delta = 1 / bubbles.length;
  return (
    <View style={styles.container}>
      <View style={styles.chat}>
        {bubbles.map((b, i) => (
          <Circle
            key={i}
            start={i * delta}
            end={i * delta + delta}
            progress={progress}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  chat: {
    backgroundColor: colors.gray,
    borderTopLeftRadius: 150,
    borderTopRightRadius: 150,
    borderBottomLeftRadius: 150,
    width: 300,
    height: 300,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  circle: {
    backgroundColor: colors.blue,
    height: 32,
    width: 32,
    borderRadius: 16,
  },
});

export default ChatBubble;

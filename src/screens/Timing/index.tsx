import * as React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {
  Easing,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {withPause} from 'react-native-redash';
import {NavigationScreenProp} from 'react-navigation';
import ChatBubble from '../../components/ChatBubble';
import Header from '../../components/Header';
import colors from '../../theme/colors';

interface TimingProps {
  navigation: NavigationScreenProp<any, any>;
}

const Timing: React.FC<TimingProps> = ({navigation}) => {
  const [play, setPlay] = React.useState(false);
  const paused = useSharedValue(!play);
  const progress = useSharedValue<any>(null);

  return (
    <>
      <Header tittle="Timing" onBack={() => navigation.goBack()} />
      <View style={styles.container}>
        <ChatBubble progress={progress} />
        <Pressable
          onPress={() => {
            setPlay(prev => !prev);
            paused.value = !paused.value;
            if (progress.value === null) {
              progress.value = withPause(
                withRepeat(
                  withTiming(1, {
                    duration: 1000,
                    easing: Easing.inOut(Easing.ease),
                  }),
                  -1,
                  true,
                ),
                paused,
              );
            }
          }}
          style={styles.button}>
          <Text style={styles.text}>{play ? 'Pause' : 'Play'}</Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: colors.button,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  text: {
    color: colors.white,
    fontSize: 20,
  },
});

export default Timing;

import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import Container from '../../components/Container';
import CardItem from '../../components/CardItem';
import {NavigationScreenProp} from 'react-navigation';

interface HomeProps {
  navigation: NavigationScreenProp<any, any>;
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    alignSelf: 'auto',
  },
});

const Home: React.FC<HomeProps> = ({navigation}) => (
  <Container>
    <View style={styles.content}>
      <CardItem
        name="gesture-double-tap"
        onPress={() => navigation.navigate('PanGesture')}
        text="Pan Gesture"
      />
      <CardItem name="cards" onPress={() => {}} text="Cards" />
    </View>
  </Container>
);

export default Home;

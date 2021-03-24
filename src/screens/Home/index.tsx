import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import Container from '../../components/Container';
import CardItem from '../../components/CardItem';

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

const Home: React.FC = () => (
  <Container>
    <View style={styles.content}>
      <CardItem
        name="gesture-double-tap"
        onPress={() => {}}
        text="Pan Gesture"
      />

      <CardItem name="cards" onPress={() => {}} text="Cards" />
    </View>
  </Container>
);

export default Home;

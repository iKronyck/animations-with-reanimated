import * as React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../theme/colors';

interface CardItemProps {
  name: string;
  text: string;
  onPress: () => void;
}

const styles = StyleSheet.create({
  card: {
    borderColor: colors.button,
    borderWidth: 3,
    borderRadius: 10,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  text: {
    color: colors.button,
    fontSize: 20,
    marginTop: 20,
  },
});

const CardItem: React.FC<CardItemProps> = ({name, text, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.card}>
      <Icon name={name} size={60} color={colors.button} />
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default CardItem;

import * as React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../theme/colors';

interface HeaderProps {
  tittle: string;
  onBack: () => void;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: 'center',
  },
  text: {
    position: 'absolute',
    color: colors.white,
    width: '100%',
    textAlign: 'center',
    paddingHorizontal: 40,
    fontSize: 20,
    marginLeft: 20,
  },
});

const Header: React.FC<HeaderProps> = ({tittle, onBack}) => {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} style={styles.text}>
        {tittle}
      </Text>
      <TouchableOpacity onPress={onBack}>
        <Icon name="arrow-left" size={25} color={colors.white} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

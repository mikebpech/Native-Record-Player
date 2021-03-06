import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  const { constainerStyle } = styles;

  return (
    <View style={constainerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  constainerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10
  }
};

export default Card;

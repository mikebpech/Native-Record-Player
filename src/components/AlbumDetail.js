import React from 'react';
import { Text, View, Image, Linking } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;

  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image 
            style={styles.thumbnailStyle}
            source={{ uri: thumbnail_image }} 
          />
        </View>
        <View style={styles.headerTextStyle}>
          <Text style={styles.titleTextStyle}>{title}</Text>
          <Text style={styles.artistTextStyle}>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={styles.imageStyle} 
          source={{ uri: image }}
        />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)} title={'Buy Now'} />
      </CardSection>
    </Card>
  );
};

const styles = {
  headerTextStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  titleTextStyle: {
    fontSize: 18
  },
  artistTextStyle: {
    fontWeight: 'bold'
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainerStyle: {
    borderRadius: 1,
    borderWidth: 1,
    borderColor: '#007aff',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    borderRadius: 1,
    borderWidth: 1,
    borderColor: '#007aff',
    height: 400,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;


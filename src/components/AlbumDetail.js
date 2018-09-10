import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image } = album;

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
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    width: 'fit'
  }
};

export default AlbumDetail;


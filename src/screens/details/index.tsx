import * as React from 'react';
import { Dimensions, Image, View } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import { screenWidth, screenHeight } from '../../config/constants';

const PhotoDetails = ({
  route: {
    params: { item },
  },
}) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageZoom
        style={{ flex: 1 }}
        cropWidth={screenWidth}
        cropHeight={screenHeight}
        imageWidth={screenWidth}
        imageHeight={screenHeight}>
        <Image
          resizeMode="contain"
          style={{ flex: 1 }}
          source={{
            uri: item.url,
          }}
        />
      </ImageZoom>
    </View>
  );
};

export default PhotoDetails;

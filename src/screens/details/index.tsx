import React, { useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, View } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import colors from '../../config/colors';
import { screenWidth, screenHeight } from '../../config/constants';

const PhotoDetails = ({
  route: {
    params: { item },
  },
}) => {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <View style={styles.container}>
      {imageLoading && (
        <ActivityIndicator
          size="large"
          color={colors.ACCENT_COLOR}
          style={styles.indicator}
        />
      )}
      <ImageZoom
        cropWidth={screenWidth}
        cropHeight={screenHeight}
        imageWidth={screenWidth}
        imageHeight={screenHeight}>
        <Image
          resizeMode="contain"
          onLoadStart={() => setImageLoading(true)}
          onLoad={() => setImageLoading(true)}
          onLoadEnd={() => setImageLoading(false)}
          style={{ flex: 1 }}
          source={{
            uri: item.url,
          }}
        />
      </ImageZoom>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  indicator: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default PhotoDetails;

import * as React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import colors from '../../config/colors';
import { screenWidth } from '../../config/constants';
import { DETAILS_SCREEN } from '../../screens';
import { WebImage } from '../../types/ImageTypes';

interface ImageItemProps {
  item: WebImage;
  navigation: any;
}

const ImageItem = ({ item, navigation }: ImageItemProps) => {
  const [imageLoading, setImageLoading] = React.useState(false);
  const onPress = () => {
    navigation.navigate(DETAILS_SCREEN, { item });
  };
  return (
    <TouchableOpacity onPress={onPress} style={styles.wrapper}>
      {imageLoading && (
        <ActivityIndicator
          size="large"
          color={colors.ACCENT_COLOR}
          style={styles.indicator}
        />
      )}
      {/* <FastImage
        style={{ width: screenWidth, height: 200 }}
        onLoadStart={() => setImageLoading(true)}
        onLoad={() => setImageLoading(true)}
        onLoadEnd={() => setImageLoading(false)}
        source={{
          uri: item.url,
          priority: FastImage.priority.low,
          cache: 'immutable',
        }}
        resizeMode={FastImage.resizeMode.contain}
      /> */}
      <Image
        resizeMode="cover"
        onLoadStart={() => setImageLoading(true)}
        onLoad={() => setImageLoading(true)}
        onLoadEnd={() => setImageLoading(false)}
        style={styles.image}
        key={item.url}
        source={{
          uri: item.url,
          cache: 'force-cache',
        }}
      />
    </TouchableOpacity>
  );
};

export default ImageItem;

const styles = StyleSheet.create({
  wrapper: { height: 200 },
  indicator: { marginTop: 90 },
  image: { width: screenWidth, height: 200 },
});

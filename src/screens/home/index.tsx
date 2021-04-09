import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ImageItem from '@components/ImageItem';
import {
  GetImagesAction,
  LoadMoreImagesAction,
} from '@store/images/actions';
import { imagesSelector } from '@store/images/slice';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { images } = useSelector(imagesSelector);

  useEffect(() => {
    dispatch(GetImagesAction());
  }, []);

  const renderItem = ({ item }: { item: any }) => {
    return <ImageItem navigation={navigation} item={item} />;
  };

  const onEndReached = ({ distanceFromEnd }: { distanceFromEnd: number }) => {
    if (distanceFromEnd < 0) {
      return;
    }
    dispatch(LoadMoreImagesAction());
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={item => item.url}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;

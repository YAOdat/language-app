import React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Story from './Story';

export default function StoryListScreen({ route }) {
  const { level } = route.params;
  const navigation = useNavigation();
  
  const handleStoryPress = (storyNumber) => {
    navigation.navigate('Story', { level, storyNumber });
  };
  
  return (
    <View>
      <Text>List of stories for {level} level</Text>
      <TouchableOpacity style={styles.button} onPress={() => handleStoryPress(1)}>
        <Text>Story 01</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleStoryPress(2)}>
        <Text>Story 02</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleStoryPress(3)}>
        <Text>Story 03</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#ddd',
    padding: 10,
    marginVertical: 10,
  },
});

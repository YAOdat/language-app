import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import StoryListScreen from './StoryListScreen';
import Story from './Story';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Yusr English' }}
        />
        <Stack.Screen
          name="StoryList"
          component={StoryListScreen}
          options={({ route }) => ({ title: `${route.params.level} Stories` })}
        />
        <Stack.Screen
          name="Story"
          component={Story}
          options={({ route }) => ({ title: `Story ${route.params.storyNumber}` })}
        />
        
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Choose your level:</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('StoryList', { level: 'Beginner' })}
      >
        <Text>Beginner</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('StoryList', { level: 'Intermediate' })}
      >
        <Text>Intermediate</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('StoryList', { level: 'Advanced' })}
      >
        <Text>Advanced</Text>
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

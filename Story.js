import React, { useState } from 'react';
import { View, Text, Button, ActivityIndicator  } from 'react-native';
import { Audio } from 'expo-av';

export default function Story({ route }) {
  const { level, storyNumber } = route.params;
  const [sound, setSound] = useState(null);

  // story data based on level and storyNumber
  let story = '';
  if (level === 'Beginner') {
    if (storyNumber === 1) {
      story = 'Once upon a time, there was a little girl named Goldilocks. She lived in a small house in the woods with her family. One day, while her family was away, she decided to explore the woods and came across a house that belonged to three bears. She went inside and saw three bowls of porridge on the table. She tried the first bowl, but it was too hot. She tried the second bowl, but it was too cold. Finally, she tried the third bowl, and it was just right. She ate it all up and then went to the living room, where she saw three chairs. She sat on the first chair, but it was too big. She sat on the second chair, but it was too small. Finally, she sat on the third chair, and it was just right. But as she sat down, the chair broke into pieces!';
    } else if (storyNumber === 2) {
      story = 'Mary had a little lamb. Its fleece was white as snow. And everywhere that Mary went, the lamb was sure to go. It followed her to school one day, which was against the rule. It made the children laugh and play to see a lamb at school. And so the teacher turned it out, but still it lingered near, And waited patiently about till Mary did appear. "Why does the lamb love Mary so?" the eager children cry. "Why, Mary loves the lamb, you know," the teacher did reply.';
    } else if (storyNumber === 3) {
      story = 'The boy who cried wolf was a shepherd boy. He watched his flock of sheep near a village. The villagers were good people. They always helped each other. The boy was bored. So, he wanted to have some fun. He shouted, “Help! Help! Wolf! Wolf!” The villagers heard him and ran to help. But there was no wolf. The boy laughed. The next day, he did the same thing. The villagers came again, but there was no wolf. The third day, a wolf came. The boy shouted, “Help! Help! Wolf! Wolf!” The villagers thought it was a joke and did not come. The wolf ate some of the sheep. When the boy saw the wolf eating his sheep, he cried and shouted loudly. But nobody came to help him. He learned his lesson and never lied again.';
    }
  }

  // play sound
  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('./assets/story01.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  // stop sound
  async function stopSound() {
    console.log('Stopping Sound');
    await sound.stopAsync();
  }

  // unload sound
  async function unloadSound() {
    console.log('Unloading Sound');



    await sound.unloadAsync();
  }

 


  return (
    <View>
      <Text>Level: {level}</Text>
      <Text>Story Number: {storyNumber}</Text>
      <Text>{story}</Text>
      <Button title="Play Sound" onPress={playSound} />
      <Button title="Stop Sound" onPress={stopSound} />
    </View>
  );
}


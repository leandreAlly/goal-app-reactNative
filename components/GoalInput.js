import { useState } from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Button,
  Modal,
  Image,
} from 'react-native';

const GoalInput = ({ onAddGoal, visible, onCancel }) => {
  const [goalText, setGoalText] = useState('');

  function goalInputHandler(enterredText) {
    setGoalText(enterredText);
  }

  function addGoalHandler() {
    onAddGoal(goalText);
    setGoalText('');
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/goal.png')}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={goalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '100%',
    padding: 8,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 24,
    padding: 16,
    backgroundColor: '#311b6b',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },

  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    width: '25%',
    marginHorizontal: 8,
  },
});

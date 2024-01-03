import { View, StyleSheet, Text, Pressable } from 'react-native';

const GoalItem = ({ goal, onDeleteItem }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        onPress={onDeleteItem.bind(this, goal.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{goal.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
});

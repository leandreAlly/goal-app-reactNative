import { View, StyleSheet, Text, Pressable } from 'react-native';

const GoalItem = ({ goal, onDeleteItem }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable onPress={onDeleteItem.bind(this, goal.id)}>
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
  goalText: {
    color: 'white',
    padding: 8,
  },
});

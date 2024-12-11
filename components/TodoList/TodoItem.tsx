import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type TodoItemProps = {
  task: string;
  assignedBy: string;
  date: string;
  completed: boolean;
  onToggle: () => void;
};

export function TodoItem({ task, assignedBy, date, completed, onToggle }: TodoItemProps) {
  return (
    <TouchableOpacity onPress={onToggle} style={styles.container}>
      <View style={[styles.checkbox, completed && styles.checkboxChecked]}>
        {completed && <Text style={styles.checkmark}>✓</Text>}
      </View>
      <View style={styles.content}>
        <Text style={[styles.task, completed && styles.completedTask]}>{task}</Text>
        <Text style={styles.meta}>{`${assignedBy} • ${date}`}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#4CAF50',
    borderRadius: 12,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#4CAF50',
  },
  checkmark: {
    color: 'white',
    fontSize: 16,
  },
  content: {
    flex: 1,
  },
  task: {
    fontSize: 16,
    marginBottom: 4,
  },
  completedTask: {
    textDecorationLine: 'line-through',
    opacity: 0.6,
  },
  meta: {
    fontSize: 12,
    color: '#666',
  },
});
import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScoreCard } from '@/components/HealthScore/ScoreCard';
import { UpcomingAppointment } from '../components/Appointments/UpcomingAppointment';
import { MetricCard } from '../components/HealthMetrics/MetricCard';
import { TodoItem } from '../components/TodoList/TodoItem';
import { ProfileHeader } from '@/components/Header/ProfileHeader';

export default function HomeScreen() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: "Achieve 30k steps every week for blood sugar",
      assignedBy: "Laurie Simons",
      date: "Sep 5, 2024",
      completed: false,
    },
    {
      id: 2,
      task: "Take up health Coaching",
      assignedBy: "Laurie Simons",
      date: "Sep 5, 2024",
      completed: false,
    },
    {
      id: 3,
      task: "Go to a nearby gym and workout for 30 mins",
      assignedBy: "Laurie Simons",
      date: "Sep 5, 2024",
      completed: false,
    },
  ]);

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <ProfileHeader
          name="Ethan Harkinson"
          avatarUrl="https://i.pravatar.cc/150?img=8"
        />

        <ScoreCard score={2740} maxScore={3000} />

        <UpcomingAppointment
          doctor={{
            name: "Laurie Simons",
            title: "MD, DipABLM",
            specialty: "Internal medicine",
            avatarUrl: "https://i.pravatar.cc/150?img=5"
          }}
          date="Thu, December 21, 2024"
          time="10:00 AM PST"
        />

        <View style={styles.metricsContainer}>
          <MetricCard
            title="Steps"
            value={12000}
            status="Updated"
            backgroundColor="#F5F5F5"
          />
          <MetricCard
            title="BMI"
            value={22.50}
            unit="kg/m²"
            status="Updated"
            backgroundColor="#FFF9C4"
          />
        </View>

        <View style={styles.todosContainer}>
          <Text style={styles.todosTitle}>Let's check off your to-dos</Text>
          <Text style={styles.todosProgress}>{completedCount}/{todos.length} Completed</Text>
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              task={todo.task}
              assignedBy={todo.assignedBy}
              date={todo.date}
              completed={todo.completed}
              onToggle={() => toggleTodo(todo.id)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#4051B5',
  },
  container: {
    flex: 1,
  },
  metricsContainer: {
    flexDirection: 'row',
    padding: 8,
    backgroundColor: 'white',
  },
  todosContainer: {
    backgroundColor: 'white',
    padding: 16,
  },
  todosTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  todosProgress: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
});

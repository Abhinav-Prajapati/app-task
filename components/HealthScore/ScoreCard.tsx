import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ProgressBar } from './ProgressBar';

type ScoreCardProps = {
  score: number;
  maxScore: number;
};

export function ScoreCard({ score, maxScore }: ScoreCardProps) {
  const percentage = (score / maxScore);

  return (
    <View style={styles.container}>
      <Text style={styles.scoreTitle}>Health Score</Text>
      <Text style={styles.scoreValue}>{score.toLocaleString()}</Text>
      <Text style={styles.scoreInfo}>This score is for information purposes only.</Text>
      <ProgressBar progress={percentage} />
      <View style={styles.scaleContainer}>
        <Text style={styles.scaleText}>0</Text>
        <Text style={styles.scaleText}>600</Text>
        <Text style={styles.scaleText}>1200</Text>
        <Text style={styles.scaleText}>1800</Text>
        <Text style={styles.scaleText}>2400</Text>
        <Text style={styles.scaleText}>3000</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  scoreTitle: {
    fontSize: 16,
    color: 'white',
    marginBottom: 8,
  },
  scoreValue: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  scoreInfo: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.7)',
    marginBottom: 16,
  },
  scaleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  scaleText: {
    fontSize: 12,
    color: 'white',
  },
});
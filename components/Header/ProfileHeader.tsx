import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

type ProfileHeaderProps = {
  name: string;
  avatarUrl: string;
};

export function ProfileHeader({ name, avatarUrl }: ProfileHeaderProps) {
  return (
    <View style={styles.header}>
      <Image source={{ uri: avatarUrl }} style={styles.avatar} />
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity>
        <Text style={styles.notification}>🔔</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 12,
    flex: 1,
  },
  notification: {
    fontSize: 20,
  },
});
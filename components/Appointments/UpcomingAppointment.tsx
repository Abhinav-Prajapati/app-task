import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

type AppointmentProps = {
  doctor: {
    name: string;
    title: string;
    specialty: string;
    avatarUrl: string;
  };
  date: string;
  time: string;
};

export function UpcomingAppointment({ doctor, date, time }: AppointmentProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.tag}>UPCOMING</Text>
      <View style={styles.appointmentInfo}>
        <View style={styles.doctorInfo}>
          <Text style={styles.doctorName}>{doctor.name}</Text>
          <Text style={styles.doctorSpecialty}>{doctor.specialty}</Text>
          <Text style={styles.appointmentTime}>{`${date} | ${time}`}</Text>
        </View>
        <Image source={{ uri: doctor.avatarUrl }} style={styles.doctorAvatar} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    margin: 16,
  },
  tag: {
    color: '#4CAF50',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  appointmentInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  doctorInfo: {
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  doctorSpecialty: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  appointmentTime: {
    fontSize: 14,
    color: '#666',
  },
  doctorAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
});
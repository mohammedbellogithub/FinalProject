import React from 'react';
import {useUser} from '../../provider/AppState';
import {useNavigation} from '@react-navigation/native';

import {View, Text, Image, StyleSheet, Button} from 'react-native';
const Profile = () => {
  const {user, logoutUser} = useUser();
  const navigation = useNavigation();
  const handleLogout = () => {
    logoutUser;
    navigation.navigate('Login');
  };
  return (
    <>
      {user ? (
        <View style={styles.container}>
          <Image
            source={require('../../assets/image_11.jpg')}
            style={styles.profileImage}
          />
          <Text style={styles.name}>{user.displayName}</Text>
          <View style={styles.aboutContainer}>
            <Text style={styles.contactLabel}>About </Text>
            <Text style={styles.about}>
              Embracing the journey of productivity and personal growth one task
              at a time. With a blend of ambition and determination, I'm
              committed to tackling my to-do list and achieving my aspirations.
              From small victories to big dreams, every step forward counts.
              Let's make each day count and strive for progress together!
            </Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.contactInfo}>
            <Text style={styles.contactLabel}>Phone Number: </Text>
            <Text>+1234567890</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.contactInfo}>
            <Text style={styles.contactLabel}>Email: </Text>
            <Text>{user.emailAddress}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.contactInfo}>
            <Text style={styles.contactLabel}>Location: </Text>
            <Text>Barrie</Text>
          </View>
          <Button title="Logout" onPress={handleLogout} />
        </View>
      ) : (
        <Text>No user signed in.</Text>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 30,
    paddingTop: 50,
  },
  profileRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  status: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  aboutContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
  },

  about: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'center',
    justifyContent: 'flex-start',
  },
  divider: {
    height: 1,
    backgroundColor: 'black',
    width: '80%',
    marginBottom: 10,
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'center',
  },
  contactLabel: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default Profile;

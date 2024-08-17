import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import AppIntro from '../../components/AppIntro';

const NewPassword = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {email} = route.params || {}; // Extract email from route params
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    console.log('Changing password for:', email);
    // Implement password change logic here
    Alert.alert('Success', 'Password changed successfully');
    navigation.navigate('SignIn'); // Navigate back to Sign In screen after successful password change
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <AppIntro />
        <Text style={styles.title}>Create New Password</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter new password"
          placeholderTextColor="#dcdcdc"
          secureTextEntry={true}
          onChangeText={text => setNewPassword(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm new password"
          placeholderTextColor="#dcdcdc"
          secureTextEntry={true}
          onChangeText={text => setConfirmPassword(text)}
        />

        <TouchableOpacity
          style={[
            styles.button,
            (newPassword === '' || confirmPassword === '') &&
              styles.disabledButton,
          ]}
          disabled={newPassword === '' || confirmPassword === ''}
          onPress={handleChangePassword}>
          <Text style={styles.buttonText}>Change Password</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingHorizontal: 30,
  },
  input: {
    height: 50,
    borderWidth: 2,
    marginBottom: 20,
    borderRadius: 8,
    paddingHorizontal: 16,
    width: '80%',
    fontSize: 16,
    color: '#ecf0f1',
    borderColor: '#ecf0f1',
  },
  button: {
    backgroundColor: '#e67e22',
    padding: 15,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#EB984E',
  },
});

export default NewPassword;

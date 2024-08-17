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

const OTPVerification = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {email} = route.params || {}; // Extract email from route params
  const [otp, setOtp] = useState('');

  const handleVerifyOTP = () => {
    if (otp === '') {
      Alert.alert('Error', 'Please enter the OTP');
      return;
    }
    // Implement OTP verification logic here
    console.log('Verifying OTP for:', email);
    navigation.navigate('NewPassword', {email}); // Navigate to NewPassword screen
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <AppIntro />
        <Text style={styles.title}>Verify OTP</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter OTP"
          placeholderTextColor="#dcdcdc"
          onChangeText={text => setOtp(text)}
        />

        <TouchableOpacity
          style={[styles.button, otp === '' && styles.disabledButton]}
          disabled={otp === ''}
          onPress={handleVerifyOTP}>
          <Text style={styles.buttonText}>Verify OTP</Text>
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

export default OTPVerification;

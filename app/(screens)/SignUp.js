import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AppIntro from '../../components/AppIntro';
import api from '../../util/axios';
const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const isValidEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isNullOrWhiteSpace = str => {
    return !str || str.trim() === '';
  };

  const handleSignUp = async () => {
    try {
      if (!isValidEmail(email)) {
        Alert.alert('Error', 'Invalid Email');
        return;
      }

      if (isNullOrWhiteSpace(password)) {
        Alert.alert('Error', 'Invalid password');
        return;
      }

      const response = await api.post('/register', {
        firstName: 'John',
        lastName: name,
        username: email,
        emailAddress: email,
        password: password,
      });
      ß;

      if (response.status === 200) {
        Alert.alert('Success', 'User signed up successfully');
        navigation.navigate('Login');
      }
    } catch (error) {
      console.error('Error:', error.message);
      Alert.alert('Error', 'An error occurred while signing up');
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <AppIntro />
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor="#dcdcdc"
          onChangeText={text => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your email address"
          placeholderTextColor="#dcdcdc"
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#dcdcdc"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
        <Text style={{color: 'white', paddingTop: 5}}>
          Already have an account?{' '}
          <Text
            style={styles.signupText}
            onPress={() => {
              navigation.goBack();
            }}>
            Sign in here
          </Text>
        </Text>
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
  signupText: {
    color: '#3498db',
    marginTop: 10,
    textDecorationLine: 'underline',
    fontSize: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignUp;

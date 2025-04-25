import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { commonStyles } from '../styles/commonStyles';

// MSSV: 2124802010151 - Lê Sỹ Hoài

const ResetPasswordScreen = ({ onNavigate }) => {
  const [email, setEmail] = useState('');

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.title}>Reset Password</Text>
      
      <Text style={commonStyles.subtitle}>
        Please enter your email address. You will receive a link to create a new password via email.
      </Text>
      
      <View style={commonStyles.inputContainer}>
        <TextInput
          style={commonStyles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      
      <TouchableOpacity style={commonStyles.button}>
        <Text style={commonStyles.buttonText}>Send</Text>
      </TouchableOpacity>
      
      <View style={commonStyles.linkContainer}>
        <TouchableOpacity onPress={() => onNavigate('login')}>
          <Text style={commonStyles.link}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResetPasswordScreen;
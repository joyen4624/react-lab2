// App.tsx
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ResetPasswordScreen from './src/screens/ResetPasswordScreen';

// MSSV: 2124802010151 - Lê Sỹ Hoài

type ScreenName = 'login' | 'register' | 'reset';

const App: React.FC = () => {
  // State to control which screen to show
  const [currentScreen, setCurrentScreen] = useState<ScreenName>('login');

  // Handler for navigation between screens
  const handleNavigate = (screenName: ScreenName): void => {
    setCurrentScreen(screenName);
  };

  // Render appropriate screen based on state
  const renderScreen = (): React.ReactNode => {
    switch (currentScreen) {
      case 'login':
        return <LoginScreen onNavigate={handleNavigate} />;
      case 'register':
        return <RegisterScreen onNavigate={handleNavigate} />;
      case 'reset':
        return <ResetPasswordScreen onNavigate={handleNavigate} />;
      default:
        return <LoginScreen onNavigate={handleNavigate} />;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.scrollView}>
        {renderScreen()}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});

export default App;
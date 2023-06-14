import { StyleSheet, Text, View } from 'react-native';

import * as ReactNativeAndroidSms from 'react-native-android-sms';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ReactNativeAndroidSms.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

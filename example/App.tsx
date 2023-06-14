import React,{ useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import * as ReactNativeAndroidSms from "react-native-android-sms";

export default function App() {

  const [phoneNumber, setPhoneNumber] = useState("")
  const [message, setMessage] = useState("");

  const onSend = () => {
    ReactNativeAndroidSms.sendTextMessage(phoneNumber, message);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Phone number</Text>
      <TextInput
        value={phoneNumber}
        keyboardType="numeric"
        placeholder="Phone number"
        onChangeText={setPhoneNumber}
        style={styles.textInput}
      />

      <Text style={styles.label}>Message</Text>
      <TextInput
        value={message}
        placeholder="Message"
        onChangeText={setMessage}
        style={styles.textInput}
      />

      <Button title="Send SMS" onPress={onSend} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: "#555555",
    marginTop: 18,
  },
  textInput:{
    textDecorationLine: "underline",
  },
});

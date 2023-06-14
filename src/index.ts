import ReactNativeAndroidSmsModule from "./ReactNativeAndroidSmsModule";

export function sendTextMessage(phoneNumber:string, message:string): void {
  return ReactNativeAndroidSmsModule.sendTextMessage(phoneNumber, message);
}

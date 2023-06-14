import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ReactNativeAndroidSms.web.ts
// and on native platforms to ReactNativeAndroidSms.ts
import ReactNativeAndroidSmsModule from './ReactNativeAndroidSmsModule';
import ReactNativeAndroidSmsView from './ReactNativeAndroidSmsView';
import { ChangeEventPayload, ReactNativeAndroidSmsViewProps } from './ReactNativeAndroidSms.types';

// Get the native constant value.
export const PI = ReactNativeAndroidSmsModule.PI;

export function hello(): string {
  return ReactNativeAndroidSmsModule.hello();
}

export async function setValueAsync(value: string) {
  return await ReactNativeAndroidSmsModule.setValueAsync(value);
}

const emitter = new EventEmitter(ReactNativeAndroidSmsModule ?? NativeModulesProxy.ReactNativeAndroidSms);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ReactNativeAndroidSmsView, ReactNativeAndroidSmsViewProps, ChangeEventPayload };

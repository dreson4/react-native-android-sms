import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ReactNativeAndroidSmsViewProps } from './ReactNativeAndroidSms.types';

const NativeView: React.ComponentType<ReactNativeAndroidSmsViewProps> =
  requireNativeViewManager('ReactNativeAndroidSms');

export default function ReactNativeAndroidSmsView(props: ReactNativeAndroidSmsViewProps) {
  return <NativeView {...props} />;
}

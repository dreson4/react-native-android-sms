import * as React from 'react';

import { ReactNativeAndroidSmsViewProps } from './ReactNativeAndroidSms.types';

export default function ReactNativeAndroidSmsView(props: ReactNativeAndroidSmsViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}

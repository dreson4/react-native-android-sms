package dreson4.androidsms

import android.Manifest
import android.app.Activity
import android.os.Build
import android.telephony.SmsManager
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ReactNativeAndroidSmsModule : Module() {

  override fun definition() = ModuleDefinition {
    Name("ReactNativeAndroidSms")


    Function("sendTextMessage") { phoneNumber: String, message: String ->
      val ctx = requireNotNull(appContext.reactContext)
      val smsManager: SmsManager = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
        ctx.getSystemService(SmsManager::class.java)
      } else {
        SmsManager.getDefault()
      }

      smsManager.sendTextMessage(phoneNumber, null, message, null, null)
    }
  }
}

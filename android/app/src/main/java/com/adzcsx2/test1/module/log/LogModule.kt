package com.adzcsx2.test1.module.log

import android.util.Log
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class LogModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "LogModule"
    }

    @ReactMethod
    fun printLog(message: String) {
        Log.d("LogModule", message)
    }
}

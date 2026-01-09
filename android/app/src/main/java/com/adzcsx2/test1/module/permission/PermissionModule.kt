package com.adzcsx2.test1.module.permission

import android.util.Log
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.bridge.WritableNativeMap
import com.hjq.permissions.XXPermissions
import com.hjq.permissions.permission.PermissionLists
import com.hjq.permissions.permission.base.IPermission

class PermissionModule(reactContext: ReactApplicationContext) :
        ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "PermissionModule"
    }

    private fun getPermissionFromString(permission: String): IPermission? {
        // 支持两种格式: "CAMERA" 或 "android.permission.CAMERA"
        val permissionName =
                if (permission.startsWith("android.permission.")) {
                    permission.removePrefix("android.permission.")
                } else {
                    permission
                }

        return when (permissionName) {
            "CAMERA" -> PermissionLists.getCameraPermission()
            "RECORD_AUDIO" -> PermissionLists.getRecordAudioPermission()
            "READ_EXTERNAL_STORAGE" -> PermissionLists.getReadExternalStoragePermission()
            "WRITE_EXTERNAL_STORAGE" -> PermissionLists.getWriteExternalStoragePermission()
            "READ_PHONE_STATE" -> PermissionLists.getReadPhoneStatePermission()
            "CALL_PHONE" -> PermissionLists.getCallPhonePermission()
            "READ_CONTACTS" -> PermissionLists.getReadContactsPermission()
            "WRITE_CONTACTS" -> PermissionLists.getWriteContactsPermission()
            "SEND_SMS" -> PermissionLists.getSendSmsPermission()
            "READ_SMS" -> PermissionLists.getReadSmsPermission()
            else -> null
        }
    }

    @ReactMethod
    fun requestPermissions(permissions: ReadableArray, promise: Promise) {
        val activity = reactApplicationContext.currentActivity
        if (activity == null) {
            promise.reject("NO_ACTIVITY", "Activity is null")
            return
        }

        val iPermissions: MutableList<IPermission> = mutableListOf()

        for (i in 0 until permissions.size()) {
            permissions.getString(i)?.let { perm ->
                getPermissionFromString(perm)?.run { iPermissions.add(this) }
            }
        }

        XXPermissions.with(activity).permissions(iPermissions).request { grantedList, deniedList ->
            val result = WritableNativeMap()

            grantedList.forEach {
                Log.e("Permission", "Granted: ${it?.permissionName}")
                it?.permissionName?.let { name -> result.putString(name, "granted") }
            }

            deniedList.forEach {
                Log.e("Permission", "Denied: ${it?.permissionName}")
                it?.permissionName?.let { name -> result.putString(name, "denied") }
            }

            promise.resolve(result)
        }
    }

    @ReactMethod
    fun checkPermissions(permissions: ReadableArray, promise: Promise) {
        val activity = reactApplicationContext.currentActivity
        if (activity == null) {
            promise.reject("NO_ACTIVITY", "Activity is null")
            return
        }

        val result = WritableNativeMap()
        for (i in 0 until permissions.size()) {
            permissions.getString(i)?.let { perm ->
                getPermissionFromString(perm)?.let { permObj ->
                    val isGranted = XXPermissions.isGrantedPermission(activity, permObj)
                    result.putString(perm, if (isGranted) "granted" else "denied")
                }
            }
        }
        promise.resolve(result)
    }
}

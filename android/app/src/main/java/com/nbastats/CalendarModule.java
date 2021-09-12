package com.nbastats;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
// import com.facebook.react.context;
// import com.facebook.react.context.PackageManager;
import java.util.Map;
import java.util.HashMap;
import android.util.Log;
import android.content.Context;
import android.content.pm.PackageManager;

public class CalendarModule extends ReactContextBaseJavaModule {
  // private final static Logger LOGGER = Logger.getLogger(CalendarModule.class.getName());

  private Context context;
  CalendarModule(ReactApplicationContext context) {
      super(context);
      this.context = context;
  }

   public String getName() {
     return "CalendarModule";
   }

  @ReactMethod
  public void createCalendarEvent(String name, String location) {
    // LOGGER.setLevel(Level.INFO);
    // LOGGER.info("CalendarModule: Create event called with name: " + name
    // + " and location: " + location);
    Log.d("CalendarModule", "Create event called with name: " + name
    + " and location: " + location);
  }

  private boolean isPackageInstalled(String packageName, PackageManager packageManager) {
    try {
        packageManager.getPackageInfo(packageName, 0);
        return true;
    } catch (PackageManager.NameNotFoundException e) {
        return false;
    }
  }

  @ReactMethod
  public void isWhatsAppInstalled(Callback callBack) {
    PackageManager pm = this.context.getPackageManager();
    callBack.invoke(this.isPackageInstalled("com.whatsapp", pm));
  }
}
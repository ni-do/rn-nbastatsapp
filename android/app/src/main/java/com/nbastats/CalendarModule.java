package com.nbastats;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import android.util.Log;
// import java.util.logging.Logger;
// import java.util.logging.Level;



public class CalendarModule extends ReactContextBaseJavaModule {
  // private final static Logger LOGGER = Logger.getLogger(CalendarModule.class.getName());

   CalendarModule(ReactApplicationContext context) {
       super(context);
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
}
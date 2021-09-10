package com.nbastats;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
// import java.Log;

public class CalendarModule extends ReactContextBaseJavaModule {
   CalendarModule(ReactApplicationContext context) {
       super(context);
   }

   public String getName() {
     return "CalendarModule";
   }

   public void createCalendarEvent(String name, String location) {
    // Log.d(...)
    System.out.println("CalendarModule", "Create event called with name: " + name
    + " and location: " + location);
   }
}
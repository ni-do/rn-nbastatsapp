//
//  RCTCalendarModule.m
//  NBAStats
//
//  Created by Niklas Donath on 11.09.21.
//
#import "RCTCalendarModule.h"
#import <React/RCTLog.h>
#import <Foundation/Foundation.h>
// RCTCalendarModule.m

@implementation RCTCalendarModule

// To export a module named RCTCalendarModule
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(createCalendarEvent:(NSString *)name location:(NSString *)location)
{
 RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

@end

// As an air traffic controller
// To get passengers to a destination
// I want to instruct a plane to land at
//   an airport and confirm that it has landed

// As an air traffic controller
// To get passengers to a destination
// I want to instruct a plane to take off from
//   an airport and confirm that it is no longer in the airport

// As an air traffic controller
// To ensure safety
// I want to prevent takeoff when weather is stormy

'use strict';

describe('Feature Test', function() {
  var plane;
  var airport;
  var weather;

  beforeEach(function() {
    plane = new Plane()
    airport = new Airport(weather)
    weather = new Weather()
  });

  it('planes can be instructed to land at an airport', function() {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it('planes can be instructed to takeoff', function() {
    plane.land(airport);
    plane.takeoff();
    expect(airport.planes()).not.toContain(plane);
  });

  it('blocks takeoff and landing when weather is stormy', function(){
    plane.land(airport)
    spyOn(airport,'isStormy').and.returnValue(true);
    expect(function(){ plane.takeoff();}).toThrowError('cannot takeoff during storm');
    expect(airport.planes()).toContain(plane);
  });
});

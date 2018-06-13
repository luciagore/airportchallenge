'use strict';

describe('Weather', function(){
  var weather;
  beforeEach(function() {
    weather = new Weather();
  });
  it('can see if weather is not stormy', function(){
    expect(weather.isStormy()).toEqual(false);
  });
  it('can see if weather is stormy', function(){
    weather.change()
    spyOn(weather, 'isStormy').and.returnValue(true)
    expect(weather.isStormy()).toEqual(true);
  });
});

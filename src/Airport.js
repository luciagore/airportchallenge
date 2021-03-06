'use strict';

function Airport(weather){
  this._hangar = [];
  this._weather = typeof weather !== 'undefined' ? weather : new Weather();
}

Airport.prototype.planes = function(){ return this._hangar; };
Airport.prototype.clearForLanding = function(plane) {
  if(this.isStormy()) {
    throw new Error('cannot land during storm');
  }
  this._hangar.push(plane);
};
Airport.prototype.clearForTakeOff = function(plane) {
  if(this.isStormy()) {
    throw new Error('cannot takeoff during storm');
  }
  this._hangar.pop();
};
Airport.prototype.isStormy = function() {
  return this._weather.isStormy();
};

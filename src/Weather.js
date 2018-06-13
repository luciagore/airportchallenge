'use strict';

function Weather(){
  this._weather = false
}

Weather.prototype.isStormy = function () {
  return this._weather;
};

Weather.prototype.change = function () {
  this._weather = true
};

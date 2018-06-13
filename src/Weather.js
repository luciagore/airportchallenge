'use strict';

function Weather(){
  this._weather = false
}

Weather.prototype.isStormy = function () {
  return this._weather;
};

Weather.prototype.change = function () {
  if(Math.floor(Math.random()*10) >7) {this._weather = true}
};

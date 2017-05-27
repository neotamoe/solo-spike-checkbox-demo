
var myApp = angular.module('myApp',['ngMaterial','ngMessages','ngMdIcons']);

myApp.controller('AppCtrl', function() {
  var vm = this;
    vm.items = [1,2,3,4,5];
      vm.selected = [];

      vm.toggle = function (item, list) {
        var idx = list.indexOf(item);
        if (idx > -1) {
          list.splice(idx, 1);
        }
        else {
          list.push(item);
        }
      };

      vm.exists = function (item, list) {
        return list.indexOf(item) > -1;
      };
});


/**
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that can be foundin the LICENSE file at http://material.angularjs.org/HEAD/license.
**/

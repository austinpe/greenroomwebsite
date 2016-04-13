'use strict';

/* exported app */

//Green Room Brewing
//Copyright 2015 Austin Philipp-Edmonds
//greenroombrewing.com

var app = angular.module('greenRoom', [
    'ngAnimate',
    'ngTouch',
    //'ui.router',
    // 'ui.bootstrap',
    // 'duScroll',
    'lightningUpdateClient'
    // 'ngMap'

    //'firebase'
]);

// app.value('duScrollOffset', 50);

app.run([function() {
    $('a').smoothScroll();
    FastClick.attach(document.body);


}]);

app.filter('fixCaseAndIPA', function(){
    return function(s){
        s = s.replace('I.P.A.', 'IPA');
        return _.startCase(s);
    }
});

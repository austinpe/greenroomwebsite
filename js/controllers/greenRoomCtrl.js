'use strict';

app.controller("greenRoomCtrl", ['$scope', '$filter', function($scope, $filter){


    $scope.loaded = true;
    angular.element(document).ready(function(){
        $scope.loaded = true;

        //console.log($location);
        //console.log($location.$$path.slice(1));
        //$uiViewScroll('#ontap');


        //$location.hash($location.$$path.slice(1));
        //$anchorScroll();
        //switch($location.path)
    });

    //--------- TAP ROOM INFO ------------
    //-----------------------------------------------------------
    var dateToday = Date.now();
    var currentHour = parseInt($filter('date')(dateToday, 'H'));
    var currentDay = $filter('date')(dateToday, 'EEEE');

    //Override For Testing
    //var currentHour = 12;
    //var currentDay = "Sunday";

    $scope.isOpen = function(){
        var hoursOfOperation = {
            'Monday': false,
            'Tuesday': [16, 17, 18, 19, 20, 21, 22, 23],
            'Wednesday': [16, 17, 18, 19, 20, 21, 22, 23],
            'Thursday': [16, 17, 18, 19, 20, 21, 22, 23],
            'Friday': [16, 17, 18, 19, 20, 21, 22, 23],
            'Saturday': [0, 1, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            'Sunday': [0, 1, 12, 13, 14, 15, 16, 17, 18, 19, 21]
        };
        return _.contains(hoursOfOperation[currentDay], currentHour);
    };


    //--------- On Tap Now ------------
    //-----------------------------------------------------------

    //var ref = new Firebase("https://greenroombrewing.firebaseio.com/");

    //$scope.permItems = $firebaseArray(ref.child('Permanent'));

    //$scope.seasonalItems = $firebaseArray(ref.child('Seasonals'));

    //$scope.guestItems = $firebaseArray(ref.child('Guest'));

    //$scope.sizeOfGuestItems = function(items){
    //    return _.size(_.filter(items, 'onTapNow', true));
    //};


    //--------- About Beer ------------
    //-----------------------------------------------------------
    $scope.permBeerInfo = {
        'headHigh': {
            'name': 'Head High',
            'style': 'IPA',
            'ibu': 60,
            'abv': 6.0,
            'description': 'This is our flagship IPA and most popular beer! Head High is an aggressively-hopped West Coast IPA brewed with cascade and amarillo hops, perfectly balanced by a strong malt backbone.'
        },
        'doubleOverhead': {
            'name': 'Double Overhead',
            'style': 'Double IPA',
            'ibu': 80,
            'abv': 9.1,
            'description': "This double IPA is a challenging, yet rewarding experience, just like the wave it's named after. The complex, resinousy hop aroma and signature over-the-top hop bitterness makes this a favorite in our taproom."
        },
        'pabloBeach': {
            'name': 'Pablo Beach',
            'style': 'Pale Ale',
            'ibu': 40,
            'abv': 5.0,
            'description': "Pablo is a remarkably balanced and flavorful Pale Ale which makes for the perfect beach beer. 100% of the unique hop flavor and aroma comes from ZYTHOS hops, creating a citrusy all-day drinkability."
        },
        'diamond': {
            'name': 'Diamond',
            'style': 'Belgian-style Wit',
            'ibu': 15,
            'abv': 5.0,
            'description': "This beer is our take on a Belgian-style witbier, brewed with a delicate amount of orange peel and coriander for a light, refreshing experience. This beer is a favorite among our light beer drinkers who don't want to compromise on taste."
        },
        'undertow': {
            'name': 'Undertow',
            'style': 'Barleywine',
            'ibu': 60,
            'abv': 9.0,
            'description': "Brewed with Orange Blossom Honey, this brew is both fruity and sweet, yet packs a big punch at 9.0 ABV. A favorite among many of our customers for its complex yet refreshing challenge to the palate."
        },
        'shaka': {
            'name': 'Shaka',
            'style': 'Oatmeal Stout',
            'ibu': 25,
            'abv': 6.2,
            'description': "Brewed with a roasted malt that gives this brew it's dark color and roasted flavor. The oatmeal gives it a creamy feel for a solid medium body stout."
        },
        'countShakula': {
            'name': 'Count Shakula',
            'style': 'Chocolate Oatmeal Stout',
            'ibu': 25,
            'abv': 6.2,
            'description': "Just like Shaka... but with chocolate!"
        }
    };


    //--------- Events ------------
    //-----------------------------------------------------------
    //$scope.upcomingBeer = $firebaseArray(ref.child('Upcoming').child('Beer'));

    //$scope.upcomingMusic = $firebaseArray(ref.child('Upcoming').child('Music'));

    //$scope.upcomingEvents = $firebaseArray(ref.child('Upcoming').child('Events'));


    //--------- Photos ------------
    //-----------------------------------------------------------
    $scope.barImages = [

    ];


    //--------- Contact ------------
    //-----------------------------------------------------------

    /*uiGmapGoogleMapApi.then(function(maps) {

        $scope.map = {
            center: {
                latitude: 30.2900218,
                longitude: -81.3926046
            },
            zoom: 16,
            options: {
                disableDefaultUI: !0,
                mapTypeControl: !1,
                tilt: 45
            }
        };

        $scope.marker = {
            id: 0,
            coords: {
                latitude: 30.290711,
                longitude: -81.392602
            },
            options: {
                animation: 2
            }
        }

    });*/




}]);

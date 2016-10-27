var app = angular.module("bloc-chat", ["firebase"]);
app.controller("appCtrl", function ($scope, $firebaseArray) {
    var refMsg = firebase.database().ref().child("messages");
    var refRoom = firebase.database().ref().child("rooms");
    
    $scope.rooms = $firebaseArray(refRoom);
    // create a synchronized array
    $scope.messages = $firebaseArray(refMsg);
    // add new items to the array
    // the message is automatically added to our Firebase database!
    $scope.addMessage = function () {
        $scope.messages.$add({
            text: $scope.newMessageText
        });
    };
    // click on `index.html` above to see $remove() and $save() in action

    $scope.addRoom = function () {
        $scope.rooms.$add({
            text: $scope.newRoomName
        });
    };


});
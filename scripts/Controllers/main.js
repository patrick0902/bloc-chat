var app = angular.module("bloc-chat", ["firebase"]);
app.controller("appCtrl", function ($scope, $cookies, $window, $firebaseArray) {
    var ref = new $window.Firebase('https://bloc-chat-4a7cb.firebaseio.com');
    
        //USERS
    $scope.addUser = function (nickname) {
      console.log(nickname);
        $cookies.blocChatCurrentUser = nickname;
        $scope.newNickname = '';
      
    };

    $scope.addRoom = function (newRoomName) {
      $scope.rooms.$add({name: newRoomName});

      $scope.newRoomName = '';
    };

    //MESSAGES
    $scope.getMessagesForRoom = function (room) {
      $scope.currentRoom = room;
      $scope.currentRoomName = room.name;
      var currentRoomMessagesRef = new $window.Firebase($scope.rooms.$ref() + '/' + room.$id + '/messages/');
      $scope.roomMessages = $firebaseArray(currentRoomMessagesRef);
    };

    $scope.addMessageToRoom = function (messageText) {
      var nickname = $cookies.blocChatCurrentUser;
      var time = $window.moment().format('h:mm a');

      $scope.roomMessages.$add({name: nickname, message: messageText, time: time});
      $scope.newMessageText = '';
    };
});
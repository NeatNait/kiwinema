function KiwinemaCtrl($scope, $http) {

  $scope.questions = [];

  Load();

  /* Return info to the server */
  $scope.toServer = {
    init: "",
    end: "",
    diff: "",
    selected:""
  };

  $scope.game = {
    gameId: "",
    player1: "",
    player2: "",
    winner: ""
  };

  /* Inits */
  $scope.actualRound = 0;
  $scope.toServer.init = new Date();
  $scope.selectedItem = -1;

  $scope.loadQuestions = function() {
    Load();
  };

 $scope.random = function() {
    return 0.5 - Math.random();
  };

  function Load(){
    $http({method: 'GET', url: 'http://192.168.1.108:8081/'}).
    success(function(data, status) {
        $scope.questions = data.questions;

        angular.forEach($scope.questions, function(value, key){
          value.answers = value.answers.sort(function() { return Math.round(Math.random());});
        });

      }).
      error(function(data, status) {
        $scope.questions = data.questions || "Request failed";
    });
  }

  $scope.clickAnswer = function(index) {

    if($scope.selectedItem != -1) {
      return;
    }

    $scope.toServer.end = new Date();
    $scope.toServer.diff = $scope.toServer.end - $scope.toServer.init;

    $scope.selectedItem = index;


  };

  $scope.nextRound = function() {

    $scope.toServer.init  = new Date();
    $scope.toServer.end  = new Date();
    $scope.toServer.diff = new Date();


    $scope.selectedItem = -1;
    $scope.actualRound++;
    $scope.selected = "";
  };


  $scope.joinGame = function() {
    if($scope.game.player1 == "") {
      $scope.game.player1 = $scope.yourNick;
    }else if ($scope.game.player2 == "" ) {
      $scope.game.player2 = $scope.yourNick;
    } else {
      alert("No hay sitio disponible");
    }

    console.log($scope.game);
  };


}



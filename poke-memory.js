angular.module("pokeApp", [])
  .controller("pokeController", pokeFunction)
  .factory("PokeFactory", pokeFactory)


pokeFunction.$inject = ["PokeFactory",];

function pokeFunction(pokeFactory){
  var pCtrl = this;
  
  
  pCtrl.pokeMasterArray = [];
  pCtrl.randomNum;
  pCtrl.pokeArray = [];
//   
  pCtrl.randomInit = function(){
    for (var i = 0; i < 8; i++) {
      pCtrl.pokeArray.push(pCtrl.randomNum = Math.floor(Math.random() * (712 - 1) + 1))
      for (var z = 0; z < 8; z++) {
        if(i===z){
        }else{
          if(pCtrl.pokeArray[i]===pCtrl.pokeArray[z]){
            pCtrl.randomInit()
          }
        }
      }
    }
  }
  pCtrl.randomInit()
//   
  
  var shuffleFix = _.shuffle;
  pCtrl.pokeMasterArray = pCtrl.pokeMasterArray.concat(pCtrl.pokeArray);
  pCtrl.pokeMasterArray = pCtrl.pokeMasterArray.concat(pCtrl.pokeArray);
  shuffleFix = (_.shuffle(pCtrl.pokeMasterArray));
  pCtrl.pokeMasterArray = shuffleFix;
  console.log(pCtrl.pokeMasterArray)
  
  pCtrl.cardClick = function(index){
    $(".card").flip();
    
  }
  
//   pCtrl.getPokemon = function(pokemonID){
//     pokeFactory
//     .getPokemon(pokemonID)
//     .then(function(response){
//       console.log(response)
//       pCtrl.pokemon = response.data
//     })
  
//   }
}


pokeFactory.$inject = ["$http"]

function pokeFactory($http){
  
  var baseURI = "http://pokeapi.co/api/v2";
  
  function getPokemon (pokemonID) {
    
    return $http({
      method : 'GET',
      url    : baseURI + '/pokemon/' + pokemonID
    })
    
  }
  
  return {
    getPokemon : getPokemon
  }
}























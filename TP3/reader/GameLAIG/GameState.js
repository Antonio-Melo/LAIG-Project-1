/*
  Class that represents a GameState in the scene
*/
 function GameState(scene) {
 	CGFobject.call(this,scene);

  this.scene = scene;
  //Game elements
  this.HexBoard = new HexBoard(this.scene);
  this.houses = new GameHouses(this.scene);
  var teste = makeRequest("handshake");
  console.debug(teste);
 };

GameState.prototype.display = function(){
  this.HexBoard.display();
  this.houses.display();
}

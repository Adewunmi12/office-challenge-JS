class Room{
  constructor(){
    this.room_available = true;
    
  }

  available(){
    if(this.room_available !== true){
      throw "room has already been entered";
    }
    else{
    return this.room_available;}
  }

  unavailable(){
    return this.room_available = false
  }

  
}
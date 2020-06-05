describe("Room", function(){
  var room;

  beforeEach(function(){
    room = new Room();
  });

  it("checks if a meeting room is avialable", function(){
    expect(room.available()).toEqual('true');
  });

  // it("checks if a meeting room is unavailable", function(){
  //   room_availablity = 'false'
  //   expect(room.available).toEqual('false');
  // });


});
describe("Room", function(){
  var room;

  beforeEach(function(){
    room = new Room();
  });

  // As a staff member
  // In order to have meeting,
  // I would like to check if the meeting room is available or not (true or false)

  it("checks if a meeting room is avialable", function(){
    expect(room.available()).toEqual(true);
  });

  it("checks if a meeting room is unavailable", function(){
    room_availablity = 'false'
    expect(room.unavailable()).toEqual(false);
  });

  // As a staff member
  // In order to have a meeting,
  // I would like to be able to enter the meeting room and this should make it unavailable

  it("makes a room unavailable when somebody enters it", function(){
    room_available = 'false'
    expect(room.unavailable()).toEqual(false);
  });

  // As a staff member
  // In order to end a meeting
  // I would like to be able to leave the meeting room and this should make it available again

  it("makes a room available when somebody leaves it", function(){
    expect(room.available()).toEqual(true);
  });

  // As a staff member
  // So that I can avoid interrupting a meeting
  // I would like an error if I try to use a room that has already been entered

  it("nobody can enter a room if somebody has already", function(){
    expect(function(){room.available();}).toThrow("room has already been entered")
  });

  // As a staff member
  // In order to distinguish between meeting rooms
  // I would like my meeting room to have a name

  it("show")
});
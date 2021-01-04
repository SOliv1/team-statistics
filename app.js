const team = {
  _players: [
     {
        firstName: "James", 
        lastName: "Oliver",
        age: 22
     },
     {
        firstName: "Andrew", 
        lastName: "Begg", 
        age: 23
     },
     {
        firstName: "Nicholas", 
        lastName: "Kerr", 
        age: 24
     }
  ],
  _games: [
     {
       opponent: "Broncos",
       teamPoints: 44,
       opponentPoints: 29
    },
    {
       opponent: "Wolves",
       teamPoints: 42,
       opponentPoints: 28
    },
    {
       opponent: "Lions",
       teamPoints: 48,
       opponentPoints: 35
    }
  ],
  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };

    this.players.push(player);
  },
  addGame(opp, myPts, oppPts) {
    const game = {
      opponent: opp,
      teamPoints: myPts,
      opponentPoints: oppPts
    };
     this.games.push(game);
  }
}
 
team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Leslie", "Lisa", 48);
team.addPlayer("Bugs", "Bunny", 78);

//console.log(team.players);

team.addGame('Sea Lions', 100, 98);
team.addGame('Wolves', 56, 94);
team.addGame('Tigers', 105, 90);

console.log(team.games);

    
        
    
  



  
    
  


  

 
 


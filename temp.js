const toni = {
    bestFriend: "Jochen",
    age: 23,
    sexPositions: [
      { id: 1, position: "doggy" },
      { id: 2, position: "spoon" },
      { id: 3, position: "horse" },
    ],
    message() {
      return `${this.bestFriend} is ${this.age} years old.`;
    },
  };
  
  function message({ age, bestFriend }) {
    console.log(`${bestFriend} is ${age}`);
  }
  
  message(toni);
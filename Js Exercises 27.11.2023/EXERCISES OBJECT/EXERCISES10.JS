let carParts = {
    engine: 10,
    tires: 20,
    brakes: 15,
    headlights: 8,
    sparkPlugs: 12
  };
  
  function addParts(numberToAdd, parts) {
    for (let part in parts) {
      parts[part] += numberToAdd;
    }
  }
  
  console.log("Before adding:");
  console.log(carParts);
  
  addParts(5, carParts);
  
  console.log("\nAfter adding 5 to each part:");
  console.log(carParts);
  
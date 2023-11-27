function createUser(name, address, bodyDimensions) {
    let userPrototype = {
      introduce() {
        console.log(`My name is ${this.name}, I live at ${this.address}, and I have a body with dimensions: ${JSON.stringify(this.bodyDimensions)}`);
      },
      moveUserInfoTo(otherUser) {
        otherUser.name = this.name;
        otherUser.address = this.address;
        otherUser.bodyDimensions = this.bodyDimensions;
      },
      getFriends() {
        console.log("Friends: N/A");
      },
      getPartner() {
        console.log("Partner: N/A");
      }
    };
  
    return Object.create(userPrototype, {
      name: { value: name },
      address: { value: address },
      bodyDimensions: { value: bodyDimensions }
    });
  }
  
  let usuario1 = createUser('John Doe', '123 Main St', { height: '180cm', weight: '75kg' });
  
  let usuario2 = Object.create(Object.getPrototypeOf(usuario1), Object.getOwnPropertyDescriptors(usuario1));
  
  usuario1.moveUserInfoTo(usuario2);
  
  usuario1.getFriends();
  
  usuario1.getPartner();
  
  usuario1.introduce();
  usuario2.introduce();
  
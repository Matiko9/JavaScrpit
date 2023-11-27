// a)
let user = {};

// b)
user.name = 'John';

// c)
user.surname = 'Smith';

// d)
user.name = 'Pete';

// e)
delete user.name;

// f)
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}
console.log(isEmpty(user));

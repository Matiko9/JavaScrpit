//in the given code, user.ref will refer to a global object (e.g. window in a browser environment), not to the user object itself. As a result, user.ref.name will throw an error because user.ref is equivalent to this,
//which refers to the global object and the global object
//no name property defined.
function User(name, lastName, birthday) {
  this._createDate = new Date();
  this._name = name;
  this._lastName = lastName;
  this._birthday = birthday;

  this.setName = function(value){
    if(typeof value === "string" && value.length > 1){
      this._name = value;
      return true;
    }
    else {
      return false;
      /*
      return {
        success: false,
        message: "Имя должно быть строкой больше 1 буквы"
      }
      */
    }
  }

  this.getAge = function(){

  };
}
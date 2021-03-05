const modal1 = {
  _heading: "Акция",
  _content: "",
  _isOpen: false,
  setHeading(value){
    if(typeof value === "string"){
      this._heading = value;
      return true;
    }
    else {
      return "Заголовок может быть только строкой"
    }
  },
  open(){

  },
  close(){

  }
};

// modal1.heading = [];
console.log(modal1.setHeading("Скидка"));
console.log(modal1.setHeading(444));
const modal2 = {
  heading: "",
  content: "",
  open(){

  },
  close(){

  }
};

const modal3 = {
  heading: "",
  content: "",
  open(){

  },
  close(){

  }
};
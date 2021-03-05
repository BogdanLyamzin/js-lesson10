{
  name: "",
  _price: "",
  _id: "",
  calcDelivery(){
    return this.price * 0.01;
  },
  setPrice(){

  }
};

product_notebook {
  display: "",
  batter: "",
  calcDelivery(){
    return this.price * 0.05
  }
};

 product_washMachine {
  weight: ""
};
  const Wrapper = document.createElement("div");
  Wrapper.id = "new_Wrapper";
  Wrapper.style.display = "flex";
  Wrapper.style.justifyContent = "flex-start";
  Wrapper.style.marginTop = "200px"
  document.body.append(Wrapper);

  const newStock = document.createElement("button");
  newStock.innerText = "inStock";
  newStock.className = "new_Stock";
  newStock.style.height = "60px";
  newStock.style.width = "60px";
  newStock.style.borderRadius = "50px";
  Wrapper.append(newStock);
  newStock.addEventListener("click",() => {
    f1.getCheck();
  })

  const newFind = document.createElement("button");
  newFind.innerText = "Find";
  newFind.className = "new_Find";
  newFind.style.height = "60px";
  newFind.style.width = "60px";
  newFind.style.borderRadius = "50px";
  Wrapper.append(newFind);
  newFind.addEventListener("click",() => {
    console.log(f1.getFind());
    console.log(f1.getPlace());
    console.log(f2.getFind());
    console.log(f2.getPlace());
  })

  const newWeight = document.createElement("button");
  newWeight.innerText = "Weight";
  newWeight.className = "new_Weight";
  newWeight.style.height = "60px";
  newWeight.style.width = "60px";
  newWeight.style.borderRadius = "50px";
  Wrapper.append(newWeight);
  newWeight.addEventListener("click",() => {
    console.log(f1.getWeight());
    console.log(f2.getWeight());
  })

  const newBuy = document.createElement("button");
  newBuy.innerText = "Buy";
  newBuy.className = "new_Buy";
  newBuy.style.height = "60px";
  newBuy.style.width = "60px";
  newBuy.style.borderRadius = "50px";
  Wrapper.append(newBuy);
  newBuy.addEventListener("click",() => {
    console.log(f1.getBuy());
    console.log(f2.getBuy());
  })
    const NewTable = document.querySelector("#new_Table");
    NewTable.style.marginLeft = "600px";
    NewTable.style.border = "1px solid black";
    NewTable.style.borderCollapse = "collapse";

  const rowName = document.querySelector("#row_Name");
  rowName.style.width = "400px";
  rowName.style.height = "30px";
  rowName.style.border = "1px solid black";

  const rowWeight = document.querySelector("#row_Weight");
  rowWeight.style.width = "400px";
  rowWeight.style.height = "30px";
  rowWeight.style.border = "1px solid black";

  const rowPrice = document.querySelector("#row_Price");
  rowPrice.style.width = "400px";
  rowPrice.style.height = "30px";
  rowPrice.style.border = "1px solid black";



  class Food {
  constructor (name, weight, price, place) {
    this.name = name;
    this.weight = weight;
    this.price = price;
    this.place = place;
  }

  getFind () {
    document.getElementById("#new_Table");
    return this.name + ":" + this.price + "(Uah/1kg)";
  }
  getWeight () {
    return this. name + ":" + this.weight + "(Kg)";
  }
  getPlace () {
    return this.name + ":" + this.place + "(Place)";
  }
  getBuy () {
    return this.price * this.weight + "Uah" + "(Bill)";
  }
  getCheck () {
    const arr = ['Orange', 'Apple', 'Pasta','Sausages','Sardine','Potato','Tomato','Cucumber',
      'Liver','Bacon','Turkey','Orange','Banana', 'Tea','Coffee','Parmesan', 'Baquette','Yogurt'];
    arr.forEach(element => {
      console.log(element);
    });
  }
}

 const f1 = new Food( 'Orange', 3, 59, 'Fruits department');

  const f2 = new Food( 'Apple', 10, 79, 'Fruits department');

  const f3 = new Food("Pasta", 3, 40, "Grocery Department");

  const f4 = new Food("Sausages", 30, 200, "Meat Department");

  const f5 = new Food("Sardine", 35, 300, "Fish Department");

  const f6 = new Food("Potato", 3, 40, "Vegetables Department");


  const f7 = new Food("Tomato", 30, 200, "Vegetables Department");

  const f8 = new Food("Cucumber", 35, 300, "Vegetables Department");


  const f9 = new Food("Liver", 3, 40, "Meat Department");


  const f10 = new Food("Bacon", 30, 200, "Meat Department");


  const f11 = new Food("Turkey", 35, 300, "Meat Department");


  const f12 = new Food("Orange", 3, 40, "Fruit Departament");


  const f13 = new Food("Banana", 30, 200, "Fruit Departament");


  const f14 = new Food("Tea", 35, 300, "Drinks Department");


  const f15 = new Food("Coffee", 35, 300, "Drinks Department");


  const f16 = new Food("Parmesan", 35, 300, "Delicatessen Department");


  const f17 = new Food("Baquette", 35, 300, "Breads and flours Department");


  const f18 = new Food("Yogurt", 35, 300, "Dairy produce Department");

  //   console.log(f1);
  // console.log(f1.find());















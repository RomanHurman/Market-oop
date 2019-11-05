  const Wrapper = document.createElement("div");
  Wrapper.id = "new_Wrapper";
  Wrapper.style.display = "flex";
  Wrapper.style.justifyContent = "flex-start";
  Wrapper.style.marginTop = "200px"
  document.body.append(Wrapper);

function getOneScreen() {
  const newDiv = document.createElement("div");
  newDiv.id = "new_Div";
  newDiv.className = "open";
  newDiv.innerText = " ";
  document.body.prepend(newDiv)
  newDiv.style.border = "1px solid black";
  newDiv.style.width ="440px";
  newDiv.style.height = "50px";
  newDiv.style.display = "flex";
  newDiv.style.justifyContent =  "center";
  newDiv.style.padding = "10px";
  newDiv.style.lineHeight = "1.5";
}

let i;
function runOneScreen() {
  let food = ['Orange', 'Apple', 'Pasta','Sausages','Sardine','Potato','Tomato','Cucumber',
    'Liver','Bacon','Turkey','Orange','Banana', 'Tea','Coffee','Parmesan', 'Baquette','Yogurt'];
  let copy = [];
  let text = "";
  for ( i = 0; i < 1; i++) {
    copy.push(food[i])
    console.log(food)
    text +=food[0] + ', ' ;
    text += food[1] + ', ';
    text += food[2] + ', ';
    text += food[3] + ' ,';
    text += food[4] + ' ,';
    text += food[5] + ' ,';
    text += food[6] + ', ';
    text += food[7] + ' ,';
    text += food[8] + ' ,';
    text += food[9] + ', ';
    text += food[10] + ', ';
    text += food[11] + ', ';
    text += food[12] + ', ';
    text += food[13] + ', ';
    text += food[14] + ', ';
    text += food[15] ;
    getOneScreen()
    document.getElementById("new_Div").innerText = text;
  }
}
  const newInput = document.createElement("input");
  newInput.id = "new_Input";
  newInput.placeholder = "Find everything what you want";
  newInput.style.height = "30px";
  newInput.style.width = "180px";
  newInput.value = "";
  Wrapper.after(newInput);

  const newToggle = document.createElement("a");
  newToggle.innerText = "Stock";
  newToggle.id = "new_Link";
  newToggle.className = "open";
  newToggle.style.lineHeight = "3.5";
  newToggle.style.marginRight = "10px";
  newToggle.style.height = "60px";
  newToggle.style.width = "60px";
  newToggle.style.borderRadius = "50px";
  newToggle.style.border = "1px solid black";
  newToggle.style.textAlign = "center";
  Wrapper.append(newToggle);
  newToggle.addEventListener("click",() => {
    runOneScreen()
  })


  const link = document.getElementById("new_Link");
  const newDiv = document.getElementById("new_Wrapper");

  link.addEventListener("click", function(event) {
    event.preventDefault();
    const status = Wrapper.classList.toggle("open");
  })


  const newFind = document.createElement("button");
  newFind.innerText = "Find";
  newFind.className = "new_Find";
  newFind.style.height = "60px";
  newFind.style.marginRight = "10px";
  newFind.style.width = "60px";
  newFind.style.borderRadius = "50px";
  Wrapper.append(newFind);
  newFind.addEventListener("click",() => {
    console.log(f1.getFind());
    console.log(f1.getPlace());
    console.log(f2.getFind());
    console.log(f2.getPlace());
    document.getElementById("new_Div").value;
  })

  const newWeight = document.createElement("button");
  newWeight.innerText = "Weight";
  newWeight.className = "new_Weight";
  newWeight.style.height = "60px";
  newWeight.style.width = "60px";
  newWeight.style.marginRight = "10px";
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
  newBuy.style.marginRight = "10px";
  Wrapper.append(newBuy);
  newBuy.addEventListener("click",() => {
    console.log(f1.getBuy());
    console.log(f2.getBuy());
  })



  class Food {
  constructor (name, weight, price, place) {
    this.name = name;
    this.weight = weight;
    this.price = price;
    this.place = place;
  }

  getFind () {
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















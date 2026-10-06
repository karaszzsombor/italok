let drinksList = [
  {"name": "Coca-Cola", "price": 500},
  {"name": "Coca-Cola Zero", "price": 550},
  {"name": "Fanta", "price": 500},
  {"name": "Sprite", "price": 500},
  {"name": "Jeges tea", "price": 600},
];

const tbody = document.getElementById("tbody")
for(const drink of drinksList){
  const tr = document.createElement("tr");
  const tdName = document.createElement("td");
  const tdPrice = document.createElement("td");

  tdName.innerText = drink.name
  tdPrice.innerText = drink.price

  tr.appendChild(tdName)
  tr.appendChild(tdPrice)

  tbody.appendChild(tr)
}


const form = document.getElementById("myForm")

form.addEventListener("submit", (e) =>{
  e.preventDefault();

  const data = new FormData(form)

  const tr = document.createElement('tr')
  const tdName = document.createElement("td")
  const tdPrice = document.createElement("td")

  const DrinkName = data.get('Name').toString();
  const DrinkPrice = data.get("Price").toString();

  const drinksmll = document.getElementById("name-small");
  const drinkprice = document.getElementById("price-small")

  
  let hiba_nev = false
  let hiba_ar = false
  if(DrinkName == ""){
    drinksmll.innerText = "Kérlek adj meg egy nevet!"
  }
  else{
    drinksmll.innerText = ""
    hiba_nev = true
  }
  if(DrinkPrice <= 0 || DrinkPrice == "" || DrinkPrice%10!=0){
    drinkprice.innerText = "Legyen nagyobb mint a 0, és maradék nélkül osztható 10-zel"
  }
  else{
    drinkprice.innerText=""
    hiba_ar = true
  }
  if(hiba_nev && hiba_ar){
    drinkprice.innerText = "";
    drinksmll.innerText = "";

    tdName.innerText = DrinkName
    tdPrice.innerText = DrinkPrice
  
    tr.appendChild(tdName)
    tr.appendChild(tdPrice)
  
    tbody.appendChild(tr)
  }

})
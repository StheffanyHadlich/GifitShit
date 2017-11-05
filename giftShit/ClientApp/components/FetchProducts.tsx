const url = "http://localhost:5000/api";

const data = {
  'name':'',
  'description':'',
  'price':''
};

fetch(`${url}/products`, { 
  method: "GET", 
  mode: "cors", 
  headers: {'Content-Type':'application/json'}, 
  body: JSON.stringify(data) 
})
.then(result => result.json())
.then(json => console.log(json))
.catch(err => console.log("erro", err));
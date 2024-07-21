let btn_search = document.querySelector(".icon-search");
let btn_cart = document.querySelector(".icon-cart");
let btn_add_prod = document.getElementById("Add_prod");
let main_prod = document.querySelector(".main_prod");
let Products = document.getElementById("Products");
let inp_title = document.getElementById("title");
let inp_price = document.getElementById("price");
let inp_upload = document.getElementById("upload");
let img_box = document.querySelector(".img_box");
let new_pr_section = document.querySelector(".addPT");
let img = document.getElementById("img");
let Complete = document.getElementById("complete");
let icon_cross = document.querySelector(".icon-cross")
let hide_links = document.querySelector(".links")
let icon_stackoverflow = document.querySelector(".icon-stackoverflow")
let signout = document.querySelector(".signout");
let signs = document.querySelector(".signs");
let icon_search = document.querySelector(".icon-search")
let search_form = document.querySelector(".search_form")
let icon_cart = document.querySelector(".icon-cart")
let cart_shop = document.querySelector(".cart_shop")
let btn_show = document.querySelector(".btn_show")
let read_more = document.querySelector(".read-more")
let read_less = document.querySelector(".read-less")
let container = document.querySelector(".container")
console.log(search_form)
// Array of Products
let products;
let cart_prods = [];

  
// Local Storage Setup
if (localStorage.items != null) {
  products = JSON.parse(localStorage.items);
} else {
  products = [];
}

// Products Section
Products.addEventListener("click", (eo) => {
  switch (eo.target.className) {
    // Heart Case
    case "icon-heart":
      console.log("now iam active");
      eo.target.classList.add("active");
      main_prod.prepend(eo.target.parentElement.parentElement.parentElement);
      break;
    case "icon-heart active":
      eo.target.classList.remove("active");
      console.log("no active");
      break;
    
      // Delete item
    case "icon-bin":
      eo.target.parentElement.parentElement.parentElement.remove();
      localStorage.removeItem("items")
      break;

    // Cart items
    case "icon-cart2":
        {
for (let i = 0; i < products.length; i++) {
            let newProd = {
                title: products[i].title,
                price: products[i].price,
                src: products[i].src,
            };
                cart_prods.push(newProd)
}
localStorage.setItem(`cart_items`, JSON.stringify(cart_prods));
            show2()
      }

    break;

    // Add Products
     case "Add_prod":
        if(localStorage.getItem("users")){
            new_pr_section.style.display = "block";
      // Upload Section
      // can`t use onclick in upload, cuz u can click without choose any photo
      // input with file, the site see it as array of files
      inp_upload.onchange = function () {
        // js have class that can read files and data
        let file = new FileReader();
        // if u choose any photo will put in array index 0
        file.readAsDataURL(inp_upload.files[0]);
        // if file is onload add img in the container
        file.onload = function () {
          img.src = file.result;
          console.log(inp_upload.files)};
      };
      Complete.onclick = function (eo) {
        eo.preventDefault();
        if (inp_title.value == "") {
          alert("Please Enter Name of Product !!!");
        } else if (inp_price.value == "") {
          alert("Please Enter the Price of product !!!");
        } else if (img.src == "") {
          alert("upload your photo");
        } else if (inp_title.value != "" && inp_price.value != "" && img.src != "") {
          new_pr_section.style.display = "none";
          let newP = {
            title: inp_title.value,
            price: inp_price.value,
            src: img.src,
          };
          if (inp_title.value != "" && inp_price.value != "" && img.src != "") {
            if (prompt("Enter Password") == "123123") {
              alert("Welcome Programmer !!! ")
                      products.push(newP)
                    } 
                    else{
                        alert("You aren`t an admin !! ")
                    }
          }
          clear()
        localStorage.setItem(`items`, JSON.stringify(products));
        }
        ShowData()
    }
      break;
        } else{
            alert("Login First !!!")
            window.location = "login.html"
        }
    }
  });

// Clear DatA FUNCTION
function clear() {
  inp_title.value = "";
  price.value = "";
  img.src = "";
}
function DeleteItem(i) {
  products.splice(i, 1);
  localStorage.items = JSON.stringify(products);
}
  function ShowData() {
  let newproduct = ``;
  for (let i = 0; i < products.length; i++) {
    newproduct += `
                <div class="product">
                <div class="icons">
                <div class="box" >
                <span class="icon-heart" ></span>
                </div>
                <div class="box">
                <span class="icon-cart2"></span>
                </div>
                <div class="box">
                <span class="icon-bin" onclick="DeleteItem(${i})"></span>
                </div>
                </div> 
                <img src="${products[i].src}">
                <h2>${products[i].title}</h2>
                <h3>${products[i].price}$</h3>
                </div>
                `;
}
main_prod.innerHTML = newproduct
}
function show2() {
    cart_prodsd = ``
    for (let i = 0; i < products.length; i++) {
        cart_prodsd += `
        <div class="cart_items">
        <img src="${products[i].src}">
            <div class="cont">
                <h2 class="text">${products[i].title}</h2>
                <h2 class="price">${products[i].price}$</h2>
            </div>
            <button class="Reomve">Remove</button>
        </div>
        `
      }
      cart_shop.innerHTML += cart_prodsd
}

function DeleteItem(){

}


$(icon_cross).click(function(){
  $(new_pr_section).fadeToggle(500)
  clear()
})
$(icon_stackoverflow).click(function() {
$(hide_links).fadeToggle(1000)
})
$(icon_search).click(function(){
  $(search_form).toggle(500)
})
$(icon_cart).click(function(){
  $(cart_shop).toggle(500)
})
$(btn_show).click(function(){
  $("p").slideToggle(1000)
})

// read_more 
// read_less
// container
$(read_more).click(function(){
  $(container).fadeIn(function() {
    $(container).css({display : "flex"})
  })})
$(read_less).click(function(){
  $(container).fadeOut({display : "none"})})


// Always Active Function
ShowData()


// switch header
let switchtoggle = JSON.parse(localStorage.getItem("switch"))
if(switchtoggle === true){
    signout.style.display = "block";
    signs.style.display = "none";
}

signout.addEventListener("click", function(eo){
    localStorage.clear()
    signout.style.display = "none";
    signs.style.display = "block";
})

function back() {
    window.location = "index.html"
}
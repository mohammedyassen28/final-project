alert("i'm sure you'll accept our cookies ! " );
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function searchFunction(){
    document.getElementById('message').className="message show"
  

  }


  let login_h2 = document. getElementById("login_h2");
  login_h2.addEventListener("submit", (error)=>{

     let email = document. getElementById("email");

    if(email.value.index0f("@gmail") != -1){

     return true;

     }else{
      
         document.getElementById("emeal_erorr").innerHTML = "invalid email";
         error.preventDefault();
     }
     alert("invalid email");
     });

  
     function search() {
      let searchbar = document.queryselector('.search-input').value.touppercase();
      let productlist= document.queryselector('.product-list');
      let  product= document.getElementsByTagName('.product');


      for (let i = 0; i<productName.length; i++)  {
          if (productName[i].innerHTML.toUpperCase().indexOf(searchbar) >=0){
             product[i].style.display ="";
            
          }else{
            product[i].style.display ="none";
          }
        }  


      }
      






let handlesubmit =(event) =>{
   //Step 1 prevent default behaviors of the form so that it doesnt reload
   event.preventDefault();
   // select all the input elements to be validated
   let firstname = document.getElementById("Fname");
   let lastname = document.getElementById("Lname");
   let NIN = document.getElementById("nin");
   let HomeAddress = document.getElementById("addr");
   
   function firstnamevalid () {
     //the firstname below is the first variable declared above
     if(firstname.value.match(/^[A-Za-z]+$/)){
       
       //return prevents continuation: before going to the next thing return if you find a miss match
       return true;}
     };
     if(!firstnamevalid()){alert("firstname must be valid!");
   return false;
   }
   function lastnamevalid () {
     if(lastname.value.match(/^[A-Za-z]+$/)){
       
       //return prevents continuation: before going to the next thing return if you find a miss match
       return true;}
     };
     if(!lastnamevalid()){alert("lastname must be valid!");
   return false;
   }
   function NinPassDrivalid(){
     if(NIN.value.match(/^[0-9a-zA-Z]+$/)){
     
     //return prevents continuation: before going to the next thing return if you find a miss match
     return true;}
   };
   if(!NinPassDrivalid()){alert("Your nin or passport or Drivers lisence is not valid!");
     return false;
   }
   function homeaddressvalid () {
     if(HomeAddress.value.match(/^[A-Za-z]+$/)){
       
       //return prevents continuation: before going to the next thing return if you find a miss match
       return true;}
     };
     if(!homeaddressvalid()){alert("homeaddress must be valid!");
   return false;
   }
   // step 4 if all inputs are valid, handle the submit
   
    alert("the form is actually submitted!")
   };
   
   
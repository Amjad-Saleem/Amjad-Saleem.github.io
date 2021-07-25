// var itemsArray = [
//     {name:'juice',price:50, quantity:3},
//     {name:'cookie',price:30, quantity:9},
//     {name:'shirt',price:880, quantity:1},
//     {name:'pen',price:100, quantity:2}
// ];
// var sum  = 0

// for (i = 0; i < itemsArray.length; i++) {
//  a = (itemsArray[i].name) + ' Total Price is ' + ((itemsArray[i].price) * (itemsArray[i].quantity));
//  console.log(a);
//  sum = sum + (itemsArray[i].price)
//  }
//  console.log('Total Price is ' + sum)
// -------------------------------------------------------------------------------------
// var info = {
//     name: 'Amjad',
//     email: 'abc@.com',
//     password: 'abc',
//     age: 27,
//     gender: 'male',
//     city: 'Karachi',
//     country: 'Pakistan'
// }

// var a = prompt('check property 1');
// var b = prompt ('check property 2');

// if (a in info && b in info) {
//     console.log (a + ' or ' + b + ' found');
// }
// else {
//     console.log(a + ' or ' + b + ' not found');
// }
// -----------------------------------------------------------------------------------
// function Info(name,age,gender){
//     this.myname = name;
//     this.myage = age;
//     this.mygender = gender;
// }

// var myinfo = new Info('Amjad',27,'male');
// var myinfo1 = new Info('Asfan', 29, 'male');
// var myinfo2 = new Info('Sana', 29, 'female');

// -----------------------------------------------------------------------------------------------
function Areapop (name,gender,address,education,profession){
    this.myname = fname;
    this.mygender = gender;
    this.myaddress = address;
    this.myeducation = education;
    this.myprofession = profession;
}

// var info1 = new Areapop('Amjad','Male','Baldia Town','B.com','Private Servent')
// var info2 = new Areapop('Kashif','Male','Baldia Town','B.com','Private Servent')
// var info3 = new Areapop('Javed','Male','Baldia Town','Inter','Gov Officer')
// var info4 = new Areapop('Ubaid','Male','Baldia Town','B.com','Gov Officer')
// var info5 = new Areapop('Asfan','Male','Baldia Town','B.com','Owner')

arr = []

function save (){
    fname = document.getElementById("myname").value;
    if (document.getElementById("male").checked) {
        gender = document.getElementById("male").value;
    }
    else{
        gender = document.getElementById("female").value;
    }
    address = document.getElementById("add").value;
    education = document.getElementById("edu").value;
    profession = document.getElementById("Pro").value;
    var person = new Areapop(fname,gender, address, education, profession)
    arr.push(person);
     console.log(arr)
}



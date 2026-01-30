 const users =[
    {name:"Dorcas", age:30},
    {name:"Joshua", age:45},
    {name:"Hirwa", age:13},
    {name:"Jane", age:18},
    {name:"Avit", age:17},
    {name:"Joyce", age:20},
 
 ];
  function adultfilter (users){
    return users.filter(user => user.age>=18);
    //for name we use == bcz = assigns(changes)
    
  }
    const adult = adultfilter(users);
    console.log(adult)
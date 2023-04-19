// Configuración
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Cambia solo el código debajo de esta línea
   for(let i=0;i<contacts.length;i++){
     if(contacts[i].firstName===name){
       if(contacts[i].hasOwnProperty(prop)){
         return contacts[i][prop]
       }
       return "No such property"
     }
   }
   return "No such contact"
    // Cambia solo el código encima de esta línea
  }
  lookUpProfile("Akira", "likes");
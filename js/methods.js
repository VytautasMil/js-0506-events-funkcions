// function declaration (hoisted)
function addNums(n1, n2) {
    return n1 + n2;
  }
  addNums(5, 5);
  // addNumsExpresion(5, 5); // errror
  // function expression (not hoisted)
  const addNumsExpresion = function (n1, n2) {
    return n1 + n2;
  };
  addNumsExpresion(5, 5);
  
  // anonimine arrow funkcija (not hoisted)
  // () => {}
  // => === return
  const addNumsArrow = (n1, n2) => n1 + n2;
  
  const rez = addNumsArrow(5, 5);
  console.log('rez ===', rez);
  
  const calc = {
    name: 'James',
    addNums: function (n1, n2) {
      return n1 + n2;
    },
  };
  calc.addNums(5, 5);
  
  const sayHi = (title) => console.log(`hi ${title}`);
  sayHi('Bob');
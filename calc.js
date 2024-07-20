function solve(val) {
   let v = document.getElementById('res');
   v.value += val;
}

function result() {
   let num = document.getElementById('res').value;

   try {
       var num1 = eval(num.replace('x', '*'));
       document.getElementById('res').value = num1;
   } catch {
       document.getElementById('res').value = 'Error';
   }
}

function on() {
   var inp = document.getElementById('res');
   inp.value = '';
  
}

document.addEventListener('keydown', function (event) {
   const key = event.key;
   const validKeys = '0123456789+-*/.%';
   if (validKeys.includes(key)) {
       solve(key === '*' ? 'x' : key);
   } else if (key === 'Enter') {
       result();
   } else if (key.toUpperCase() === 'C') {
       on();
   }
});
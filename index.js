// @author: Caio Lavos
// 13/12/2018

// Questão 1
function toBinary(n){
  //transforma o número em binário
  if (n >>> 0) {
    var myNumber = (n >>> 0).toString(2);
    if(!myNumber.length) {
      return 0;
    }
    //Variável para receber o valor repetido de zeros.
    var max = 1;
    //Varre a string inteira e verifica se a variável 'j' é diferente de 'i'
    for (let i = 0, j = 0; i < myNumber.length - 1; i = j) {
      for (j = i + 1; j < myNumber.length && myNumber[j] == myNumber[i]; j++) {
        
      }
      //se sim atribui ao valor de 'max'
      if (j - i > max) {
        max = j - i;
      }
    }
    return max;
  }
}


// Questão 2
var rotate = function (a, n) {
  var k = a.length;
  return arr.slice(k - n).concat(arr.slice(0, k - n));
};
var a = [3,8,9,7,6];
console.log( rotate( a, 2 ));


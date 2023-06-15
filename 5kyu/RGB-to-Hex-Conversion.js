// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

//solution:

function rgb(r, g, b) {
  let hex = (x) => {
    // x is the decimal value of the color
    if (x > 255) return "FF";
    if (x < 0) return "00";
    return x.toString(16).toUpperCase().padStart(2, "0");
    //toString(16) converts the number to hexadecimal
    //toUpperCase() converts the hexadecimal to uppercase
    //padStart(2, '0'): if the hexadecimal is only one digit, add a 0 in front of it, and 2 is for the length of the string (i.e. 0F)
  };
  return hex(r) + hex(g) + hex(b);
}

//sample runnings:
console.log(rgb(255, 255, 255)); // FFFFFF
console.log(rgb(255, 255, 300)); // FFFFFF
console.log(rgb(0, 0, 0)); // 000000
console.log(rgb(148, 0, 211)); // 9400D3
console.log(rgb(0, 0, -20)); // 000000
console.log(rgb(173, 255, 47)); // ADFF2F

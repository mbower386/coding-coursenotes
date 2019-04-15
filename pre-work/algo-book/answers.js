// Setting and swapping
var myNumber = 42;
var myName = 'Matthew';

var temp = myNumber;
myNumber = myName;
myName = temp;

temp = myName;
myName = myNumber;
myNumber = temp;

// Print and count
var count = 0;
for (var i = 512; i < 4096; i++) {
  if ((i % 5) === 0) {

    count++;
  }
}
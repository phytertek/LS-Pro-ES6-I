// var me = 'LambdaSchool';
const me = 'LambdaSchool'

// var you = 'Student';
const you = 'Student'

// var numberOfCatsIOwn = 0;
let numberOfCatsIOwn = 0

// function buyCat() {
//   numberOfCatsIOwn++;
//   conosle.log('I now own ' + numberOfCatsIOwn + ' cats!');
// }
const buyCat = () => {
    numberOfCatsIOwn++
    console.log(`I now own ${numberOfCatsIOwn} cats`)
}
buyCat()

// var favoriteBooks = [
//   'Captain Underpants',
//   'Magic Treehouse',
//   'Brown Bear, Brown Bear, What Do You See?',
//   'Slaughterhouse 5',
// ];
const favoriteBooks = [
    'Captain Underpants',
    'Magic Treehouse',
    'Brown Bear, Brown Bear, What Do You See?',
    'Slaughterhouse 5',
]

// var likesCaptainUnderpants = function(bookList) {
//   var yes = false;
//   bookList.forEach(function(book) {
//     if (book === 'Captain Underpants') yes = true;
//   });
//   return yes;
// }
const likesCaptainUnderpants = booklist => booklist.indexOf('Captain Underpants') >= 0

// var result = likesCaptainUnderpants();
const result = likesCaptainUnderpants
console.log(result(favoriteBooks))

// var sumInput = function() {
//   var total = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }
//   return total;
// }
function sumInput() {
    return [...arguments].reduce((acc, av) => acc + av)
}

// var sum = sumInput(1, 2, 3, 4, 5);
let sum = sumInput(1, 2, 3, 4, 5)
console.log(sum)

// var add = function(x, x) {
//   return x + x;
// }
const add = (x, y) => x + y

// var sum = add(5, 5);
sum = add(5, 5)
console.log(sum)
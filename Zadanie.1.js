const user = function(a) {
  a = {
    Name: 'Valeria',
    Surname: 'Milentieva',
    Age: '23'
  }
  for (let key in a) {
    if (a.hasOwnProperty(key)) {
      console.log(key + ': ' + a[key]);
    }
  }
}
user();

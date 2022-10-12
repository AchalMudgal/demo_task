let testing = [
    { name: 'a', no: '10.00' },
    { name: 'b', no: '2.00' },
    { name: 'c', no: '2.00' },
   { name: 'd', no: '0.00' },
  { name: 'e', no: '-3.00' },
]
output:- [{ name: 'b', no: '2.00' }, { name: 'a', no: '0.00' }, { name: 'c', no: '0.00' },{ name: 'd', no: '0.00' },{ name: 'e', no: '0.00' }]

console.table(testing);
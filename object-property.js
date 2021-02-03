const writer = [
    {id: 12, Name: 'Ekua Rezia'},
    {id: 14, Name: 'Enamul reza'},
    {id: 15, Name: 'Shuhan rezoan'},
    {id: 16, Name: 'kushol istiak'}
]
const names = writer.map(s => s.Name);
const ids = writer.map(a => a.id)
console.log(ids)
console.log(names)
const big = writer.filter(s => s.id>12)
console.log(big)
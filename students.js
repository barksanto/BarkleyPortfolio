fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(data => data.json())
  .then(res => console.log(res))



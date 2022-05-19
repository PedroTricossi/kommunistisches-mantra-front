import axios from 'axios';

axios.get(`https://jsonplaceholder.typicode.com/users`)
.then(res => {
  const persons = res.data;
})
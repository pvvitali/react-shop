require('dotenv').config();

const mas = [1,2,3,4,5];

for(const [i, value] of mas.entries()) {
    console.log(i, value);
}
console.log(process.env.REACT_APP_API_KEY);
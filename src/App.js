import React from 'react';
import PropTypes from 'prop-types';


//JSX -> HTML + JavaScript
// npm i prop-types -> 인자(props)를 잘 넘겨주고 받는지 체크해줌.

const foodILike = [
  {
    id:1,
    name : "kimchi",
   color : "red",
   rating: 5
  },
  {
    id:2,
    name : "Ramen",
   color : "yellow",
   rating: 3
  },
  {
    id:3,
    name : "Pizza",
   color : "red & beige",
   rating: 3.4
  },
  {
    id:4,
    name : "Hamburger",
   color : "green, red, brown",
   rating: 5
}];

// 만약 /5.0에서 에러가 난다면 터미널에서 npm i 해주기.
function Food({name, color, rating}){
  return <div>
      <h2>I Like {name}</h2>
      <h2>{color}</h2>
      <h4>{rating}/5.0</h4> 
  </div>
};

//propType의 이름은 propType으로 고정해서 사용해야함.
Food.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food 
        key={dish.id} 
        name={dish.name} 
        color={dish.color} 
        rating={dish.rating} 
        />
        ))}
    </div>
  );
}

export default App;

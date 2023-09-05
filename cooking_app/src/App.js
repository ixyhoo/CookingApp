import React, { useEffect, useState } from 'react';
import axios from 'axios';


const App = () => {

  const [mealsData, setMealsData] = useState([]);

  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
    .then((res) => console.log(res.data.meals));
  });

  return (
    <div className="app-container">
      <h1>My Cooking App</h1>
      <input type="text" placeholder='Type the name of a food' />
      <div className="meals-container">

      </div>
    </div>

  );
};

export default App;
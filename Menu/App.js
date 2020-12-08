import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories =['all', ...new Set( items.map((item) => item.category))] 
console.log(allCategories)



function App() {
  const [menuItems, setMenuItems]=useState(items)
  const [categories, setCategories] = useState([allCategories])


  const filterItems =(category) =>{
    if(category ==='all'){
      
      return setMenuItems(items)
    }
    const newItem =items.filter((item) => item.category ===category)
    setMenuItems(newItem)
  }

  return <main>
    <section className="menu">
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
        <Categories categories={allCategories} filterItems= {filterItems} />
        <Menu items ={menuItems}/>
      </div>
    </section>
  </main>;
}

export default App;

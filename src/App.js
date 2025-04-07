import { useEffect, useState } from 'react';
import techData from './data/techList.json';
import TechList from './components/TechList';
import FilterBar from './components/FilterBar';
import './App.css';

function App() {
  const [techItems, setTechItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    setTechItems(techData);
  }, []);

  const filteredItems = techItems.filter((tech) => {
    return (
      tech.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory ? tech.category === selectedCategory : true)
    );
  });


  return (
    <div className="App">
      <h1>Tech Stack Dashboard</h1>
      <FilterBar 
        searchTerm={searchTerm}
        onSearch={setSearchTerm}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <TechList techItems={filteredItems} />
    </div>
  );
}

export default App;

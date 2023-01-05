import './App.css';
import Row from "./components/Row";
import categories from './API';

function App() {
  return (
    <div className="App">
      {/*navbar*/}
      {/*destaque*/}
      {/*em alta*/}
      {categories.map((category) => {
return (
<Row 
          key={category.name} 
          title={category.title} 
          path={categories.path} 
        />
      );
      })}
      
    </div>
  );
}

export default App;

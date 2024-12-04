
import './App.css';
import { Route, Routes } from 'react-router-dom'
import TemplateList from './components/TemplateList';
import TemplateEditor from './components/TemplateEditor';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<TemplateList/>}/>
        <Route path='/create' element={<TemplateEditor/>}/>
        <Route path='/edit/:id' element={<TemplateEditor/>}/>
      </Routes>
      
    </div>
  );
}

export default App;

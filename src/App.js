import { Route, Routes } from 'react-router-dom';
import NewsPage from './components/NewsPage'; 

const App = () => {
  return (
    //<Routes>
      <Route path="/:category?" component={NewsPage} />
    //</Routes>
  );
};

export default App;

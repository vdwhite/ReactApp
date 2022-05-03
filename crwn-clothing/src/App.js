import categoriesData from './components/data/categories';

import Directory from './components/directory/directory.component';
const App = () => {
  return <Directory categoriesData={categoriesData} />;
};

export default App;

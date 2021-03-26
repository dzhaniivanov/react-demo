import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Categories from './components/Categories/Categories';
import PetDetails from './components/PetDetails/PetDetails'
import CreatePet from './components/CreatePet/CreatePet';
import EditPetDetails from './components/EditPetDetails/EditPetDetails'





function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route path="/" exact component={Categories} />
        <Route path="/categories/:category" component={Categories} />
        <Route path="/pets/details/:petId" exact component={PetDetails} />
        <Route path="/pets/details/:petId/edit" component={EditPetDetails} />
        <Route path="/pets/create" component={CreatePet} />

      </Switch>
      <Footer />
    </div>
  );
}

export default App;

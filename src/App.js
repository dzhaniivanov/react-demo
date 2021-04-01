import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Categories from './components/Categories/Categories';
import PetDetails from './components/PetDetails/PetDetails'
import CreatePet from './components/CreatePet/CreatePet';
import EditPetDetails from './components/EditPetDetails/EditPetDetails';
import Login from './components/Login/Login';
import Register from './components/Register/Register';


import Demo from './components/Shared/Demo';
import { auth } from './utils/firebase';






function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser)
  }, [])


  return (
    <div className="container">
      <Header />
      <Switch>
        <Route path="/" exact component={Categories} />
        <Route path="/categories/:category" component={Categories} />
        <Route path="/pets/details/:petId" exact component={PetDetails} />
        <Route path="/pets/details/:petId/edit" component={EditPetDetails} />
        <Route path="/pets/create" component={CreatePet} />
        <Route path="/demo" component={Demo} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />

        <Route path="/logout" render={props => {
          auth.signOut()
        }} />




      </Switch>
      <Footer />
    </div>
  );
}

export default App;

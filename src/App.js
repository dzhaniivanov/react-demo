import { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Categories from './components/Categories/Categories';
import PetDetails from './components/PetDetails/PetDetails'
import CreatePet from './components/CreatePet/CreatePet';
import EditPetDetails from './components/EditPetDetails/EditPetDetails';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import CustomErrorBoundary from './components/CustomErrorBoundary/CustomErrorBoundary';


import AdvancedTechniques from './components/AdvancedTechniques/AdvancedTechniques';
import AdvancedTechniques2 from './components/AdvancedTechniques2/AdvancedTechniques2';
import AdvancedTechniques3 from './components/AdvancedTechniques3/AdvancedTechniques3';





import Demo from './components/Shared/Demo';
import { auth } from './utils/firebase';
import AuthContext from './contexts/AuthContext';
import isAuth from './hoc/isAuth';






function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser)
  }, [])

  const authInfo = {
    isAuthenticated: Boolean(user),
    username: user?.email,
  }


  return (
    <div className="container">
      <AuthContext.Provider value={authInfo}>
        <Header />


        <CustomErrorBoundary>

          <Switch>
            <Route path="/" exact component={Categories} />
            <Route path="/categories/:category" component={Categories} />
            <Route path="/pets/details/:petId" exact component={PetDetails} />
            <Route path="/pets/details/:petId/edit" component={isAuth(EditPetDetails)} />
            <Route path="/pets/create" component={CreatePet} />
            <Route path="/demo" component={Demo} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />

            <Route path="/advanced" component={AdvancedTechniques} />
            <Route path="/advanced2" component={AdvancedTechniques2} />
            <Route path="/advanced3" component={AdvancedTechniques3} />

            <Route path="/logout" render={props => {
              auth.signOut();
              return <Redirect to="/" />
            }} />
          </Switch>

        </CustomErrorBoundary>
        <Footer />
      </AuthContext.Provider>
    </div>
  );
}

export default App;

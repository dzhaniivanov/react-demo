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
import AuthContext from './components/contexts/AuthContext';
import isAuth from './hoc/isAuth';






function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser)
  }, [])

  const authInfo = {
    isAuth: Boolean(user),
    username: user?.email,
  }


  return (
    <div className="container">
      <AuthContext.Provider value={authInfo}>
        <Header {...authInfo} />


        <CustomErrorBoundary>


          <Switch>
            <Route path="/" exact render={props => <Categories {...props} {...authInfo} />} />
            <Route path="/categories/:category" render={props => <Categories{...props}  {...authInfo} />} />
            <Route path="/pets/details/:petId" exact render={props => <PetDetails {...props} {...authInfo} />} />
            <Route path="/pets/details/:petId/edit" render={props => <EditPetDetails{...props} {...authInfo} />} />
            <Route path="/pets/create" render={props => <CreatePet{...props} {...authInfo} />} />
            <Route path="/demo" render={props => <Demo{...props} {...authInfo} />} />
            <Route path="/login" render={props => <Login {...props}  {...authInfo} />} />
            <Route path="/register" render={props => <Register{...props} {...authInfo} />} />

            <Route path="/advanced" component={AdvancedTechniques} />
            <Route path="/advanced2" component={AdvancedTechniques2} />
            <Route path="/advanced3" component={AdvancedTechniques3} />




            <Route path="/logout" render={props => {
              auth.signOut();
              return <Redirect to="/" />
            }} />




          </Switch>
        </CustomErrorBoundary>
      </AuthContext.Provider >
      <Footer />
    </div>
  );
}

export default App;

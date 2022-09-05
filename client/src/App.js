import { useEffect } from 'react';
import { GlobalStyle } from './styles/globalStyle';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/theme';
import Register from './components/auth/SignUp';
import Login from './components/auth/Login';
import { Layout } from './components/layout/Layout';
import Dashboard from './components/dashboard/Dashboard';
import AddBike from './components/bike-forms/AddBike';
import EditBike from './components/bike-forms/EditBike';
import Bikes from './components/bikes/Bikes';
import BikeDescription from './components/bike/BikeDescription';
import NotFound from './components/layout/NotFound';
import PrivateRoute from './components/routing/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import { LOGOUT } from './actions/types';
import setAuthToken from './utils/setAuthToken';

const App = () => {
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    store.dispatch(loadUser());

    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <ToastContainer theme="colored" autoClose={3000} hideProgressBar />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Bikes />} />
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route path="bikes" element={<Bikes />} />
              <Route path="bikes/:id" element={<BikeDescription />} />
              <Route
                path="dashboard"
                element={<PrivateRoute component={Dashboard} />}
              />
              <Route
                path="add-bike"
                element={<PrivateRoute component={AddBike} />}
              />
              <Route
                path="edit-bike"
                element={<PrivateRoute component={EditBike} />}
              />
              <Route path="/*" element={<NotFound />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;

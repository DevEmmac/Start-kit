import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements} from 'react-router-dom';
import MainLayout from './LayOut/MainLayout';
import DashBoardPage from './pages/DashBoardPage';
import LandingPage from './pages/LandingPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import PageNotFound from './pages/PageNotFound';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<DashBoardPage />}/>
        <Route path='/landing-page' element={<LandingPage />}/>
        <Route path='/profile-page' element={<ProfilePage />}/>
        <Route path='/login-page' element={<LoginPage />}/>
        <Route path='/page-not-found' element={<PageNotFound />}/>
      </Route>
    )
  )  
  return (
    <>
     <RouterProvider router={router}/>  
    </>
  )
}

export default App;

import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements} from 'react-router-dom';
import MainLayout from './LayOut/MainLayout';
import DashBoardPage from './pages/DashBoardPage';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<DashBoardPage/>}/>
      </Route>
    )
  )  
  return (
    <>
     <RouterProvider router={router}/>  
    </>
  )
}

export default App

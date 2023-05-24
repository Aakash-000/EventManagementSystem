import React,{useContext} from 'react';
import { Outlet, Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegistrationPageForUser from './components/RegistrationPageForUser';
import RegistrationPageForDealer from './components/RegistrationPageForDealer';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import { AuthProvider ,AuthContext} from './context/AuthContext';
import DashboardNavbar from './components/DashboardNavbar';
import DashboardSidebar from './components/DashboardSidebar';
import ExploreSectionComponent from './components/ExploreSectionComponent';
import AddVenueDetailStepper from './components/AddVenueDetailStepper';



const App = () => {

  const LayoutLanding =()=>{
    return(
    <div>
    <Navbar/>
    <div><Outlet/></div>
    </div>
  )
  }

  const LayoutDashboard =()=> {
    return(
      <div className="layoutdashboard">
      <DashboardNavbar/>
      <div className="layoutdashboard_components">
      <div className="layoutdashboard_components_sidebar">
      <DashboardSidebar/>
      </div>
      <div><Outlet/></div>
      </div>
      </div>
    )
  }

  const ProtectedRoute = ({children}) => {
    const [state] = useContext(AuthContext);

    if(!state.loggedIn){
      return <Navigate to="/loginpage"/>
    }
    return children
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element:
        <LayoutLanding/>,
      children:
      [{
        path:"/",
        element:<LandingPage/>
      },{
        path:"/explorepage",
        element:<ExploreSectionComponent/>
      },
      {
        path:"/loginpage",
        element:<LoginPage/>
      },
      {
        path:"/registrationpageUO",
        element:<RegistrationPageForUser/>
      },{
        path:"/registrationpageD",
        element:<RegistrationPageForDealer/>
      }
    ]
    },{
      path:"/dashboard",
      element:(<ProtectedRoute><LayoutDashboard/></ProtectedRoute>),
      children:[{
        path:"/dashboard/addvenuedetails",
        element:<AddVenueDetailStepper/>
      }]
    }
  ])

  return (
    <div className='App'>
    <AuthProvider>
    <RouterProvider router={router}>
    </RouterProvider>
    </AuthProvider>
      </div>
  );
};

export default App;

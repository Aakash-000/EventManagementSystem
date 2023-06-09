import React,{Suspense, lazy, useContext} from 'react';
import { Outlet, Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Skeleton, Stack } from '@mui/material';
import { AuthProvider ,AuthContext} from './context/AuthContext';

const LoginPage = lazy(()=>import('./components/LoginPage'));
const RegistrationPageForUser = lazy(()=> import('./components/RegistrationPageForUser'));
const RegistrationPageForDealer= lazy(()=> import('./components/RegistrationPageForDealer'));
const DashboardPreview = lazy(()=> import('./components/DashboardPreview'));
const AddVenueDetailStepper = lazy(()=> import('./components/AddVenueDetailStepper'));
const ExploreSectionComponent = lazy(()=> import('./components/ExploreSectionComponent'));
const DashboardSidebar = lazy(()=> import('./components/DashboardSidebar'));
const DashboardNavbar = lazy(()=> import('./components/DashboardNavbar'));
const LandingPage = lazy(()=> import('./components/LandingPage'));
const Navbar = lazy(()=> import('./components/Navbar'));


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
      <div className="layoutdashboard" style={{backgroundColor:'#FCFEFC',height:'100vh'}}>
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

  const Loader = () => {
    return(
      <Stack spacing={1} sx={{marginTop:'50px'}}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{ fontSize: '20px',marginTop:'50px' }} />
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="circular" width={80} sx={{marginTop:'50px'}} height={80} />
      <Skeleton variant="rectangular" width={1500} sx={{marginTop:'50px'}} height={60} />
      <Skeleton variant="rounded" width={1500} sx={{marginTop:'50px'}} height={60} />
    </Stack>
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
        element:(<AddVenueDetailStepper/>),
      },{path:"/dashboard/preview",
        element:<DashboardPreview/>}
    ]
    }
  ])

  return (
    <div className='App'>
    <Suspense fallback={<Loader/>}>
    <AuthProvider>
    <RouterProvider router={router}>
    </RouterProvider>
    </AuthProvider>
    </Suspense>
      </div>
  );
};

export default App;

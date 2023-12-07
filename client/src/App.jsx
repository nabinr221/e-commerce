import { Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Loader from './components/loader/Loader';
import Home from './containers/frontend/home/Home';
// import Overview from './containers/overview/Overview';
// import Brands from './containers/brands/Brands';
const DashboardLayout = lazy(() =>
  import('./components/layouts/DashboardLayout')
);
const FrontendLayout = lazy(() =>
  import('./components/layouts/FrontendLayout')
);
const Dashboard = lazy(() =>
  import('./containers/backend/dashboard/Dashboard')
);
// const Products = lazy(() => import('./containers/products/Products'));

function App() {
  const router = createBrowserRouter([
    {
      path: 'dashboard/',
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: '/dashboard/products',
          element: <h1>PRODUCT</h1>,
        },
        {
          path: '/dashboard/overview',
          element: <h1>overview</h1>,
        },
        {
          path: '/dashboard/brands',
          element: <h1>brands</h1>,
        },
      ],
    },
    {
      path: '/',
      element: <FrontendLayout    />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/dashboard/products',
          element: <h1>PRODUCT</h1>,
        },
        {
          path: '/dashboard/overview',
          element: <h1>overview</h1>,
        },
        {
          path: '/dashboard/brands',
          element: <h1>brands</h1>,
        },
      ],
    },
  ]);

  return (
    <>
      {/* <h1>thisi is  </h1> */}
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;

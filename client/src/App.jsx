import { Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Loader from './components/loader/Loader.jsx';

// dynamic import
const Home = lazy(() => import('./containers/frontend/home/Home'));
const Products = lazy(() =>
  import('./containers/backend/products/Products.jsx')
);
const DashboardLayout = lazy(() =>
  import('./components/layouts/DashboardLayout')
);
const FrontendLayout = lazy(() =>
  import('./components/layouts/FrontendLayout')
);
const Dashboard = lazy(() =>
  import('./containers/backend/dashboard/Dashboard')
);
const AddProduct = lazy(() =>
  import('./containers/backend/products/addProduct/AddProduct.jsx')
);
const Category = lazy(() =>
  import('./containers/backend/category/Category.jsx')
);
const AddCategory = lazy(() =>
  import('./containers/backend/category/addCategory/AddCategory.jsx')
);

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
          element: <Products />,
        },
        {
          path: '/dashboard/add-product',
          element: <AddProduct />,
        },
        {
          path: '/dashboard/category',
          element: <Category />,
        },
        {
          path: '/dashboard/add-category',
          element: <AddCategory />,
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
      element: <FrontendLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/products',
          element: <h1>PRODUCT</h1>,
        },
        {
          path: '/overview',
          element: <h1>overview</h1>,
        },
        {
          path: '/brands',
          element: <h1>brands</h1>,
        },
      ],
    },
  ]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;

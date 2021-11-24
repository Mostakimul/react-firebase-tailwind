import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';
import AdminDashboard from './pages/AdminDashboard';
import AllOrders from './pages/AdminPages/AllOrders';
import AllUsers from './pages/AdminPages/AllUsers';
import Dashboard from './pages/AdminPages/Dashboard';
import Error from './pages/Error';
import Home from './pages/Home';
import Login from './pages/Login';
import PrivateRoute from './pages/PrivateRoute';
import Register from './pages/Register';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="*" element={<Error />}></Route>
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <AdminDashboard />
              </PrivateRoute>
            }>
            {/* nested routes */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/all-users" element={<AllUsers />} />
            <Route path="/dashboard/all-orders" element={<AllOrders />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

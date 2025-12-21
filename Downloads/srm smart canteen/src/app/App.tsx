import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import StudentLogin from './components/StudentLogin';
import SignUp from './components/SignUp';
import StaffLogin from './components/StaffLogin';
import Home from './components/Home';
import Menu from './components/Menu';
import Cart from './components/Cart';
import OrderConfirmation from './components/OrderConfirmation';
import AdminDashboard from './components/AdminDashboard';

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen dark font-['Space_Grotesk']">
          <Routes>
            <Route path="/" element={<Navigate to="/student-login" replace />} />
            <Route path="/student-login" element={<StudentLogin />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/staff-login" element={<StaffLogin />} />
            <Route path="/home" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}
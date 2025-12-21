import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User, BadgeCheck, Receipt, Wallet, Clock, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

export default function OrderConfirmation() {
  const navigate = useNavigate();
  const { clearCart, getTotalPrice } = useCart();
  const [detailsOpen, setDetailsOpen] = useState(false);

  useEffect(() => {
    // Clear cart when order is confirmed
    clearCart();
  }, [clearCart]);

  return (
    <div className="relative flex min-h-screen w-full flex-col font-['Space_Grotesk'] bg-[#f5f5f7] dark:bg-[#101622]">
      {/* Top App Bar */}
      <div className="sticky top-0 z-10 flex items-center bg-[#f5f5f7] dark:bg-[#101622] p-4 justify-between border-b border-gray-200 dark:border-gray-800">
        <div className="text-[#333333] dark:text-[#e0e0e0] flex size-10 shrink-0 items-center justify-center cursor-pointer" onClick={() => navigate('/home')}>
          <ArrowLeft className="w-6 h-6" />
        </div>
        <h2 className="text-[#333333] dark:text-[#e0e0e0] flex-1 text-center pr-10">Order Confirmation</h2>
      </div>

      <div className="flex-grow p-4">
        {/* Receipt Card */}
        <div className="w-full max-w-md mx-auto bg-white dark:bg-[#1a2233] rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            {/* Header with Logo */}
            <div className="flex justify-center items-center mb-6">
              <img
                className="h-10"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDftgU8Tvq_uH2jRrT140BMRBiOPGUV9zqg8XJvLrR3dvrNqO0cJzqoA1jszqueXF6zLO-ydWLI2SqeQk0OEuYxg1PYSmb4zI-2f5Ynw8JK0eMr_mdqf_7-f6nmX7yvHRM9nl5rEeEk0IseBC0EAkkRsc8pojWgUG71k79GEBm9ZZBl3MmEhCP6fTuPg8YI7U6EXjdFropDqWf8iyv_XgyDd2gJy-2yRf5HJ3oUC5o0GheM3sldoHI8jXRMOaC75UaXpTktMboQ7_4p"
                alt="SRM MCET Logo"
              />
            </div>

            {/* QR Code Section */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-[240px] p-3 bg-white rounded-lg">
                <div
                  className="w-full bg-center bg-no-repeat bg-cover aspect-square"
                  style={{
                    backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuB8pHsW7VZu5YaE8_O0LjHu_3UTYlz4ZBh76G4960BbR6MQT_NmIMFJ9xeofebkaIfV17STMqucl_D4VwCzHSTkNYkp7UYDKk8XbcR2cZrwO4YfXXnDP0qON2c00yItsmcASoBPp4s6otS5auxqw_EVJFMCFuTjNBCrqL1NmK1mQ09EMr0wDb6WRHov_7U90o0nAGJUXE5fNsf4bWR3TBdJ40zgtpqCbAaZWnNX0zfqQqRSNMstKpoKGCZNaVXxXfIdo_rWNEcADIFE)'
                  }}
                />
              </div>
              <p className="text-[#888888] dark:text-[#92a4c9] pt-3 text-center">Show this QR code at the counter</p>
            </div>

            {/* Order ID and Status */}
            <div className="text-center pt-6 pb-4">
              <h1 className="text-[#333333] dark:text-[#e0e0e0]">Order #SRM12345</h1>
              <div className="inline-flex items-center bg-[#FFD700]/20 text-[#b8860b] dark:bg-[#FFD700]/80 dark:text-gray-900 px-3 py-1 rounded-full mt-2">
                Paid
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-dashed border-gray-300 dark:border-gray-700 my-4" />

            {/* User Details */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[#888888] dark:text-[#92a4c9] flex items-center gap-2">
                  <User className="w-4 h-4 text-[#FFD700]" />
                  Student Name
                </span>
                <span className="text-[#333333] dark:text-[#e0e0e0]">R. Kumar</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#888888] dark:text-[#92a4c9] flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4 text-[#FFD700]" />
                  Reg. Number
                </span>
                <span className="text-[#333333] dark:text-[#e0e0e0]">953121104001</span>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-dashed border-gray-300 dark:border-gray-700 my-4" />

            {/* Order Summary Accordion */}
            <details className="group" open={detailsOpen}>
              <summary
                className="flex justify-between items-center cursor-pointer list-none"
                onClick={(e) => {
                  e.preventDefault();
                  setDetailsOpen(!detailsOpen);
                }}
              >
                <span className="text-[#888888] dark:text-[#92a4c9] flex items-center gap-2">
                  <Receipt className="w-4 h-4 text-[#FFD700]" />
                  Order Summary
                </span>
                <span className="text-[#333333] dark:text-[#e0e0e0] flex items-center gap-1">
                  View Items
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      detailsOpen ? 'rotate-180' : ''
                    }`}
                  />
                </span>
              </summary>
              <div className="mt-4 space-y-2 text-[#333333] dark:text-[#e0e0e0] pl-6">
                <div className="flex justify-between">
                  <span>1x Veg Fried Rice</span>
                  <span>₹60.00</span>
                </div>
                <div className="flex justify-between">
                  <span>2x Samosa</span>
                  <span>₹20.00</span>
                </div>
                <div className="flex justify-between">
                  <span>1x Cold Coffee</span>
                  <span>₹40.00</span>
                </div>
              </div>
            </details>

            {/* Divider */}
            <div className="border-t border-dashed border-gray-300 dark:border-gray-700 my-4" />

            {/* Payment Details */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[#888888] dark:text-[#92a4c9] flex items-center gap-2">
                  <Wallet className="w-4 h-4 text-[#FFD700]" />
                  Payment Method
                </span>
                <span className="text-[#333333] dark:text-[#e0e0e0]">Paid with Wallet</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#888888] dark:text-[#92a4c9] flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#FFD700]" />
                  Timestamp
                </span>
                <span className="text-[#333333] dark:text-[#e0e0e0]">Oct 26, 2023, 12:30 PM</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-[#333333] dark:text-[#e0e0e0]">Total Amount</span>
                <span className="text-[#003366] dark:text-[#FFD700]">₹120.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Button */}
      <div className="sticky bottom-0 bg-[#f5f5f7]/80 dark:bg-[#101622]/80 backdrop-blur-sm p-4 border-t border-gray-200 dark:border-gray-800">
        <button
          className="w-full bg-[#003366] text-white py-3 px-4 rounded-lg hover:bg-[#003366]/90 transition-colors"
          onClick={() => navigate('/home')}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
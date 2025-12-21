import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Lock, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const navigate = useNavigate();
  const { items, updateQuantity, removeItem, getTotalPrice, clearCart } = useCart();
  const [couponCode, setCouponCode] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('upi');
  const [discount, setDiscount] = useState(0);

  const subtotal = getTotalPrice();
  const taxes = Math.round(subtotal * 0.05); // 5% tax
  const total = subtotal - discount + taxes;

  const applyCoupon = () => {
    if (couponCode.toUpperCase() === 'SRMDEAL') {
      setDiscount(Math.round(subtotal * 0.1)); // 10% discount
      alert('Coupon applied! 10% discount');
    } else if (couponCode) {
      alert('Invalid coupon code');
    }
  };

  const handlePayment = () => {
    if (items.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    navigate('/order-confirmation');
  };

  if (items.length === 0) {
    return (
      <div className="relative flex min-h-screen w-full flex-col bg-[#f6f6f8] dark:bg-[#101622] font-['Space_Grotesk']">
        <header className="sticky top-0 z-10 flex items-center bg-[#f6f6f8] dark:bg-[#101622]/80 backdrop-blur-sm p-4 border-b border-[#e0e0e0] dark:border-[#324467]">
          <button
            className="text-[#1c1c1e] dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-[#1c1c1e] dark:text-white flex-1 text-center pr-10">Your Cart</h1>
        </header>

        <div className="flex-1 flex flex-col items-center justify-center p-8">
          <div className="text-8xl mb-4">🛒</div>
          <h2 className="text-[#1c1c1e] dark:text-white mb-2">Your cart is empty</h2>
          <p className="text-[#8a8a8e] dark:text-[#9e9e9e] text-center mb-6">
            Add some delicious items from our menu
          </p>
          <button
            className="bg-[#0055A4] text-white px-6 py-3 rounded-lg hover:bg-[#0055A4]/90 transition-colors"
            onClick={() => navigate('/menu')}
          >
            Browse Menu
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#f6f6f8] dark:bg-[#101622] font-['Space_Grotesk']">
      {/* Top App Bar */}
      <header className="sticky top-0 z-10 flex items-center bg-[#f6f6f8] dark:bg-[#101622]/80 backdrop-blur-sm p-4 border-b border-[#e0e0e0] dark:border-[#324467]">
        <button
          className="text-[#1c1c1e] dark:text-white flex size-10 shrink-0 items-center justify-center rounded-full"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-[#1c1c1e] dark:text-white flex-1 text-center pr-10">Confirm Your Order</h1>
      </header>

      <main className="flex-grow pb-32">
        {/* Order Summary Section */}
        <section className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[#1c1c1e] dark:text-white">Your Items</h2>
            <button
              className="text-red-500 hover:text-red-600 text-sm flex items-center gap-1"
              onClick={() => {
                if (confirm('Clear all items from cart?')) {
                  clearCart();
                }
              }}
            >
              <Trash2 className="w-4 h-4" />
              Clear Cart
            </button>
          </div>
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-4 bg-white dark:bg-[#192233] p-3 rounded-lg">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-16 shrink-0"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="flex flex-col justify-center flex-1 min-w-0">
                  <p className="text-[#1c1c1e] dark:text-white truncate">{item.name}</p>
                  <p className="text-[#8a8a8e] dark:text-[#9e9e9e] text-sm">₹{item.price.toFixed(2)}</p>
                </div>
                <div className="shrink-0 flex items-center gap-3">
                  <div className="flex items-center gap-2 text-[#1c1c1e] dark:text-white">
                    <button
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f6f6f8] dark:bg-[#101622] border border-[#e0e0e0] dark:border-[#324467] cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f6f6f8] dark:bg-[#101622] border border-[#e0e0e0] dark:border-[#324467] cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <button
                    className="text-red-500 hover:text-red-600 p-1"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="px-4">
          <hr className="border-[#e0e0e0] dark:border-[#324467]" />
        </div>

        {/* Coupon Code Section */}
        <section className="p-4">
          <div className="flex items-end gap-2">
            <label className="flex flex-col flex-1">
              <p className="text-[#1c1c1e] dark:text-white pb-2 text-sm">Coupon Code</p>
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1c1c1e] dark:text-white focus:outline-0 focus:ring-2 focus:ring-[#0055A4]/50 border border-[#e0e0e0] dark:border-[#324467] bg-white dark:bg-[#101622] focus:border-[#0055A4]/50 dark:focus:border-[#0055A4]/50 h-12 placeholder:text-[#8a8a8e] dark:placeholder:text-[#9e9e9e] px-4"
                placeholder="Try: SRMDEAL"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
            </label>
            <button
              className="bg-[#0055A4]/20 text-[#0055A4] h-12 px-6 rounded-lg hover:bg-[#0055A4]/30 transition-colors"
              onClick={applyCoupon}
            >
              Apply
            </button>
          </div>
        </section>

        <div className="px-4">
          <hr className="border-[#e0e0e0] dark:border-[#324467]" />
        </div>

        {/* Bill Details Section */}
        <section className="p-4">
          <h2 className="text-[#1c1c1e] dark:text-white mb-4">Bill Details</h2>
          <div className="space-y-3 text-[#8a8a8e] dark:text-[#9e9e9e]">
            <div className="flex justify-between items-center">
              <p>Subtotal</p>
              <p className="text-[#1c1c1e] dark:text-white">₹{subtotal.toFixed(2)}</p>
            </div>
            {discount > 0 && (
              <div className="flex justify-between items-center">
                <p>Discount</p>
                <p className="text-green-500">- ₹{discount.toFixed(2)}</p>
              </div>
            )}
            <div className="flex justify-between items-center">
              <p>Taxes & Charges (5%)</p>
              <p className="text-[#1c1c1e] dark:text-white">₹{taxes.toFixed(2)}</p>
            </div>
            <hr className="border-dashed border-[#e0e0e0] dark:border-[#324467] my-2" />
            <div className="flex justify-between items-center text-lg text-[#1c1c1e] dark:text-white">
              <p>Grand Total</p>
              <p className="font-bold">₹{total.toFixed(2)}</p>
            </div>
          </div>
        </section>

        <div className="px-4">
          <hr className="border-[#e0e0e0] dark:border-[#324467]" />
        </div>

        {/* Payment Method Section */}
        <section className="p-4">
          <h2 className="text-[#1c1c1e] dark:text-white mb-4">Select Payment Method</h2>
          <div className="space-y-3">
            <label
              className={`flex items-center gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                selectedPayment === 'upi'
                  ? 'border-[#0055A4] bg-[#0055A4]/10'
                  : 'border-[#e0e0e0] dark:border-[#324467] bg-transparent'
              }`}
            >
              <input
                checked={selectedPayment === 'upi'}
                className="form-radio text-[#0055A4] focus:ring-[#0055A4]"
                name="payment-method"
                type="radio"
                onChange={() => setSelectedPayment('upi')}
              />
              <span className="text-2xl">💳</span>
              <span className={`flex-1 ${selectedPayment === 'upi' ? 'text-[#0055A4] font-semibold' : 'text-[#1c1c1e] dark:text-white'}`}>
                UPI / GPay
              </span>
            </label>

            <label
              className={`flex items-center gap-4 p-4 rounded-lg border cursor-pointer transition-all ${
                selectedPayment === 'card'
                  ? 'border-[#0055A4] bg-[#0055A4]/10'
                  : 'border-[#e0e0e0] dark:border-[#324467] bg-transparent'
              }`}
            >
              <input
                checked={selectedPayment === 'card'}
                className="form-radio text-[#0055A4] focus:ring-[#0055A4]"
                name="payment-method"
                type="radio"
                onChange={() => setSelectedPayment('card')}
              />
              <span className="text-2xl">💳</span>
              <span className={`flex-1 ${selectedPayment === 'card' ? 'text-[#0055A4] font-semibold' : 'text-[#1c1c1e] dark:text-white'}`}>
                Credit/Debit Card
              </span>
            </label>

            <label
              className={`flex items-center gap-4 p-4 rounded-lg border cursor-pointer transition-all ${
                selectedPayment === 'wallet'
                  ? 'border-[#0055A4] bg-[#0055A4]/10'
                  : 'border-[#e0e0e0] dark:border-[#324467] bg-transparent'
              }`}
            >
              <input
                checked={selectedPayment === 'wallet'}
                className="form-radio text-[#0055A4] focus:ring-[#0055A4]"
                name="payment-method"
                type="radio"
                onChange={() => setSelectedPayment('wallet')}
              />
              <span className="text-2xl">👛</span>
              <span className={`flex-1 ${selectedPayment === 'wallet' ? 'text-[#0055A4] font-semibold' : 'text-[#1c1c1e] dark:text-white'}`}>
                Wallets
              </span>
            </label>
          </div>
        </section>
      </main>

      {/* Floating Footer / CTA */}
      <footer className="fixed bottom-0 left-0 right-0 p-4 bg-[#f6f6f8]/80 dark:bg-[#101622]/80 backdrop-blur-sm border-t border-[#e0e0e0] dark:border-[#324467]">
        <div className="flex items-center justify-center gap-2 text-[#8a8a8e] dark:text-[#9e9e9e] mb-3 text-sm">
          <Lock className="w-4 h-4" />
          <span>Secure Payments by Razorpay</span>
        </div>
        <button
          className="w-full bg-[#0055A4] text-white h-14 rounded-xl flex items-center justify-center shadow-lg shadow-[#0055A4]/30 hover:bg-[#0055A4]/90 active:scale-[0.98] transition-all"
          onClick={handlePayment}
        >
          Pay ₹{total.toFixed(2)}
        </button>
      </footer>
    </div>
  );
}

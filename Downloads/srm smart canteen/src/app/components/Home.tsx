import { useNavigate } from 'react-router-dom';
import { User, QrCode, BookOpen, ShoppingCart, Receipt, Home as HomeIcon } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Home() {
  const navigate = useNavigate();
  const { getTotalItems } = useCart();

  const specials = [
    {
      name: 'Margherita Pizza',
      description: 'Classic cheese & tomato',
      price: 150,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlbUKqz5AdQLHrVtIjFfRe8pgrKWvuFmhtng6cKnQBnAwyER6_zclRQy31SZRJeMZh92GKtnOTw73d-diq-QAjGIpXYqeT7xgV7oOED_wcpeSzZa8dUpdyc8qxTp-oGOV1zz0y0mqHEgS6glWwp8tsOLdV4F4u-lfXFOdeG3JqP2MMbkEnVf6M1HHuGsnv95lkuGO-z4bGvbjlBu5sMRWZWzIA2faB6wZUnbmGoSFJ9Ie2pxjvnn6TGH2RXDJfo_pwpkCOcECtAcF4'
    },
    {
      name: 'Veggie Delight',
      description: 'Fresh garden salad',
      price: 120,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCml_RojMGvJlNxx0FvnQxAbu6Zw1QksejJ9uFuWPfV1T0V6PtV3lWO-TVmxexw94pkR_a9ChF19Ut0LEOjWE1VPebo97tw41plGxYJvR5MxYORTswPT9yCSqrQLU5tg9iBOsw7w7cbMJlyVMus4WvEdAT2z6FXHDdTyDOlbZcIl4J-MRojo04jPoThuBWfO0Q9ioHZEZiFXPipA5Ps8CEnYTshc0ZljAsWsmdS1--C93o4VUxMQpy4X_SWJJjHF76D16q9mbbXjPB_'
    },
    {
      name: 'Chicken Burger',
      description: 'With crispy fries',
      price: 180,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzPhY7cKGLzJs_Th33aMIYKZkJnI6qrFzDzrfPJK9UjiBi1HWr2sYN_iAyUHLxg5k0igMMOHE9i2pT29xtn6BheJ6-aCW496idWxDawOt90Ksp9BCDpVYAFD_3mBs2pGYJBoP8f5I2jueoaLCeh_NvdWkc2Mg0OwBUDCio_sFo05233GQikBpV_eChaC9Vum8lXRHuDneUeXQZ8WX4yp3HlJXCqxpjt9mC2YZ7xoFoQK1wYBnu2EqFlG7Enks4lznl5VIYP2eQc05O'
    }
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#f6f6f8] dark:bg-[#101622] font-['Space_Grotesk']">
      {/* Top App Bar */}
      <div className="flex items-center p-4 bg-[#f6f6f8] dark:bg-[#101622] justify-between sticky top-0 z-10">
        <h2 className="text-[#333333] dark:text-white flex-1">SRM Smart Canteen</h2>
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white dark:bg-[#192233] border border-[#e5e7eb] dark:border-[#324467]">
          <User className="text-[#333333] dark:text-white w-6 h-6" />
        </div>
      </div>

      {/* Headline Text */}
      <div className="px-4 pt-4 pb-1">
        <h1 className="text-[#333333] dark:text-white tracking-tight">Welcome, Student!</h1>
      </div>

      {/* Body Text */}
      <div className="px-4 pb-6">
        <p className="text-[#6b7280] dark:text-[#92a4c9]">Pre-book your meal in seconds.</p>
      </div>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4 p-4">
        <div className="flex flex-1 gap-3 rounded-xl border border-[#FFD700]/50 bg-[#FFD700]/20 dark:bg-[#FFD700]/10 p-4 flex-col justify-between items-start text-left cursor-pointer hover:scale-105 transition-transform">
          <div className="flex size-12 items-center justify-center rounded-full bg-[#FFD700] text-[#333333]">
            <QrCode className="w-8 h-8" />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#333333] dark:text-white">Scan to Prebook</h2>
            <p className="text-[#6b7280] dark:text-[#92a4c9]">Pay with QR</p>
          </div>
        </div>

        <div
          className="flex flex-1 gap-3 rounded-xl border border-[#e5e7eb] dark:border-[#324467] bg-white dark:bg-[#192233] p-4 flex-col justify-between items-start text-left cursor-pointer hover:scale-105 transition-transform"
          onClick={() => navigate('/menu')}
        >
          <div className="flex size-12 items-center justify-center rounded-full bg-[#0033A0]/20 text-[#0033A0] dark:text-[#FFD700]">
            <BookOpen className="w-8 h-8" />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#333333] dark:text-white">View Menu</h2>
            <p className="text-[#6b7280] dark:text-[#92a4c9]">Browse items</p>
          </div>
        </div>

        <div
          className="flex flex-1 gap-3 rounded-xl border border-[#e5e7eb] dark:border-[#324467] bg-white dark:bg-[#192233] p-4 flex-col justify-between items-start text-left cursor-pointer hover:scale-105 transition-transform"
          onClick={() => navigate('/cart')}
        >
          <div className="flex size-12 items-center justify-center rounded-full bg-[#0033A0]/20 text-[#0033A0] dark:text-[#FFD700]">
            <ShoppingCart className="w-8 h-8" />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#333333] dark:text-white">My Cart</h2>
            <p className="text-[#6b7280] dark:text-[#92a4c9]">Checkout now</p>
          </div>
        </div>

        <div className="flex flex-1 gap-3 rounded-xl border border-[#e5e7eb] dark:border-[#324467] bg-white dark:bg-[#192233] p-4 flex-col justify-between items-start text-left cursor-pointer hover:scale-105 transition-transform">
          <div className="flex size-12 items-center justify-center rounded-full bg-[#0033A0]/20 text-[#0033A0] dark:text-[#FFD700]">
            <Receipt className="w-8 h-8" />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#333333] dark:text-white">My Orders</h2>
            <p className="text-[#6b7280] dark:text-[#92a4c9]">View history</p>
          </div>
        </div>
      </div>

      {/* Section Header */}
      <div className="px-4 pb-3 pt-6">
        <h2 className="text-[#333333] dark:text-white">Today's Specials</h2>
      </div>

      {/* Carousel for Today's Specials */}
      <div className="flex w-full snap-x snap-mandatory overflow-x-auto px-4 pb-6 gap-4">
        {specials.map((item, index) => (
          <div key={index} className="flex w-48 shrink-0 snap-start flex-col rounded-xl bg-white dark:bg-[#192233]">
            <img
              className="h-32 w-full rounded-t-xl object-cover"
              src={item.image}
              alt={item.name}
            />
            <div className="flex flex-col gap-2 p-3">
              <h3 className="text-[#333333] dark:text-white">{item.name}</h3>
              <p className="text-[#6b7280] dark:text-[#92a4c9]">{item.description}</p>
              <p className="text-[#0033A0] dark:text-[#FFD700]">₹{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="h-24" />

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-10 border-t border-[#e5e7eb] dark:border-[#324467] bg-[#f6f6f8]/80 dark:bg-[#101622]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-md items-center justify-around px-4 py-2">
          <a className="flex flex-col items-center gap-1 text-[#0033A0] dark:text-[#FFD700]" href="#">
            <HomeIcon className="w-6 h-6" />
            <span className="text-xs">Home</span>
          </a>
          <a
            className="flex flex-col items-center gap-1 text-[#6b7280] dark:text-[#92a4c9] cursor-pointer"
            onClick={() => navigate('/menu')}
          >
            <BookOpen className="w-6 h-6" />
            <span className="text-xs">Menu</span>
          </a>
          <a className="flex flex-col items-center gap-1 text-[#6b7280] dark:text-[#92a4c9]" href="#">
            <Receipt className="w-6 h-6" />
            <span className="text-xs">Orders</span>
          </a>
          <a className="flex flex-col items-center gap-1 text-[#6b7280] dark:text-[#92a4c9]" href="#">
            <User className="w-6 h-6" />
            <span className="text-xs">Profile</span>
          </a>
        </div>
      </div>
    </div>
  );
}
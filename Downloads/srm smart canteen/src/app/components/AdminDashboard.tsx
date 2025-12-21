import { useState } from 'react';
import { RefreshCw, Search, ChefHat, CheckCircle2 } from 'lucide-react';

export default function AdminDashboard() {
  const [selectedFilter, setSelectedFilter] = useState('Lunch');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = ['Lunch', 'Breakfast', 'Snacks', 'All'];

  const orders = [
    {
      id: 'SMC12345',
      name: 'Priya S.',
      regNo: '95362105123',
      items: [
        { name: '2x Veg Fried Rice', price: 120 },
        { name: '1x Gobi Manchurian', price: 70 }
      ],
      total: 190,
      status: 'pending'
    },
    {
      id: 'SMC12344',
      name: 'Rajesh K.',
      regNo: '95362105101',
      items: [
        { name: '1x Chicken Biryani', price: 150 },
        { name: '1x Pepsi', price: 20 }
      ],
      total: 170,
      status: 'preparing'
    }
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#f5f5f7] dark:bg-[#101622] font-['Space_Grotesk'] text-[#333333] dark:text-[#f5f5f7]">
      {/* Top App Bar */}
      <div className="sticky top-0 z-10 flex items-center bg-[#003366] p-4 pb-3 justify-between shadow-md">
        <div className="text-white flex size-10 shrink-0 items-center justify-center">
          <span className="text-3xl">🍽️</span>
        </div>
        <h1 className="text-white flex-1 text-center">Admin Dashboard</h1>
        <div className="flex w-10 items-center justify-end">
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-transparent text-white gap-2 hover:bg-white/10 active:bg-white/20">
            <RefreshCw className="w-6 h-6" />
          </button>
        </div>
      </div>

      <main className="flex-1 p-4 pt-6">
        {/* Stats */}
        <div className="flex flex-wrap gap-4">
          <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg bg-white dark:bg-slate-800/50 p-5 border border-slate-200 dark:border-slate-700">
            <p className="text-[#333333] dark:text-slate-300">Total Pending Orders</p>
            <p className="text-[#333333] dark:text-white tracking-light">15</p>
          </div>
          <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg bg-white dark:bg-slate-800/50 p-5 border border-slate-200 dark:border-slate-700">
            <p className="text-[#333333] dark:text-slate-300">Total Items to Prepare</p>
            <p className="text-[#333333] dark:text-white tracking-light">42</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="pt-6">
          <label className="flex flex-col min-w-40 h-12 w-full">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full shadow-sm bg-white dark:bg-slate-800/50">
              <div className="text-slate-500 dark:text-slate-400 flex items-center justify-center pl-4 rounded-l-lg">
                <Search className="w-5 h-5" />
              </div>
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#333333] dark:text-white focus:outline-0 focus:ring-0 border-none bg-transparent h-full placeholder:text-slate-500 dark:placeholder:text-slate-400 px-4 rounded-l-none pl-2"
                placeholder="Search by Order ID or Student Name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </label>
        </div>

        {/* Chips / Filters */}
        <div className="flex gap-3 py-6 overflow-x-auto">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-5 ${
                selectedFilter === filter
                  ? 'bg-[#FFD700] text-[#003366]'
                  : 'bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-[#333333] dark:text-slate-300'
              }`}
              onClick={() => setSelectedFilter(filter)}
            >
              <p className={selectedFilter === filter ? '' : ''}>{filter}</p>
            </button>
          ))}
        </div>

        {/* Section Header */}
        <h2 className="text-[#333333] dark:text-white pb-4">Upcoming Lunch Orders</h2>

        {/* Order Cards List */}
        <div className="flex flex-col gap-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="flex flex-col gap-4 rounded-lg bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-4 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#003366]">#{order.id}</p>
                  <p className="text-slate-500 dark:text-slate-400">
                    {order.name} - {order.regNo}
                  </p>
                </div>
                <div
                  className={`flex h-7 items-center justify-center gap-2 rounded-full px-3 ${
                    order.status === 'pending'
                      ? 'bg-[#E69B00]/20'
                      : 'bg-[#3B82F6]/20'
                  }`}
                >
                  <div
                    className={`h-2 w-2 rounded-full ${
                      order.status === 'pending' ? 'bg-[#E69B00]' : 'bg-[#3B82F6]'
                    }`}
                  />
                  <p
                    className={`uppercase ${
                      order.status === 'pending' ? 'text-[#E69B00]' : 'text-[#3B82F6]'
                    }`}
                  >
                    {order.status}
                  </p>
                </div>
              </div>

              <div className="w-full border-t border-dashed border-slate-200 dark:border-slate-700" />

              <div className="flex flex-col gap-2 text-[#333333] dark:text-slate-300">
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span>{item.name}</span>
                    <span>₹{item.price}</span>
                  </div>
                ))}
              </div>

              <div className="w-full border-t border-dashed border-slate-200 dark:border-slate-700" />

              <div className="flex justify-between text-[#333333] dark:text-white">
                <span>Total</span>
                <span>₹{order.total}</span>
              </div>

              <button
                className={`flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 gap-2 transition-colors ${
                  order.status === 'pending'
                    ? 'bg-[#003366] text-white hover:bg-[#003366]/90 active:bg-[#003366]/80'
                    : 'bg-[#22C55E] text-white hover:bg-[#22C55E]/90 active:bg-[#22C55E]/80'
                }`}
              >
                {order.status === 'pending' ? (
                  <>
                    <ChefHat className="w-5 h-5" />
                    <span>Start Preparing</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Mark as Ready</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

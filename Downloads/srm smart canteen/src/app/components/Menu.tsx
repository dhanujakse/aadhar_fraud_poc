import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu as MenuIcon, Search, ShoppingCart, Plus } from 'lucide-react';
import { menuItems } from '../data/menuItems';
import { useCart } from '../context/CartContext';

export default function Menu() {
  const navigate = useNavigate();
  const { addItem, getTotalItems } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Breakfast', 'Lunch', 'Snacks', 'Drinks', 'Desserts'];

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (item: typeof menuItems[0]) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      category: item.category
    });
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#f6f6f8] dark:bg-[#101622] font-['Space_Grotesk']">
      {/* Top App Bar */}
      <header className="sticky top-0 z-10 flex items-center justify-between bg-[#003366] p-4 shadow-md">
        <button
          className="flex h-12 w-12 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10"
          onClick={() => navigate('/home')}
        >
          <MenuIcon className="w-6 h-6" />
        </button>
        <h1 className="flex-1 text-center text-white">SRM Smart Canteen</h1>
        <button className="flex h-12 w-12 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10">
          <Search className="w-6 h-6" />
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 pb-24">
        {/* Search Bar */}
        <div className="p-4 pb-2">
          <input
            type="text"
            className="w-full h-12 bg-white dark:bg-[#19212e] border border-slate-200 dark:border-slate-700 rounded-lg px-4 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#FFD700]/50"
            placeholder="Search menu items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Chips/Category Filters */}
        <div className="flex gap-3 overflow-x-auto px-4 pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-5 transition-colors ${
                selectedCategory === category
                  ? 'bg-[#FFD700] text-[#003366]'
                  : 'bg-[#f6f6f8] text-[#333333] hover:bg-gray-200 dark:bg-[#19212e] dark:text-white dark:hover:bg-gray-700'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-4 p-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm dark:bg-[#19212e] hover:shadow-md transition-shadow"
            >
              <div className="relative w-full">
                {!item.available && (
                  <div className="absolute right-2 top-2 rounded-full bg-red-500 px-2 py-0.5 text-white z-10 text-xs">
                    Sold Out
                  </div>
                )}
                <div
                  className={`aspect-square w-full bg-cover bg-center ${!item.available ? 'opacity-60' : ''}`}
                  style={{ backgroundImage: `url(${item.image})` }}
                />
              </div>
              <div className="flex flex-1 flex-col p-3">
                <p className="text-[#333333] dark:text-white truncate" title={item.name}>{item.name}</p>
                {item.description && (
                  <p className="text-xs text-[#888888] dark:text-[#888888] truncate mt-1">{item.description}</p>
                )}
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-[#888888] dark:text-[#888888]">₹{item.price}</p>
                  <button
                    className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
                      item.available
                        ? 'bg-[#003366]/20 text-[#003366] hover:bg-[#003366]/30 active:scale-95'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500'
                    }`}
                    disabled={!item.available}
                    onClick={() => handleAddToCart(item)}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 px-4">
            <p className="text-slate-500 dark:text-slate-400 text-center">
              No items found matching your search.
            </p>
          </div>
        )}
      </main>

      {/* Floating Action Button */}
      {getTotalItems() > 0 && (
        <div className="fixed bottom-6 right-6 z-20">
          <button
            className="flex h-16 cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-full bg-[#FFD700] pl-6 pr-6 text-[#003366] shadow-lg transition-transform hover:scale-105 active:scale-95"
            onClick={() => navigate('/cart')}
          >
            <ShoppingCart className="w-6 h-6" />
            <span>View Cart ({getTotalItems()})</span>
          </button>
        </div>
      )}
    </div>
  );
}

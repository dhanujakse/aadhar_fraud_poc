export interface MenuItem {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  available: boolean;
  description?: string;
}

export const menuItems: MenuItem[] = [
  // Breakfast Items
  {
    id: 1,
    name: 'Masala Dosa',
    price: 50,
    image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=400&h=400&fit=crop',
    category: 'Breakfast',
    available: true,
    description: 'Crispy dosa with potato filling'
  },
  {
    id: 2,
    name: 'Idli Sambar',
    price: 40,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&h=400&fit=crop',
    category: 'Breakfast',
    available: true,
    description: 'Soft idlis with sambar and chutney'
  },
  {
    id: 3,
    name: 'Poha',
    price: 35,
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=400&fit=crop',
    category: 'Breakfast',
    available: true,
    description: 'Flattened rice with spices'
  },
  {
    id: 4,
    name: 'Upma',
    price: 30,
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400&h=400&fit=crop',
    category: 'Breakfast',
    available: true,
    description: 'Semolina breakfast dish'
  },
  {
    id: 5,
    name: 'Vada',
    price: 25,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=400&fit=crop',
    category: 'Breakfast',
    available: true,
    description: 'Crispy lentil fritters'
  },
  {
    id: 6,
    name: 'Aloo Paratha',
    price: 45,
    image: 'https://images.unsplash.com/photo-1589368337444-f2c5f98dd4e5?w=400&h=400&fit=crop',
    category: 'Breakfast',
    available: true,
    description: 'Stuffed potato flatbread'
  },

  // Lunch Items
  {
    id: 7,
    name: 'Chicken Biryani',
    price: 120,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=400&fit=crop',
    category: 'Lunch',
    available: false,
    description: 'Aromatic chicken rice'
  },
  {
    id: 8,
    name: 'Veg Biryani',
    price: 90,
    image: 'https://images.unsplash.com/photo-1642821373181-696a54913e93?w=400&h=400&fit=crop',
    category: 'Lunch',
    available: true,
    description: 'Vegetable biryani with raita'
  },
  {
    id: 9,
    name: 'Paneer Butter Masala',
    price: 110,
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=400&fit=crop',
    category: 'Lunch',
    available: true,
    description: 'Rich paneer curry'
  },
  {
    id: 10,
    name: 'Dal Tadka',
    price: 70,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=400&fit=crop',
    category: 'Lunch',
    available: true,
    description: 'Tempered lentil curry'
  },
  {
    id: 11,
    name: 'Chole Bhature',
    price: 80,
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=400&h=400&fit=crop',
    category: 'Lunch',
    available: true,
    description: 'Chickpea curry with fried bread'
  },
  {
    id: 12,
    name: 'Rajma Rice',
    price: 75,
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356072?w=400&h=400&fit=crop',
    category: 'Lunch',
    available: true,
    description: 'Kidney beans curry with rice'
  },
  {
    id: 13,
    name: 'Chicken Curry',
    price: 130,
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=400&fit=crop',
    category: 'Lunch',
    available: true,
    description: 'Spicy chicken curry'
  },
  {
    id: 14,
    name: 'Fish Curry',
    price: 140,
    image: 'https://images.unsplash.com/photo-1580959375944-0d0b2a8e6bfc?w=400&h=400&fit=crop',
    category: 'Lunch',
    available: true,
    description: 'Coastal style fish curry'
  },

  // Snacks Items
  {
    id: 15,
    name: 'Samosa',
    price: 15,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=400&fit=crop',
    category: 'Snacks',
    available: true,
    description: 'Crispy triangular pastry'
  },
  {
    id: 16,
    name: 'Veg Noodles',
    price: 70,
    image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&h=400&fit=crop',
    category: 'Snacks',
    available: true,
    description: 'Stir-fried noodles'
  },
  {
    id: 17,
    name: 'Paneer Fried Rice',
    price: 90,
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=400&fit=crop',
    category: 'Snacks',
    available: true,
    description: 'Fried rice with paneer'
  },
  {
    id: 18,
    name: 'Spring Roll',
    price: 50,
    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&h=400&fit=crop',
    category: 'Snacks',
    available: true,
    description: 'Crispy vegetable rolls'
  },
  {
    id: 19,
    name: 'French Fries',
    price: 40,
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=400&fit=crop',
    category: 'Snacks',
    available: true,
    description: 'Crispy potato fries'
  },
  {
    id: 20,
    name: 'Chicken Wings',
    price: 120,
    image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&h=400&fit=crop',
    category: 'Snacks',
    available: true,
    description: 'Spicy chicken wings'
  },
  {
    id: 21,
    name: 'Veg Burger',
    price: 60,
    image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400&h=400&fit=crop',
    category: 'Snacks',
    available: true,
    description: 'Vegetable patty burger'
  },
  {
    id: 22,
    name: 'Chicken Burger',
    price: 80,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop',
    category: 'Snacks',
    available: true,
    description: 'Grilled chicken burger'
  },
  {
    id: 23,
    name: 'Pizza Slice',
    price: 70,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=400&fit=crop',
    category: 'Snacks',
    available: true,
    description: 'Cheese pizza slice'
  },
  {
    id: 24,
    name: 'Pav Bhaji',
    price: 60,
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=400&fit=crop',
    category: 'Snacks',
    available: true,
    description: 'Mashed vegetables with bread'
  },

  // Drinks Items
  {
    id: 25,
    name: 'Coffee',
    price: 20,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop',
    category: 'Drinks',
    available: true,
    description: 'Hot coffee'
  },
  {
    id: 26,
    name: 'Tea',
    price: 15,
    image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&h=400&fit=crop',
    category: 'Drinks',
    available: true,
    description: 'Indian masala tea'
  },
  {
    id: 27,
    name: 'Cold Coffee',
    price: 40,
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400&h=400&fit=crop',
    category: 'Drinks',
    available: true,
    description: 'Iced coffee with cream'
  },
  {
    id: 28,
    name: 'Mango Shake',
    price: 50,
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=400&fit=crop',
    category: 'Drinks',
    available: true,
    description: 'Fresh mango milkshake'
  },
  {
    id: 29,
    name: 'Chocolate Shake',
    price: 50,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=400&fit=crop',
    category: 'Drinks',
    available: true,
    description: 'Chocolate milkshake'
  },
  {
    id: 30,
    name: 'Fresh Lime Soda',
    price: 30,
    image: 'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f1e?w=400&h=400&fit=crop',
    category: 'Drinks',
    available: true,
    description: 'Fresh lime with soda'
  },
  {
    id: 31,
    name: 'Lassi',
    price: 35,
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab00a?w=400&h=400&fit=crop',
    category: 'Drinks',
    available: true,
    description: 'Sweet or salted yogurt drink'
  },
  {
    id: 32,
    name: 'Fresh Juice',
    price: 45,
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=400&fit=crop',
    category: 'Drinks',
    available: true,
    description: 'Seasonal fruit juice'
  },
  {
    id: 33,
    name: 'Pepsi',
    price: 20,
    image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400&h=400&fit=crop',
    category: 'Drinks',
    available: true,
    description: 'Chilled soft drink'
  },

  // Desserts Items
  {
    id: 34,
    name: 'Gulab Jamun',
    price: 30,
    image: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=400&h=400&fit=crop',
    category: 'Desserts',
    available: true,
    description: 'Sweet milk balls in syrup'
  },
  {
    id: 35,
    name: 'Rasgulla',
    price: 30,
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=400&fit=crop',
    category: 'Desserts',
    available: true,
    description: 'Spongy cottage cheese balls'
  },
  {
    id: 36,
    name: 'Ice Cream',
    price: 40,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=400&fit=crop',
    category: 'Desserts',
    available: true,
    description: 'Vanilla, chocolate or strawberry'
  },
  {
    id: 37,
    name: 'Brownie',
    price: 50,
    image: 'https://images.unsplash.com/photo-1564355808853-07fdb4fc1394?w=400&h=400&fit=crop',
    category: 'Desserts',
    available: true,
    description: 'Chocolate brownie with nuts'
  },
  {
    id: 38,
    name: 'Pastry',
    price: 60,
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=400&fit=crop',
    category: 'Desserts',
    available: true,
    description: 'Fresh cream pastry'
  },
  {
    id: 39,
    name: 'Kheer',
    price: 35,
    image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400&h=400&fit=crop',
    category: 'Desserts',
    available: true,
    description: 'Rice pudding'
  },
  {
    id: 40,
    name: 'Jalebi',
    price: 25,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=400&fit=crop',
    category: 'Desserts',
    available: true,
    description: 'Crispy sweet spirals'
  }
];

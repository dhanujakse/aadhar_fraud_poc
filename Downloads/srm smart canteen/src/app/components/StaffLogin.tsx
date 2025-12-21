import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Badge, Lock, HelpCircle, ArrowRight } from 'lucide-react';

export default function StaffLogin() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    navigate('/admin');
  };

  return (
    <div className="bg-[#f6f6f8] dark:bg-[#101622] font-['Space_Grotesk'] text-slate-900 dark:text-white min-h-screen flex flex-col items-center justify-center overflow-hidden relative">
      {/* Background Elements for "Cyber" feel */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-[#135bec]/10 rounded-full blur-[120px]" />
        <div className="absolute top-[60%] -right-[10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
        {/* Abstract grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-md px-6 py-8 flex flex-col h-full justify-between sm:justify-center">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-6 mb-8 mt-12 sm:mt-0">
          {/* Logo Placeholder */}
          <div className="relative w-24 h-24 bg-gradient-to-br from-gray-800 to-black rounded-2xl flex items-center justify-center shadow-2xl border border-gray-700/50">
            <div className="absolute inset-0 bg-[#135bec]/20 rounded-2xl blur-md" />
            {/* Simulating a logo */}
            <span className="text-[#135bec] relative z-10 text-5xl">🍽️</span>
          </div>

          <div className="text-center space-y-2">
            <h1 className="tracking-tight text-white">Staff Access</h1>
            <p className="text-slate-400">SRM MCET Smart Canteen</p>
          </div>
        </div>

        {/* Login Form */}
        <div className="w-full space-y-5 backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10 shadow-xl">
          {/* Email Input */}
          <div className="group">
            <label className="block text-slate-400 mb-1.5 ml-1">Staff ID / Email</label>
            <div className="relative flex items-center">
              <Badge className="absolute left-4 text-slate-500 pointer-events-none transition-colors group-focus-within:text-[#135bec]" />
              <input
                className="w-full bg-[#192233]/80 border border-slate-700 text-white rounded-lg focus:ring-2 focus:ring-[#135bec]/50 focus:border-[#135bec] block pl-12 pr-4 py-3.5 placeholder-slate-500 transition-all shadow-inner"
                placeholder="Enter your ID or Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="group">
            <label className="block text-slate-400 mb-1.5 ml-1">Password</label>
            <div className="relative flex items-center">
              <Lock className="absolute left-4 text-slate-500 pointer-events-none transition-colors group-focus-within:text-[#135bec]" />
              <input
                className="w-full bg-[#192233]/80 border border-slate-700 text-white rounded-lg focus:ring-2 focus:ring-[#135bec]/50 focus:border-[#135bec] block pl-12 pr-12 py-3.5 placeholder-slate-500 transition-all shadow-inner"
                placeholder="••••••••"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="absolute right-4 text-slate-500 hover:text-white transition-colors focus:outline-none"
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Forgot Password Link */}
          <div className="flex justify-end">
            <a className="text-[#135bec] hover:text-blue-400 transition-colors" href="#">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            className="w-full bg-[#135bec] hover:bg-blue-600 text-white py-4 rounded-lg shadow-lg shadow-[#135bec]/25 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 group"
            type="submit"
            onClick={handleSubmit}
          >
            <span>Login to Portal</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Footer / Support */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-slate-500">
            <HelpCircle className="w-4 h-4" />
            <a className="hover:text-white transition-colors" href="#">
              Need Help? Contact Admin
            </a>
          </div>
          <p className="text-slate-600">SRM MCET Smart Canteen v1.0</p>
        </div>
      </div>
    </div>
  );
}

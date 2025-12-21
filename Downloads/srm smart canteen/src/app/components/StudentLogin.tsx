import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff, User, Lock, Fingerprint } from 'lucide-react';

export default function StudentLogin() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-[#f6f6f8] dark:bg-[#101622] font-['Space_Grotesk'] flex flex-col">
      <div className="flex-1 flex flex-col w-full max-w-md mx-auto relative overflow-hidden">
        {/* Header Image & Logo Section */}
        <div className="relative w-full h-[32vh] min-h-[260px] flex flex-col justify-end overflow-hidden rounded-b-[2rem] shadow-2xl shadow-[#135bec]/5">
          <div
            className="absolute inset-0 bg-center bg-cover bg-no-repeat transform scale-105"
            style={{
              backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuBehqq1L_tvkpzYFzz1qK3HG97Ge7boO0lbqzgzYlmjK_W_N54orX9cLWSORLfgoeH1HE0G0F28DZzxkATKJMV036yVnH_NqjrDgc3WzIbsqRPSB4WKLnll4rwbxe6F9YbM3vK5rdxBuKr2EpDmdTQTwc70_OXW_JPjKAIzM2bXBAthNpNPU6BDL9fqCEfkdG91fzwQYtUuTaym5Vj6O9ij8GsJ2rjMDSCogaaqM9fjF8pJe_Dm0FzkwKJ51AU7KwAvrv7NDqB-pf4B)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#101622]/40 to-[#101622] dark:via-[#101622]/60 dark:to-[#101622]" />
          
          {/* Logo Floating */}
          <div className="relative z-10 w-full flex flex-col items-center pb-6">
            <div className="h-20 w-20 rounded-2xl bg-[#101622]/40 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.2)] mb-4 group hover:scale-105 transition-transform duration-300">
              <span className="text-4xl text-[#135bec] drop-shadow-[0_0_10px_rgba(19,91,236,0.6)]">🍽️</span>
            </div>
          </div>
        </div>

        {/* Scrollable Form Content */}
        <div className="flex-1 px-6 -mt-4 relative z-20 pb-8">
          {/* Headline Text */}
          <div className="text-center mb-8">
            <h1 className="text-slate-900 dark:text-white tracking-tight mb-2">Welcome Back</h1>
            <p className="text-slate-500 dark:text-slate-400">Fuel up for your day at the Smart Canteen.</p>
          </div>

          <form className="space-y-6" onsubmit={handleSubmit}>
            {/* ID/Email Field */}
            <div className="group">
              <label className="block text-slate-600 dark:text-slate-300 ml-1 mb-2">Student ID / Email</label>
              <div className="relative flex items-center">
                <div className="absolute left-4 text-slate-400 dark:text-slate-500 pointer-events-none flex items-center justify-center">
                  <User className="w-5 h-5" />
                </div>
                <input
                  className="w-full h-14 bg-white dark:bg-[#192233] border border-slate-200 dark:border-[#324467] rounded-xl pl-12 pr-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#135bec]/50 focus:border-[#135bec] transition-all duration-300 shadow-sm"
                  placeholder="Enter your registration number"
                  type="text"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="group">
              <label className="block text-slate-600 dark:text-slate-300 ml-1 mb-2">Password</label>
              <div className="relative flex items-center">
                <div className="absolute left-4 text-slate-400 dark:text-slate-500 pointer-events-none flex items-center justify-center">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  className="w-full h-14 bg-white dark:bg-[#192233] border border-slate-200 dark:border-[#324467] rounded-xl pl-12 pr-12 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#135bec]/50 focus:border-[#135bec] transition-all duration-300 shadow-sm"
                  placeholder="Enter your password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="absolute right-4 text-slate-400 dark:text-slate-500 hover:text-[#135bec] transition-colors flex items-center justify-center"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              
              {/* Forgot Password Link */}
              <div className="flex justify-end mt-2">
                <a
                  className="text-slate-500 hover:text-[#135bec] dark:text-slate-400 dark:hover:text-[#135bec] transition-colors"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
            </div>

            {/* Login Button */}
            <button
              className="w-full h-14 bg-[#135bec] hover:bg-[#135bec]/90 text-white rounded-xl shadow-lg shadow-[#135bec]/25 hover:shadow-[#135bec]/40 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2"
              type="submit"
              onClick={handleSubmit}
            >
              Login
            </button>
          </form>

          {/* Biometric Login & Sign Up */}
          <div className="mt-8 flex flex-col items-center gap-6">
            <div className="relative w-full flex items-center justify-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200 dark:border-slate-800" />
              </div>
              <span className="relative bg-[#f6f6f8] dark:bg-[#101622] px-4 text-slate-400 uppercase tracking-widest">
                Or continue with
              </span>
            </div>

            <button className="h-14 w-14 rounded-full bg-white dark:bg-[#192233] border border-slate-200 dark:border-[#324467] flex items-center justify-center text-[#135bec] hover:bg-slate-50 dark:hover:bg-[#202b40] transition-colors shadow-sm group">
              <Fingerprint className="w-8 h-8 group-hover:scale-110 transition-transform" />
            </button>

            <p className="text-slate-600 dark:text-slate-400 mt-2">
              New here?{' '}
              <Link className="text-[#135bec] hover:text-[#135bec]/80 transition-colors" to="/signup">
                Create an Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
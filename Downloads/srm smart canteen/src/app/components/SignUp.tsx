import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff, User, Lock, Mail, Phone, CheckCircle2, XCircle } from 'lucide-react';

export default function SignUp() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    studentId: '',
    password: '',
    confirmPassword: ''
  });

  const [passwordValidation, setPasswordValidation] = useState({
    minLength: false,
    hasUpperCase: false,
    hasLowerCase: false,
    hasNumber: false,
    hasSpecialChar: false
  });

  const [errors, setErrors] = useState({
    email: '',
    phone: '',
    studentId: '',
    passwordMatch: ''
  });

  const validatePassword = (password: string) => {
    setPasswordValidation({
      minLength: password.length >= 8,
      hasUpperCase: /[A-Z]/.test(password),
      hasLowerCase: /[a-z]/.test(password),
      hasNumber: /[0-9]/.test(password),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setFormData({ ...formData, password: newPassword });
    validatePassword(newPassword);
    
    // Check password match
    if (formData.confirmPassword) {
      setErrors({
        ...errors,
        passwordMatch: newPassword !== formData.confirmPassword ? 'Passwords do not match' : ''
      });
    }
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const confirmPwd = e.target.value;
    setFormData({ ...formData, confirmPassword: confirmPwd });
    setErrors({
      ...errors,
      passwordMatch: confirmPwd !== formData.password ? 'Passwords do not match' : ''
    });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setFormData({ ...formData, email });
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setErrors({
      ...errors,
      email: email && !emailRegex.test(email) ? 'Invalid email format' : ''
    });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phone = e.target.value;
    setFormData({ ...formData, phone });
    const phoneRegex = /^[0-9]{10}$/;
    setErrors({
      ...errors,
      phone: phone && !phoneRegex.test(phone) ? 'Phone must be 10 digits' : ''
    });
  };

  const handleStudentIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const studentId = e.target.value;
    setFormData({ ...formData, studentId });
    setErrors({
      ...errors,
      studentId: studentId && studentId.length < 6 ? 'Student ID must be at least 6 characters' : ''
    });
  };

  const isFormValid = () => {
    return (
      formData.name &&
      formData.email &&
      formData.phone &&
      formData.studentId &&
      formData.password &&
      formData.confirmPassword &&
      !errors.email &&
      !errors.phone &&
      !errors.studentId &&
      !errors.passwordMatch &&
      Object.values(passwordValidation).every(v => v)
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid()) {
      // Simulate account creation
      alert('Account created successfully!');
      navigate('/student-login');
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f6f8] dark:bg-[#101622] font-['Space_Grotesk'] flex flex-col overflow-y-auto">
      <div className="flex-1 flex flex-col w-full max-w-md mx-auto relative p-6">
        {/* Header */}
        <div className="text-center mb-8 mt-8">
          <div className="h-16 w-16 rounded-2xl bg-[#135bec]/10 backdrop-blur-md border border-[#135bec]/20 flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">🍽️</span>
          </div>
          <h1 className="text-slate-900 dark:text-white tracking-tight mb-2">Create Account</h1>
          <p className="text-slate-500 dark:text-slate-400">Join SRM Smart Canteen</p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="group">
            <label className="block text-slate-600 dark:text-slate-300 ml-1 mb-2">Full Name</label>
            <div className="relative flex items-center">
              <div className="absolute left-4 text-slate-400 dark:text-slate-500 pointer-events-none">
                <User className="w-5 h-5" />
              </div>
              <input
                className="w-full h-12 bg-white dark:bg-[#192233] border border-slate-200 dark:border-[#324467] rounded-xl pl-12 pr-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#135bec]/50 focus:border-[#135bec] transition-all duration-300"
                placeholder="Enter your full name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="group">
            <label className="block text-slate-600 dark:text-slate-300 ml-1 mb-2">Email Address</label>
            <div className="relative flex items-center">
              <div className="absolute left-4 text-slate-400 dark:text-slate-500 pointer-events-none">
                <Mail className="w-5 h-5" />
              </div>
              <input
                className={`w-full h-12 bg-white dark:bg-[#192233] border ${
                  errors.email ? 'border-red-500' : 'border-slate-200 dark:border-[#324467]'
                } rounded-xl pl-12 pr-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#135bec]/50 focus:border-[#135bec] transition-all duration-300`}
                placeholder="your.email@example.com"
                type="email"
                value={formData.email}
                onChange={handleEmailChange}
                required
              />
            </div>
            {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>}
          </div>

          {/* Phone Field */}
          <div className="group">
            <label className="block text-slate-600 dark:text-slate-300 ml-1 mb-2">Phone Number</label>
            <div className="relative flex items-center">
              <div className="absolute left-4 text-slate-400 dark:text-slate-500 pointer-events-none">
                <Phone className="w-5 h-5" />
              </div>
              <input
                className={`w-full h-12 bg-white dark:bg-[#192233] border ${
                  errors.phone ? 'border-red-500' : 'border-slate-200 dark:border-[#324467]'
                } rounded-xl pl-12 pr-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#135bec]/50 focus:border-[#135bec] transition-all duration-300`}
                placeholder="10 digit mobile number"
                type="tel"
                value={formData.phone}
                onChange={handlePhoneChange}
                required
                maxLength={10}
              />
            </div>
            {errors.phone && <p className="text-red-500 text-xs mt-1 ml-1">{errors.phone}</p>}
          </div>

          {/* Student ID Field */}
          <div className="group">
            <label className="block text-slate-600 dark:text-slate-300 ml-1 mb-2">Student ID</label>
            <div className="relative flex items-center">
              <div className="absolute left-4 text-slate-400 dark:text-slate-500 pointer-events-none">
                <User className="w-5 h-5" />
              </div>
              <input
                className={`w-full h-12 bg-white dark:bg-[#192233] border ${
                  errors.studentId ? 'border-red-500' : 'border-slate-200 dark:border-[#324467]'
                } rounded-xl pl-12 pr-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#135bec]/50 focus:border-[#135bec] transition-all duration-300`}
                placeholder="Enter your registration number"
                type="text"
                value={formData.studentId}
                onChange={handleStudentIdChange}
                required
              />
            </div>
            {errors.studentId && <p className="text-red-500 text-xs mt-1 ml-1">{errors.studentId}</p>}
          </div>

          {/* Password Field */}
          <div className="group">
            <label className="block text-slate-600 dark:text-slate-300 ml-1 mb-2">Password</label>
            <div className="relative flex items-center">
              <div className="absolute left-4 text-slate-400 dark:text-slate-500 pointer-events-none">
                <Lock className="w-5 h-5" />
              </div>
              <input
                className="w-full h-12 bg-white dark:bg-[#192233] border border-slate-200 dark:border-[#324467] rounded-xl pl-12 pr-12 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#135bec]/50 focus:border-[#135bec] transition-all duration-300"
                placeholder="Create a strong password"
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={handlePasswordChange}
                required
              />
              <button
                className="absolute right-4 text-slate-400 dark:text-slate-500 hover:text-[#135bec] transition-colors"
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {/* Password Requirements */}
            {formData.password && (
              <div className="mt-3 space-y-2 bg-slate-50 dark:bg-[#192233] p-3 rounded-lg">
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Password must contain:</p>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    {passwordValidation.minLength ? (
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                    ) : (
                      <XCircle className="w-4 h-4 text-slate-400" />
                    )}
                    <span className={`text-xs ${passwordValidation.minLength ? 'text-green-500' : 'text-slate-500'}`}>
                      At least 8 characters
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {passwordValidation.hasUpperCase ? (
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                    ) : (
                      <XCircle className="w-4 h-4 text-slate-400" />
                    )}
                    <span className={`text-xs ${passwordValidation.hasUpperCase ? 'text-green-500' : 'text-slate-500'}`}>
                      One uppercase letter
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {passwordValidation.hasLowerCase ? (
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                    ) : (
                      <XCircle className="w-4 h-4 text-slate-400" />
                    )}
                    <span className={`text-xs ${passwordValidation.hasLowerCase ? 'text-green-500' : 'text-slate-500'}`}>
                      One lowercase letter
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {passwordValidation.hasNumber ? (
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                    ) : (
                      <XCircle className="w-4 h-4 text-slate-400" />
                    )}
                    <span className={`text-xs ${passwordValidation.hasNumber ? 'text-green-500' : 'text-slate-500'}`}>
                      One number
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {passwordValidation.hasSpecialChar ? (
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                    ) : (
                      <XCircle className="w-4 h-4 text-slate-400" />
                    )}
                    <span className={`text-xs ${passwordValidation.hasSpecialChar ? 'text-green-500' : 'text-slate-500'}`}>
                      One special character (!@#$%^&*)
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Confirm Password Field */}
          <div className="group">
            <label className="block text-slate-600 dark:text-slate-300 ml-1 mb-2">Confirm Password</label>
            <div className="relative flex items-center">
              <div className="absolute left-4 text-slate-400 dark:text-slate-500 pointer-events-none">
                <Lock className="w-5 h-5" />
              </div>
              <input
                className={`w-full h-12 bg-white dark:bg-[#192233] border ${
                  errors.passwordMatch ? 'border-red-500' : 'border-slate-200 dark:border-[#324467]'
                } rounded-xl pl-12 pr-12 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#135bec]/50 focus:border-[#135bec] transition-all duration-300`}
                placeholder="Re-enter your password"
                type={showConfirmPassword ? 'text' : 'password'}
                value={formData.confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
              <button
                className="absolute right-4 text-slate-400 dark:text-slate-500 hover:text-[#135bec] transition-colors"
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {errors.passwordMatch && <p className="text-red-500 text-xs mt-1 ml-1">{errors.passwordMatch}</p>}
            {!errors.passwordMatch && formData.confirmPassword && formData.password === formData.confirmPassword && (
              <p className="text-green-500 text-xs mt-1 ml-1 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Passwords match
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            className={`w-full h-12 rounded-xl shadow-lg transition-all duration-200 flex items-center justify-center gap-2 ${
              isFormValid()
                ? 'bg-[#135bec] hover:bg-[#135bec]/90 text-white shadow-[#135bec]/25 hover:shadow-[#135bec]/40 active:scale-[0.98]'
                : 'bg-slate-300 dark:bg-slate-700 text-slate-500 dark:text-slate-400 cursor-not-allowed'
            }`}
            type="submit"
            disabled={!isFormValid()}
          >
            Create Account
          </button>
        </form>

        {/* Sign In Link */}
        <div className="mt-6 text-center mb-8">
          <p className="text-slate-600 dark:text-slate-400">
            Already have an account?{' '}
            <Link
              to="/student-login"
              className="text-[#135bec] hover:text-[#135bec]/80 transition-colors"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

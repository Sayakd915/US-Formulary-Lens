const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12 relative overflow-hidden">
      <div className="max-w-md text-center z-10 relative">
        {/* Title & Subtitle */}
        <h2 className="text-3xl font-bold mb-4 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          {title}
        </h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>

      {/* Floating Medical Shapes in Corners */}
      <div className="absolute w-full h-full max-w-[650px] max-h-[650px]">
        {/* Top Left */}
        <div className="absolute top-[5%] left-[5%] w-20 h-10 bg-primary rounded-full rotate-45 shadow-lg animate-float" />
        <div className="absolute top-[7%] left-[10%] w-20 h-10 bg-secondary rounded-full rotate-45 shadow-lg animate-float" />
        <div className="absolute top-[10%] left-[15%] w-6 h-24 bg-gray-400 rounded-t-full shadow-lg animate-float" />
        
        {/* Top Right */}
        <div className="absolute top-[5%] right-[5%] w-24 h-24 bg-red-500 rounded-lg shadow-lg animate-float delay-200 flex items-center justify-center">
          <div className="w-10 h-4 bg-white absolute" />
          <div className="w-4 h-10 bg-white absolute" />
        </div>
        <div className="absolute top-[10%] right-[12%] w-16 h-16 bg-blue-600 rounded-full shadow-lg animate-float delay-500" />
        <div className="absolute top-[15%] right-[15%] w-12 h-12 bg-yellow-400 rounded-lg shadow-lg animate-float delay-400" />

        {/* Left Middle (Stethoscope) */}
        <div className="absolute left-[5%] top-[50%] transform -translate-y-1/2 w-10 h-32 border-4 border-gray-700 rounded-full shadow-lg animate-float delay-300" />
        <div className="absolute left-[5%] top-[60%] transform -translate-y-1/2 w-6 h-6 bg-gray-700 rounded-full shadow-lg animate-float delay-300" />

        {/* Right Middle (ECG Pulse) */}
        <div className="absolute right-[5%] top-[50%] transform -translate-y-1/2 w-20 h-8 bg-red-500 shadow-lg animate-float delay-400 flex items-center justify-center">
          <div className="w-2 h-8 bg-white absolute left-2" />
          <div className="w-2 h-6 bg-white absolute left-6" />
          <div className="w-2 h-10 bg-white absolute left-10" />
          <div className="w-2 h-6 bg-white absolute left-14" />
        </div>

        {/* Bottom Left */}
        <div className="absolute bottom-[5%] left-[5%] w-28 h-12 bg-yellow-500 rounded-lg shadow-lg animate-float" />
        <div className="absolute bottom-[7%] left-[10%] w-28 h-12 bg-orange-500 rounded-lg shadow-lg animate-float delay-300" />

        {/* Bottom Right */}
        <div className="absolute bottom-[5%] right-[5%] w-32 h-16 bg-green-500 rounded-full rotate-45 shadow-lg animate-float" />
        <div className="absolute bottom-[7%] right-[10%] w-32 h-16 bg-teal-500 rounded-full rotate-45 shadow-lg animate-float" />
      </div>
    </div>
  );
};

export default AuthImagePattern;








  
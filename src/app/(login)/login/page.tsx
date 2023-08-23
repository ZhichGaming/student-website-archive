import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="absolute w-full h-full -translate-x-[800px] clip-diagonal">
        <div className="absolute w-full h-full bg-entrance bg-cover bg-left-bottom translate-x-80"></div>
      </div>
      <div className="relative py-3 sm:max-w-2xl sm:mx-auto translate-x-72">
        {/* Blue background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Connection</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// form from Adityacs001


import useStore from "../../Store"; // Zustand store 가져오기

const LoginToggle = () => {
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  const toggleLogin = useStore((state) => state.toggleLogin);

  const handleToggle = () => {
    toggleLogin();
  };

  return (
    <div className="flex items-center">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={isLoggedIn}
          onChange={handleToggle}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-500"></div>
      </label>
      <span className="ml-1 text-xs font-medium text-gray-900 dark:text-gray-300">
        {isLoggedIn ? "회원" : "비회원"}
      </span>
    </div>
  );
};

export default LoginToggle;

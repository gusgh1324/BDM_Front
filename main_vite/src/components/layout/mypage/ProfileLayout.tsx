const MyProfileLayout = () => {
  return (
    <div className="">
      <h1 className="text-2xl font-bold  mb-6 text-gray-600">My Profile</h1>

      <div>
        <ul>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <li className="profilelist">
                <label
                  htmlFor="file-input"
                  className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-400"
                >
                  <input id="file-input" className="hidden" type="file" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-gray-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 16a6 6 0 100-12 6 6 0 000 12zm-1-9a1 1 0 00-2 0v3H5a1 1 0 000 2h2v3a1 1 0 002 0v-3h2a1 1 0 100-2h-2V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
              </li>
            </div>
            <div className="absolute w-80 md:ml-48">
              <li className="profilelist cen">
                <label htmlFor="name" className="block text-gray-600">
                  Name:
                </label>
                <input
                  id="name"
                  className="tex w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-400 mb-4"
                  type="text"
                  name="name"
                />
              </li>
              <li className="profilelist">
                <label htmlFor="email" className="block text-gray-600">
                  Email:
                </label>
                <input
                  id="email"
                  className="tex w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-400 mb-4"
                  type="text"
                  value="abcd@abc.amail"
                  readOnly
                />
              </li>
              <li className="profilelist">
                <label htmlFor="phone" className="block text-gray-600">
                  Phone:
                </label>
                <input
                  id="phone"
                  className="tex w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-400 mb-4"
                  type="text"
                />
              </li>
              <li className="profilelist">
                <label htmlFor="address" className="block text-gray-600">
                  Address:
                </label>
                <input
                  id="address"
                  className="tex w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-400 mb-4"
                  type="text"
                />
              </li>
              <li>
                <button className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded">
                  submit
                </button>
              </li>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default MyProfileLayout;

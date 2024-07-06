import { Link, useNavigate } from "react-router-dom";
export const LoggedInDropDown = ({ setDropdown }) => {
  const navigate = useNavigate("");
  function handleSignOut() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userId");
    setDropdown(false);
    navigate("/");
  }
  return (
    <div>
      <div
        id="dropdownInformation"
        className="z-10 absolute right-0  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
      >
        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
          <div className="font-medium truncate">name@flowbite.com</div>
        </div>
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownInformationButton"
        >
          <li>
            <Link
              onClick={() => setDropdown(false)}
              to="/products"
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              All eBooks
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setDropdown(false)}
              to="/dashboard"
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Orders List
            </Link>
          </li>
        </ul>
        <div className="py-2">
          <button
            onClick={handleSignOut}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

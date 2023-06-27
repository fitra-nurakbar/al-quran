import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 h-screen w-64 fixed left-0 top-0 overflow-y-auto">
      <div className="flex items-center justify-center h-16">
        <span className="text-white text-lg font-bold">Logo</span>
      </div>
      <nav className="mt-8">
        <ul>
          <li className="pl-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
            <a href="#">Menu 1</a>
          </li>
          <li className="pl-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
            <a href="#">Menu 2</a>
          </li>
          <li className="pl-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
            <a href="#">Menu 3</a>
          </li>
          <li className="pl-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white">
            <a href="#">Menu 4</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

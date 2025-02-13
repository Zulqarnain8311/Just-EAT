import { Outlet } from 'react-router-dom'


import Context from './context';
import Header from './components/header/Header';
import SideBar from './components/sidebar/SideBar';
import { useState } from 'react';
import Footer from './components/footer/Footer';



function App() {
    const [cartItems, setCartItems] = useState([]); 
  return (
    <Context.Provider value={{cartItems,setCartItems}}>
      <Header />
      <main className="bg-gray-100 dark:bg-gray-800 dark:text-white">
        <div className="grid grid-cols-12">
          {/* Main Content - Outlet */}
          <div className="col-span-12 md:col-span-9">
            <Outlet />
          </div>

          {/* Sidebar */}
          <div className="col-span-3 hidden md:block bg-white dark:bg-gray-900 p-4 filter drop-shadow-[-10px_0_15px_rgba(0,0,0,0.1)]">
            <SideBar />
          </div>
        </div>
      </main>
      <Footer />
    </Context.Provider>
  )
}

export default App;
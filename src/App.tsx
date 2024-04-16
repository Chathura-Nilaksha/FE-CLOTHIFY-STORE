
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ClothifyHeader from './pages/ClothifyHeader';
import ContactUs from './pages/ContactUs';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';

import { } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  // const [count, setCount] = useState(0)

  return (

    <div>   

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClothifyHeader />} />
            <Route index element={<Landing />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="contact-us" element={<ContactUs />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>




    // <>
    //   {/* <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div> */}
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>      
    // </>
  );
}

export default App;

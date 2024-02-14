import React from 'react';

function Navbar() {

  let menu = ["Services","Our work","About us","Insights"]

  return (
    <header className='fixed z-50 w-full grid grid-cols-2 place-content-center'>
      <div className="nav-left-sec">
        <div id="nav-head">
          <h1 className='text-4xl font-semibold'>ochi</h1>
        </div>
      </div>

      <div className="nav-right-sec items-center flex justify-between">
        <ul className="menu flex items-center gap-6">
          <li><a href='#services'>Services</a></li>
          <li><a href='#work'>Our work</a></li>
          <li><a href='#about'>About us</a></li>
          <li><a href='#insight'>Insights</a></li>
        </ul>
        <button>Contact us</button>
      </div>

      
    </header>
  );
}

export default Navbar;

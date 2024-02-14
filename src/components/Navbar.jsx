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
          {menu.map((item, index)=>(
            <li key={index}><a key={index}>{item}</a></li>
          ))}
        </ul>
        <button>Contact us</button>
      </div>

      <div className="hamMenu">
      </div>
    </header>
  );
}

export default Navbar;

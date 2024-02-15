import React from "react";

const LandingPage = () => {
  return (
    <div id="services">
      <div id="section_holder" className="py-32">
        <div id="service-head" className="text-gray-900">
          <h1 className="text-8xl font-semibold">WE CREATE</h1>
          <h1 className="text-8xl font-semibold">EYE-OPENING</h1>
          <h1 className="text-8xl font-semibold">PRESENTATIONS</h1>
        </div>
        <div
          id="service-info"
          className="mt-28"
        >
          <div className="info-wrapper grid grid-cols-2 pt-4">
            <div className="box">
              <p>For public and private companies</p>
            </div>
            <div className="box flex items-center justify-between">
              <p>From the first pitch to IPO</p>
              <p className="rounded uppercase">
                <a href="#contact">Start the project</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

import React from 'react';
import {  Link } from "react-router-dom";

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/dashbord">dashbord</Link>
      </nav>
    </>
  );
}
export default Home;
import React, { useState } from 'react';
import NavBar from './components/navbar';
import Intro from './components/intro';
import Reasons from './components/reasons';
import LatestArticle from './components/latestArticle';
import Footer from './components/footer';

const App = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  return (
    <div className="font-sans overflow-x-hidden flex flex-col gap-8 h-auto">
      <NavBar className="p-8" menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
      <Intro menuClicked={menuClicked} />
      <Reasons />
      <LatestArticle />
      <Footer />
    </div>
  );
};

export default App;

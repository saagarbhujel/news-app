import React from 'react'
import NewsComp from "../newsbody/NewsComp";


const Home = ({ pageSize, setProgress }) => {
  return (
    <>
      <NewsComp
        pageSize={pageSize}
        key="home"
        country="us"
        category="general"
        setProgress={setProgress}
      />
    </>
  );
};

export default Home
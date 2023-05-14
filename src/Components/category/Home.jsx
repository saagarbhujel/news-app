import React from 'react'
import NewsComp from "../newsbody/NewsComp";


const Home = ({ pageSize }) => {
  return (
    <>


      <NewsComp
        pageSize={pageSize}
        key="home"
        country="us"
        category="general"
      />
    </>
  );
};

export default Home
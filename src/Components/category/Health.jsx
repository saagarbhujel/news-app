import React from 'react'
import NewsComp from "../newsbody/NewsComp";

const Health = ({ pageSize }) => {
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

export default Health
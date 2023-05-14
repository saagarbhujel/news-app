import React from 'react'
import NewsComp from "../newsbody/NewsComp";

const Health = ({ pageSize }) => {
  return (
    <>
      <div>Health</div>

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
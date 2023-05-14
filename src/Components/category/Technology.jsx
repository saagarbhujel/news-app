import React from 'react'
import NewsComp from "../newsbody/NewsComp";


const Technology = ({ pageSize }) => {
  return (
    <>
      <div>Technollogy</div>

      <NewsComp
        pageSize={pageSize}
        key="technology"
        country="us"
        category="technology"
      />
    </>
  );
};

export default Technology
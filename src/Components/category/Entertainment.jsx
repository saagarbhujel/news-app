import React from 'react'
import NewsComp from "../newsbody/NewsComp";


const Entertainment = ({ pageSize }) => {
  return (
    <>
      <div>Entertainment</div>

      <NewsComp
        pageSize={pageSize}
        key="entertainment"
        country="us"
        category="entertainment"
      />
    </>
  );
};

export default Entertainment
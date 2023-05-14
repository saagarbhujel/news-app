import React from 'react'
import NewsComp from "../newsbody/NewsComp";


const Business = ({ pageSize }) => {
  return (
    <>


      <NewsComp
        pageSize={pageSize}
        key="business"
        country="us"
        category="business"
      />
    </>
  );
};

export default Business
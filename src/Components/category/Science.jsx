import React from 'react'
import NewsComp from "../newsbody/NewsComp";


const Science = ({ pageSize }) => {
  return (
    <>


      <NewsComp
        pageSize={pageSize}
        key="science"
        country="us"
        category="science"
      />
    </>
  );
};

export default Science
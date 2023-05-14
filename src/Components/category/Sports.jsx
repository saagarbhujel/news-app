import React from 'react'
import NewsComp from '../newsbody/NewsComp';

const Sports = ({ pageSize }) => {
  return (
    <>
      <div>Sports</div>

      <NewsComp
        pageSize={pageSize}
        key="sports"
        country="us"
        category="sports"
      />
    </>
  );
};

export default Sports
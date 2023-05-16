import React from 'react'
import NewsComp from '../newsbody/NewsComp';

const Sports = ({ pageSize, setProgress }) => {
  return (
    <>
      <NewsComp
        pageSize={pageSize}
        key="sports"
        country="us"
        category="sports"
        setProgress={setProgress}
      />
    </>
  );
};

export default Sports
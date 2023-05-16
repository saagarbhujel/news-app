import React from 'react'
import NewsComp from "../newsbody/NewsComp";


const Entertainment = ({ pageSize, setProgress }) => {
  return (
    <>
      <NewsComp
        pageSize={pageSize}
        key="entertainment"
        country="us"
        category="entertainment"
        setProgress={setProgress}
      />
    </>
  );
};

export default Entertainment
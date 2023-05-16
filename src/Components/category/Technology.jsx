import React from 'react'
import NewsComp from "../newsbody/NewsComp";


const Technology = ({ pageSize, setProgress }) => {
  return (
    <>
      <NewsComp
        pageSize={pageSize}
        key="technology"
        country="us"
        category="technology"
        setProgress={setProgress}
      />
    </>
  );
};

export default Technology
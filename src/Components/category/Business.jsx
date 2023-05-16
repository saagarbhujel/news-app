import React from 'react'
import NewsComp from "../newsbody/NewsComp";


const Business = ({ pageSize,setProgress }) => {
  return (
    <>
      <NewsComp
        pageSize={pageSize}
        key="business"
        country="us"
        category="business"
        setProgress={setProgress}
      />
    </>
  );
};

export default Business
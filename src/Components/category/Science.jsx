import React from 'react'
import NewsComp from "../newsbody/NewsComp";


const Science = ({ pageSize, setProgress }) => {
  return (
    <>
      <NewsComp
        pageSize={pageSize}
        key="science"
        country="us"
        category="science"
        setProgress={setProgress}
      />
    </>
  );
};

export default Science
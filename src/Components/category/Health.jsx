import React from 'react'
import NewsComp from "../newsbody/NewsComp";

const Health = ({ pageSize, setProgress }) => {
  return (
    <>
      <NewsComp
        pageSize={pageSize}
        key="home"
        country="us"
        category="general"
        setProgress={setProgress}
      />
    </>
  );
};

export default Health
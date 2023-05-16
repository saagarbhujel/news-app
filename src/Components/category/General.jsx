import React from 'react'
import NewsComp from "../newsbody/NewsComp";


const General = ({ pageSize, setProgress }) => {
  return (
    <>
      <NewsComp
        pageSize={pageSize}
        key="general"
        country="us"
        category="general"
        setProgress={setProgress}
      />
    </>
  );
};

export default General
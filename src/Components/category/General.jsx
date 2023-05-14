import React from 'react'
import NewsComp from "../newsbody/NewsComp";


const General = ({ pageSize }) => {
  return (
    <>
      <div>General</div>

      <NewsComp
        pageSize={pageSize}
        key="general"
        country="us"
        category="general"
      />
    </>
  );
};

export default General
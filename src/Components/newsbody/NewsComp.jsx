import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import axios from "axios";
// import PropTypes from "prop-types";

const NewsComp = ({category,country}) => {
  const [articles, setArticle] = useState([]);
  let pageSize = 12;


  const fetchArticle = async () => {
    const postData = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=2e3ca7aaebd54af29bff4e9588109119&page=1&pageSize=${pageSize}`
      //
      //    {
      //   headers: {
      //       apiKey: "2e3ca7aaebd54af29bff4e9588109119",
      //     },
      //   }
    );
    setArticle(postData.data.articles);
    console.log(postData.data);
  };

  useEffect(() => {
    fetchArticle();
  }, []);
  return (
    <>
      <h1 className="text-center">
        Taza Khabar - Popular News on 
        {/* {this.capitalizeFirstLowercaseRest(this.props.category)} */}
      </h1>
      <div className="container ">
        <div className="row">
          {articles.map((e, index) => {
            return (
              <div className="col-md-3 my-4" key={index}>
                <NewsItems
                  title={e.title ? e.title.slice(0, 40) : ""}
                  description={e.description ? e.description.slice(0, 75) : ""}
                  newsUrl={e.url}
                  imgUrl={
                    e.urlToImage
                      ? e.urlToImage
                      : "https://techcrunch.com/wp-content/uploads/2023/04/GettyImages-1367534680.jpg?resize=1200,765"
                  }
                  author={e.author}
                  date={e.publishedAt}
                  source={e.source.name}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

// NewsComp.defaultProps = {
//     country: "in",
//     pageSize: "8",
//     category: "general",
//   };

//  NewsComp.propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
//   };

export default NewsComp;

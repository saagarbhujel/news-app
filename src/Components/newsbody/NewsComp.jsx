import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import axios from "axios";
// import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../Spinner";
import PropTypes from "prop-types";

const NewsComp = ({category,country,pageSize,setProgress}) => {
  const [articles, setArticle] = useState([]);

  const [totalResults, setTotalResults] = useState(0)
  const [loading, setLoading] = useState(true)
  const [page,setPage] = useState(1)


  const capitalizeFirstLowercaseRest = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const fetchArticle = async () => {
    setLoading(true)
    setProgress(30)

    const postData = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=2e3ca7aaebd54af29bff4e9588109119&page=${page}&pageSize=${pageSize}`
      
      //
      //    {
      //   headers: {
      //       apiKey: "2e3ca7aaebd54af29bff4e9588109119",
      //     },
      //   }
      );
      setProgress(70)
    setArticle(postData.data.articles);
    // console.log(postData.data);
    setLoading(false)
    setTotalResults(postData.totalResults)
    setProgress(100)
  };


  useEffect(() => {
    fetchArticle();
  }, []);

  const fetchMoreArticle = async ()=>{
    setPage(page+1)
    setLoading(true)
     const postData = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=2e3ca7aaebd54af29bff4e9588109119&page=${page}&pageSize=${pageSize}`

    );
      setArticle(articles.concat(postData.data.articles))
      console.log(postData.data)
      setLoading(false)
      setTotalResults(postData.totalResults)
      // setProgress(100)
  }
  return (
    <>
      <h1 className="text-center" style={{marginTop: "4.5rem"}}>
        Taza Khabar - Popular News on {capitalizeFirstLowercaseRest(category)}
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreArticle}
        hasMore={articles.length !== totalResults}
        loader={loading && <Spinner />}
        keyExtractor={(article) => article.url}
      >
        <div className="container ">
          <div className="row">
            {articles.map((e, index) => {
              return (
                <div className="col-md-3 my-4" key={index}>
                  <NewsItems
                    title={e.title ? e.title.slice(0, 40) : ""}
                    description={
                      e.description ? e.description.slice(0, 75) : ""
                    }
                    newsUrl={e.url}
                    imgUrl={
                      e.urlToImage
                        ? e.urlToImage
                        : "https://techcrunch.com/wp-content/uploads/2023/04/GettyImages-1367534680.jpg?resize=1200,765"
                    }
                    author={e.author}
                    date={e.publishedAt}
                    // source={e.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

NewsComp.defaultProps = {
    country: "in",
    pageSize: "12",
    category: "general",
  };

 NewsComp.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.string,
    category: PropTypes.string,
  };

export default NewsComp;

import React from "react";
import "./newitems.css"
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const NewsItems = ({
  title,
  description,
  imgUrl,
  newsUrl,
  author,
  date,
  source,
}) => {
  return (
    <>
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={imgUrl} style={{ height: 200 }} />
          <Card.Body>
            <Card.Title>{title}... </Card.Title>
            <Card.Text>{description}...</Card.Text>
            <p>
              By: {author} on {new Date(date).toGMTString()}{" "}
            </p>
            <a href={newsUrl}>
              <Button variant="primary">Read More</Button>
            </a>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default NewsItems;

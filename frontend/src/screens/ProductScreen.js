import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import axios from "axios";
import Rating from "../components/Rating";

const ProductScreen = () => {
  const { id } = useParams();
  const [pokeData, setPokeData] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${id}`);
      setPokeData(data);
    };
    fetchProduct();
  }, []);

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={pokeData.imageUrl} alt={pokeData.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{pokeData.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={pokeData.rating}
                text={`${pokeData.numReviews} review(s)`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${pokeData.price}</ListGroup.Item>
            <ListGroup.Item>Description: {pokeData.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${pokeData.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {pokeData.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="d-grid gap-2">
                  <Button
                    className="btn btn-info"
                    type="button"
                    disabled={pokeData.countInStock === 0}
                  >
                    Add To Cart
                  </Button>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;

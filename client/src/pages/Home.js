import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import "./style.css";

class Home extends Component {
  state = {

  };

  /* componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  }; */

  render() {
    return (
      <Container 
        fluid
        flex="d-flex justify-content-center align-items-center"
        style={{
          boxSizing: 'border-box',
          height: '100%',
        }}
      >
            <Jumbotron>
              <Row>
                <Col size="3">
                  <div className="avatar">
                    <img src="https://via.placeholder.com/100" alt="placeholder" />
                  </div>
                </Col>
                <Col size="7">
                  <div className="headline">Headline</div>
                </Col>
              </Row>
              <Row>
                <Col size="10">
                  <p className="summary">Content</p>
                </Col>
              </Row>
            </Jumbotron>
      </Container>
    );
  }
}

export default Home;

import React, { Component } from "react";
import PortfolioCard from "../components/PortfolioCard";
import { Container } from "../components/Grid";

class Portfolio extends Component {
    render() {
        return (
            <Container 
                fluid
                flex="d-flex justify-content-around flex-wrap"
                style={{paddingTop: "6%"}}
            >
                <PortfolioCard
                    image="https://via.placeholder.com/200"
                    title="App Title"
                    content="Some quick example text to build on the card title and make up the bulk of the card's content."
                />
                <PortfolioCard
                    image="https://via.placeholder.com/200"
                    title="App Title"
                    content="Some quick example text to build on the card title and make up the bulk of the card's content."
                />
                <PortfolioCard
                    image="https://via.placeholder.com/200"
                    title="App Title"
                    content="Some quick example text to build on the card title and make up the bulk of the card's content."
                />
                <PortfolioCard
                    image="https://via.placeholder.com/200"
                    title="App Title"
                    content="Some quick example text to build on the card title and make up the bulk of the card's content."
                />
                <PortfolioCard
                    image="https://via.placeholder.com/200"
                    title="App Title"
                    content="Some quick example text to build on the card title and make up the bulk of the card's content."
                />
                <PortfolioCard
                    image="https://via.placeholder.com/200"
                    title="App Title"
                    content="Some quick example text to build on the card title and make up the bulk of the card's content."
                />
            </Container>
        )
    }
}

export default Portfolio;

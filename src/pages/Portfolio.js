import React, { Component } from "react";
import PortfolioCard from "../components/PortfolioCard";
import { Container } from "../components/Grid";
import apps from "../data/apps.json";

class Portfolio extends Component {
    state = {
        apps
    }
    render() {
        return (
            <Container 
                fluid
                flex="d-flex justify-content-around flex-wrap"
                style={{paddingTop: "6%"}}
            >
                {this.state.apps.map(app => (
                    <PortfolioCard
                        id={app.id}
                        key={app.id}
                        image={app.image}
                        title={app.title}
                        about={app.about}
                        link={app.link}
                    />
                ))}
            </Container>
        )
    }
}

export default Portfolio;

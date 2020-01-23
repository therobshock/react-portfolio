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
                flex="d-flex justify-content-center flex-wrap"
                style={{
                    paddingTop: "6%",
                    boxSizing: "border-box",
                    width: "80%"
                }}
            >
                {this.state.apps.map(app => (
                    <PortfolioCard
                        id={app.id}
                        key={app.id}
                        image={ require('../' + app.image) }
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

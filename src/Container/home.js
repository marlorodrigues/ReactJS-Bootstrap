import React, { Component } from 'react'
import HomeCard from '../UI/homecard';

export default class Home extends Component {

    HomeCardReleases = {
        title: "Card title (Releases)",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content (Releases).",
        goto: () => alert("Apagando Sistema Operacional. Aguarde...")
    }

    HomeCardBacklog = {
        title: "Card title (Backlog)",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content (Backlog).",
        goto: () => alert("Apagando Sistema Operacional. Aguarde...")
    }

    HomeCardSprint = {
        title: "Card title (Sprint)",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content (Sprint).",
        goto: () => alert("Apagando Sistema Operacional. Aguarde...")
    }

    render() {
        return (
            <div className="container text-center">
                <div className="row">
                    <HomeCard
                        title={this.HomeCardReleases.title}
                        text={this.HomeCardReleases.text}
                        goto={this.HomeCardReleases.goto}
                    />

                    <HomeCard
                        {...this.HomeCardBacklog}
                    />

                    <HomeCard
                        {...this.HomeCardSprint}
                    />
                </div>
            </div>
        )
    }
}

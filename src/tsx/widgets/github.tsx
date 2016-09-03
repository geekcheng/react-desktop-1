/// <reference path="../../../typings/tsd.d.ts" /> 
import * as React from "react";
import * as config from "../config.ts";
import * as desktop from "../component/desktop.tsx";

class Github extends React.Component<{}, {
    loading?: boolean,
    error?: any,
    data?: any
}>{
    constructor() {
        super();
        this.state = {
            loading: true,
            error: null,
            data: null
        };
    }
    componentDidMount() {
        $.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars').then(
            value => this.setState({ loading: false, data: value }),
            error => this.setState({ loading: false, error: error }));
    }
    render() {
        let self = this;
        return <div style={
            { height: 500, width: 400, overflow: 'auto' }
        }>
            {
                self.state.loading ? <span>Loading...</span> : (
                    self.state.error ? <span>Error: {self.state.error.message}</span> :
                        (self.state.data.items ? <ul className="list-group">{self.state.data.items.map((repo, index) =>
                            <li key={index} className="list-group-item" style={{
                                cursor: 'pointer',
                                marginBottom: 0,
                                wordBreak: 'break-word'
                            }} onClick={e => { window.open(repo.html_url, repo.name) } }>
                                <span className="badge">{repo.stargazers_count}</span>
                                <h3>{repo.name}</h3>
                                <p className="list-group-item-text">{repo.description}</p>
                            </li>
                        ) } </ul> : null)
                )
            }
        </div>
    }
}
export let app: desktop.AppIcon = {
    text: "Github",
    title: "Most Popular JavaScript Projects in Github",
    icon: require("../../imgs/github.png"),
    content: <Github/>
};
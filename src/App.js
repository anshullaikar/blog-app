import React, { Component } from "react";
import NavBar from "./components/navbar";
import Home from "./containers/home";
import Blog from "./containers/blog";
import Todos from "./containers/todos";
import Post from "./containers/post";
import { Route } from "react-router-dom";
import "./App.css";
import { Switch } from "react-router-dom";
class App extends Component {
    render() {
        return (
            <div id="app-container">
                <NavBar />
                <div className="content">
                    <Switch>
                        <Route
                            path="/blog/:id"
                            render={(props) => <Post {...props} />}
                        ></Route>
                        <Route
                            path="/blog"
                            render={(props) => <Blog {...props} />}
                        ></Route>
                        <Route path="/todos" component={Todos}></Route>
                        <Route path="/" component={Home}></Route>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;

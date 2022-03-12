import React, { Component } from "react";
import NavBar from "./components/navbar";
import Home from "./containers/home";
import Blog from "./containers/blog";
import Todos from "./containers/todos";
import Post from "./containers/post";
import { Route } from "react-router-dom";
import "./App.css";
import theme from "./styles/settings.json";
import { Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();
const App = () => (
    <QueryClientProvider client={queryClient}>
        <div id="app-container">
            <NavBar
                colors={{
                    barColor: theme.barColor,
                    linkColor: theme.linkColor,
                }}
                links={[
                    { to: "/", name: "Home" },
                    { to: "/blog", name: "Blog" },
                    { to: "/todos", name: "Todos" },
                ]}
            />
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
    </QueryClientProvider>
);
export default App;

import React from "react";
import { useQuery } from "react-query";
import Card from "../components/card";
import theme from "../styles/settings.json"
const Todos = () => {
    const { isLoading, error, data } = useQuery("repoData", () =>
        fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
            res.json()
        )
    );

    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error.message;

    return (
        <div>
            <div>Filter by Date</div>
            {data.map((todo) => (
                <Card title ={todo.title} author={todo.userId} completed={todo.completed} type="todo"/>
            ))}
        </div>
    );
};

export default Todos;

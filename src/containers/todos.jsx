import React, { useState } from "react";
import { useQuery } from "react-query";
import Card from "../components/card";
import theme from "../styles/settings.json";
const Todos = () => {
    const [completed, setCompleted] = useState("");
    const { isLoading, error, data } = useQuery("repoData", () =>
        fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
            res.json()
        )
    );

    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error.message;

    return (
        <div>
            <button
                onClick={(event) => {
                    event.preventDefault();

                    let toSetCompleted =
                        completed === "" || completed === "Pending"
                            ? "Completed"
                            : "Pending";
                    setCompleted(toSetCompleted);
                }}
            >
                Filter by {completed === "" ? "Pending" : completed}
            </button>
            {completed === ""
                ? data.map((todo) => (
                      <Card
                          title={todo.title}
                          author={todo.userId}
                          completed={todo.completed}
                          type="todo"
                      />
                  ))
                : data.filter((todo) => {
                    let status = todo.completed ? "Pending" : "Completed"
                    return status == completed
                }).map((todo) => (
                      <Card
                          title={todo.title}
                          author={todo.userId}
                          completed={todo.completed}
                          type="todo"
                      />
                  ))}
        </div>
    );
};

export default Todos;

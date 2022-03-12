import React, { useState } from "react";
import { useQuery } from "react-query";
import Card from "../components/card";
import theme from "../styles/settings.json";
import styled from "styled-components";
const Button = styled.button`
    background-color: #fff;
    outline: 0;
    margin: 0;
    margin-left: 8ch;
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 0.25rem;
    border: 0.2rem solid ${theme.accent};
    font-size: 1.25rem;
    font-weight: 600;
    :focus {
        outline: 0;
        background-color: ${theme.secondary};
    }
    :hover {
        background-color: ${theme.accent};
    }
    :active {
        background-color: ${theme.secondary};
    }
`;
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
            <Button
                onClick={(event) => {
                    event.preventDefault();

                    let toSetCompleted =
                        completed === "" || completed === "Pending"
                            ? "Completed"
                            : "Pending";
                    setCompleted(toSetCompleted);
                }}
                style={{
                    color: completed != "Completed" ? "#fff" : theme.accent,
                    backgroundColor: completed != "Completed" ? theme.accent : "#fff",
                }}
            >
                Filter by {completed === "" ? "Pending" : completed}
            </Button>
            {completed === ""
                ? data.map((todo) => (
                      <Card
                          title={todo.title}
                          author={todo.userId}
                          completed={todo.completed}
                          type="todo"
                      />
                  ))
                : data
                      .filter((todo) => {
                          let status = todo.completed ? "Pending" : "Completed";
                          return status == completed;
                      })
                      .map((todo) => (
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

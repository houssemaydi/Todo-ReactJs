import "./App.css";
import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);
	const [status, setStatus] = useState("all");
	const [filterdTodos, setfilterdTodos] = useState([]);
	//runone
	useEffect(() => {
		getLocalTodos();
	}, []);

	useEffect(() => {
		filterHandler();
		saveLocalTodos();
	}, [todos, status]);

	const saveLocalTodos = () => {
		localStorage.setItem("todos", JSON.stringify(todos));
	};

	const getLocalTodos = () => {
		if (localStorage.getItem("todos") === null) {
			localStorage.setItem("todos", JSON.stringify([]));
		} else {
			let todoLocal = JSON.parse(localStorage.getItem("todos"));
			setTodos(todoLocal);
		}
	};
	const filterHandler = () => {
		switch (status) {
			case "completed":
				setfilterdTodos(todos.filter((todo) => todo.completed === true));
				break;
			case "uncompleted":
				setfilterdTodos(todos.filter((todo) => todo.completed === false));
				break;
			default:
				setfilterdTodos(todos);
				break;
		}
	};
	return (
		<div className="App">
			<header>
				<h1> Todo List</h1>
			</header>
			<Form
				todos={todos}
				setTodos={setTodos}
				inputText={inputText}
				setInputText={setInputText}
				setStatus={setStatus}
			/>
			<TodoList todos={todos} setTodos={setTodos} filterdTodos={filterdTodos} />
		</div>
	);
}

export default App;

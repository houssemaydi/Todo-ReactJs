import React from "react";

const Todo = ({ todo, text, todos, setTodos }) => {
	//event

	const deleteHandler = () => {
		setTodos(todos.filter((el) => el.id !== todo.id));
		console.log(todo);
	};

	const compeleteHandler = () => {
		setTodos(
			todos.map((item) => {
				if (item.id === todo.id) {
					return {
						...item,
						completed: !item.completed,
					};
				}
				return item;
			})
		);
	};
	return (
		<div className="todo">
			<li className={`todo-item ${todo.completed ? "completed" : ""}`}>
				{text}
			</li>
			<button className="complete-btn" onClick={compeleteHandler}>
				<i className="fas fa-check"></i>
			</button>
			<button className="trash-btn" onClick={deleteHandler}>
				<i className="fas fa-trash"></i>
			</button>
		</div>
	);
};

export default Todo;

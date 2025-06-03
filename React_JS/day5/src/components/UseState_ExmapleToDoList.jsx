import { useState } from "react";

export default function UseState_ExampleToDoList() {
  const [todo, setTodo] = useState({ id: "", name: "" });

  const [todoList, setTodoList] = useState([
    { id: 1, name: "danh rang sua mat" },
  ]);

  const handelGetTodo = (value) => {
    const randomId = Math.floor(Math.random(100000) * 100000);
    const todo = {
      id: randomId,
      name: value,
    };
    setTodo(todo);
  };

  const handleSubmit = () => {
    setTodoList((prev) => {
      return [...prev, todo];
    });

    setTodo({ id: "", name: "" });
  };

  const handleDeleteToDo = (id) => {
    setTodoList(todoList.filter((item => item.id !== id)));
  };

  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => handelGetTodo(e.target.value)}
          value={todo.name}
        />
        <button onClick={handleSubmit}>Add</button>
      </div>

      <div>
        <ul>
          {todoList.map((item, index) => {
            return (
              <div
                style={{
                  display: "flex",
                  gap: "30px",
                }}
                key={index}
              >
                <li>{item.name}</li>
                <div
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => handleDeleteToDo(item.id)}
                >
                  x
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}

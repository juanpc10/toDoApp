// import React from "react";
// import ToggleHook from "./customHooks/toggleHook";
// import EditForm from "./EditForm";


// const TodoItem = ({ task, handleCheckbox, done, id, deleteHandler, editHandler }) => {
//   const [isEdit, setEdit] = ToggleHook(false);
//   return (
//     <div style={{display: "flex", alignItems: "center"}}>
//       <input type="checkbox" onClick={() => handleCheckbox(id)} value={done} />

//       {isEdit ? (
//         <EditForm editHandler={editHandler} id={id} task={task} toggleEditForm={setEdit} />
//       ) : 
//       <ul style={{textDecoration: done ? "line-through" : "none"}} >
//         <li>{task}</li>
//       </ul>
//       }
//       <div style={{margin: 20}}>
//         <button type="button" onClick={setEdit} >Edit</button>
//         <button style={{marginLeft: 10}} type="button" onClick={() => deleteHandler(id)} >Delete</button>
//       </div>
//     </div>
//   );
// }

// export default TodoItem;



import React from "react";
import CustomToggleHook from "./customHooks/toggleHook";
import EditForm from "./EditForm";

const TodoItem = ({ id, task, done, handleCheckbox, deleteTodo, editTodo }) => {
  const [isEdit, setEdit] = CustomToggleHook(false);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <input
        className="ui checkbox"
        type="checkbox"
        onClick={() => handleCheckbox(id)}
        value={done}
      />

      {isEdit ? (
        <EditForm
          editTodo={editTodo}
          id={id}
          task={task}
          toggleEditForm={setEdit}
        />
      ) : (
        <ul
          style={{
            textDecoration: done ? "line-through" : "none",
            fontSize: 18
          }}
        >
          <li key={id}>{task}</li>
        </ul>
      )}

      <div style={{ margin: 20 }}>
        <button className="ui teal  button" type="button" onClick={setEdit}>
          Edit{" "}
        </button>
        <button
          className="ui red button"
          style={{ marginLeft: 10 }}
          type="button"
          onClick={() => deleteTodo(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;


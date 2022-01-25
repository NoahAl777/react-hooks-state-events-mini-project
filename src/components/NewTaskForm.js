import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [category, setCategory] = useState("Code");
  const [text, setText] = useState("");

  function handleSubmitTask(e) {
    e.preventDefault()
    onTaskFormSubmit({ text, category })
    console.log(category, text)
  }

  const categoryDropdown = categories.map((category, index) => {
    if (category !== "All") {
      return (
        <option key={index}>{category}</option>
      )
    }
  })

  return (
    <form className="new-task-form" onSubmit={handleSubmitTask} >
      <label>
        Details
        <input type="text" name="text" value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          {categoryDropdown}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

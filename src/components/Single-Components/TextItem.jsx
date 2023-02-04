import { useState } from "react";

function TextBox() {
  const [selected, setSelected] = useState(false);

  return (
    <div
      onClick={() => {
        setSelected(!selected);
      }}
      className={`autoSuggestion col-4 ${selected && "selected"}`}
    >
        {selected && <i class="fa-solid fa-circle-check ok"></i>}
      <p>
        A sweet, baked, breadlike food, made with or without short ening, and
        usually containing flour.
      </p>
    </div>
  );
}

export default TextBox;

function Dropdown(props) {
  return (
    <div className="dropdown-div">
              <p>{props.title}</p>
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {props.btnTitle}
      </button>
      <ul class="dropdown-menu">
        {props.actions.map((action) => {
          return (
            <li>
              <a class="dropdown-item" href="#">
                {action}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
    </div>
  );
}

export default Dropdown;

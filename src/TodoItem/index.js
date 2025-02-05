import './TodoItem.css';
import { MdDoneAll, MdDone, MdOutlineHighlightOff  } from "react-icons/md";
function TodoItem(props) {
    return (
      <li className="TodoItem">

        <span
          className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
          onClick={props.onComplete}
        >
          {props.completed ?<MdDoneAll /> :  <MdDone /> }
        </span>
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>

          {props.text}
        </p>
        <span
          className="Icon Icon-delete"
          onClick={props.onDelete}
        >
          <MdOutlineHighlightOff />
        </span>
      </li>

    );
  }
  
  export { TodoItem };
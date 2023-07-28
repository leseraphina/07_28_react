import { BiTrash } from "react-icons/bi";

export default function AddInfo({info,onDelete}){
  return (
    <li>
      <dl>
        <dt>{info.petName}</dt>
        <dd>{info.owerName}</dd>
        <dd className="desc">{info.aptNotes}</dd>
        <dd className="desc">{info.aptDate}</dd>
      </dl>
      <p>
        <button 
        type="button"
        onClick = {() => onDelete(info.id)}
        >
          <BiTrash  />
          </button>
      </p>
    </li>
  );
}
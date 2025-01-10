import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleCode, modifier } from "./tutoSlice";
import Ajouter from "./ajoute";
import { Link } from "react-router-dom";
const List = () => {
  const l = useSelector((state) => state.tut.list);
const dispatch = useDispatch();
  return (
    <>
      <div className="container mt-4">
        <table className="table table-bordered table-hover text-center">
          <thead className="thead-dark">
            <tr>
              <th>Code</th>
              <th>Titre</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {l &&
              l.map((e, i) => (
                <tr key={i}>
                  <td>{e.code}</td>
                  <td>{e.titre}</td>
                  <td>{e.description}</td>
                  <td>
                    <Link to={`/a/b/modifier/${e.code}`}>
                  <button  onClick={()=>dispatch(modifier(e))}>Modifier</button>
                  </Link>
                    <button  onClick={()=>{
                        if(window.confirm(`supprime ${e.description}`))
                            {
                                dispatch(handleCode(e.code))
                            }}}>supprime</button>
                    
                    
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default List;

import "./error.css";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error404">
      <h1>404</h1>
      <h2>Página não encontrada</h2>
      <Link to="/">Veja todos os Filmes</Link>
    </div>
  );
}

export default Error;

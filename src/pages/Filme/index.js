import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import "./filmeInfo.css";

function Filme() {
  const { id } = useParams();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: "4782ad0c8fd0c01693a184835bfbbe4d",
            language: "pt-BR",
          },
        })
        .then((response) => {
          setFilme(response.data);
          setLoading(false);
        })
        .catch(() => {
          console.log("Filme não encontrado");
        });
    }
    loadFilme();

    return console.log("Componente foi desmontado");
  }, []);

  if (loading) {
    return (
      <div className="filme-info">
        <h1>Carregando os detalhes do filme...</h1>
      </div>
    );
  }
  return (
    <div className="filme-info">
      <img
        src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
        alt={filme.title}
      />
      <h3>Sinopse:</h3>
      <span>{filme.overview}</span>
      <strong>Avaliação: {filme.vote_average}/10</strong>
      <div className="area-button">
        <button>Salvar</button>
        <button>
          Trailer
          <a href="" />
        </button>
      </div>
    </div>
  );
}

export default Filme;

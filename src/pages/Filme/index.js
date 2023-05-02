import "./filmeInfo.css";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import api from "../../services/api";

function Filme() {
  const { id } = useParams();
  const navigate = useNavigate();

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
          navigate("/", { replace: true });
          return;
        });
    }
    loadFilme();

    return console.log("Componente foi desmontado");
  }, [navigate, id]);

  function salvarFilme() {
    const minhaLista = localStorage.getItem("@primeflix");

    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilme = filmesSalvos.some(
      (filmesSalvo) => filmesSalvo.id === filme.id
    );

    if (hasFilme) {
      toast.info("O filme já está nos favoritos!");
      return;
    }

    filmesSalvos.push(filme);
    localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
    toast.success("O filme foi favoritado!");
  }

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
        <button onClick={salvarFilme}>Salvar</button>
        <button>
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://youtube.com/results?search_query=${filme.title} Trailer`}
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
}

export default Filme;

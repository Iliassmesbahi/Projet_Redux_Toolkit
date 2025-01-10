import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modifier } from "./tutoSlice";
import { useParams, Link, useNavigate } from "react-router-dom";

const Modifier = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const list = useSelector((state) => state.tut.list);

 
  const prf = list.find((e) => parseInt(e.code, 10) === parseInt(id, 10));

  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (prf) {
      setTitre(prf.titre || "");
      setDescription(prf.description || "");
    }
  }, [prf]);

  const handleModifier = (e) => {
    e.preventDefault();
    if (!titre.trim() || !description.trim()) {
      alert("Veuillez remplir tous les champs avant de modifier.");
      return;
    }
    dispatch(
      modifier({
        code: parseInt(id, 10),
        titre: titre.trim(),
        description: description.trim(),
      })
    );
    navigate("/"); 
  };

  if (!prf) {
    return (
      <div className="alert alert-danger mt-4">
        <strong>Erreur :</strong> Tutoriel introuvable.
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Modifier le Tutoriel {id}</h3>
      <form onSubmit={handleModifier}>
        <div className="mb-3">
          <label htmlFor="titre" className="form-label">
            Titre
          </label>
          <input
            id="titre"
            type="text"
            className="form-control"
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
            placeholder="Entrez le titre du tutoriel"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            id="description"
            className="form-control"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Entrez la description du tutoriel"
          ></textarea>
        </div>

        <div className="d-flex justify-content-between">
          <Link to="/" className="btn btn-secondary">
            Retour
          </Link>
          <button type="submit" className="btn btn-primary">
            Modifier
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modifier;

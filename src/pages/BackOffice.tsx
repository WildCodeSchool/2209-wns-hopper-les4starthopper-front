import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { Link, redirect } from "react-router-dom";
import { isNamedExportBindings } from "typescript";
import { getMe } from "../graphql/users.server";
function BackOffice() {
  const [isAdmin, setIsAdmin] = useState(false);

  const { loading, error, data } = useQuery(getMe);
  console.log(data);

  useEffect(() => {
    if (data && data.GetMe) {
      setIsAdmin(data.GetMe.role === 1);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;

  if (isAdmin) {
    return (
      <div>
        <ul>
          <li>
            <Link to="/back-office/gestion-utillisateurs">
              Gestion des utilisateurs
            </Link>
          </li>
          <li>
            <Link to="/back-office/points-interets">
              Gestion des points d'intérêts
            </Link>
          </li>
          <li>
            <Link to="/back-office/map">Gestion des cartes</Link>
          </li>
          <li>
            <Link to="/back-office/categories">Gestion des catégories</Link>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Vous n'avez pas les droits d'accès à cette page</h1>
        <Link to="/home">
          Retourner visiter les supers pages auquels j'ai accès
        </Link>
      </div>
    );
  }
}

export default BackOffice;

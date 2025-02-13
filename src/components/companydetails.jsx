import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const Companydetails = () => {
  return (
    <>
      <div className="flex flex-row justify-start items-center mt-12">
        <FaCalendarAlt size={24} />
        <h1 className="text-2xl font-[700] ml-2">Dettagli dell’azienda</h1>
      </div>
      <br />
      <p className="text-gray-600">Azzipizza Mica Pizza e Fichi</p>
      <p className="text-gray-600">Via Frassinago 16b</p>
      <p className="text-gray-600">40123 Bologna</p>
      <br />
      <p className="text-gray-600">
        Piattaforma europea di risoluzione delle controversie online:
        <a href="https://ec.europa.eu/consumers/odr">
          https://ec.europa.eu/consumers/odr
        </a>
      </p>
      <br />
      <div className="border-b border-gray-300"></div>
      <br />
      <p className="text-gray-600">
        La nostra azienda è un operatore professionale. Scopri di più su come
        sono ripartite le responsabilità nei confronti dei consumatori tra noi e
        Just Eat.
      </p>
    </>
  );
};

export default Companydetails;

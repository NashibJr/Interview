import React from "react";
import ClientComponent from "./ClientComponent";
import client from "../assets/images/client.png";

const Clients = () => {
  return (
    <>
      <h2 className="text-lg font-bold text-center mt-8 mb-5">Clients</h2>
      <div className="sm:flex mr-2 -ml-2 sm:ml-0 sm:m-0">
        <ClientComponent
          image={client}
          name="Mario Rossi"
          role="Manager"
          text="Lorem ipsum dollar sit
          amet , consecutor adipcing elit,sed do eisumod tempor incididunt ut
          labore magna aliqua. Ultris mi eget pharetra. Amet resut bla bla bla
          bla"
        />
        <ClientComponent
          image={client}
          name="Luca Verdi"
          role="Developer"
          text="Lorem ipsum dollar sit
          amet , consecutor adipcing elit,sed do eisumod tempor incididunt ut
          labore magna aliqua. Ultris mi eget pharetra. Amet resut bla bla bla
          bla"
        />
      </div>
    </>
  );
};

export default Clients;

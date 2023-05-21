import React, { useState } from "react";
import styled from "styled-components";
import web3 from "./web3";
import subastaContract from "./subasta";

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;

function App() {
  const [nombreArticulo, setNombreArticulo] = useState("");
  const [simboloArticulo, setSimboloArticulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precioInicial, setPrecioInicial] = useState("");
  const [duracion, setDuracion] = useState("");
  const [subastaId, setSubastaId] = useState("");
  const [oferta, setOferta] = useState("");

  const handleCrearSubasta = async (event) => {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();
    const creador = accounts[0];

    await subastaContract.methods
      .iniciarSubasta(nombreArticulo, simboloArticulo, descripcion, precioInicial, duracion)
      .send({ from: creador });

    console.log("Subasta creada");
  };

  const handleApostar = async (event) => {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();
    const apostador = accounts[0];

    await subastaContract.methods
      .apostar(subastaId)
      .send({ from: apostador, value: oferta });

    console.log("Oferta realizada");
  };

  const handleFinalizarSubasta = async (event) => {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();
    const creador = accounts[0];

    await subastaContract.methods.finalizacionSubasta(subastaId).send({
      from: creador,
    });

    console.log("Subasta finalizada");
  };

  return (
    <Container>
      <Title>Crear Subasta</Title>
      <form onSubmit={handleCrearSubasta}>
        <Label>Nombre del artículo:</Label>
        <Input
          type="text"
          value={nombreArticulo}
          onChange={(e) => setNombreArticulo(e.target.value)}
        />

        <Label>Simbolo del artículo:</Label>
        <Input
          type="text"
          value={simboloArticulo}
          onChange={(e) => setSimboloArticulo(e.target.value)}
        />

        <Label>Descripción:</Label>
        <Input
          type="text"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />

        <Label>Precio Inicial:</Label>
        <Input
          type="text"
          value={precioInicial}
          onChange={(e) => setPrecioInicial(e.target.value)}
        />

        <Label>Duración (en segundos):</Label>
        <Input
          type="text"
          value={duracion}
          onChange={(e) => setDuracion(e.target.value)}
        />

        <Button type="submit">Crear Subasta</Button>
      </form>

      <Title>Apostar en Subasta</Title>
      <form onSubmit={handleApostar}>
        <Label>Subasta ID:</Label>
        <Input
          type="text"
          value={subastaId}
          onChange={(e) => setSubastaId(e.target.value)}
        />

        <Label>Oferta:</Label>
        <Input
          type="text"
          value={oferta}
          onChange={(e) => setOferta(e.target.value)}
        />

        <Button type="submit">Realizar Oferta</Button>
      </form>

      <Title>Finalizar Subasta</Title>
      <form onSubmit={handleFinalizarSubasta}>
        <Label>Subasta ID:</Label>
        <Input
          type="text"
          value={subastaId}
          onChange={(e) => setSubastaId(e.target.value)}
        />

        <Button type="submit">Finalizar Subasta</Button>
      </form>
    </Container>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from "react-bootstrap";

import Datepicker from './components/datepicker';
import LargeDogs from './components/largedogs';
import Smalldogs from './components/smalldogs';

function App() {
  const [data, setData] = useState('');
  const [qtdPequenos, setQtdPequenos] = useState(0);
  const [qtdGrandes, setQtdGrandes] = useState(0);
  const [resultado, setResultado] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const calcularPreco = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api', {
        ddmmyyyy: data,
        qtd_pequenos: qtdPequenos,
        qtd_grandes: qtdGrandes
      });
      setResultado(response.data);
    } catch (error) {
      console.error('Erro ao calcular o preço:', error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='container-fluid'>

      <h1>Preço Pet</h1>

      <div className='row'>
        <div className="col-md-12">
          <p>Informe a data desejada para o banho</p>
          <Datepicker setData={setData} />
        </div>
      </div>

      <div className='row'>
        <div className="col-md-12">
          <p>Informe a quantidade de cães de porte pequeno</p>
          <Smalldogs setQtdPequenos={setQtdPequenos} />
        </div>
      </div>

      <div className='row'>
        <div className="col-md-12">
          <p>Informe a quantidade de cães de porte grande</p>
          <LargeDogs setQtdGrandes={setQtdGrandes} />
        </div>
      </div>

      <div className="mt-3">
        <Button onClick={async () => {
          await calcularPreco();
          setTimeout(openModal, 300);
        }}>
          Calcular Preço
        </Button>
        {isModalOpen && (
          <Modal show={isModalOpen} onHide={closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>Resultado</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {resultado && (
                <div>
                  <p>Opção de Menor Preço: {resultado.opcao_menor_preco}</p>
                  <p>Menor Preço: R${resultado.menor_preco}</p>
                </div>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={closeModal}>
                Fechar
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>

    </div>
  );
}

export default App;

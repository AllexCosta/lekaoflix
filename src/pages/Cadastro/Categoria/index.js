import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import { ButtonAuxiliar } from '../../../components/Button';

const CadastroCategoria = () => {
  const [categorias, setCategorias] = useState([]);
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [values, setValues] = useState(valoresIniciais);
  const setValue = (chave, valor) => {
    // chave: nome, descricao, bla, bli
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    });
  };
  const handleSubmit = (Evento) => {
    Evento.preventDefault();
    setCategorias([...categorias, values]);
    setValues(valoresIniciais);
  };
  function handleChange(Evento) {
    setValue(
      Evento.target.getAttribute('name'),
      Evento.target.value,
    );
  }

  useEffect(() => {
    const url = 'http://localhost:8080/categorias';
    fetch(url)
      .then(async (respostaServidor) => {
        const resposta = await respostaServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <ButtonAuxiliar type="subimt">
          Cadastrar
        </ButtonAuxiliar>
      </form>

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <Link to="/cadastro/video">
        Voltar
      </Link>
    </PageDefault>
  );
};

export default CadastroCategoria;

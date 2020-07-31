import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import { Form, Title, LinkVoltar } from './style';
import { ButtonAuxiliar } from '../../../components/Button';

const CadastroCategoria = () => {
  const [categorias, setCategorias] = useState([]);
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
    codigo: '',
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
  return (
    <PageDefault>
      <Title>Cadastro de Categoria</Title>

      <Form onSubmit={handleSubmit}>

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

        <FormField
          label="Código de Segurança"
          type="text"
          name="Código"
          value={values.codigo}
          onChange={handleChange}
        />

        <ButtonAuxiliar type="subimt">
          Cadastrar
        </ButtonAuxiliar>

        <LinkVoltar to="/cadastro/video">
          Voltar
        </LinkVoltar>
      </Form>

      <ul>
        {categorias.map((categoria, { fieldID }) => (
          <li key={`${fieldID}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

    </PageDefault>
  );
};

export default CadastroCategoria;

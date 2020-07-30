import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import { Form, Title, ButtonSalvar, ButtonLimpar, LinkCadastrar } from './style';
import CadastroCategoria from '../Categoria';

function CadastroVideos() {
  const valoresIniciais = {
    nome: '',
    urlVideo: '',
    urlImagem: '',
    categoria: '',
    descricao: '',
    cor: '',
    codigo: ''
  }
  const [videos, setVideos] = useState([]);
  const [values, setValues] = useState(valoresIniciais);


  function setValue(chave, valor) {
    // chave: nome, descricao, bla, bli
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    })
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }

  return (
    <PageDefault>
      <Title>Novo Video</Title>

      <Form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setVideos([
          ...videos,
          values
        ]);

        setValues(valoresIniciais)
      }}>

        <FormField
          label="Titulo"
          type="text"
          name="Titulo"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Link do Vídeo"
          text="text"
          name="urlVideo"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Link da Imagem do Vídeo"
          name="urlImagem"
          type="text"
          value={values.cor}
          onChange={handleChange}
        />

        <FormField
          label="Escolha uma Categoria"
          name="Categoria"
          type="datalist"
          value={CadastroCategoria.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          text="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Código de Segurança"
          name="código"
          type="text"
          value={values.codigo}
          onChange={handleChange}
        />

        <ButtonSalvar className="btnSalvar">
          Salvar
        </ButtonSalvar>

        <ButtonLimpar className="btnLimpar">
          Limpar
        </ButtonLimpar>

        <LinkCadastrar to="/cadastro/categoria">
          Cadastrar Categoria
        </LinkCadastrar>

      </Form>


      <ul>
        {videos.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>


    </PageDefault>
  );
}

export default CadastroVideos;
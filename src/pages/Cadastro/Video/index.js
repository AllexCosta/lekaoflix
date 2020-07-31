import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import CadastroCategoria from '../Categoria';
import { ButtonAuxiliar, ButtonLimpar } from '../../../components/Button';

const CadastroVideos = () => {
  const [videos, setVideos] = useState([]);
  const valoresIniciais = {
    nome: '',
    urlVideo: '',
    urlImagem: '',
    categoria: '',
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
    setVideos([
      ...videos,
      values,
    ]);

    setValues(valoresIniciais);
  };
  const handleChange = (Evento) => {
    setValue(
      Evento.target.getAttribute('name'),
      Evento.target.value,
    );
  };

  return (
    <PageDefault>
      <h1>Novo Video</h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Titulo"
          type="text"
          name="Titulo"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Link do Vídeo"
          type="text"
          name="urlVideo"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Link da Imagem do Vídeo"
          type="text"
          name="urlImagem"
          value={values.cor}
          onChange={handleChange}
        />

        <FormField
          label="Escolha uma Categoria"
          type="datalist"
          name="Categoria"
          value={CadastroCategoria.nome}
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
          label="Código de Segurança"
          type="text"
          name="código"
          value={values.codigo}
          onChange={handleChange}
        />

        <ButtonAuxiliar type="submit" btnSalvar>
          Salvar
        </ButtonAuxiliar>

        <ButtonLimpar btnLimpar>
          Limpar
        </ButtonLimpar>

        <Link to="/cadastro/categoria">
          Cadastrar Categoria
        </Link>

      </form>

      <ul>
        {videos.map((video) => (
          <li key={`${video.name}`}>
            {video.nome}
          </li>
        ))}
      </ul>

    </PageDefault>
  );
};

export default CadastroVideos;

import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import { ButtonAuxiliar, ButtonLimpar } from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideos() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: '',
    urlVideo: '',
    urlImagem: '',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository.getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  const handleSubmit = (Evento) => {
    Evento.preventDefault();
    const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === values.categoria);

    videosRepository.create({
      titulo: values.titulo,
      url: values.url,
      categoriaID: categoriaEscolhida.id,
    });

    history.push('/');
  };

  return (
    <PageDefault>
      <h1>Novo Video</h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Titulo"
          name="Titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Link do Vídeo"
          name="urlVideo"
          value={values.urlVideo}
          onChange={handleChange}
        />

        <FormField
          label="Link da Imagem do Vídeo"
          name="urlImagem"
          value={values.urlImagem}
          onChange={handleChange}
        />

        <FormField
          label="Escolha uma Categoria"
          name="Categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
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

      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>

    </PageDefault>
  );
}

export default CadastroVideos;

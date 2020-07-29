import React from 'react';
import styled from 'styled-components';
import Menu from '../../components/Menu';
import Banner from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import Data from '../../data/dados_iniciais.json';

const AppWrapper = styled.div`
  background: var(--grayDark);
  padding-top: 94px;

  @media(max-width: 800px){
    padding-top: 40px;
  }
`;

function Home() {
  return (
    <AppWrapper>
      <Menu />

      <Banner
        videoTitle={Data.categorias[0].videos[0].titulo}
        url={Data.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
      />

      <Carousel 
        ignoreFirstVideo
        category={Data.categorias[0]}
      />
      <Carousel
        category={Data.categorias[1]}
      />
      <Carousel
        category={Data.categorias[2]}
      />
      <Carousel
        category={Data.categorias[3]}
      />
      <Carousel
        category={Data.categorias[4]}
      />
      <Carousel
        category={Data.categorias[5]}
      />

      <Footer />
    </AppWrapper>
  );
}

export default Home;

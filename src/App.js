import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'
import Listadonoticias from './components/Listadonoticias'

function App() {

  const [category, setCategory] = useState('')
  const [news, saveNews] = useState([])

  useEffect(() => {
    const getAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${category}&apiKey=${process.env.REACT_APP_APIKEY}`;

      const response = await fetch(url)
      const news = await response.json()

      saveNews(news.articles)
    }
    getAPI()
  }, [category])

  return (
    <Fragment>
      <Header
        title='Buscador de noticias'
      />

      <div className="container white">
        <Formulario
          setCategory={setCategory}
        />

        <Listadonoticias
          news={news}
        />
      </div>
    </Fragment>
  );
}

export default App;

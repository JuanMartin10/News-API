import React from 'react'
import PropTypes from 'prop-types'
import News from './Noticia'

const Listadonoticias = ({ news }) => {
    return (
        <div className="row">
            {news.map(notice => (
                <News key={notice.url}
                    notice={notice} />
            ))}

        </div>
    )
}

Listadonoticias.propTypes = {
    news: PropTypes.array.isRequired
}

export default Listadonoticias

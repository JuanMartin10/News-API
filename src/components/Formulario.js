import React from 'react'
import styles from './Formulario.module.css'
import PropTypes from 'prop-types';
import useSelect from '../hooks/useSelect'

const Formulario = ({ setCategory }) => {

    const Options = [
        { value: 'general', label: 'General' },
        { value: 'business', label: 'Negocios' },
        { value: 'entertainment', label: 'Entretenimiento' },
        { value: 'health', label: 'Salud' },
        { value: 'science', label: 'Ciencia' },
        { value: 'sports', label: 'Deportes' },
        { value: 'technology', label: 'Tecnología' }
    ]

    const [category, SelectNews] = useSelect('general', Options)

    const searchNews = e => {
        e.preventDefault()

        setCategory(category)
    }

    return (
        <div className={`${styles.buscador} row`
        }>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={searchNews}
                >

                    <h2 className={styles.heading}>Encuentra noticias por categoría</h2>

                    <SelectNews />

                    <div className="input-field col s12">
                        <input
                            type="submit"
                            className={`${styles['btn-block']} btn-large amber darken-2`}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>

        </div >
    )
}

Formulario.propTypes = {
    setCategory: PropTypes.func.isRequired
}

export default Formulario

import React from 'react';
import PropTypes from 'prop-types';


const Noticias = ({ noticia }) => {

    // extraer los datos
    const { urlToImage, url, title, description, source } = noticia;

    const imagen = (urlToImage) ?
        <div className="card-image">
            <img src={(urlToImage === 'null') ? `https://isabelpaz.com/wp-content/themes/nucleare-pro/images/no-image-box.png` : urlToImage} alt={title} />
            <span className="card-title">{source.name}</span>
        </div>
        : null;

    return (
        <div className="col s12 l4 m5">
            <div className="card">
                {imagen}
                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="waves-effect waves-light btn"
                    >Ver noticia Completa</a>
                </div>
            </div>
        </div>
    );
}

Noticias.propTypes = {
    noticia: PropTypes.object.isRequired
}

export default Noticias;
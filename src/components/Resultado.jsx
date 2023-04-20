import styled from '@emotion/styled'
import React from 'react'

const Contenedor = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`
const Imagen = styled.img`
    display: block;
    width: 100px;
`
const Texto = styled.p`
    font-size: 16px;
    span {
        font-weight: 700;
    }
`
const Precio = styled.p`
    font-size: 24px;

    span {
        font-weight: 700;
    }
`



const Resultado = ({ resultado }) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado

    return (
        <Contenedor>
            <Imagen src={`https://cryptocompare.com/${IMAGEURL}`}
                alt="" />
            <div>
                <Precio>El precio es de: <span>{PRICE}</span></Precio>
                <Texto>El precio más alto del día: <span>{HIGHDAY}</span></Texto>
                <Texto>El precio más bajo del día: <span>{LOWDAY}</span></Texto>
                <Texto>Variación últimas 24h: <span>{CHANGEPCT24HOUR}</span></Texto>
                <Texto>Última actualización: <span>{LASTUPDATE}</span></Texto>
            </div>
        </Contenedor>
    )
}

export default Resultado
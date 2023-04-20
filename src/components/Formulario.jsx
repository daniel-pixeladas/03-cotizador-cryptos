import styled from '@emotion/styled'
import React, { useState, useEffect } from 'react'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'
import Error from './Error'


const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    cursor: pointer;
    margin-top: 20px;

    &:hover {
        background-color: #A77DFE;
    }
`

const Formulario = ({setMonedas}) => {

    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu moneda', monedas);
    const [criptos, setCriptos] = useState([]);
    const [error, setError] = useState(false);
    const [criptomoneda, SelectCriptomoneda] = useSelectMonedas('Elige tu criptomoneda', criptos);

    useEffect(() => {
        const consultarAPI = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            // console.log(resultado.Data);

            const arrayCryptos = resultado.Data.map(cripto => {

                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName,
                }
                return objeto;
            })
            setCriptos(arrayCryptos);
        }
        consultarAPI();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        if ([moneda, criptomoneda].includes("")) {
            setError(true)
            setMonedas({})
            return;
        }

        setError(false)
        setMonedas({
            moneda,
            criptomoneda
        })
    }

    return (
        <>
            {
                error && <Error>Todos los campos son obligatorios</Error>
            }
            <form onSubmit={handleSubmit}>
                <SelectMonedas />
                <SelectCriptomoneda />
                <InputSubmit type="submit" value="Cotizar" />
            </form>
        </>
    )
}

export default Formulario
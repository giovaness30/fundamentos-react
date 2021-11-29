export default (props) => {

    const { min, max } = props
    const aleatorio = Math.floor(Math.random() * (max - min + 1) + min)
    return(
        <div>
            <h2>Valor Aleatorio</h2>
            <p><strong>Valor minimo: {min}</strong></p>
            <p><strong>Valor maximo: {max}</strong></p>
            <p><strong>Valor Aléatorio: {aleatorio}</strong></p>
            
        </div>
    
    )
}
import PropTypes from 'prop-types'

function Botao({ children = "Ok",
    primary, 
    secondary,
    success,
    warning,
    danger,
    outline, 
    rounded }) {

    return (
    <button>
        {children}
    </button>
    )
}


Botao.propTypes = {
    checkVariation: ({primary, secondary, success, warning, danger}) => {
        const count = Number(!!primary) // !!algo transforma true em 1 e undefined ou false em 0
        + Number(!!secondary)
        + Number(!!success)
        + Number(!!warning)
        + Number(!!danger)

        if (count > 1) {
            throw new Error('Você escolheu mais de uma classe para seu Botão!')
        }
    }
}

export default Botao
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
        <div>
            <button className='bg-blue-500 text-white border-2 border-blue-600 px-3 py-1.5 m-3'>
                {children}
            </button>
        </div>
    )
}


Botao.propTypes = {
    checkVariation: ({ primary, secondary, success, warning, danger }) => {
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
import PropTypes from 'prop-types'
import classnames from 'classnames'

function Botao({ children = "Ok",
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded }) {

    const finalClassName = classnames('flex', 'itens-center','border', 'px-3', 'py-1.5', 'm-3', {
        'bg-white': outline,
        'text-black': outline || (secondary && outline),
        'bg-blue-200': primary,
        'border-blue-300': primary,
        'text-white': secondary && !outline,
        'bg-black': secondary,
        'border-gray-900': secondary,
        'bg-green-500': success,
        'border-green-600': success,
        'bg-yellow-500': warning && !outline,
        'border-yellow-600': warning,
        'bg-red-500': danger,
        'border-red-600': danger,
        'rounded-3xl': rounded,
        'border-black': !primary && !secondary && !success && !warning && !danger
    })

    return (
            <button className={finalClassName}>
                {children}
            </button>
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
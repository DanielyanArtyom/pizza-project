import React from 'react'
import classNames from 'classnames'

const Button = ({ clicked, className, outline, children }) => {

    return (
        <button onClick={clicked} className={classNames('button', className,
            {
                'button--outline': outline,
            },
        )}>
            {children}
        </button>
    )
}


export default Button
import React from 'react'

const Header = ({children}) => {
    return (
        <div className="text-center m-3 display-4">
            {children}
        </div>
    )
}

export default Header

import React from 'react'

const Footer = () => {
    return (
        <div className="p-3 bg-slate-900 text-gray-300 shadow-footer">
            <p className="font-sans text-center text-sm">Copyright &copy; {new Date().getFullYear()} by Sandesta Reza</p>
        </div>
    )
}

export default Footer
import React from 'react'


export type GasAssemblyType = {

}

const GasAssembly:React.FC<GasAssemblyType> = () => {
    const electricStyles = {
        width: '34px',
    }
    return <div style={electricStyles}>
        <svg   version="1.1" id="mdi-gas-cylinder" width="24" height="24" viewBox="0 0 24 24"><path d="M16,9V14L16,20A2,2 0 0,1 14,22H10A2,2 0 0,1 8,20V14L8,9C8,7.14 9.27,5.57 11,5.13V4H9V2H15V4H13V5.13C14.73,5.57 16,7.14 16,9Z" /></svg>


    </div>
}

export default GasAssembly;
import React from 'react'


export type DiscountType = {

}

const Discount:React.FC<DiscountType> = () => {
    const electricStyles = {
        width: '34px',
    }
    return <div style={electricStyles}>
        <svg version="1.1" id="Layer_1"  x="0px" y="0px"
               viewBox="0 0 64 64"    >
<g>
	<g>
		<path d="M39,64.414l-39-39V0h25.414l39,39L39,64.414z M2,24.586l37,37L61.586,39l-37-37H2V24.586z"/>
	</g>
    <g>
		<path d="M17,24c-3.86,0-7-3.14-7-7s3.14-7,7-7s7,3.14,7,7S20.86,24,17,24z M17,12c-2.757,0-5,2.243-5,5s2.243,5,5,5s5-2.243,5-5
			S19.757,12,17,12z"/>
	</g>
</g>
</svg>

    </div>
}

export default Discount;
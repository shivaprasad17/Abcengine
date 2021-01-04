import React, { useEffect, useState } from 'react'
import pro from '../Assets/images/backgroudgopro.jpg'
import Quoteform from './Quoteform';


export default function MainBodyContainer(){
    return(
        <div style={{ backgroundImage:`url(${pro})`,marginTop:'11rem'}}>
         <Quoteform/>
        </div>
    )
}
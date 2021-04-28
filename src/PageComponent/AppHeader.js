import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Grid ,Header,Icon} from 'semantic-ui-react';

const HeaderWrapper = styled.nav`
    position: fixed;
    box-sizing: border-box;
    z-index: 9;
    width: 100%;
    min-height: 60px;
    color: black;
    background: green;
    padding: 15px 50px;
    top: 0;
    box-shadow: 0px 3px 6px #00000029;
    display:flex;
`;


const NormalNavBarWrapper = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
`;

 

const StartWrapper = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: flex-start;
    width:85%
    
`;

 

const EndWrapper = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: end;
    justify-content: flex-end;
    width:15%
`;
export default function AppHeader(){

    return(
        <div>
           <HeaderWrapper>
               <StartWrapper>
               <Icon.Group size='big'>
      <Icon loading size='big' name='circle notch' />
      <Icon name='truck' />
    </Icon.Group>
                   <Header>Harry Engine</Header>
                </StartWrapper>
                <EndWrapper style={{display:'inline',float:'right'}}>
                    <div>
                        call Now For Your FREE Quote!
                    </div>
                    <div>
                        1-00-000-00000-0000
                    </div>
                </EndWrapper>
           </HeaderWrapper>
        </div>
    )
}
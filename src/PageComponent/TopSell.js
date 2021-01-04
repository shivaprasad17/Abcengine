import React, { useEffect, useState } from 'react'
import { Container ,Form,Icon,TextArea,Grid,Button,Dropdown,Input} from 'semantic-ui-react'
import styled from 'styled-components'


const Topselldiv=styled.div`
 display: inline-block;
  margin: 0 1.5%;
  background-color: #fff;
border-radius: 5px;
 box-shadow: 0 5px 1em rgba(0,0,0,.15) !important;
` 

export default function TopSell(){

    return(
       <Container>
           <Grid>
               <Grid.Row>
               <Grid.Column>
               <div style={{fontSize:'25px',color:'black'}}> 
               TOP-SELLING USED ENGINES
                </div>
               </Grid.Column>
               </Grid.Row>
               <Grid.Row>
                     <Grid.Column>
                     <div style={{fontSize:'20px',color:'gray'}}> 
                     Our top-selling used engines are also top-quality and backed by a 1 to 3-year warranty plus FREE shipping.
                </div>

               </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                   <Grid.Column width={4}>
                      <Topselldiv style={{boxShadow:'0 5px 1em rgba(0,0,0,.15)'}}>
                          <h3> Chevy</h3>
                          <div style={{ backgroundImage:`url('https://goproengines.com/wp-content/uploads/Screen-Shot-2018-11-27-at-5.09.09-PM.png')`,backgroundPosition:'center',backgroundSize:'cover',width:'200px',height:'200px'}}>
                           
                          </div>
                        
                      </Topselldiv>
                   </Grid.Column>
                   <Grid.Column width={2}>
                       
                   </Grid.Column>
                   <Grid.Column width={4}>
                   <Topselldiv style={{boxShadow:'0 5px 1em rgba(0,0,0,.15)'}}>
                   <h3>Nissan </h3>
                          <div style={{ backgroundImage:`url('https://goproengines.com/wp-content/uploads/Screen-Shot-2018-11-27-at-5.17.05-PM.png')`,backgroundPosition:'center',backgroundSize:'cover',width:'200px',height:'200px'}}>
                           
                          </div>
                      </Topselldiv>
                       
                   </Grid.Column>
                   <Grid.Column width={2}>
                       
                   </Grid.Column>
                   <Grid.Column width={4}>
                   <Topselldiv style={{boxShadow:'0 5px 1em rgba(0,0,0,.15)'}}>
                   
                   <h3>Toyota </h3>
                          <div style={{ backgroundImage:`url('https://goproengines.com/wp-content/uploads/Screen-Shot-2018-11-27-at-5.09.09-PM.png')`,backgroundPosition:'center',backgroundSize:'cover',width:'200px',height:'200px'}}>
                           
                          </div>
                      </Topselldiv>
                       
                   </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                   
                </Grid.Row>
           </Grid>
       </Container> 
    )
}
import React, { useEffect, useState } from 'react'
import { Container ,Form,Icon,TextArea,Grid,Button,Dropdown,Input} from 'semantic-ui-react'
import styled from 'styled-components'

import selecctpart from './selectpart.json'
import selecttransmission from './selecttransmission.json'
import selectmodal from './selectmodal'


const FormContainer = styled.div`
`
const FormContainerHeading = styled.div`
font-size:25px
color: '#FFFFF'
`

const StudyFormInput = styled(Input)`
&&&& {
    &.ui.input>input {
        width: auto;
        height: 28px;
        padding: 3px 4px 3px 4px;
        font-size:14px;
        border-color:${props=>props.error?'red':'none'};
        background:${props=>props.error?'none':'none'};

    background-color: white;

    }
    & i {
        font-size:xx-small;
    }
}
`;


const StyledquoteButton = styled(Button)`{
    &&&& {
        background-color: #0460A9;
        color: white;
        border-radius: 0;
        width:auto;
    }
}`;

const selectmakeroptions=[{
    key: "Acura",
    text: "Acura",
    value: "Acura", 
},
{
    key: "Alfa Romeo",
    text: "Alfa Romeo",
    value: "Alfa Romeo", 
},
{
    key: "Allard",
    text: "Allard",
    value: "Allard", 
},
{
    key: "Bentley",
    text: "Bentley",
    value: "Bentley", 
},
{
    key: "BMW",
    text: "BMW",
    value: "BMW", 
},
{
    key: "Ford",
    text: "Ford",
    value: "Ford", 
},
{
    key: "Jeep",
    text: "Jeep",
    value: "Jeep", 
}
]



export default function Quotrform(){

   const [yearss,setyears]=useState([])
   let yearsoptions=yearss
   const [modal,setmodal]=useState(selectmodal.Bentley)
   let modaloptiosn=modal
   const [part,setpart]=useState(selecctpart.selectoptions)
   let partoptions=part
   const [enginesize,setenginesize]=useState([])
   let enginesizeoptions=enginesize
   const [tran,setrans]=useState(selecttransmission.tansmission)
   let tranoprins=tran

    useEffect(()=>{
        let yearoptions=[]
        for(let i=2021;i>=1980;i--){
            yearoptions.push({
                    key: i,
                    text: i,
                    value: i, 
            })
        }
        let enginesize=[]
        for(let i=1;i<=10;i=i+0.1){
            enginesize.push({
                key: Math.floor(i* 100) / 100,
                text: Math.floor(i* 100) / 100+'  liters',
                value: Math.floor(i* 100) / 100 
        })
        }
        setyears(yearoptions)
        setenginesize(enginesize)
    },[])

    const handlechange=(e,result)=>{
     if(result.placeholder==="Select Modal"){
       console.log("jgh")
     }
    }
    return(
        <div >
        <Container >
        
         <FormContainer>
           <Form>
               <Grid>
                   <Grid.Row>
                       <Grid.Column>
                           <div style={{fontSize:'25px',color:'black'}}> 
                               Free Shipping with any Quote!
                           </div>
                       </Grid.Column>
                       
                   </Grid.Row>
                   <Grid.Row>
                       <Grid.Column>
                       <div style={{fontSize:'25px',color:'black'}}> 
                              Used Engines & Transmissions
                       </div>
                       </Grid.Column>
                   </Grid.Row>
                   <Grid.Row>
                       <Grid.Column width={4}>
                       <Dropdown
                        placeholder='Select Year'
                        fluid
                        selection
                        options={yearsoptions}
                      />
                       </Grid.Column>
                       <Grid.Column width={2}>

                       </Grid.Column>
                       <Grid.Column width={4}>
                       <Dropdown
                        placeholder='Select Modal'
                        fluid
                        selection
                        options={selectmakeroptions}
                        onChange={handlechange}
                      />  

                       </Grid.Column>
                       <Grid.Column width={2}>

                       </Grid.Column>
                       <Grid.Column width={4}>
                       <Dropdown
                        placeholder='Select Make'
                        fluid
                        selection
                        options={modal}
                      />
                      </Grid.Column>
                   </Grid.Row>
                   <Grid.Row>
                       <Grid.Column width={4}>
                       
                       <Dropdown
                        placeholder='Select Part'
                        fluid
                        selection
                        options={partoptions}
                      />
                       </Grid.Column>
                       <Grid.Column width={2}>

                       </Grid.Column>
                       <Grid.Column width={4}>
                       
                       <Dropdown
                        placeholder='Select Engine size'
                        fluid
                        selection
                        options={enginesizeoptions}
                      />
                       </Grid.Column>
                       <Grid.Column width={2}>

                      </Grid.Column>
                      <Grid.Column width={4}>
                      <Dropdown
                        placeholder='Select transmission'
                        fluid
                        selection
                        options={tran}
                      />
                      </Grid.Column>
                   </Grid.Row>
                   <Grid.Row>
                       <Grid.Column width={4}>
                           <StudyFormInput name="email" placeholder="email"/>
                       </Grid.Column>
                       <Grid.Column width={2}> 
                           
                       </Grid.Column>
                       <Grid.Column width={4}>
                           <StudyFormInput name="Phone" placeholder="Phone"/>
                       </Grid.Column>
                       <Grid.Column width={2}> 
                           
                           </Grid.Column>
                       <Grid.Column width={4}> 
                           <StudyFormInput name="Zip Code" placeholder="Zip Code"/>
                       </Grid.Column>
                   </Grid.Row>
                   <Grid.Row>
                       <Grid.Column textAlign="center">
                            <StyledquoteButton>Get My Free Quote Now</StyledquoteButton>
                       </Grid.Column>
                   </Grid.Row>
               </Grid>
           </Form>
         </FormContainer>
      
      </Container>
      </div>
    )
}
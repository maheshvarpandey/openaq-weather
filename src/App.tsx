import React, { useState } from 'react';
import { Container, Form, Grid, Header, Icon } from 'semantic-ui-react';
import './App.css';
import request from './api/request';
import { CardComp } from './components';

function App() {


  const [inputData, setInputData] = useState({
    city1: "",
    city2: ""
  })
  const [details1, setDetails1] = useState() 
  const [details2, setDetails2] = useState() 
  const [error, setError] = useState('') 


  const changeHandler = (e:any) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value
    })
  }

  const getDetails = () => {
    if (inputData.city1 !== "" && inputData.city2 !== "") {
      request(`/weather?q=${inputData.city1}&appid=${process.env.REACT_APP_API_KEY || '88ab08f5401304a21eae8f59c36b4682'}`, {
        method: 'get',
      }).then(res => {
        if(res.cod === 401) {
          setError(res?.message)
        } else {
          setDetails1(res)
          setError('')
        }
      }).catch((err)=> {
        setError(err?.message)
      });
      request(`/weather?q=${inputData.city2}&appid=${process.env.REACT_APP_API_KEY || '88ab08f5401304a21eae8f59c36b4682'}`, {
        method: 'get',
      }).then(res => {
        if(res.cod === 401) {
          setError(res?.message)
        } else {
          setDetails2(res)
          setError('')
        }
      }).catch((err)=> {
        setError( err?.message)
      });;
    } else {
      alert('Both city required for comparison !!')
    }

  }

  return (
    <div className="">
      <div className='wrapper'>
        <div className='leftMenu'>
            <h2 className='menuLogo'>Ur Adventure</h2>
            <ul className='menuList'>
              <li className='menuItem'>
                First Item
              </li>
              <li className='menuItem'>
                Second Item
              </li>
              <li className='menuItem'>
                Third Item
              </li>
            </ul>
        </div>
        <div className='rightMenu'>
            <div className='topHeader'>
                <div className='leftTopMenu'>
                    Dashboard
                </div>
                <div className='rightTopMenu'>
                    Profile
                </div>
            </div>
        </div>
      </div>
      {/* <div className="App">
      <Container textAlign='center' style={{marginBottom: '60px'}}>
        <Header as='h2' textAlign='center'>
          <Icon name='plug' />
          <Header.Content>OpenAQ Weather</Header.Content>
        </Header>
      </Container>
      <Container textAlign='left'>
        <Form>
          <Form.Group widths='equal'>
            <Form.Input fluid label='First city' onChange={(e) => changeHandler(e)} name="city1" placeholder='Enter First City' />
            <Form.Input fluid label='Second city' onChange={(e) => changeHandler(e)} name="city2" placeholder='Enter Second City' />
          </Form.Group>
          <Container textAlign='right'>
            <Form.Button onClick={getDetails}>Get Details</Form.Button>
          </Container>
        </Form>
      </Container>
      <Header as='h2'>AQ Results</Header>
      <span style={{color: 'red'}}>{error}</span>
        <Container textAlign='left'>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column>
              {details1 && <CardComp content={details1} />}
              </Grid.Column>
              <Grid.Column>
               {details2 && <CardComp content={details2} />}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div> */}
    </div>
  );
}

export default App;

import './App.css';
import { Container, Form, Grid, Header, Icon } from 'semantic-ui-react';
import { useState } from 'react';
import request from './api/request';
import CardIndex from './components/Card';

function App() {
  const [inputData, setInputData] = useState({
    city1: "",
    city2: ""
  })
  const [details1, setDetails1] = useState() 
  const [details2, setDetails2] = useState() 

  const appKey = '';

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value
    })
  }

  const getDetails = () => {
    if (inputData.city1 !== "" && inputData.city2 !== "") {
      request(`/weather?q=${inputData.city1}&appid=${process.env.REACT_APP_API_KEY}`, {
        method: 'get',
      }).then(res => {
        setDetails1(res)
      });
      request(`/weather?q=${inputData.city2}&appid=${process.env.REACT_APP_API_KEY}`, {
        method: 'get',
      }).then(res => {
        setDetails2(res)
      });
    }

  }

  return (
    <div className="App">
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
        <Container textAlign='left'>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column>
                <CardIndex data={details1} />
              </Grid.Column>
              <Grid.Column>
                <CardIndex data={details2} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
    </div>
  );
}

export default App;

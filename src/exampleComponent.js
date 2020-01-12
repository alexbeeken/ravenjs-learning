import React from 'react';
import { Box, Button, Col, Row, Typography } from 'ravenjs';

const defaultName = 'Alex';

class ExampleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: defaultName, nameBuffer: '' }; 
  }

  changeName = () => {
    this.setState({name: this.state.nameBuffer});
    return;
  }

  handleInput = (event) => {
    this.setState({nameBuffer: event.target.value});
    return;
  }

  resetName = () => {
    this.setState({
      name: defaultName,
      nameBuffer: ''
    });
    return;
  }

  render() {
    return <Row direction="column">
      <Col>
        <Box elevation={5} borderWidth="0">
          <Typography type="headline">Name: {this.state.name}</Typography>
        </Box>
      </Col>
      <Col>
        <Box backgroundColor="primary" borderRadius="50%">
          <Typography>Circular box with text!</Typography>
        </Box>
      </Col>
      <form>
        <input label="input" value={this.state.nameBuffer} onChange={this.handleInput} />
      </form>
      <Button onClick={this.changeName} color="light">
        Save 
      </Button>
      <Button onClick={this.resetName} color="light">
        Reset
      </Button>
    </Row>
  };
}

export default ExampleComponent;

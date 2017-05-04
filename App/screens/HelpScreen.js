import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';

export default class HelpScreen extends Component {
  static navigationOptions = {
    title: 'Help',
  };

  constructor(props) {
    super(props);
    this.state = {
      title: 'Help'
    }
  }

  render() {
    const {navigate, goBack} = this.props.navigation;

    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => goBack()}
            >
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>{this.state.title}</Title>
          </Body>
          <Right></Right>
        </Header>
        <Content>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({});
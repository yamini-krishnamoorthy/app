import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Header, Title, Button, Icon, Text, Left, Right, Body, Card, CardItem} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

const ActivityExercisePreviewComponent = (props) => {

  return (
    <Card>
      <CardItem >
        <Text>{props.header}</Text>
      </CardItem>
      <CardItem cardBody>
        <Image style={{ resizeMode: 'cover' }} source={require('../res/img/img.png')} />
      </CardItem>
      <CardItem >
        <Button>
          <Icon name="ios-volume-up"/>
        </Button>
        <Button>
          <Icon name="ios-play"/>
        </Button>
        <Button>
          <Icon name="ios-help"/>
        </Button>
      </CardItem>
    </Card>
  );
}

ActivityExercisePreviewComponent.defaultProps = {};

const styles = StyleSheet.create({
});

export default ActivityExercisePreviewComponent;

import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import MapBox from './MapBox'
import BtnSair from './ButtonSair'

export default class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    Voltar = () => {
        this.props.navigation.navigate('App')
    }

    render() {
        return (
            <View style={styles.container}>
                <MapBox lat={this.props.navigation.getParam('lat')} long={this.props.navigation.getParam('long')} />
                <Image source={this.props.navigation.getParam('image')} style={styles.image} />
                <View style={{ margin: 10 }}>
                    <BtnSair nome='Voltar' action={this.Voltar} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#FFF'

    },
    image: {
        resizeMode: 'stretch',
        width: '90%',
        height: 200,
        margin: 20,
    }

});

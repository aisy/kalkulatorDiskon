import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Card extends Component {
    backgroundColor= "#fff"
    borderRadius= 10
    padding= 10
    marginBottom= 0
    marginTop=0

    constructor(props) {
      super(props)
    }

    initStyle = () =>{
        if(this.props.backgroundColor != null || this.props.backgroundColor !== undefined){
            this.backgroundColor = this.props.backgroundColor
        }
        if(this.props.borderRadius != null || this.props.borderRadius !== undefined){
            this.borderRadius = this.props.borderRadius
        }
        if(this.props.padding != null || this.props.padding !== undefined){
            this.padding = this.props.padding
        }
        if(this.props.marginBottom != null || this.props.marginBottom !== undefined){
            this.marginBottom = this.props.marginBottom
        }
        if(this.props.marginTop != null || this.props.marginTop !== undefined){
            this.marginTop = this.props.marginTop
        }
    }

    render() {
        this.initStyle();

        return (
        <View 
            style={[styles.container, {
                backgroundColor: this.backgroundColor, 
                borderRadius: this.borderRadius,
                padding: this.padding,
                marginBottom: this.marginBottom,
                marginTop: this.marginTop
            }]}
        >
            {this.props.children}
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        elevation: 10
    }
})
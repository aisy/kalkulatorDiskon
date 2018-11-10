import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'

export default class componentName extends Component {
  label = "Label"
  maxLength = null
  labelTextColor = "#CEC0CC"
  colorText = "#fff"
  underlineColor = "black"
  rightText = ""
  leftText = ""
  width = "100%"

  constructor(props) {
    super(props)
    // this.state = {
       
    // }
    this.onChange = this.onChange.bind(this)
  }
  

  initstyle = () =>{
    if(this.props.label != null || this.props.label !== undefined){
      this.label = this.props.label
    }
    if(this.props.maxLength != null || this.props.maxLength !== undefined){
      this.maxLength = this.props.maxLength
    }
    if(this.props.labelTextColor != null || this.props.labelTextColor !== undefined){
      this.labelTextColor = this.props.labelTextColor
    }
    if(this.props.colorText != null || this.props.colorText !== undefined){
      this.colorText = this.props.colorText
    }
    if(this.props.underlineColor != null || this.props.underlineColor !== undefined){
      this.underlineColor = this.props.underlineColor
    }
    if(this.props.rightText != null || this.props.rightText !== undefined){
      this.rightText = this.props.rightText
    }
    if(this.props.leftText != null || this.props.leftText !== undefined){
      this.leftText = this.props.leftText
    }
    if(this.props.width != null || this.props.width !== undefined){
      this.width = this.props.width
    }
  }

  onChange = (value) =>{
    if(typeof this.props.onChange === "function"){
      this.props.onChange(value)
    }
  } 

  render() {
    this.initstyle();
    return (
      <View style={styles.container}>
        {this.label ? <View style={styles.label}><Text style={{fontSize: 20, fontWeight:"400", color: this.labelTextColor}}>{this.label}</Text></View> : <View></View> }
        <View style={styles.containerInput}>
          <View style={{flex:1, flexDirection: 'row', flexWrap: 'wrap', width: this.width}}>
          { this.leftText ? <View style={styles.curency}><Text style={{fontSize: 20, color: this.colorText}}>{this.leftText}</Text></View> : <View></View> }
            <View style={styles.containerText}>
              <TextInput
                underlineColorAndroid={this.underlineColor}
                maxLength={this.maxLength}
                style={[styles.textInput, {fontSize: 20, color:this.colorText}]}
                // onChange={this.onChange}
                onChangeText={this.onChange}
              />
            </View>
            { this.rightText ? <View style={styles.curency}><Text style={{fontSize: 20, color: this.colorText}}>{this.rightText}</Text></View> : <View></View> }
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container :{
    width: "100%",
    marginBottom: 20,
  },
  label:{
    marginLeft: 2
  },
  containerInput : {
    width: "100%",
    marginBottom: 50,
  },
  curency:{
    marginLeft: 4,
    top: 10
  },
  containerText:{
    width: "80%"
  },
  textInput:{
    height: 45
  }
})
import React, { Component } from 'react'
import { Text, View, Picker } from 'react-native'

export default class Picker extends Component {
   param = [
       {label:"10%", value=(50/100)},
       {label:"20%", value=(50/100)},
       {label:"30%", value=(50/100)},
   ]

  render() {
    return (
      <View>
          <Picker
            selectedValue={this.state.language}
            style={{ height: 50, width: 100 }}
            onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}
        >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
    )
  }
}
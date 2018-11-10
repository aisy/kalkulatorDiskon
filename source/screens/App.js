import React, {Component} from 'react';
import {StyleSheet, Text, View, Keyboard, TouchableWithoutFeedback} from 'react-native';

import Header from '../components/HeaderApp.js'
import InputText from '../components/InputText';
import Card from '../components/Card'

const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)

export default class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       inputPrice:0,
       discount:0,
       notification: false
    }
    this.handlePrice = this.handlePrice.bind(this)
    this.handleDiscount = this.handleDiscount.bind(this)
  }

  handlePrice =(newValue)=>{
    this.setState({inputPrice: newValue})
  }

  handleDiscount =(newValue)=>{
    this.setState({discount: newValue})
  }

  MoneyCurency = (number) =>{
      var num = parseFloat( number ); //convert to float  
      //default values  
      decimalSeparator = ',';  
      thousandsSeparator = '.';  
      nDecimalDigits = 2;  

      var fixed = num.toFixed(nDecimalDigits); //limit or add decimal digits  
      //separate begin [$1], middle [$2] and decimal digits [$4]  
      var parts = new RegExp('^(-?\\d{1,3})((?:\\d{3})+)(\\.(\\d{' + nDecimalDigits + '}))?$').exec(fixed);   

      if(parts){ //num >= 1000 || num < = -1000  
          return 'Rp. '+parts[1] + parts[2].replace(/\d{3}/g, thousandsSeparator + '$&') + (parts[4] ? decimalSeparator + parts[4] : '');  
      }else{  
          return 'Rp. '+fixed.replace('.', decimalSeparator);  
      }  
  }


  render() {
    // count
    let PriceAfter = ((this.state.discount/100)*this.state.inputPrice);
    let PriceMustPay = this.state.inputPrice - PriceAfter;

    return (
      <DismissKeyboard>
        <View style={{backgroundColor: "#efefef"}}>
        <Header/>
        <View style={styles.container}>

          <Card
            backgroundColor={"#fff"}
            padding={20}
          >
            <InputText
              label={"Harga Asli"}
              maxLength={12}
              leftText={"Rp."}
              labelTextColor={"#CEC0CC"}
              colorText={"#3A3A3A"}
              underlineColor={"#CEC0CC"}
              onChange={this.handlePrice}
            />
            <InputText
              label={"Diskon"}
              maxLength={12}
              rightText={"%"}
              labelTextColor={"#CEC0CC"}
              colorText={"#3A3A3A"}
              underlineColor={"#CEC0CC"}
              width={"40%"}
              maxLength={3}
              onChange={this.handleDiscount}
            />
          </Card>

          { this.state.inputPrice >0 && this.state.discount >0 ? 
            <Card 
              backgroundColor={"#72e278"}
              padding={20}
              marginTop={20}
              marginBottom={20}
            >
              <View style={styles.confirmationCard}>
                <View style={styles.cardContainer}>
                  <Text style={styles.headerText}>Harga Setelah Diskon</Text>
                  <View style={styles.resultText}>
                    <Text style={styles.textResult}>{this.MoneyCurency(PriceAfter)}</Text>
                  </View>
                </View>

                <View style={styles.cardContainer}>
                  <Text style={styles.headerText}>Hemat</Text>
                  <View style={styles.resultText}>
                    <Text style={styles.textResult}>{this.MoneyCurency(PriceMustPay)}</Text>
                  </View>
                </View>
                
              </View>
            </Card>
            : <View></View>
          }

        </View>
        </View>
      </DismissKeyboard>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  confirmationCard:{
    alignContent:"center", 
    alignItems:"center"
  },
  cardContainer:{
    flexWrap: "wrap", 
    flexDirection:"column", 
    marginBottom:10
  },
  headerText:{
    color: "#fff", 
    fontWeight:"bold", 
    fontSize: 28, 
    fontWeight:"bold", 
    marginBottom: 5
  },
  resultText:{
    alignContent:"center", 
    alignItems:"center"
  },
  textResult:{
    color: "#3baf4a", 
    fontSize: 25, 
    fontWeight:"400"
  }
});

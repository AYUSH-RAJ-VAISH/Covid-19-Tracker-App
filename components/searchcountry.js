import React from "react";
import { View, Text,StyleSheet,StatusBar,Image,TextInput,ScrollView,Dimensions,ActivityIndicator,Linking  } from "react-native";
import { Card,Title,Searchbar,Button  } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {LineChart} from "react-native-chart-kit";


export default class SearchCountry extends React.Component {
	 state={
    searchQuery: 'India',
    country: 'NA',
    cases:'0',
    todayCases:'0',
    deaths:'0',
    todayDeaths:'0',
    recovered:'0',
    todayRecovered:'0',
    active:'0',
    tests:'0'
  };
  
  getWeather(country)
  {
    this.setState({ country })
  fetch('https://corona.lmao.ninja/v2/countries/'+country)
    .then(res=>res.json())
    .then(response=>{
      this.setState({
    country: response.country,
    cases: response.cases,
    todayCases: response.todayCases,
    deaths: response.deaths,
    todayDeaths: response.todayDeaths,
    recovered: response.recovered,
    active: response.active,
    tests: response.tests
      })
      })
}
componentDidMount(){
  this.getWeather('India')
}

  render() {
    const { searchQuery } = this.state.searchQuery;
    if(this.state.isLoading){
      return(
        <View style={styles.container}>
        <ActivityIndicator style={{justifyContent:'center',alignItems:'center',color:'#fff'}}/>
        </View>
        )
    }
    else{
    return (
      <View style={styles.container}>
       <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#000" translucent = {true}/>
       <ScrollView>
       <View style={styles.img}>
       <Text style={styles.text}>COUNTRYWISE COVID COUNT</Text>
   <Image
        style={styles.tinyLogo}
        source={require('../assets/covid-4.jpg')}
      />
      </View>
  <Searchbar
        placeholder="Search Country"
        onChangeText={country=> this.getWeather(country)}
        value={searchQuery}
        style={styles.search}
      />
  <Card style={{margin:20}}>
      <View style={{padding:20,backgroundColor:'#000'}}>

      <Title style={styles.text}>Country:{this.state.country}</Title>
      <Title style={styles.text}>Total Cases:{this.state.cases}</Title>
      <Title style={styles.text}>Cases Of Today:{this.state.todayCases}</Title>
      <Title style={styles.text}>Total Deaths:{this.state.deaths}</Title>
      <Title style={styles.text}>Deaths Today:{this.state.todayDeaths}</Title>
      <Title style={styles.text}>Total Recovered:{this.state.recovered}</Title>
      <Title style={styles.text}>Total Active:{this.state.active}</Title>
      <Title style={styles.text}>Total Tests:{this.state.tests}</Title>
      </View>

      </Card>
      <View style={styles.img}>
      <Image
        style={{height:400,width:400}}
        source={require('../assets/covid-6.jpg')}
      />
      </View>
      <View style={styles.img}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/covid-2.png')}
      />
      </View>
      <View style={styles.line} />
      <View style={{flexDirection: "row",justifyContent: "center",alignItems:'center'}}>
      <Text style={styles.text1}>Developed By</Text>
     <Text style={styles.text1}>Ayush Raj Vaish</Text>
     </View>
      <View style={{flexDirection: "row",justifyContent: "center",alignItems:'center'}}>
      <Text style={styles.text1}>Contact Me:</Text>
     <Text style={styles.text1}>6388515213  /</Text>
     </View>
      <View style={{flexDirection: "row",justifyContent: "center",alignItems:'center',margin:10}}>
      <Icon name='whatsapp' onPress={() => Linking.openURL('whatsapp://send?text=Hi,Your name &phone=+your phone no')} color='#fff' size={20} />
     <Icon name='envelope' onPress={() => Linking.openURL('https://your email id')} color='#fff' style={{marginLeft:20}} />
     <Icon name='facebook' onPress={() => Linking.openURL('https://your facebooklink')} color='#fff' size={20} style={{marginLeft:20}}/>
     <Icon name='instagram' onPress={() => Linking.openURL('https://your instagram link')} color='#fff' size={20} style={{marginLeft:20}}/>
     <Icon name='linkedin' onPress={() => Linking.openURL('https://your linkedin link')} color='#fff' size={20} style={{marginLeft:20}}/>
     </View>
</ScrollView>
      </View>
    );
  }
}
}




const styles=StyleSheet.create({
  container:{
    backgroundColor:'#000',
    flex:1,
  },
  text:{
    textAlign:'center',
    color:'#fff',
    margin:15,
    fontSize:22,
    fontWeight:'bold'
  },
  text1:{
    color:'#fff',
    margin:5,
    fontSize:16,
    fontWeight:'bold'
  },
  search:{
    backgroundColor:'#fff',
    marginTop:60,
    margin:15,
    borderRadius:30
  },
  img:{
    alignItems:'center',
    marginTop:50
  },
  tinyLogo:{
    height:190,
    width:380,
  },
  line:{
    borderWidth:1,
    borderColor:'#fff',
    marginTop:10
  },
});
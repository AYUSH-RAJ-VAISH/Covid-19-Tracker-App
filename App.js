// In App.js in a new project

import React from "react";
import { View, Text,StyleSheet,StatusBar,Image,ScrollView,Dimensions,Linking,ActivityIndicator } from "react-native";
const screenWidth = Dimensions.get("window").width;
import { createBottomTabNavigator, createAppContainer  } from "react-navigation";
import { Card,Title,Searchbar,Button  } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchCountry from "./components/searchcountry";
import SearchCity from "./components/searchcity";
import SearchArea from "./components/searcharea";

class World extends React.Component {
  state={
    isLoading:true,
    country: 'NA',
    cases:'0',
    todayCases:'0',
    deaths:'0',
    todayDeaths:'0',
    recovered:'0',
    todayRecovered:'0',
    active:'0',
    tests:'0'
  }
  getWeather(){
  fetch('https://corona.lmao.ninja/v2/all')
    .then(res=>res.json())
    .then(response=>{
      this.setState({
        isLoading:false,
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
  this.getWeather()
}

  render() {
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
       <Text style={styles.text}>WELCOME TO WORLD COVID TRACKER</Text>
   <Image
        style={styles.tinyLogo}
        source={require('./assets/covid-3.jpg')}
      />
      </View>
  <Card style={{margin:20}}>
      <View style={{padding:20,backgroundColor:'#000'}}>

      <Title style={styles.text}>Global Cases : {this.state.cases}</Title>
      <Title style={styles.text}>Cases Of Today : {this.state.todayCases}</Title>
      <Title style={styles.text}>Total Deaths : {this.state.deaths}</Title>
      <Title style={styles.text}>Deaths Today : {this.state.todayDeaths}</Title>
      <Title style={styles.text}>Total Recovered : {this.state.recovered}</Title>
      <Title style={styles.text}>Total Active : {this.state.active}</Title>
      <Title style={styles.text}>Total Tests : {this.state.tests}</Title>
      </View>

      </Card>
       <View style={styles.line} />
      <View style={styles.img}>
      <Text style={styles.text}>ABOUT CORONAVIRUS</Text>
      <Image
        style={styles.tinyLogo}
        source={require('./assets/covid-5.jpg')}
      />
      <Image
        style={styles.tinyLogo}
        source={require('./assets/covid-1.jpg')}
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




const TabNavigator = createBottomTabNavigator({
  "Global": World,
  "CountryWise": SearchCountry,
  "StateWise":SearchCity
},
{
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Global') {
          iconName = 'md-globe'
        } else if (routeName === 'CountryWise') {
          iconName = 'md-cloud';
        }
        else if (routeName === 'StateWise') {
          iconName = 'md-cloud';
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#e15f41',
      inactiveTintColor: '#fff',
      activeBackgroundColor:'#1e272e',
      inactiveBackgroundColor:'#1e272e'
    },
  }
);

export default createAppContainer(TabNavigator);

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
    marginTop:50,
    margin:30,
    borderRadius:30
  },
  img:{
    alignItems:'center',
    marginTop:50
  },
  tinyLogo:{
    margin:10,
    height:300,
    width:400
  },
  line:{
    borderWidth:1,
    borderColor:'#fff',
    marginTop:10
  },
});
import React from "react";
import { View, Text,StyleSheet,ScrollView,ActivityIndicator,Linking } from "react-native";
import { Card,Title,Searchbar  } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class SearchCity extends React.Component {
	 state = {
    searchQuery: 'Lucknow',
    data:[]
  };


getWeather()
{
  fetch('https://api.covid19india.org/data.json')
    .then(res=>res.json())
    .then(response=>{
      this.setState({
        data:response.statewise
   })
  })
};

  componentDidMount(){
  this.getWeather()
}
  render(){ 
  if(this.state.isLoading){
      return(
        <View style={styles.container}>
        <ActivityIndicator style={{justifyContent:'center',alignItems:'center',color:'#fff'}}/>
        </View>
        )
    }
    else{
    let ct= this.state.data.map((val,key)=>{
        return(
          <View style={styles.card3} key={key}>
          <Text style={styles.text1}>{val.state}</Text>
          <Text style={styles.text}>{val.active}</Text>
          <Text style={styles.text}>{val.confirmed}</Text>
          <Text style={styles.text}>{val.deaths}</Text>
          <Text style={styles.text}>{val.recovered}</Text>
          </View>
          );
    })
    return (
      <View style={styles.container}>
      <ScrollView>
      <View style={{marginTop:50,}}>
      <Text style={{color:'#fff',textAlign:'center',fontSize:25}}>StateWise Covid Count Of India</Text>
      </View>
      <View style={styles.card1}>
      <Text style={styles.text1}>States</Text>
      <Text style={styles.text}>Active</Text>
      <Text style={styles.text}>Confirmed</Text>
      <Text style={styles.text}>Deaths</Text>
      <Text style={styles.text}>Recovered</Text>
      </View>
      <View style={styles.card2}>
        {ct}
      </View>
      <View style={styles.line} />
      <View style={{flexDirection: "row",justifyContent: "center",alignItems:'center'}}>
      <Text style={styles.text2}>Developed By</Text>
     <Text style={styles.text2}>Ayush Raj Vaish</Text>
     </View>
      <View style={{flexDirection: "row",justifyContent: "center",alignItems:'center'}}>
      <Text style={styles.text2}>Contact Me:</Text>
     <Text style={styles.text2}>6388515213  /</Text>
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
  text1:{
    textAlign:'center',
     width:100,
    color:'#fff',
    margin:2,
    fontSize:13,
    fontWeight:'bold'
  },
  text:{
    textAlign:'center',
     width:63,
    color:'#fff',
    margin:2,
    fontSize:13,
    fontWeight:'bold'
  },
  text2:{
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
    height:200,
    width:200,
  },
  card1:{
    height:70,
    flex: 1, 
    flexDirection: 'row',
    marginTop:50
  },
   card3:{
    height:50,
    flex: 1, 
    flexDirection: 'row',
  },
  line:{
    borderWidth:1,
    borderColor:'#fff'
  },
});
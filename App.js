import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

let timer = null;
let ss = 0;
let mm = 0;
let hh = 0;



function App(){
const [numero, setNumero] = useState(0);
const [botao, setBotao] = useState('vai');
const [ultimo, setUltimo] = useState(null)


  function vai(){
    if (timer !== null){
      clearInterval(timer);
      timer = null;
      setBotao('Vai');

    }
    else{
      timer = setInterval(() =>{
        ss++;

        if( ss == 60){
          ss = 0;
          mm++;
        }
        if( mm == 60){
          mm = 0;
          hh++;
        }

        let format = 
        (hh < 10 ? '0' + hh : hh) + ':'
        + (mm < 10 ? '0' + mm : mm) + ':'
        +(ss < 10 ? '0' + ss : ss)

        setNumero(format);

      },1000);
      setBotao('Stop');

    }
  }
function limpar(){
  if(timer !== null){
    clearInterval(timer);
    timer = null;

  }
setUltimo(numero);
setNumero(0);
ss = 0;
mm = 0;
hh = 0;
setBotao('vai');

}


  return(



    <View style={styles.container}>
      <Image
      style={styles.img}
      source={require('./src/crono.png')}
      />
      <Text style={styles.timer}>
       { numero }
      </Text>
      <View style={styles.btnarea}>
          <TouchableOpacity style={styles.btn} onPress={ vai }>
            <Text style={styles.txt}>
               {botao}
           </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={ limpar } >
            <Text style={styles.txt}>
              Limpar
           </Text>
          </TouchableOpacity>
        </View>   
      <View style={styles.ultimotempo}>
        <Text style={styles.textoCorrida}> 
        { ultimo ? 'ultimo tempo: ' + ultimo : ''}
        </Text>
      </View>  

    </View>
  )
}
const styles = StyleSheet.create({
container:{
  flex:1,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor: '#00aeef'
},
img:{
  marginTop: -70
},
timer:{
  color:'white',
  fontSize: 30,
  fontWeight:'bold',
  marginTop: -150
}, 
btnarea:{
  flexDirection:'row',
  marginTop: 170,
  height: 40,
  
},
btn: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  height: 40,
  margin: 17,
  borderRadius: 9
},
txt:{
  fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
},
ultimotempo:{
  margin: 40

},
textoCorrida:{
  fontSize:25,
  color:'#fff',
  fontStyle:'italic'
}

})

export default App;
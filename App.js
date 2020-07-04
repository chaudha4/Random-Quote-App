import React from 'react';

import {
  useState,
  useRef,
  useEffect
} from 'react';

import {
  Button,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import {
  styles,
} from './Styles';

export default function App() {

  console.log("Entering function App");

  const [quote, setQuote] = useState([]);
  const [db, setDb] = useState(0);

  // Similar to instance variable in a class. Essentially, useRef 
  // is like a “box” that can hold a mutable value in its .current property.

  const indx = useRef(1);
  const myTimer = useRef(null);

  /**
   * Similar to componentDidMount and componentDidUpdate.
   * 
   * Warning:  The effect hook runs when the component mounts 
   * but also when the component updates. Because we are setting 
   * the state after every data fetch, the component updates and 
   * the effect runs again. It fetches the data again and again. 
   * That's a bug and needs to be avoided. We only want to fetch 
   * data when the component mounts. That's why you can provide 
   * an empty array as second argument to the effect hook to avoid 
   * activating it on component updates but only for the 
   * mounting of the component.
   */

  useEffect(() => {
    console.log("fetch");
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(JSON.stringify(data));
        setDb(data); // Data is an array of structure that conatins text and author
        setQuote(data[0]); // Init the quotes to the first element
      });
  }, []);

  const getNewQuote = () => {
    setQuote(db[indx.current]); // Access the current value and then increment it.

    indx.current = (indx.current < db.length - 1) ? indx.current + 1 : 0;

    console.log("Index is now %s and max is %s", indx.current, db.length);
  }

  const playQuote = () => {
    myTimer.current = setInterval(() => {
      getNewQuote();
    }, 1000)
  }

  const stopQuote = () => {
    clearInterval(myTimer.current);
  }

  const butttonStyle = {
    backgroundColor: 'grey', alignItems: 'center', padding: 10,
    justifyContent: 'center', borderRadius: 15, margin: 2
  };

  const titleStyle = {
    alignItems: 'center', padding: 10, fontSize: 40,
    justifyContent: 'center', borderRadius: 15, margin: 2, 
    textAlign: 'center',
  };  

  const quoteStyle = {
    alignItems: 'center', padding: 20, fontSize: 20,
    justifyContent: 'center', borderRadius: 15, marginTop: 20,
    color: "black", textAlign: 'center',
  };  

  const authStyle = {
    padding: 2, fontSize: 15,
    textAlign: 'right', borderRadius: 15, marginBottom: 20,
    color: "grey", textShadowColor: "black", textShadowRadius: 5,
    textAlign: 'center',
  };  

  return ( 
    < View style={styles.container} >

      <Text style={{...titleStyle}} >
        Random Quote {"\n"}Generator
      </Text>

      <Text style={{...quoteStyle}}>
        "{quote.text}"
      </Text>

      <Text style={{...authStyle}} >
        {quote.author ? quote.author : "Anonymous"}
      </Text>

      < View style={styles.buttonContainer} >
        <TouchableOpacity onPress={getNewQuote}>
          <View style={{...butttonStyle}}>
            <Text style={{ color: 'white' }}>Get a new Quote</Text>
          </View>
        </TouchableOpacity>
      </View>

      < View style={styles.buttonContainer} >
        <TouchableOpacity onPress={playQuote}>
          <View style={{...butttonStyle}}>
            <Text style={{ color: 'white' }}>Play</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={stopQuote}>
          <View style={{...butttonStyle}}>
            <Text style={{ color: 'white' }}>Stop</Text>
          </View>
        </TouchableOpacity>
      </View>

      <StatusBar barStyle="dark-content"
        hidden={false} backgroundColor="#00BCD4"
        translucent={true} />

    </View>
  );
}
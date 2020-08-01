import React, { useEffect, useState } from 'react'
import { View, Text,StyleSheet, Image } from 'react-native'
import axios from 'axios'

const UpcomingMovies = () => { 
    const [movie,setMovie] = useState('');
    const a = async ()=>{
        try{
           const response1 = await axios.get(`http://www.omdbapi.com/?t=illusion&apikey=1d5d95fa`)
           setMovie(response1.data)
        }catch(e)
        {
           Promise.reject(e)
        }
    }
    useEffect(()=>{
        a();
     },[])
    return (
        <View style={styles.screen} >
            <Text style={{...styles.text,fontSize:20,fontWeight:'bold'}}>{movie.Title}</Text>
            <Text style={styles.text}>IMDB Rating:{movie.imdbRating}</Text>
            <Image 
            style={styles.image}
            source={{uri : movie.Poster}} />
            <Text style={{...styles.text,fontSize:18,fontWeight:'bold'}}>Plot </Text>
            <Text style={{textAlign:'center',marginHorizontal:10}}>{movie.Plot}</Text>
        </View>

    )
}

const styles=StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center' 
    },
    image:{
        width:'80%',
        height:'60%',
        marginTop:15
    },
    text:{
        marginTop:5,
        fontSize:15
    }
})

export default UpcomingMovies

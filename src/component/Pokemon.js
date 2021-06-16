import React from 'react';
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/styles';

export default function Pokemon(props){
    const useStyles = makeStyles((theme)=>({
   paper:{
    height: 400,
    width: 300,
   }
 })) 
 const classes = useStyles();

    return (
        <div>
            <Paper className={classes.paper}>
                <p>{props.name}</p>
                <img src="https://pokeapi.co/api/v2/pokemon/1/"/>
            </Paper>
        </div>
    )
}
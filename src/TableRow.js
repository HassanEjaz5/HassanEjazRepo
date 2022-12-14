import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { data2 } from "./Data";
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    // alignItems: "center",
    border: "1px solid black",
    padding: 5,
    fontSize: '10px',
    width: '100%'
  },
  mainHeading: {
    width: '100%',
    fontSize: '14px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems:'flex-start',
    // justifyContent: 'flex-start',
    border: '1px solid black',
    flexDirection: 'row',
    padding: 5
  },
  subHeading: {
    width: "20%",
    fontSize: '10px',
    fontWeight: 'bold'
  },
  description: {
    width: '20%',
    padding: 5,
    margin: 0,
    borderRight: '1px solid black',
    border: '1px solid black',
    


  },
  item1:{
    // border: '1px solid black',
    // paddingRight: 20,
    paddingLeft: "20px",
    width: "45%"
  },
  item2:{
    // border: '1px solid black',
    paddingRight: 20,
    // paddingLeft: "0px",
    width: "35%"
  },
});

const TableRow = ({ items }) => { 
  const rows = items.map((item, key =items.sr) => (
    item.sr === 1 ?
    <View style={styles.mainHeading}>
      <Text style={styles.item1}>{item.h1}</Text>
       <Text style={styles.item2}> {item.h2}</Text>  :
    </View>
    :
    <View style={styles.row} >
       <Text style={styles.description}>{item.month}</Text>
       <Text style={styles.description}>{item.days}</Text>
       <Text style={styles.description}>{item.avgperday}</Text>
       <Text style={styles.description}>{item.total}</Text>
       <Text style={styles.description}>{item.peakdemand}</Text>
     </View>
  ));
  return <Fragment>{rows}</Fragment>;
};

export default TableRow;
    // <View style={styles.row} >
    //   <Text style={item.sr === 1 ? styles.mainHeading : item.sr === 2 ? styles.subHeading :  styles.description}>{item.c1}</Text>
    //   <Text style={item.sr === 2 ? styles.subHeading :  styles.description}>{item.c2}</Text>
    //   <Text style={item.sr === 1 ? styles.mainHeading : item.sr === 2 ? styles.subHeading :  styles.description}>{item.c3}</Text>
    //   <Text style={item.sr === 2 ? styles.subHeading :  styles.description}>{item.c4}</Text>
    //   <Text style={item.sr === 2 ? styles.subHeading :  styles.description}>{item.c5}</Text>
    // </View>
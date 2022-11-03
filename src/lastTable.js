import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

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
    width: '30%',
    padding: 2,


  },
  item1:{
    // border: '1px solid black',
    // paddingRight: 20,
    paddingLeft: "20px",
    width: "45%"
  },
  item2:{
    // border: '1px solid black',
    // paddingRight: 20,
    // paddingLeft: "0px",
    width: "35%"
  },
});

const lastTableItem = ({ lastTable }) => {
    console.log("last table: ",lastTable)
  const rows = lastTable.map((item) => (
    <View style={styles.row} >
       <Text style={styles.description}>{item.month}</Text>
       <Text style={styles.description}>{item.days}</Text>
       <Text style={styles.description}>{item.avgperday}</Text>
     </View>
  ));
  return <Fragment>{rows}</Fragment>;
};

export default lastTableItem;
    // <View style={styles.row} >
    //   <Text style={item.sr === 1 ? styles.mainHeading : item.sr === 2 ? styles.subHeading :  styles.description}>{item.c1}</Text>
    //   <Text style={item.sr === 2 ? styles.subHeading :  styles.description}>{item.c2}</Text>
    //   <Text style={item.sr === 1 ? styles.mainHeading : item.sr === 2 ? styles.subHeading :  styles.description}>{item.c3}</Text>
    //   <Text style={item.sr === 2 ? styles.subHeading :  styles.description}>{item.c4}</Text>
    //   <Text style={item.sr === 2 ? styles.subHeading :  styles.description}>{item.c5}</Text>
    // </View>
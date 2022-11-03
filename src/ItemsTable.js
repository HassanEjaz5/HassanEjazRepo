import React from "react";
import { View, StyleSheet } from "@react-pdf/renderer";
import TableRow from "./TableRow";
import lastTable from './lastTable'
import lastTableItem from "./lastTable";
import { data2 } from "./Data";
const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 15,
    textAlign: 'center',
    marginBottom:10
  },
  container: {
    marginTop: 10,
    marginBottom: 10,

  }
});

const ItemsTable = ({ data }) => (
  <View style={styles.tableContainer}>
    {/*<TableHeader />*/}
    <View style={styles.tableContainer}>
      <TableRow  items={data.items} />
    </View>

    {/* <View style={styles.tableContainer}>
      <TableRow  items={data.items2} />
    </View>
    
    <View style={styles.tableContainer}>
      <TableRow  items={data.items2} />
    </View> */}

    {/* <View style={styles.tableContainer}>
      <lastTableItem items={data.lastTable}/>
    </View> */}

    {/* <TableRstyle= {styles.container}ow style= {styles.container} items={data.items2} /> */}
    {/* <lastTable items={data2.items} /> */}
    {/*<TableFooter items={data.items} />*/}
  </View>
);

export default ItemsTable;
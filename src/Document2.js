import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
  } from "@react-pdf/renderer";
  
  
  import {Table,
    TableBody,
    TableCell,
    TableHeader,
    DataTableCell } from "@medicaboo/react-pdf-table";

    import data from "./Data";
    import data2 from "./Data2";
import { fireEvent } from "@testing-library/react";
  // Create styles
  const styles = StyleSheet.create({
    page: {
      backgroundColor: "white",
      color: "black",
      // display: "flex",
      // flexDirection: 'column',
      // margin: 10,
      // padding: 10,
      marginRight:20,

    },
    section: {
      margin: 10,
      padding: 10,
      
    },
    item: {
      padding:3,
      textAlign: 'center'
    },
    heading: {
      paddingTop: 5,
      paddingLeft:5,
      paddingBottom:5
    },
    viewer: {
      width: window.innerWidth, //the pdf viewer will take up all of the width and height
      height: window.innerHeight,
    },
    blockHeateTable:{
      width: "70%",
      textAlign:'center',
      padding:10,
      margin:10
    },
    bhItem: {
      padding: 5
    }
  });
  
  // Create Document Component
  function Document2() {
    const {firstTable} = data2;
     const {items1} = data2;
    const {items2} = data2;
    const {items3} = data2;
    const {items4} = data2;
    console.log(items1)
    return (
      // <PDFViewer style={styles.viewer}>
      //   {/* Start of the document*/}
      //   <Document>
      //     {/*render a single page*/}
      //     <Page size="A4" style={styles.page}>
      <div style={{marginRight:"20px"}}>

            <Table
                style={styles.blockHeateTable}
                data={firstTable}
              >
                <TableHeader></TableHeader>
                    <TableBody>
                      <DataTableCell style={styles.bhItem} getContent={(i) => i.item1}/>
                      <DataTableCell style={styles.bhItem} getContent={(i) => i.item2}/>
                      
                  </TableBody>
              </Table>

          <Table
              style={styles.section}
              data={items1}
            >
                <TableHeader>
                    
                    <TableCell style={styles.heading}>
                          Meter ID  
                      </TableCell>
                      <TableCell style={styles.heading}>
                          Groung_Solar_Meter
                      </TableCell>
                </TableHeader>
                  <TableBody>
                    <DataTableCell style={styles.item} getContent={(i) => i.month}/>
                    <DataTableCell style={styles.item} getContent={(i) => i.days}/>
                    <DataTableCell style={styles.item} getContent={(i) => i.avgperday}/>
                    <DataTableCell style={styles.item} getContent={(i) => i.total}/>
                    <DataTableCell style={styles.item} getContent={(i) => i.peakdemand}/>
                    
                </TableBody>
            </Table>

            <Table
                style={styles.section}
                data={items2}
              >
                  <TableHeader>
                      <TableCell style={styles.heading}>
                          Meter ID  
                      </TableCell>
                      <TableCell style={styles.heading}>
                          Tower_Solar_DC_Meter
                      </TableCell>
                  </TableHeader>
                    <TableBody>
                      <DataTableCell style={styles.item} getContent={(i) => i.month}/>
                      <DataTableCell style={styles.item} getContent={(i) => i.days}/>
                      <DataTableCell style={styles.item} getContent={(i) => i.avgperday}/>
                      <DataTableCell style={styles.item} getContent={(i) => i.total}/>
                    <DataTableCell style={styles.item} getContent={(i) => i.peakdemand}/>
                  </TableBody>
              </Table>

            <Table
                style={styles.section}
                data={items3}
              >
                  <TableHeader>
                      <TableCell style={styles.heading}>
                          Meter ID  
                      </TableCell>
                      <TableCell style={styles.heading}>
                        Wind_DC_Meter
                      </TableCell>
                  </TableHeader>
                    <TableBody>
                      <DataTableCell style={styles.item} getContent={(i) => i.month}/>
                      <DataTableCell style={styles.item} getContent={(i) => i.days}/>
                      <DataTableCell style={styles.item} getContent={(i) => i.avgperday}/>
                      <DataTableCell style={styles.item} getContent={(i) => i.total}/>
                    <DataTableCell style={styles.item} getContent={(i) => i.peakdemand}/>
                      
                  </TableBody>
              </Table>
            <Table
                style={styles.section}
                data={items4}
              >
                  <TableHeader>
                      <TableCell style={styles.heading}>
                          Meter ID  
                      </TableCell>
                      <TableCell style={styles.heading}>
                      Generator Combined
                      </TableCell>
                  </TableHeader>
                    <TableBody>
                      <DataTableCell style={styles.item} getContent={(i) => i.month}/>
                      <DataTableCell style={styles.item} getContent={(i) => i.days}/>
                      <DataTableCell style={styles.item} getContent={(i) => i.avgperday}/>
                      <DataTableCell style={styles.item} getContent={(i) => i.total}/>
                    <DataTableCell style={styles.item} getContent={(i) => i.peakdemand}/>
                      
                  </TableBody>
              </Table>
          
            {/* <Table
                style={styles.blockHeateTable}
                data={lastTable}
              >
                <TableHeader></TableHeader>
                    <TableBody>
                      <DataTableCell style={styles.bhItem} getContent={(i) => i.item1}/>
                      <DataTableCell style={styles.bhItem} getContent={(i) => i.item2}/>
                      
                  </TableBody>
              </Table> */}
            </div>
      //     </Page>
      //   </Document>
      // </PDFViewer>
    );
  }
  export default Document2;




  // data={[
  //   // {
  //   //   sr: 1,
  //   //   h1: "Meter ID",
  //   //   h2: "DC Load",
  //   // },
  //   {
  //     sr: 2,
  //     month: "Month & Year",
  //     days: "No. of Days",
  //     avgperday: "Avg/Day(kWh)",
  //     total: "Total",
  //     peakdemand: "Peak Demand",
  //   },
  //   {
  //     sr: 3,
  //     month: "Sep-22",
  //     days: "1",
  //     avgperday: "47",
  //     total: "--",
  //     peakdemand: "14",
  //   },
  //   {
  //     sr: 4,
  //     month: "May-22",
  //     days: "15",
  //     avgperday: "230",
  //     total: "455",
  //     peakdemand: "455",
  //   },
  //   {
  //     sr: 5,
  //     month: "June-22",
  //     days: "15",
  //     avgperday: "230",
  //     total: "988",
  //     peakdemand: "988",
  //   },
  // ]}
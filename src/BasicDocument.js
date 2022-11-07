import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";


import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  DataTableCell
} from "@medicaboo/react-pdf-table";

import data from "./Data";
// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    color: "black",
    // display: "flex",
    // flexDirection: 'column',
    // margin: 10,
    // padding: 10,
    marginRight: 20,

  },
  section: {
    margin: 10,
    padding: 10,

  },
  item: {
    padding: 3,
    textAlign: 'center'
  },
  heading: {
    paddingTop: 5,
    paddingLeft: 5,
    paddingBottom: 5
  },
  viewer: {
    width: window.innerWidth / 5, //the pdf viewer will take up all of the width and height
    height: window.innerHeight / 5,
    // width: "80%", //the pdf viewer will take up all of the width and height
    // height: "80%",
  },
  blockHeateTable: {
    width: "70%",
    textAlign: 'center',
    padding: 10,
    margin: 10
  },
  bhItem: {
    padding: 5
  }
});

// Create Document Component
function BasicDocument() {
  const { firstTable } = data;
  const { items } = data;
  const { items2 } = data;
  const { lastTable } = data;
  items.map((i) => {
    console.log(i.h1)

  })
  return (
    // <PDFViewer style={styles.viewer}>
    //   {/* Start of the document*/}
    //   <Document>
    //     {/*render a single page*/}
    //     <Page size="A4" style={styles.page}>
    <div style={{ marginRight: "20px" }}>
      <Table
        style={styles.blockHeateTable}
        data={firstTable}
      >
        <TableHeader></TableHeader>
        <TableBody>
          <DataTableCell style={styles.bhItem} getContent={(i) => i.item1} />
          <DataTableCell style={styles.bhItem} getContent={(i) => i.item2} />

        </TableBody>
      </Table>
      <Table
        style={styles.section}
        data={items}
      >
        <TableHeader>
          <TableCell style={styles.heading}>
            Meter ID
          </TableCell>
          <TableCell style={styles.heading}>
            DC Load
          </TableCell>

        </TableHeader>
        <TableBody>
          <DataTableCell style={styles.item} getContent={(i) => i.month} />
          <DataTableCell style={styles.item} getContent={(i) => i.days} />
          <DataTableCell style={styles.item} getContent={(i) => i.avgperday} />
          <DataTableCell style={styles.item} getContent={(i) => i.total} />
          <DataTableCell style={styles.item} getContent={(i) => i.peakdemand} />

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
            DC Load
          </TableCell>
        </TableHeader>
        <TableBody>
          <DataTableCell style={styles.item} getContent={(i) => i.month} />
          <DataTableCell style={styles.item} getContent={(i) => i.days} />
          <DataTableCell style={styles.item} getContent={(i) => i.avgperday} />
          <DataTableCell style={styles.item} getContent={(i) => i.total} />
          <DataTableCell style={styles.item} getContent={(i) => i.peakdemand} />
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
            Total Site Load(AC+DC)
          </TableCell>
        </TableHeader>
        <TableBody>
          <DataTableCell style={styles.item} getContent={(i) => i.month} />
          <DataTableCell style={styles.item} getContent={(i) => i.days} />
          <DataTableCell style={styles.item} getContent={(i) => i.avgperday} />
          <DataTableCell style={styles.item} getContent={(i) => i.total} />
          <DataTableCell style={styles.item} getContent={(i) => i.peakdemand} />
        </TableBody>
      </Table>

      <Table
        style={styles.blockHeateTable}
        data={lastTable}
      >
        <TableHeader></TableHeader>
        <TableBody>
          <DataTableCell style={styles.bhItem} getContent={(i) => i.item1} />
          <DataTableCell style={styles.bhItem} getContent={(i) => i.item2} />

        </TableBody>
      </Table>
    </div>
    //     </Page>
    //   </Document>
    // </PDFViewer>
  );
}
export default BasicDocument;




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
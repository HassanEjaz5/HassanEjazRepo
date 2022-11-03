import React from "react";
import { Page, Document, StyleSheet, PDFViewer, View, Text, Image } from "@react-pdf/renderer";
import ItemsTable from "./ItemsTable";

const styles = StyleSheet.create({
  page: {
    fontSize: 11,
    flexDirection: "column",
    padding: 10,
    margin: 10
    },
    viewer: {
        width: window.innerWidth,
        height: window.innerHeight,
    },
    mainHeading: {
        textAlign: 'center',
        fontSize: '16px',
        fontWeight: 'bold',
        marginBottom: 40,
        marginTop: 10,
        alignItems: 'center'
    },
    logo: {
        marginTop: 15,
        paddingRight: 20,
        paddingLeft: 20,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // padding: 20
    },
    item3: {
        display: 'flex',
        flexDirection: 'column',
        padding: 20,
        fontSize: '12px'

    },
    image: {
        width: 60,
        // height: 20
    }
});

const Table = ({ data }) => (
    <PDFViewer style={styles.viewer}>
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                    <View style={styles.logo}>
                        
                            <Image style={styles.image} src="plclogopng.png" alt="logo"/>
                    </View>
                    <View style={styles.mainHeading}>
                        <Text >
                            Energy Consumption Report
                        </Text>

                    </View>
                    <View style={styles.item3}>
                        <Text>
                            Cogeco Lire
                        </Text>
                        <Text>
                            New York, NY, 10025
                        </Text>
                    </View>
                </View>
                <ItemsTable data={data} style={styles.table} />
                {/* <ItemsTable data={data} style={styles.table}/> */}
                {/* <ItemsTable data={data} style={styles.table}/> */}
            
            </Page>
        </Document>
    </PDFViewer>
);

export default Table;
import './App.css';
import React, { Component, Fragment } from "react";
import BasicDocument from './BasicDocument';
import { PDFViewer } from "@react-pdf/renderer";
import Table from "./Table";
import data from "./Data";

function App() {
  return (
    <div >
      {/* <BasicDocument/> */}
      <Fragment>
            <Table data={data} />
            <Table data={data} />
      </Fragment>
    </div>
  );
}

export default App;

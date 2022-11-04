import './App.css';
import React, { Component, Fragment } from "react";
import BasicDocument from './BasicDocument';
import { PDFViewer } from "@react-pdf/renderer";
import Table from "./Table";
import data from "./Data";
import Table2 from './Table2';

function App() {
  return (
    <div >
      {/* <BasicDocument/> */}
      <Fragment>
            <Table />
            <Table2 />
      </Fragment>
    </div>
  );
}

export default App;

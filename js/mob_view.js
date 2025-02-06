let treeObj;
var showColumns = [];
var updatedColumns = [];
let gridData = [
  {
    "OrderID": 110248,
    "CustomerID": 1001,
    "CustomerName": "VINET",
    "OrderDate": new Date(2025, 0, 1),
    "ShippedDate": new Date(2025, 0, 3),
    "Freight": 32.38,
    "ShipName": "Vins et alcools Chevalier",
    "ShipAddress": "59 rue de l'Abbaye",
    "ShipCity": "Reims",
    "ShipRegion": null,
    "ShipCountry": "France",
    "Year": 2000,
    "Salary": 30000,
    "Feedback": "Good",
    "Status": "Delivered"
  },
  {
    "OrderID": 110249,
    "CustomerID": 1002,
    "CustomerName": "TOMSP",
    "OrderDate": new Date(2025, 0, 2),
    "ShippedDate": new Date(2025, 0, 4),
    "Freight": 11.61,
    "ShipName": "Toms Spezialitäten",
    "ShipAddress": "Luisenstr. 48",
    "ShipCity": "Münster",
    "ShipRegion": null,
    "ShipCountry": "Germany",
    "Year": 2001,
    "Salary": 25000,
    "Feedback": "Average",
    "Status": "Delivered"
  },
  {
    "OrderID": 110250,
    "CustomerID": 1003,
    "CustomerName": "HANAR",
    "OrderDate": new Date(2025, 0, 6),
    "ShippedDate": new Date(2025, 0, 8),
    "Freight": 65.83,
    "ShipName": "Hanari Carnes",
    "ShipAddress": "Rua do Paço, 67",
    "ShipCity": "Rio de Janeiro",
    "ShipRegion": "RJ",
    "ShipCountry": "Brazil",
    "Year": 2002,
    "Salary": 35000,
    "Feedback": "Poor",
    "Status": "Delivered"
  },
  {
    "OrderID": 110251,
    "CustomerID": 1004,
    "CustomerName": "VICTE",
    "OrderDate": new Date(2025, 0, 3),
    "ShippedDate": new Date(2025, 0, 5),
    "Freight": 41.34,
    "ShipName": "Victuailles en stock",
    "ShipAddress": "2, rue du Commerce",
    "ShipCity": "Lyon",
    "ShipRegion": null,
    "ShipCountry": "France",
    "Year": 2003,
    "Salary": 35000,
    "Feedback": "-",
    "Status": "In-progress"
  },
  {
    "OrderID": 110252,
    "CustomerID": 1005,
    "CustomerName": "SUPRD",
    "OrderDate": new Date(2025, 0, 10),
    "ShippedDate": new Date(2025, 0, 12),
    "Freight": 51.3,
    "ShipName": "Suprêmes délices",
    "ShipAddress": "Boulevard Tirou, 255",
    "ShipCity": "Charleroi",
    "ShipRegion": null,
    "ShipCountry": "Belgium",
    "Year": 2004,
    "Salary": 40000,
    "Feedback": "-",
    "Status": "In-progress"
  },
  {
    "OrderID": 110253,
    "CustomerID": 1006,
    "CustomerName": "HANAR",
    "OrderDate": new Date(2025, 0, 14),
    "ShippedDate": new Date(2025, 0, 15),
    "Freight": 58.17,
    "ShipName": "Hanari Carnes",
    "ShipAddress": "Rua do Paço, 67",
    "ShipCity": "Rio de Janeiro",
    "ShipRegion": "RJ",
    "ShipCountry": "Brazil",
    "Year": 2005,
    "Salary": 35000,
    "Feedback": "-",
    "Status": "In-progress"
  },
  {
    "OrderID": 110254,
    "CustomerID": 1007,
    "CustomerName": "CHOPS",
    "OrderDate": new Date(2025, 0, 11),
    "ShippedDate": new Date(2025, 0, 13),
    "Freight": 22.98,
    "ShipName": "Chop-suey Chinese",
    "ShipAddress": "Hauptstr. 31",
    "ShipCity": "Bern",
    "ShipRegion": null,
    "ShipCountry": "Switzerland",
    "Year": 2006,
    "Salary": 38000,
    "Feedback": "Perfect",
    "Status": "Delivered"
  },
  {
    "OrderID": 110255,
    "CustomerID": 1008,
    "CustomerName": "RICSU",
    "OrderDate": new Date(2025, 0, 5),
    "ShippedDate": new Date(2025, 0, 8),
    "Freight": 148.33,
    "ShipName": "Richter Supermarkt",
    "ShipAddress": "Starenweg 5",
    "ShipCity": "Genève",
    "ShipRegion": null,
    "ShipCountry": "Switzerland",
    "Year": 2007,
    "Salary": 50000,
    "Feedback": "-",
    "Status": "In-progress"
  },
  {
    "OrderID": 110256,
    "CustomerID": 1009,
    "CustomerName": "WELLI",
    "OrderDate": new Date(2025, 0, 20),
    "ShippedDate": new Date(2025, 0, 22),
    "Freight": 13.97,
    "ShipName": "Wellington Importadora",
    "ShipAddress": "Rua do Mercado, 12",
    "ShipCity": "Resende",
    "ShipRegion": "SP",
    "ShipCountry": "Brazil",
    "Year": 2008,
    "Salary": 40000,
    "Feedback": "Perfect",
    "Status": "Delivered"
  },
  {
    "OrderID": 110257,
    "CustomerID": 1010,
    "CustomerName": "HILAA",
    "OrderDate": new Date(2025, 0, 21),
    "ShippedDate": new Date(2025, 0, 24),
    "Freight": 81.91,
    "ShipName": "HILARION-Abastos",
    "ShipAddress": "Carrera 22 con Ave. Carlos Soublette #8-35",
    "ShipCity": "San Cristóbal",
    "ShipRegion": "Táchira",
    "ShipCountry": "Venezuela",
    "Year": 2009,
    "Salary": 45000,
    "Feedback": "Good",
    "Status": "Delivered"
  },
  {
    "OrderID": 110258,
    "CustomerID": 1011,
    "CustomerName": "ERNSH",
    "OrderDate": new Date(2025, 0, 17),
    "ShippedDate": new Date(2025, 0, 18),
    "Freight": 140.51,
    "ShipName": "Ernst Handel",
    "ShipAddress": "Kirchgasse 6",
    "ShipCity": "Graz",
    "ShipRegion": null,
    "ShipCountry": "Austria",
    "Year": 2010,
    "Salary": 30000,
    "Feedback": "-",
    "Status": "In-progress"
  },
  {
    "OrderID": 110259,
    "CustomerID": 1012,
    "CustomerName": "CENTC",
    "OrderDate": new Date(2025, 0, 2),
    "ShippedDate": new Date(2025, 0, 3),
    "Freight": 3.25,
    "ShipName": "Centro comercial Moctezuma",
    "ShipAddress": "Sierras de Granada 9993",
    "ShipCity": "México D.F.",
    "ShipRegion": null,
    "ShipCountry": "Mexico",
    "Year": 2011,
    "Salary": 37000,
    "Feedback": "Good",
    "Status": "Delivered"
  },
  {
    "OrderID": 110260,
    "CustomerID": 1013,
    "CustomerName": "OTTIK",
    "OrderDate": new Date(2025, 0, 6),
    "ShippedDate": new Date(2025, 0, 9),
    "Freight": 55.09,
    "ShipName": "Ottilies Käseladen",
    "ShipAddress": "Mehrheimerstr. 369",
    "ShipCity": "Köln",
    "ShipRegion": null,
    "ShipCountry": "Germany",
    "Year": 2012,
    "Salary": 48000,
    "Feedback": "-",
    "Status": "In-progress"
  },
  {
    "OrderID": 110261,
    "CustomerID": 1014,
    "CustomerName": "QUEDE",
    "OrderDate": new Date(2025, 0, 12),
    "ShippedDate": new Date(2025, 0, 17),
    "Freight": 3.05,
    "ShipName": "Que Delícia",
    "ShipAddress": "Rua da Panificadora, 12",
    "ShipCity": "Rio de Janeiro",
    "ShipRegion": "RJ",
    "ShipCountry": "Brazil",
    "Year": 2013,
    "Salary": 33000,
    "Feedback": "Good",
    "Status": "Delivered"
  },
];
const renderCustomColumnChooser = (targetLHTMLElement, columns) => {
  let treeData = [];

  // Define parent categories
  const parentNodes = [
    { id: 1, name: 'Customer Details', hasChild: true, expanded: true },
    { id: 2, name: 'Order Details', hasChild: true, expanded: true },
    { id: 3, name: 'Ship Details', hasChild: true, expanded: true },
    { id: 4, name: 'In-come Details', hasChild: true, expanded: true },
    { id: 5, name: 'Addtional Details', hasChild: true, expanded: true },
  ];

  // Assign child columns to respective categories
  if (columns && columns.length) {
    treeData = columns.map((column) => {
      let parentId;
      switch (column.field) {
        case 'CustomerID':
        case 'CustomerName':
          parentId = 1;
          break;
        case 'OrderID':
        case 'OrderDate':
          parentId = 2;
          break;
        case 'ShippedDate':
        case 'ShipCountry':
        case 'ShipCity':
          parentId = 3;
          break;
        case 'Year':
        case 'Freight':
        case 'Salary':
          parentId = 4;
          break;
        case 'Status':
        case 'Feedback':
          parentId = 5;
          break;
      }
      return {
        id: column.uid,
        name: column.headerText,
        pid: parentId,
        isChecked: column.visible
      };
    });
    treeData.filter(item => item.isChecked === false).forEach(item => {
      if (!updatedColumns.includes(item.name)) {
        updatedColumns.push(item.name);
      }
    });
    const uniquePids = [];
    treeData.forEach(item => {
      if (!uniquePids.includes(item.pid)) {
        uniquePids.push(item.pid);
      }
    });
    const filteredParents = parentNodes.filter(parent => uniquePids.includes(parent.id));
    // Add parent nodes first
    treeData.unshift(...filteredParents);
  }

  // Initialize the TreeView component
  treeObj = new ej.navigations.TreeView({
    fields: { dataSource: treeData, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' },
    showCheckBox: true,
    nodeClicked: nodeCheck,
    keyPress: nodeCheck,
    nodeChecking: nodeChecking
  });

  treeObj.appendTo(targetLHTMLElement);
};


var grid = new ej.grids.Grid({
  dataSource: gridData,
  rowRenderingMode: 'Vertical',
  enableAdaptiveUI: true,
  allowPaging: true,
  allowSorting: true,
  allowFiltering: true,
  showColumnChooser: true,
  showColumnMenu: true,
  allowGrouping: false,
  columnChooserSettings: {
    template: '#column-chooser-template',
    renderCustomColumnChooser: renderCustomColumnChooser,
    enableSearching: true,
  },
  filterSettings: { type: 'Excel' },
  editSettings: { allowAdding: true, allowEditing: true, allowDeleting: true, mode: 'Dialog' },
  toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search', 'ColumnChooser', 'ExcelExport', 'PdfExport'],
  pageSettings: { pageCount: 3, pageSizes: true },
  allowExcelExport: true,
  allowPdfExport: true,
  height: '100%',
  columns: [
    {
      field: 'CustomerID',
      headerText: 'Customer ID',
      textAlign: 'Right',
      width: 180,
      isPrimaryKey: true,
      showInColumnChooser: false,
    },
    {
      field: 'CustomerName',
      headerText: 'Customer Name',
      width: 200,
    },
    {
      field: 'OrderID',
      headerText: 'Order ID',
      textAlign: 'Right',
      width: 180,
    },
    {
      field: 'OrderDate',
      headerText: 'Order Date',
      width: 180,
      textAlign: 'Right',
      format: 'yMd',
      editType: 'datepickeredit',
    },
    {
      field: 'ShippedDate',
      headerText: 'Shipped Date',
      textAlign: 'Right',
      width: 200,
      format: 'yMd',
      editType: 'datepickeredit',
    },
    {
      field: 'ShipCountry',
      headerText: 'Ship Country',
      textAlign: 'Left',
      width: 180,
      editType: 'dropdownedit',
    },
    {
      field: 'ShipCity',
      headerText: 'Ship City',
      textAlign: 'Left',
      width: 150,
      editType: 'dropdownedit',
    },
    {
      field: 'Year',
      headerText: 'Year',
      textAlign: 'Right',
      width: 150,
    },
    {
      field: 'Freight',
      headerText: 'Freight',
      textAlign: 'Right',
      width: 150,
      format: 'C2',
    },
    {
      field: 'Salary',
      headerText: 'Amount Paid',
      textAlign: 'Right',
      format: 'C2',
      width: 200,
    },
    {
      field: 'Status',
      headerText: 'Status',
      width: 150,
    },
    {
      field: 'Feedback',
      headerText: 'Feedback',
      width: 160,
    },
  ],
  actionBegin: function (args) {
    console.log('ActionBegin Args : ', args);
    if (args.requestType === 'columnChooserUpdate') {
      args.cancel = false;
      columnChooserSubmit();
    }
    if (args.requestType === 'columnChooserClose') {
      args.cancel = false;
    }
    if (args.requestType === 'columnChooserSearch') {
      args.cancel = false;
    }
  },
  actionComplete: function (args) {
    console.log('ActionComplete Args : ', args);
  },
  beforeOpenColumnChooser: function (args) {
    console.log('beforeOpenColumnChooser Args : ', args);
  },
  keyPressed: function (args) {
    console.log("KeyPressed: ", args);
  },
  aggregates: [{
    columns: [{
      type: 'Sum',
      field: 'Freight',
      format: 'C2',
      footerTemplate: 'Sum: ${Sum}'
    }]
  }],
  load: function () {
    if (!ej.base.Browser.isDevice) {
      grid.adaptiveDlgTarget = document.getElementsByClassName('e-mobile-content')[0];
    }
    if (grid.pageSettings.pageSizes) {
      document.querySelector('.e-adaptive-demo').classList.add('e-pager-pagesizes');
    }
    else {
      document.querySelector('.e-adaptive-demo').classList.remove('e-pager-pagesizes');
    }
  }
});
if (ej.base.Browser.isDevice) {
  grid.appendTo('#adaptivedevice');
  document.getElementsByClassName('e-mobile-layout')[0].style.display = 'none';
} else {
  grid.appendTo('#adaptivebrowser');
}

grid.toolbarClick = function (args) {
  if (args.item.id === grid.element.id + '_pdfexport') {
    grid.pdfExport();
  } else if (args.item.id === grid.element.id + '_excelexport') {
    grid.excelExport();
  }
};
// enable/disable vertical row direction
var directionChange = new ej.buttons.CheckBox({
  change: function (e) {
    grid.rowRenderingMode = e.checked ? 'Horizontal' : 'Vertical';
    grid.allowGrouping = e.checked;
  }
});
directionChange.appendTo('#fullscreen');

function nodeChecking(args) {
  var getNodeDetails = treeObj.getNode(args.node);
  if (getNodeDetails.isChecked == 'true') {
    if (getNodeDetails.hasChildren) {
      var filteredIds_1 = treeObj.treeData.filter(function (item) { return String(item.pid) === getNodeDetails.id; }).map(function (item) { return item.name; });
      updatedColumns = updatedColumns.filter(function (id) { return !filteredIds_1.includes(id); });
    }
    else {
      if (updatedColumns.indexOf(getNodeDetails.text) !== -1) {
        updatedColumns.splice(updatedColumns.indexOf(getNodeDetails.text), 1);
      }
    }
  }
  else {
    if (getNodeDetails.hasChildren) {
      var filteredIds = treeObj.treeData.filter(function (item) { return String(item.pid) === getNodeDetails.id; }).map(function (item) { return item.name; });
      updatedColumns.push.apply(updatedColumns, filteredIds);
    }
    else {
      updatedColumns.push(getNodeDetails.text);
    }
  }
}

function nodeCheck(args) {
  let checkedNode = [args.node];
  if (args.event.target.classList.contains('e-fullrow') || args.event.key == "Enter") {
    let getNodeDetails = treeObj.getNode(args.node);
    if (getNodeDetails.isChecked == 'true') {
      treeObj.uncheckAll(checkedNode);
    } else {
      treeObj.checkAll(checkedNode);
    }
  }
}

function columnChooserSubmit() {
  var columns = grid.getColumns().filter(function (column) { return (column.showInColumnChooser === true); });
  showColumns = columns.map(function (col) { return col.headerText; }).filter(function (header) { return !updatedColumns.includes(header); });
  var columnsToUpdate = { visibleColumns: showColumns, hiddenColumns: updatedColumns };
  grid.columnChooserModule.changeColumnVisibility(columnsToUpdate);
  updatedColumns = [];
  showColumns = [];
}
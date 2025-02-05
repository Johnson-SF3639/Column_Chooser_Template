let treeObj;
var showColumns = [];
var updatedColumns = [];
let gridData = [
    {
       "OrderID":10248,
       "CustomerID":"VINET",
       "OrderDate":  new Date(-200088000000),
       "ShippedDate":  new Date(-200088000000),
       "Freight":32.38,
       "ShipName":"Vins et alcools Chevalier",
       "ShipAddress":"59 rue de l'Abbaye",
       "ShipCity":"Reims",
       "ShipRegion":null,
       "ShipCountry":"France",
       "Year" : 2000,
       "Salary": 30000,
       "Description" : "Good",
       "Role" : "Non-IT"
    },
    {
       "OrderID":10249,
       "CustomerID":"TOMSP",
       "OrderDate":  new Date(-200088000000),
       "ShippedDate":  new Date(-200088000000),
       "Freight":11.61,
       "ShipName":"Toms Spezialitäten",
       "ShipAddress":"Luisenstr. 48",
       "ShipCity":"Münster",
       "ShipRegion":null,
       "ShipCountry":"Germany",
       "Year" : 2001,
       "Salary": 25000,
       "Description" : "Average",
       "Role" : "Non-IT"
    },
    {
       "OrderID":10250,
       "CustomerID":"HANAR",
       "OrderDate":  new Date(-200088000000),
       "ShippedDate":  new Date(-200088000000),
       "Freight":65.83,
       "ShipName":"Hanari Carnes",
       "ShipAddress":"Rua do Paço, 67",
       "ShipCity":"Rio de Janeiro",
       "ShipRegion":"RJ",
       "ShipCountry":"Brazil",
       "Year" : 2002,
       "Salary": 35000,
       "Description" : "Better",
       "Role" : "Non-IT"
    },
    {
       "OrderID":10251,
       "CustomerID":"VICTE",
       "OrderDate":  new Date(-200088000000),
       "ShippedDate":  new Date(-200088000000),
       "Freight":41.34,
       "ShipName":"Victuailles en stock",
       "ShipAddress":"2, rue du Commerce",
       "ShipCity":"Lyon",
       "ShipRegion":null,
       "ShipCountry":"France",
       "Year" : 2003,
       "Salary": 35000,
       "Description" : "Good",
       "Role" : "IT"
    },
    {
       "OrderID":10252,
       "CustomerID":"SUPRD",
       "OrderDate":  new Date(-200088000000),
       "ShippedDate":  new Date(-200088000000),
       "Freight":51.3,
       "ShipName":"Suprêmes délices",
       "ShipAddress":"Boulevard Tirou, 255",
       "ShipCity":"Charleroi",
       "ShipRegion":null,
       "ShipCountry":"Belgium",
       "Year" : 2004,
       "Salary": 40000,
       "Description" : "Good",
       "Role" : "IT"
    },
    {
       "OrderID":10253,
       "CustomerID":"HANAR",
       "OrderDate":  new Date(-200088000000),
       "ShippedDate":  new Date(-200088000000),
       "Freight":58.17,
       "ShipName":"Hanari Carnes",
       "ShipAddress":"Rua do Paço, 67",
       "ShipCity":"Rio de Janeiro",
       "ShipRegion":"RJ",
       "ShipCountry":"Brazil",
       "Year" : 2005,
       "Salary": 35000,
       "Description" : "Average",
       "Role" : "IT"
    },
    {
       "OrderID":10254,
       "CustomerID":"CHOPS",
       "OrderDate":  new Date(-200088000000),
       "ShippedDate":  new Date(-200088000000),
       "Freight":22.98,
       "ShipName":"Chop-suey Chinese",
       "ShipAddress":"Hauptstr. 31",
       "ShipCity":"Bern",
       "ShipRegion":null,
       "ShipCountry":"Switzerland",
       "Year" : 2006,
       "Salary": 38000,
       "Description" : "Better",
       "Role" : "Non-IT"
    },
    {
       "OrderID":10255,
       "CustomerID":"RICSU",
       "OrderDate":  new Date(-200088000000),
       "ShippedDate":  new Date(-200088000000),
       "Freight":148.33,
       "ShipName":"Richter Supermarkt",
       "ShipAddress":"Starenweg 5",
       "ShipCity":"Genève",
       "ShipRegion":null,
       "ShipCountry":"Switzerland",
       "Year" : 2007,
       "Salary": 50000,
       "Description" : "Best",
       "Role" : "IT"
    },
    {
       "OrderID":10256,
       "CustomerID":"WELLI",
       "OrderDate":  new Date(-200088000000),
       "ShippedDate":  new Date(-200088000000),
       "Freight":13.97,
       "ShipName":"Wellington Importadora",
       "ShipAddress":"Rua do Mercado, 12",
       "ShipCity":"Resende",
       "ShipRegion":"SP",
       "ShipCountry":"Brazil",
       "Year" : 2008,
       "Salary": 40000,
       "Description" : "Better",
       "Role" : "Non-IT"
    },
    {
       "OrderID":10257,
       "CustomerID":"HILAA",
       "OrderDate":  new Date(-200088000000),
       "ShippedDate":  new Date(-200088000000),
       "Freight":81.91,
       "ShipName":"HILARION-Abastos",
       "ShipAddress":"Carrera 22 con Ave. Carlos Soublette #8-35",
       "ShipCity":"San Cristóbal",
       "ShipRegion":"Táchira",
       "ShipCountry":"Venezuela",
       "Year" : 2009,
       "Salary": 45000,
       "Description" : "Best",
       "Role" : "Non-IT"
    },
    {
       "OrderID":10258,
       "CustomerID":"ERNSH",
       "OrderDate":  new Date(-200088000000),
       "ShippedDate":  new Date(-200088000000),
       "Freight":140.51,
       "ShipName":"Ernst Handel",
       "ShipAddress":"Kirchgasse 6",
       "ShipCity":"Graz",
       "ShipRegion":null,
       "ShipCountry":"Austria",
       "Year" : 2010,
       "Salary": 30000,
       "Description" : "Average",
       "Role" : "IT"
    },
    {
       "OrderID":10259,
       "CustomerID":"CENTC",
       "OrderDate":  new Date(-200088000000),
       "ShippedDate":  new Date(-200088000000),
       "Freight":3.25,
       "ShipName":"Centro comercial Moctezuma",
       "ShipAddress":"Sierras de Granada 9993",
       "ShipCity":"México D.F.",
       "ShipRegion":null,
       "ShipCountry":"Mexico",
       "Year" : 2011,
       "Salary": 37000,
       "Description" : "Good",
       "Role" : "Non-IT"
    },
    {
       "OrderID":10260,
       "CustomerID":"OTTIK",
       "OrderDate":  new Date(-200088000000),
       "ShippedDate":  new Date(-200088000000),
       "Freight":55.09,
       "ShipName":"Ottilies Käseladen",
       "ShipAddress":"Mehrheimerstr. 369",
       "ShipCity":"Köln",
       "ShipRegion":null,
       "ShipCountry":"Germany",
       "Year" : 2012,
       "Salary": 48000,
       "Description" : "Better",
       "Role" : "IT"
    },
    {
       "OrderID":10261,
       "CustomerID":"QUEDE",
       "OrderDate":  new Date(-200088000000),
       "ShippedDate":  new Date(-200088000000),
       "Freight":3.05,
       "ShipName":"Que Delícia",
       "ShipAddress":"Rua da Panificadora, 12",
       "ShipCity":"Rio de Janeiro",
       "ShipRegion":"RJ",
       "ShipCountry":"Brazil",
       "Year" : 2013,
       "Salary": 33000,
       "Description" : "Good",
       "Role" : "Non-IT"
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
                case 'OrderID':
                    parentId = 1;
                    break;
                case 'CustomerID':
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
                case 'Description':
                case 'Role':
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

let grid = new ej.grids.Grid({
    dataSource: gridData,
    allowPaging: true,
    allowFiltering: true,
    allowSorting: true,
    showColumnChooser: true,
    enableAdaptiveUI: true,
    filterSettings: { type: 'Excel' },
    columnChooserSettings: { 
        headerTemplate: '#ccResHeadertemplate',
        template: '#column-chooser-template', 
        renderCustomColumnChooser : renderCustomColumnChooser,
        enableSearching: true,
    },
    showColumnMenu: true,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'ColumnChooser'],
    height: 400,
    pageSettings: { pageSize: 12 },
    columns: [
      {
        field: 'OrderID',
        headerText: 'Order ID',
        textAlign: 'Center',
        width: 130,
        minWidth: 10,
        isPrimaryKey: true,
      },
      {
        headerText: 'Order Details',
        textAlign: 'Center',
        columns: [
          {
            field: 'CustomerID',
            headerText: 'Customer Name',
            textAlign: 'Center',
            width: 160,
            showInColumnChooser: false,
            minWidth: 30,
          },
          {
            field: 'OrderDate',
            headerText: 'Order Date',
            width: 140,
            textAlign: 'Center',
            minWidth: 50,
            format: 'yMd',
            editType: 'datepickeredit',
          },
        ],
      },
      {
        headerText: 'Ship Details',
        textAlign: 'Center',
        columns: [
          {
            field: 'ShippedDate',
            headerText: 'Shipped Date',
            textAlign: 'Center',
            width: 160,
            minWidth: 40,
            format: 'yMd',
            editType: 'datepickeredit',
          },
          {
            field: 'ShipCountry',
            headerText: 'Ship Country',
            textAlign: 'Center',
            width: 140,
            minWidth: 60,
            editType: 'dropdownedit',
          },
          {
            field: 'ShipCity',
            headerText: 'Ship City',
            textAlign: 'Center',
            width: 200,
            minWidth: 40,
            editType: 'dropdownedit',
          },
        ],
      },
      {
        headerText: 'In-come Details',
        textAlign: 'Center',
        columns: [
          {
            field: 'Year',
            headerText: 'Year',
            textAlign: 'Center',
            width: 160,
            minWidth: 30,
          },
          {
            field: 'Freight',
            headerText: 'Freight',
            textAlign: 'Center',
            width: 140,
            minWidth: 50,
          },
          {
            field: 'Salary',
            headerText: 'Salary',
            textAlign: 'Center',
            width: 140,
            minWidth: 50,
          },
        ],
      },
      {
        headerText: 'Addtional Details',
        textAlign: 'Center',
        columns: [
          {
            field: 'Description',
            headerText: 'Description',
            textAlign: 'Center',
            width: 160,
            minWidth: 30,
          },
          {
            field: 'Role',
            headerText: 'Role',
            textAlign: 'Center',
            width: 140,
            minWidth: 50,
          },
        ],
      },
    ],
    actionBegin: function (args) {
        console.log('ActionBegin Args : ', args);
        if (args.requestType === 'columnChooserUpdate') {
            args.cancel = false;
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

        if (document.getElementById('BackBtn')) {
            document.getElementById('BackBtn').onclick = function () {
                const grid = document.getElementById('Grid').ej2_instances[0];
                grid.columnChooserModule.hideDialog();
            };
        }
        
        if (document.getElementById('OkBtn')) {
            document.getElementById('OkBtn').onclick = function () {
                columnChooserSubmit();
            };
        }
    },
    keyPressed: function (args) {
        console.log("KeyPressed: ", args);
    }

});
grid.appendTo('#Grid');

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

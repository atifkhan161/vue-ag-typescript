import Vue from "vue";
import * as agGrid from 'ag-grid';

export default Vue.extend({
    template: `
        <div>
        <h1>Ag grid demo</h1>
        <div id="myGrid" style="height: 115px;width:500px" class="ag-theme-fresh"></div>        
        </div>
    `,
    props: ['name', 'initialEnthusiasm'],
    data() {
        return {
            enthusiasm: this.initialEnthusiasm,
            rowData: [
                {make: "Toyota", model: "Celica", price: 35000},
                {make: "Ford", model: "Mondeo", price: 32000},
                {make: "Porsche", model: "Boxter", price: 72000}            
            ],
            columnDefs: [
                {headerName: "Make", field: "make"},
                {headerName: "Model", field: "model"},
                {headerName: "Price", field: "price"}
            ]
        }
    },
    methods: {
        
    },
    computed: {
        
    },
    created: function () {
    },
    mounted: function(){
        let gridOptions = {
            columnDefs: this.columnDefs,
            rowData: this.rowData
        }
        let eGridDiv = document.querySelector('#myGrid') as HTMLElement;
        new agGrid.Grid(eGridDiv, gridOptions);
    }
});
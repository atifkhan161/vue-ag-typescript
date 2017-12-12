import Vue from "vue";
import HelloComponent from "./components/hello";
import AgGridComponent from "./components/agGrid";

let v = new Vue({
    el: "#app",
    template: `
    <div>
        Name: <input v-model="name" type="text">
        <hello-component :name="name" :initialEnthusiasm="5" />
        <ag-grid-component :name="name" :initialEnthusiasm="5" />
    </div>`,
    data: {
        name: "World"
    },
    components: {
        HelloComponent,
        AgGridComponent
    }
});
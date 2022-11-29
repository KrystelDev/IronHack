<script setup>
const publicacions = ([
    {
        titol: "Títol1", 
        descripcio: "Descripció1",
        contingut: "Contingut1",
    },
    {
        titol: "Títol2",
        descripcio: "Descripció2",
        contingut: "Contingut2",
    },
    {
        titol: "Títol3",
        descripcio: "Descripció3",
        contingut: "Contingut3",
    }
])
</script>

<template>
    <h2>Ejercicio 4</h2>
    <ul>
        <li v-for="(elementeDePublicacions, index) in publicacions" :key="index">
            <div>
                <h3>{{elementeDePublicacions.titol}}</h3>
                <p>
                    {{elementeDePublicacions.descripcio}}
                </p>
                <p>{{elementeDePublicacions.contingut}}</p>
            </div>
        </li>
    </ul>
</template>

<style>
h3 {
    font-weight: bold;
}
</style>
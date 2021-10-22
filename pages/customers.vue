<script setup lang="ts">
const { x, y} = useMouse()
</script>

<template>
    <h1>Business Unit Details</h1>

    <div>pos: {{x}}, {{y}}</div>
    <ul>
        <li v-for="(value, key, index) in {
            name: 'John',
            age: 30,
            city: 'New York'
        }">
            #{{index + 1}}. {{key}}: {{value}}
        </li>
    </ul>
</template>

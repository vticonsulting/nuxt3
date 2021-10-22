<template>
  <div>
    Server response: {{ data }}
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/hi', { params: { foo: 'bar' } })
</script>

<template>
  <Head>
    <Title>Testing</Title>
  </Head>
  <pre>{{ data }}</pre>
  <div>
    <!-- Remove this component to get started! -->
    <!-- <NuxtWelcome />
    <img
      width="400"
      height="400"
      style="border: 1px solid red;display: block;"
      src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
    />-->
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/stuff', {
  transform: (response) => {
    const res = []
    for (var person in response) {
      if (response.hasOwnProperty(person)) {
        res.push({ name: person, message: response[person] })
      }
    }
    return res
  }
})

useMeta({
  bodyAttrs: {
    class: 'custom-class'
  }
})
</script>

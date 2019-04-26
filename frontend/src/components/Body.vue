<template>
  <div class="row">
    <div class=" card col-md-3 order-md-1 mb-4 bg-light">
      <div class="card-header">
        <h1>{{ left_column_name }}</h1>
      </div>
      {{ left_column_content }}
    </div>
    <div class="card col-md-9 order-md-2 bg-light">
      <div class="card-header">
        {{ right_column_name }}
      </div>
       {{ right_column_content }}
    </div>
  </div>
</template>

<script>
    export default {
        name: "Body"
    }
</script>

<style scoped>

</style>

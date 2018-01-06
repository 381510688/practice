<template>
  <div>
    <h2>ES6</h2>
    <div>
      <ul>
        <li><router-link to="/es6/module-p1">Module-p1</router-link></li>
        <li><router-link to="/es6/module-p2">Module-p2</router-link></li>
      </ul>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }

  .container {
    border: 1px solid red;
    height: 500px;
  }
</style>

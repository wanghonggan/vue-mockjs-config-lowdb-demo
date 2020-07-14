<template>
  <div id="app">
    <div>
      <router-link to="/user/list">user list</router-link>
      <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
      <router-link to="/goods/list">goods list</router-link>
    </div>
    <router-view />
  </div>
</template>

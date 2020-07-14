import axios from 'axios';
import Vue from 'vue';

const requester = axios.create({
  baseURL: 'http://localhost:8080',
});

Vue.prototype.$axios = requester;

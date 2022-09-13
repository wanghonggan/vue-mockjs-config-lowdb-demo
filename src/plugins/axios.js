import axios from 'axios';
import Vue from 'vue';

const requester = axios.create({
  baseURL: '',
});

Vue.prototype.$axios = requester;

import axios from 'axios';
import Vue from 'vue';

const requester = axios.create({
});

Vue.prototype.$axios = requester;

<template>
  <div class="user">
    <h1>User List Page</h1>
    <h2>Create User</h2>
    <div>
      name:
      <input type="text" v-model="createForm.name" />
      age:
      <input type="text" v-model="createForm.age" />
      <input type="button" value="添加" @click="createUser()" />
    </div>
    <h2>Edit User</h2>
    <div>
      name:
      <input type="text" v-model="updateForm.name" />
      age:
      <input type="text" v-model="updateForm.age" />
      <input type="button" value="更新" @click="updateUser()" />
    </div>
    <h2>List Data</h2>
    <div style="padding: 0 20px;">
      第{{ page }}页，
      共{{ sizes }}页，
      每页
      <select v-model="size">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      条，
      <a href @click.prevent="prevPage()">上一页</a>，
      <a href @click.prevent="nextPage()">下一页</a>
    </div>
    <ul>
      <li v-for="(v, i) in users" :key="v.id">
        {{ i }}, {{ v }}，
        <a href @click.prevent="delUser(v)">删除</a>，
        <a href @click.prevent="toEditUser(v)">编辑</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { cloneDeep } from 'lodash';
import service  from '@/mock/service/user';

export default {
  name: 'UserIndex',
  data() {
    return {
      createForm: {
        name: '',
        age: '',
      },
      updateForm: {
        id: '',
        name: '',
        age: '',
      },
      users: [],
      page: 1,
      size: 10,
      total: 0,
    };
  },
  computed: {
    sizes() {
      return Math.ceil(this.total / this.size);
    },
  },
  watch: {
    size() {
      this.loadList();
    },
    page() {
      this.loadList();
    },
  },
  methods: {
    async updateUser() {
      const { id, ...data } = this.updateForm;
      const { data: res } = await this.$axios.patch(`/user/${id}`, data);
      console.log(res);
      this.loadList();
    },
    toEditUser(user) {
      this.updateForm = cloneDeep(user);
    },
    async delUser(user) {
      const { data: res } = await this.$axios.delete(`/user/${user.id}`);
      console.log(res);
      if (this.users.length <= 1 && this.page > 1) {
        this.page--;
      } else {
        this.loadList();
      }
    },
    prevPage() {
      if (this.page > 1) {
        this.page--;
      }
    },
    nextPage() {
      if (this.page < this.sizes) {
        this.page++;
      }
    },
    async createUser() {
      const { data: res } = await this.$axios.post(
        '/user/create',
        this.createForm,
      );
      console.log(res);
      this.createForm = {};
      this.loadList();
    },
    async loadList() {
      console.log(service);
      const { data: res } = await this.$axios.get('/user/list', {
        params: {
          page: this.page,
          size: this.size,
        },
      });
      console.log(res);
      this.users = res.data;
      this.total = res.total;
    },
  },
  mounted() {
    this.loadList();
  },
};
</script>

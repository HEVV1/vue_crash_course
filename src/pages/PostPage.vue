<template>
  <div class="wrapper-page">
    <h1>Page with posts</h1>
    <div class="form-group">
      <my-input placeholder="Search" v-model="searchQuery"/>
    </div>
    <my-button @click="showDialog">Create post</my-button>
    <my-select v-model="selectedSort" :options="this.sortOption"></my-select>

    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost"/>
    </my-dialog>

    <post-list v-if="!isPostLoading" @remove="removePost" :posts="sortedAndSearchedPosts"/>
    <div v-else>Loading...</div>
    <div class="page__wrapper">
      <div v-for="objPage in this.totalPages"
           class="page"
           :class="{'current__page': this.page === objPage}"
           :key="objPage"
           @click="changePage(objPage)">



        {{ objPage }}
      </div>
    </div>
  </div>
</template>

<script>
import PostForm from '@/components/PostForm';
import PostList from '@/components/PostList';
import axios from 'axios';

export default {
  name: 'App.vue',
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostLoading: false,
      selectedSort: '',
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0,
      sortOption: [
        {value: 'title', name: 'By Name'},
        {value: 'body', name: 'By Description'}
      ]
    };
  },
  methods: {
    createPost(post) {
      if (post.title.length > 0 && post.body.length > 0) {
        this.posts.push(post);
        this.dialogVisible = false;
      }
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    changePage(pageNumber){
      this.page = pageNumber
    },
    async fetchPosts() {
      try {
        this.isPostLoading = true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
              params: {
                _page: this.page,
                _limit: this.limit,
              }
            }
        );
        this.totalPages = Math.round(response.headers['x-total-count'] / this.limit);
        this.posts = response.data;
      } catch (e) {
        console.log('Error');
      } finally {
        this.isPostLoading = false;
      }
    }
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]));
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }
  },
  watch: {
    page(){
      this.fetchPosts();
    }
  }
};

</script>

<style>

.page__wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 15px;
}
.page {
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-content: center;
  border: 1px solid black;
  margin-right: 10px;
  margin-top: 10px;
  cursor: pointer;
}
.current__page{
  background-color: lightgreen;
  transition: all .3s ease;
}
</style>
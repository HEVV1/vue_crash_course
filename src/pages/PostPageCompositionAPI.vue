<template>
  <div class="wrapper-page">
    <h1>Page with posts</h1>
    <div class="form-group">
      <my-input placeholder="Search" v-focus v-model="searchQuery"/>
    </div>
    <my-select v-model="selectedSort" :options="this.sortOption"></my-select>
    <post-list v-if="!isPostLoading" :posts="sortedAndSearchedPosts"/>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import PostForm from '@/components/PostForm';
import PostList from '@/components/PostList';
import {usePosts} from '@/hooks/usePosts';
import {useSortedPosts} from '@/hooks/useSortedPosts';
import {useSortedAndSearchedPosts} from '@/hooks/useSortedAndSearchedPosts';

export default {
  name: 'App.vue',
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      dialogVisible: false,
      sortOption: [
        {value: 'title', name: 'By Name'},
        {value: 'body', name: 'By Description'}
      ]
    };
  },
  setup(props) {
    const {posts, totalPages, isPostLoading} = usePosts(10);
    const {selectedSort, sortedPosts} = useSortedPosts(posts);
    const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts);

    return {
      posts,
      totalPages,
      isPostLoading,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts,
    };
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

.current__page {
  background-color: lightgreen;
  transition: all .3s ease;
}
</style>
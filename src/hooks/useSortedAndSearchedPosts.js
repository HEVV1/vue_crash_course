import {ref, computed} from 'vue';

export function useSortedAndSearchedPosts(sortedPost) {
  const searchQuery = ref('');
  const sortedAndSearchedPosts = computed(() => {
    return sortedPost.value.filter(post => post.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
  });

  return {
    searchQuery,
    sortedAndSearchedPosts
  }
}
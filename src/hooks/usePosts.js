import axios from 'axios';
import {ref, onMounted} from 'vue';

export function usePosts(limit) {
  const posts = ref([]);
  const totalPages = ref(0);
  const isPostLoading = ref(true);
  const fetching = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: 1,
            _limit: limit,
          }
        }
      );
      totalPages.value = Math.round(response.headers['x-total-count'] / limit);
      posts.value = response.data;
    } catch (e) {
      console.log('Error');
    } finally {
      isPostLoading.value = false;
    }
  };

  //Function forks when components are creating
  onMounted(fetching);

  return {
    posts,
    totalPages,
    isPostLoading
  };
}
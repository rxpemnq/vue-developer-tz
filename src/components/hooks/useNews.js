import { ref, onMounted } from "vue";

export function useNews(rssUrl) {
  const news = ref([]);
  const loading = ref(true);
  const error = ref(null);

  const fetchNews = async () => {
    loading.value = true;
    try {
      const response = await fetch(
        `https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`
      );
      if (!response.ok) throw new Error(HTTP);

      const data = await response.json();
      if (!data.items || data.items.length === 0) {
        throw new Error("Нет данных в RSS");
      }

      news.value = data.items;
      error.value = null;
    } catch (err) {
      error.value = err.message;
      news.value = [];
    } finally {
      loading.value = false;
    }
  };

  onMounted(fetchNews);

  return { news, loading, error };
}

<script setup>
import { randomImgApi } from "@/api/img";
// import { ref } from "vue";
import { useRequest } from "alova/client";

const { data, loading } = useRequest(randomImgApi, {
  initialData: [],
});
// const url = ref("1");
// const getImg = async () => {
//   loading.value = true;
//   try {
//     const a = await randomImgApi();
//     console.log(1, a);

//     // if (status !== "success") return;
//     // url.value = message;
//   } finally {
//     loading.value = false;
//   }
// };

// getImg();
</script>

<template>
  <main>
    {{ loading }}--{{ url }}
    <img class="size-40" :src="data.message" />
  </main>
</template>

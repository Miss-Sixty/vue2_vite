<script setup>
import { randomImgApi } from "@/api/img";
import { useRequest } from "alova/client";

const { data, loading } = useRequest(randomImgApi, {
  initialData: [],
});
const url = ref("狗狗图片");
</script>

<template>
  <main class="flex flex-col items-center pt-10">
    <p class="m-3">{{ url }}：{{ loading ? "加载中..." : "加载完成" }}</p>
    <img class="size-64" :src="data.message" />
  </main>
</template>

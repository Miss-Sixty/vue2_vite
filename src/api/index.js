import { createAlova } from "alova";
import { axiosRequestAdapter } from "@alova/adapter-axios";
import VueHook from "alova/vue-demi";

export default createAlova({
  statesHook: VueHook,
  requestAdapter: axiosRequestAdapter(),
  responded: (response) => response.data,
});

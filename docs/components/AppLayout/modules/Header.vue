<template>
  <header class="header">
    <div class="header_inner">
      <m-space value="24px" style="align-items: center">
        <m-space
          value="12px"
          style="align-items: center"
          @click="$router.push('/')">
          <Logo size="36px" />
          <span class="title">Mostify UI</span>
        </m-space>
        <m-button type="primary" light :border-width="0" @click="onSearch">
          <m-icon name="search" style="margin-right: 8px" />
          {{ $t("search") }}
        </m-button>
      </m-space>

      <div>
        <m-space value="12px">
          <m-button type="text" @click="$router.push('/start')">{{
            $t("start")
          }}</m-button>
          <m-button type="text" @click="$router.push('/components/button')">{{
            $t("component")
          }}</m-button>
          <m-dropdown placement="bottomRight">
            <m-button shape="circle" type="text">
              <svg
                t="1725174226969"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="21648"
                width="20"
                height="32">
                <path
                  d="M928 928c-12.4 0-24.2-7.2-29.4-19.4L852 800H620l-46.6 108.6c-7 16.2-25.8 23.8-42 16.8s-23.8-25.8-16.8-42l192-448c5-11.8 16.6-19.4 29.4-19.4s24.4 7.6 29.4 19.4l192 448c7 16.2-0.6 35-16.8 42-4.2 1.8-8.4 2.6-12.6 2.6z m-280.6-192h177.2L736 529.2 647.4 736zM160 800c-11 0-21.6-5.6-27.6-15.8-9-15.2-4-34.8 11.2-43.8 1.2-0.6 118.8-71.2 229.4-206.6 78.6-96.2 125.6-216.4 146.2-277.8H96c-17.6 0-32-14.4-32-32s14.4-32 32-32h256V128c0-17.6 14.4-32 32-32s32 14.4 32 32v64h256c17.6 0 32 14.4 32 32s-14.4 32-32 32h-85.4c-17.4 56.6-68.2 201.2-163.8 318.2-118.2 144.8-241.4 218.2-246.6 221.4-5 3-10.6 4.4-16.2 4.4z"></path>
                <path
                  d="M512 704c-6.8 0-13.6-2.2-19.6-6.6-3-2.4-74.2-57.6-149.8-155.8-75-97.2-113.6-171.8-115.2-175-8-15.8-1.8-35 13.8-43 15.8-8 35-1.8 43 13.8 0.4 0.8 37.8 72.8 108.8 165 70.2 91.2 137.6 143.6 138.2 144.2 14 10.8 16.6 31 5.8 44.8-6 8.4-15.4 12.6-25 12.6z"></path>
              </svg>
            </m-button>
            <template #content>
              <m-menu-item @click="$switchLocale('zh')">{{
                $t("zh")
              }}</m-menu-item>
              <m-menu-item @click="$switchLocale('en')">{{
                $t("en")
              }}</m-menu-item>
            </template>
          </m-dropdown>

          <m-button shape="circle" type="text" @click="openGithub">
            <svg viewBox="0 0 1024 1024" width="24" height="24">
              <path
                d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
            </svg>
          </m-button>

          <m-button shape="circle" type="text">
            <svg
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32">
              <path
                d="M439.264 208a16 16 0 0 0-16 16v67.968a239.744 239.744 0 0 0-46.496 26.896l-58.912-34a16 16 0 0 0-21.856 5.856l-80 138.56a16 16 0 0 0 5.856 21.856l58.896 34a242.624 242.624 0 0 0 0 53.728l-58.88 34a16 16 0 0 0-6.72 20.176l0.848 1.68 80 138.56a16 16 0 0 0 21.856 5.856l58.912-34a239.744 239.744 0 0 0 46.496 26.88V800a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-67.968a239.744 239.744 0 0 0 46.512-26.896l58.912 34a16 16 0 0 0 21.856-5.856l80-138.56a16 16 0 0 0-4.288-20.832l-1.568-1.024-58.896-34a242.624 242.624 0 0 0 0-53.728l58.88-34a16 16 0 0 0 6.72-20.176l-0.848-1.68-80-138.56a16 16 0 0 0-21.856-5.856l-58.912 34a239.744 239.744 0 0 0-46.496-26.88V224a16 16 0 0 0-16-16h-160z m32 48h96v67.376l28.8 12.576c13.152 5.76 25.632 12.976 37.184 21.52l25.28 18.688 58.448-33.728 48 83.136-58.368 33.68 3.472 31.2a194.624 194.624 0 0 1 0 43.104l-3.472 31.2 58.368 33.68-48 83.136-58.432-33.728-25.296 18.688c-11.552 8.544-24.032 15.76-37.184 21.52l-28.8 12.576V768h-96v-67.376l-28.784-12.576c-13.152-5.76-25.632-12.976-37.184-21.52l-25.28-18.688-58.448 33.728-48-83.136 58.368-33.68-3.472-31.2a194.624 194.624 0 0 1 0-43.104l3.472-31.2-58.368-33.68 48-83.136 58.432 33.728 25.296-18.688a191.744 191.744 0 0 1 37.184-21.52l28.8-12.576V256z m47.28 144a112 112 0 1 0 0 224 112 112 0 0 0 0-224z m0 48a64 64 0 1 1 0 128 64 64 0 0 1 0-128z" />
            </svg>
          </m-button>
        </m-space>
      </div>
    </div>

    <MDialog
      :visible="dialogShow"
      width="600px"
      top="100px"
      @close="dialogShow = false"
      :showClose="false">
      <template #header>
        <section
          style="padding: 8px; border-bottom: 1px solid var(--m-text-500)">
          <MInput
            size="large"
            placeholder="搜索/组件名称/组件描述"
            autofocus
            width="100%"
            v-model="searchText"
            border-width="0px"
            style="--input_border_color: var(--m-primary-700)">
            <template #prefix>
              <svg
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="var(--m-text-800)">
                <path
                  d="M933.308465 890.723577l-146.767692-157.046802c59.488883-71.644737 92.202958-160.954809 92.202958-254.974136 0-220.566488-179.481767-400.048255-400.110677-400.048255-220.566488 0-400.048255 179.451068-400.048255 400.048255s179.481767 400.048255 400.078954 400.048255c57.796334-0.030699 113.530706-12.094456 165.633365-35.82288 15.479553-7.04751 22.312168-25.297153 15.264659-40.74703-7.04751-15.511275-25.38925-22.373567-40.74703-15.264659-44.101427 20.066011-91.249237 30.252001-140.181693 30.2827-186.652074 0-338.498434-151.845337-338.498434-338.498434 0-186.621375 151.845337-338.498434 338.498434-338.498434 186.682773 0 338.559832 151.845337 338.559832 338.498434 0 87.863117-33.514301 171.111123-94.326319 234.415914-11.786441 12.248975-11.387351 31.729655 0.830925 43.516096 0.923022 0.892323 2.12336 1.231037 3.170203 2.000564 0.830925 1.231037 1.261737 2.64627 2.308579 3.75451L888.346437 932.700621c6.03239 6.493901 14.248516 9.756201 22.465664 9.756201 7.53972 0 15.07944-2.739391 21.019733-8.309246C944.234305 922.606729 944.910711 903.126049 933.308465 890.723577z"></path>
              </svg>
            </template>
          </MInput>
        </section>
      </template>

      <div v-if="!list.length">
        <div
          style="
            text-align: center;
            padding: 20px;
            color: var(--m-theme-500);
            font-size: 1.2rem;
          ">
          暂无搜索结果
        </div>
      </div>

      <ul class="search_wrapper" v-else>
        <li v-for="item in list">
          <div
            style="
              display: flex;
              justify-content: space-between;
              align-items: center;
            ">
            <b style="font-size: 1.2rem; color: var(--m-text-900)">{{
              item.title
            }}</b>
            <MButton
              type="text"
              shape="circle"
              @click="
                () => {
                  dialogShow = false;
                  $router.push(item.path);
                }
              ">
              <svg
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                fill="var(--m-primary-600)"
                width="20"
                height="20">
                <path
                  d="M557.397333 167.204571l293.059048 293.059048L902.192762 512l-51.712 51.712-293.059048 293.083429-51.736381-51.712L762.148571 548.571429H121.904762v-73.142858h640.243809L505.660952 218.940952l51.736381-51.736381z"></path>
              </svg>
            </MButton>
          </div>
          <div>
            <span
              style="
                color: var(--m-theme-600);
                font-size: 0.98rem;
                line-height: 18px;
              "
              >{{ item.desc }}</span
            >
          </div>
        </li>
      </ul>

      <template #footer>
        <section style="padding: 8px; text-align: right">
          Search By <m-button type="link" size="mini">Mostify UI</m-button>
        </section>
      </template>
    </MDialog>
  </header>
</template>

<script setup lang="ts">
import Logo from "~/components/Logo.vue";
import zhData from "~/assets/data/zh";
import enData from "~/assets/data/en";
const searchText = ref("");
const dialogShow = ref(false);
const tc = (str: string) => str.toLowerCase();

const list = computed(() => {
  const data = true ? enData : zhData;
  return searchText.value
    ? data.filter(item => {
        if (!item.path) return false;
        return (
          tc(item.title).includes(tc(searchText.value)) ||
          tc(item.desc).includes(tc(searchText.value))
        );
      })
    : [];
});
const openGithub = () => {
  window.open("https://github.com/irming46/mostify-ui");
};
const onSearch = () => {
  dialogShow.value = true;
};
</script>

<style lang="scss" scoped>
.search_wrapper {
  list-style: none;
  margin: 0;
  padding: 12px 8px;
  max-height: 250px;
  overflow-y: auto;
  li {
    margin-bottom: 12px;
    padding: 8px 16px;
    background: #f5f4f4;
    border-radius: 12px;
    transition: all 0.3s;

    &:hover {
      background-color: #dedede;
    }
  }
}
</style>

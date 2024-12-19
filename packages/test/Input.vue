<template>
  <div class="component">
    <div class="input">
      <MInput
        ref="inputRef"
        :value="value"
        @change="onChange"
        prefix="$"
        suffix="RMB"
        size="large"
        placeholder="Please input"
        borderWidth="2px"
      />
      <m-input v-model="value" placeholder="prefix">
        <template #prefix> $ </template>
      </m-input>
      <m-input v-model="value" placeholder="suffix">
        <template #suffix> .com </template>
      </m-input>

      <m-input v-model="value" placeholder="prepend">
        <template #prepend> 姓名</template>
      </m-input>

      <m-input v-model="value" placeholder="append">
        <template #append> 获取验证码</template>
      </m-input>

      <m-input v-model="value" clearable placeholder="clearable"> </m-input>
      <m-input v-model="value" status="error" />
      <m-input v-model="value" status="success" />
      <m-input v-model="value" status="warning" />
      <m-input v-model="value" status="" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const inputRef = ref(null);
const value = ref("1");

const onChange = (val) => {
  value.value = val;
};
</script>

<style lang="scss" scoped>
.input {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;

  .m-input {
    width: calc(33% - 12px);
  }
}
</style>

<template>
  <div class="component">
    <div class="btn">
      <m-button type="default">Default</m-button>
      <m-button type="primary">Primary</m-button>
      <m-button type="danger">Danger</m-button>
      <m-button type="warning">Warning</m-button>
      <m-button type="success">Success</m-button>
      <m-button type="text">Text</m-button>
      <m-button type="link">Link</m-button>
    </div>

    <div class="btn">
      <m-button loading type="primary">LOADING</m-button>
    </div>

    <div class="btn">
      <m-button disabled type="primary">Disabled</m-button>
    </div>

    <div class="btn">
      <m-button shape="rect" type="text">Rect</m-button>
      <m-button shape="circle" type="text">Circle</m-button>
      <m-button shape="round" type="primary">Round</m-button>
    </div>

    <div class="btn">
      <m-button border-width="0" light type="primary">No Border</m-button>
      <m-button border-width="0" light type="danger">No Border</m-button>
      <m-button border-width="0" light type="warning">No Border</m-button>
      <m-button border-width="0" light type="success">No Border</m-button>
    </div>

    <div class="btn">
      <m-button light type="primary">Light</m-button>
      <m-button light type="danger">Light</m-button>
      <m-button light type="warning">Light</m-button>
      <m-button light type="success">Light</m-button>
    </div>

    <div class="btn">
      <m-button size="mini" type="primary">Mini</m-button>
      <m-button size="small" type="primary">Small</m-button>
      <m-button size="large" type="primary">Large</m-button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.btn {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 12px;
}
</style>

<template>
  <div class="component">
    <div class="btn">
      <m-button type="default">Default</m-button>
      <m-button type="primary">Primary</m-button>
      <m-button type="danger">Danger</m-button>
      <m-button type="warning">Warning</m-button>
      <m-button type="success">Success</m-button>
      <m-button type="info">Info</m-button>
      <m-button type="text">Text</m-button>
      <m-button type="link">Link</m-button>
    </div>

    <div class="btn">
      <m-button loading type="primary">button</m-button>
    </div>

    <div class="btn">
      <m-button disabled type="primary">button</m-button>
    </div>

    <div class="btn">
      <m-button shape="rect" type="primary">Rect</m-button>
      <m-button shape="circle" type="primary">Circle</m-button>
      <m-button shape="round" type="primary">Round</m-button>
    </div>

    <div class="btn">
      <m-button plain type="primary">Plain</m-button>
      <m-button plain type="danger">Plain</m-button>
      <m-button plain type="warning">Plain</m-button>
      <m-button plain type="success">Plain</m-button>
      <m-button plain type="info">Plain</m-button>
    </div>

    <div class="btn">
      <m-button light type="primary">Light</m-button>
      <m-button light type="danger">Light</m-button>
      <m-button light type="warning">Light</m-button>
      <m-button light type="success">Light</m-button>
      <m-button light type="info">light</m-button>
    </div>

    <div class="btn">
      <m-button size="mini" type="primary">Mini</m-button>
      <m-button size="small" type="primary">Small</m-button>
      <m-button size="large" type="primary">Large</m-button>
    </div>

    <m-button block type="primary">BLOCK</m-button>
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
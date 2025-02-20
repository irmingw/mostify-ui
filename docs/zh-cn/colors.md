# Colors 色彩

色彩是视觉感知中的重要信息来源，对情绪、行为和记忆等心理活动有影响。

<script setup >
  const colors = [600,500,400,300,200,100]
</script>

## Primary Colors

<div class="colors">
  <div class="color_item" v-for="item in colors" :key="item" >
    <section class="color_bar" :style="{
    'background-color': `var(--m-color-primary-${item})`,
    }"></section>
    <div class="text">primary-{{ item }}</div>
  </div>
</div>

## Error Colors

<div class="colors">
  <div class="color_item" v-for="item in colors":key="item">
    <section class="color_bar" :style="{
      'background-color': `var(--m-color-error-${item})`,
    }"></section>
    <div class="text">error-{{ item }}</div>
  </div>
</div>

## warning Colors

<div class="colors">
  <div class="color_item" v-for="item in colors":key="item">
    <section class="color_bar" :style="{
      'background-color': `var(--m-color-warning-${item})`,
    }"></section>
    <div class="text">warning-{{ item }}</div>
  </div>
</div>

## Success Colors

<div class="colors">
  <div class="color_item" v-for="item in colors":key="item">
    <section class="color_bar" :style="{
      'background-color': `var(--m-color-success-${item})`,
    }"></section>
    <div class="text">success-{{ item }}</div>
  </div>
</div>

## Info Colors

<div class="colors">
  <div class="color_item" v-for="item in colors":key="item">
    <section class="color_bar" :style="{
      'background-color': `var(--m-color-info-${item})`,
    }"></section>
    <div class="text">info-{{ item }}</div>
  </div>
</div>

## Border Colors

<div class="colors">
  <div class="color_item" v-for="item in colors":key="item">
  <section class="color_bar" :style="{
    'background-color': `var(--m-color-border-${item})`,
    }"></section>
    <div class="text">border-{{ item }}</div>
  </div>
</div>

## Background Colors

<div class="colors">
  <div class="color_item" v-for="item in colors":key="item">
  <section class="color_bar" :style="{
    'background-color': `var(--m-color-fill-${item})`,
    border:'1px solid #ccc'
    }"></section>
    <div class="text">fill-{{ item }}</div>
  </div>
</div>

## text Colors

<div class="colors">
  <div class="color_item" v-for="item in colors":key="item">
  <section class="color_bar" :style="{
    'background-color': `var(--m-color-text-${item})`,
    border:'1px solid #ccc'
    }"></section>
    <div class="text">text-{{ item }}</div>
  </div>
</div>

<style scoped lang="scss">
  .colors {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 20px;
  }

  .color_item {
    width: calc(50% - 20px);
    .color_bar {
      width: 100%;
      height: 120px;
      border-radius: 4px;
    }

    .text {
      font-size: 16px;
      padding: 6px 12px;
      text-align: center;
      color: var(--m-theme-800);
    }
  }

  @media (max-width: 728px) {
    .color_item {
      width: 100%;
      .color_bar {
        width: 100%;
        height: 160px
      }
    }
  }

  </style>

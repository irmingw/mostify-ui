# Colors

Color is an important source of information in visual perception, which has an impact on psychological activities such as emotions, behavior, and memory.

<script setup >
  const colors = [900,800,700,600,500,400,300,200,100,50]
  const themeColors = [1000,900,800,700,600,500,400,300,200,100,50,'bg','container']
</script>

## Primary Colors

<div class="colors">
  <div class="color_item" v-for="item in colors" :key="item" >
    <section class="color_bar" :style="{
    'background-color': `var(--m-primary-${item})`,
    }"></section>
    <div class="text">primary-{{ item }}</div>
  </div>
</div>

## Error Colors

<div class="colors">
  <div class="color_item" v-for="item in colors":key="item">
    <section class="color_bar" :style="{
      'background-color': `var(--m-error-${item})`,
    }"></section>
    <div class="text">error-{{ item }}</div>
  </div>
</div>

## warning Colors

<div class="colors">
  <div class="color_item" v-for="item in colors":key="item">
    <section class="color_bar" :style="{
      'background-color': `var(--m-warning-${item})`,
    }"></section>
    <div class="text">warning-{{ item }}</div>
  </div>
</div>

## Success Colors

<div class="colors">
  <div class="color_item" v-for="item in colors":key="item">
    <section class="color_bar" :style="{
      'background-color': `var(--m-success-${item})`,
    }"></section>
    <div class="text">success-{{ item }}</div>
  </div>
</div>

## Theme Colors

<div class="colors">
  <div class="color_item" v-for="item in themeColors":key="item">
  <section class="color_bar" :style="{
    'background-color': `var(--m-theme-${item})`,
    border: '1px solid #d9d9d9',
    }"></section>
    <div class="text">theme-{{ item }}</div>
  </div>
</div>

<m-alert title="Tips">
  theme-bg controls the background color of the control panel and has a wide range of applications. theme-container controls the global background color, but its usage is not as widespread.
</m-alert>

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

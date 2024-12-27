# 色彩

色彩是视觉感知中重要的信息来源，它对人的情绪、行为和记忆等心理活动产生影响。

<script setup >
  const colors = [900,800,700,600,500,400,300,200,100,50]
  const themeColors = [1000,900,800,700,600,500,400,300,200,100,50,'bg','container']
</script>

## 主色彩

<div class="colors">
  <div class="color_item" v-for="item in colors" :key="item" >
    <section class="color_bar" :style="{
    'background-color': `var(--m-primary-${item})`,
    }"></section>
    <div class="text">primary-{{ item }}</div>
  </div>
</div>

## 错误色彩

<div class="colors">
  <div class="color_item" v-for="item in colors":key="item">
    <section class="color_bar" :style="{
      'background-color': `var(--m-error-${item})`,
    }"></section>
    <div class="text">error-{{ item }}</div>
  </div>
</div>

## 警告色彩

<div class="colors">
  <div class="color_item" v-for="item in colors":key="item">
    <section class="color_bar" :style="{
      'background-color': `var(--m-warning-${item})`,
    }"></section>
    <div class="text">warning-{{ item }}</div>
  </div>
</div>

## 成功色彩

<div class="colors">
  <div class="color_item" v-for="item in colors":key="item">
    <section class="color_bar" :style="{
      'background-color': `var(--m-success-${item})`,
    }"></section>
    <div class="text">success-{{ item }}</div>
  </div>
</div>

## 主题色彩

<div class="colors">
  <div class="color_item" v-for="item in themeColors":key="item">
  <section class="color_bar" :style="{
     'background-color': `var(--m-theme-${item})`,
      border: '1px solid #d9d9d9',
    }"></section>
    <div class="text">theme-{{ item }}</div>
  </div>
</div>
<m-alert title="温馨提示">
  theme-bg 控制控制面板的背景颜色，具有广泛的应用。theme-container 控制全局背景颜色，但其使用并不广泛。
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

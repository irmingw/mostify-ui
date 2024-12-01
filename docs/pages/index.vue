<template>
  <div class="home_container">
    <section class="home_hd">
      <div class="home_logo">
        <Logo size="240px" />
      </div>

      <div class="home_title">
        <h1 style="line-height: 3rem;">{{ $t('common.title') }}</h1>
        <h4>{{ $t('common.description') }}</h4>
        <section class="home_h_btn" style="--m-size-large: 48px">
          <m-button size="large" block type="primary">快速上手</m-button>
          <m-button size="large" block>组件库哲学</m-button>
          <m-button size="large" block type="info">Github</m-button>
        </section>
        <section class="npm_i">
          <m-button>
            <m-icon name="right" style="margin-right: 8px"></m-icon>
            npm install mostify-ui
            <m-icon name="copy" style="margin-left: 16px"></m-icon>
          </m-button>
        </section>
      </div>
    </section>
    <h3 class="home_line_title">特性</h3>
    <section>
      <div class="home_c_cards">
        <div>
          <section class="card_bg card_bg1" />
          <h5>更好用</h5>
          <p>视觉/交互/体验更好</p>
        </div>
        <div>
          <section class="card_bg card_bg2" />
          <h5>更快速</h5>
          <p>组件设计更好开发者使用，开发效率更高</p>
        </div>
        <div>
          <section class="card_bg card_bg3" />
          <h5>更简单</h5>
          <p>一切的一切，变得更简单！</p>
        </div>
      </div>
    </section>

    <section class="footer">
      <m-button type="primary" light>支持作者</m-button>
      <h4 style="margin: 68px">让我们一起努力构建好用的Vue组件库</h4>
    </section>
  </div>
</template>

<script setup lang="ts">
import Logo from "~/components/Logo.vue";
</script>

<style scoped lang="scss">
@keyframes rotateLogo {
  to {
    transform: rotate(360deg);
  }
}
.home_container {
  width: 100%;
  text-align: center;
}

.home_hd {
  display: flex;
  align-items: flex-start;
  width: 1100px;
  margin: 68px auto 48px;
}
.home_title {
  margin-left: 68px;
  text-align: left;
  flex: 1;
}

.home_logo {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 24px;
}

.npm_i {
  text-align: left;
  margin-top: 24px;
}

.home_h_btn {
  display: flex;
  justify-content: space-between;
  margin-top: 24px;

  .m-button {
    margin-right: 24px;

    &:last-child {
      margin-right: 0;
    }
  }
}

.home_line_title {
  padding: 24px 0;
}

.home_c_cards {
  display: flex;
  justify-content: space-between;
  margin: 5vh auto;
  width: 70%;
  min-width: 1100px;
  div {
    width: 32%;
    min-height: 340px;
    border-radius: 16px;
    border: 1px solid #e8e8e8;
    text-align: left;
    transition: all 0.3s ease;

    &:hover {
      background-color: #f3f3f3;
    }
    img {
      width: 100%;
      height: 200px;
    }
    .card_bg {
      height: 240px;
      width: 100%;
      border-radius: 16px;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      margin-bottom: 12px;
    }

    .card_bg1 {
      background: url("../assets/imgs/54f7fa2d-a25d-4cac-89da-a85d331a6218.webp");
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
    }
    .card_bg2 {
      background: url("../assets/imgs/60c44f37-c0dd-4bcf-b637-476335f77847.webp");
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
    }

    .card_bg3 {
      background: url("../assets/imgs/5ed61fea-f30c-4825-8382-851969aa9be8.webp");
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
    }

    h5 {
      padding-left: 12px;
    }

    p {
      padding: 12px;
    }
  }
}

.footer {
  margin: 58px auto;
}
</style>

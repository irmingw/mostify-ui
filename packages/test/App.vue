<template>
  <div class="app">
    <MButton type="default" block disabled left-icon="close">BUTTON</MButton>
    <MButton type="text" >BUTTON</MButton>

    <m-button-group layout="y">
      <m-button>xxx</m-button>
      <m-button>xxxxx</m-button>
      <m-button>xxxxxxxx</m-button>
    </m-button-group>
    <m-button-group layout="x">
      <m-button>xxx</m-button>
      <m-button>xxxxx</m-button>
      <m-button>xxxxxxxx</m-button>
    </m-button-group>
    <m-input type="text"></m-input>
    <m-input type="number"></m-input>

    <m-input disabled placeholder="disabled"></m-input>

    <m-input type="text" placeholder="readonly" readonly></m-input>
    <m-input type="text" clearable></m-input>

    <m-input prefix="Prefix" placeholder="Hello"></m-input>
    <m-input suffix="suffix" placeholder="Hello suffix"></m-input>
    <m-input
      prefix="Prefix"
      suffix="suffix"
      placeholder="Hello prefix and suffix"
    ></m-input>

    <m-input prepend="prepend" placeholder="Hello prepend"></m-input>
    <m-input append="append" placeholder="Hello append"></m-input>
    <m-input prepend="prepend" append="append" placeholder="Hello prepend"></m-input>

    <m-input type="password" showPasswordIcon clearable></m-input>
    <m-input type="text" showLimitCount clearable maxlength="12"></m-input>

    <m-input type="text" size="mini" placeholder="mini"></m-input>
    <m-input type="text" size="small" placeholder="small"></m-input>
    <m-input type="text" size="large" placeholder="large"></m-input>
  </div>
</template>

<script setup lang="ts"></script>

<style>
.app {
  width: 100%;
  height: 100%;
  padding: 32px;
}

html,
body,
#app {
  height: 100%;
  margin: 0;
  padding: 0px;
  width: 100%;
}
</style>

# Avatar

Avatars can be used to represent people or objects. It supports images, Icons, or characters.

## Basic Usage

Use `shape` and `size` prop to set avatar's shape and size.

<m-avatar src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></m-avatar>
<m-avatar shape="square" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></m-avatar>
<m-avatar size="24px" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></m-avatar>

```vue
<template>
  <m-avatar src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></m-avatar>
  <m-avatar shape="square" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></m-avatar>
  <m-avatar size="24px" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></m-avatar>
</template>
```

## Types

It supports images, Icons, or characters.

<m-avatar icon="user" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></m-avatar>
<m-avatar src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></m-avatar>
<m-avatar>User</m-avatar>

```vue
<template>
  <m-avatar icon="user" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></m-avatar>
  <m-avatar src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></m-avatar>
  <m-avatar>User</m-avatar>
</template>
```


## Fit Container

Set how the image fit its container for an image avatar, same as object-fit.

<m-avatar shape="circle" fit="contain" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></m-avatar>
<m-avatar shape="square" fit="fill" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></m-avatar>

```vue
<template>
  <m-avatar shape="circle" fit="contain" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></m-avatar>
<m-avatar shape="square" fit="fill" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></m-avatar>
</template>
```

## API

### Attributes

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| icon | representation type to icon, more info on icon component. | string | - |
| size | avatar size. | string | `50px` |
| shape | 	avatar shape | `circle` `square` | `circle` |
| src | the source of the image for an image avatar. | string | - |
| src-set | native attribute srcset of image avatar. | native | - |
| alt | native attribute alt of image avatar.| string | - |
|fit | set how the image fit its container for an image avatar. | native | `cover`|
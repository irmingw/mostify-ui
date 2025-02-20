<script setup>
  import {MessageBox} from 'mostify-ui'

  const openMsg = () => {
    MessageBox.alert("This is a Info Message", "Tips",{confirmText: 'Confirm'});
  };
</script>

# Message Box

A set of modal boxes simulating system message box, mainly for alerting information, confirm operations and prompting messages.

## Alert

Alert interrupts user operation until the user confirms.

Open an alert by calling the MessageBox.alert method. It simulates the system's alert

<MButton @click="openMsg">Click to open the Message Box Alert </MButton>

```vue
<script setup>
  import {MessageBox} from 'mostify-ui'

  const openMsg = () => {
    MessageBox.alert("This is a Info Message", "Tips",{confirmText: 'Confirm'});
  };
</script>

<template>
<MButton @click="openMsg">Alert</MButton>
</template>

```


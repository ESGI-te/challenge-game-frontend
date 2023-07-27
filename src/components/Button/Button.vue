<script setup>
import styled from 'vue3-styled-components'

const props = defineProps({
  bgColor: {
    type: String,
    default: 'primary'
  }
})

const Button = styled('button', props)`
    width: width: fit-content;
    height: 58px;
    border: none;
    padding: 1rem 2rem;
    cursor: pointer;
    background-color: ${(props) => `var(${props.bgColor})`};
    text-transform: uppercase;
    color: var(--white);
    font-weight: 800;
    font-size: 1rem;

    &:disabled {
        background-color: #D4D4D4;
        color: var(--white);
        cursor: not-allowed;
    }
`
</script>

<template lang="">
  <Button v-bind="props">
    <slot />
  </Button>
</template>

<script setup>
import { useField } from 'vee-validate'
import { computed } from 'vue'
import styled from 'vue3-styled-components'

const props = defineProps({
  label: String,
  type: String,
  name: String
})
const { value, errorMessage, setErrors } = useField(() => props.name)
const isTextArea = computed(() => props.type === 'textarea')

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  justify-content: center;
  row-gap: 0.5rem;
  width: 100%;
  min-width: 342px;
`
const ErrorMessage = styled.span`
  color: red;
`
const onBlur = () => {
  setErrors([])
}
</script>

<template lang="">
  <Wrapper>
    <v-textarea
      v-if="isTextArea"
      class="input textarea"
      @blur="onBlur"
      v-model="value"
      :name="props.name"
      :type="props.type || 'text'"
      :label="label"
      variant="outlined"
    ></v-textarea>
    <v-text-field
      v-else
      class="input"
      @blur="onBlur"
      v-model="value"
      :name="props.name"
      :type="props.type || 'text'"
      :label="label"
      variant="outlined"
    ></v-text-field>
    <ErrorMessage v-if="errorMessage">{{ errorMessage }}</ErrorMessage>
  </Wrapper>
</template>

<style lang="scss">
.input {
  width: 100%;
  max-width: 320px;

  &.textarea {
    max-width: 500px;
    height: 500px;
  }
}
</style>

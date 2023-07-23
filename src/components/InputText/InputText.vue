<script setup>
import { useField } from 'vee-validate';
import styled from 'vue3-styled-components';

const props = defineProps({
    label: String,
    type: String,
    name: String,
});

const { value, errorMessage, handleBlur, setErrors } = useField(() => props.name);

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  row-gap: 0.5rem;
  width: 100%;
`
const ErrorMessage = styled.span`
  color: red;
`
const onBlur = () => {
    handleBlur();
    setErrors([]);
}
</script>

<template lang="">
    <Wrapper>
        <label>
        {{ props.label }}
        </label>
        <input @blur="onBlur" v-model="value" :name="props.name" :type="props.type || 'text'" />
        <ErrorMessage v-if="errorMessage">{{ errorMessage }}</ErrorMessage> 
    </Wrapper>
   
</template>

<style lang="">
    
</style>
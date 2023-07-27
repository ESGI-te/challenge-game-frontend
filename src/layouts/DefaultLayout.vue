<script setup>
import styled from 'vue3-styled-components';
import AppBar from 'components/AppBar';

const Main = styled.main`
    width: 100%;
    flex: 1;
    display: flex;
`;
const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

</script>

<template>
    <Wrapper>
        <AppBar />
        <Main>
            <slot></slot>
        </Main>
    </Wrapper>
</template>

<style lang="">
    
</style>
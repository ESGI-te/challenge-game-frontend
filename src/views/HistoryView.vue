<script setup>
import HistoryEntryList from 'components/History/HistoryEntryList'
import Text from '@/components/Text'
import styled from 'vue3-styled-components'


const Wrapper = styled.div`
    display: flex
    flex-direction: column;
    width:100%
    padding : 1rem;
    row-gap: 2rem;
`

</script>

<template>
    <Wrapper>
        <Text variant="h4"> All games history :</Text>
        <HistoryEntryList></HistoryEntryList>
    </Wrapper>
</template>

<style scoped lang="css"></style>

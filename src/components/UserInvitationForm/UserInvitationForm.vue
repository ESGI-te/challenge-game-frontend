<script setup>
import InputText from '@/components/InputText'
import Button from '@/components/Button'
import { ref } from 'vue'
import { useInviteUserMutation } from 'queries/userInvitation/useInviteUserMutation'
import styled from 'vue3-styled-components'

const username = ref('')
const inviteUser = useInviteUserMutation()

const sendInvitation = () => {
  inviteUser.mutate(username.value, {
    onSuccess: () => {
      username.value = ''
    }
  })
}

const AddInput = styled(InputText)`
  ${({ theme }) => theme.mediaQueries.desktopAndUp} {
    max-width: 25rem;
  }
`

const AddForm = styled.form`
    width:100%;
    display: flex;
    flex-direction: column;
    row-gap : 1rem;
`

const AddButton = styled(Button)`
  width : 100%;
  ${({ theme }) => theme.mediaQueries.desktopAndUp} {
    max-width: 25rem;
  }
`
</script>

<template>
  <AddForm @submit.prevent="sendInvitation">
    <AddInput :disabled="isLoading" v-model="username" placeholder="username" type="text" />
    <AddButton :disabled="isLoading" type="submit">Search</AddButton>
  </AddForm>
</template>

<style lang=""></style>

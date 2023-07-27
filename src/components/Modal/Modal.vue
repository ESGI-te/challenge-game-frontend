<script setup>
import { Teleport, Transition, watchEffect } from 'vue'
import styled from 'vue3-styled-components'
import crossIcon from 'public/icons/cross.svg'
import Text from 'components/Text'
import { useResponsive } from 'composables/useResponsive'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  onClose: {
    type: Function,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})

watchEffect(() => {
  if (!props.isOpen) return
  document.body.classList.toggle('no-scroll')
})

const { isDesktopAndUp } = useResponsive()

const handleClose = () => {
  props.onClose()
  document.body.classList.toggle('no-scroll')
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`
const ModalInner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  max-width: 1200px;
  transform: translate(-50%, -50%);
  background-color: var(--beige);
  border-color: solid 2px var(--black);
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mediaQueries.mobile} {
    height: 100%;
  }
`
const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 0.5rem;
  padding: 1rem;

  ${({ theme }) => theme.mediaQueries.desktopAndUp} {
    padding: 2.5rem 2.5rem 0 2.5rem;
  }
`
const ModalContent = styled.div`
  width: 100%;
  padding: 1rem;
  flex: 1;

  ${({ theme }) => theme.mediaQueries.desktopAndUp} {
    padding: 0 2.5rem 2.5rem 2.5rem;
  }
`
const CloseButton = styled.button``
</script>

<template lang="">
  <Teleport v-if="isOpen" to="body">
    <Transition name="modal-fade">
      <ModalOverlay>
        <ModalInner>
          <ModalHeader>
            <Text :variant="isDesktopAndUp ? 'h2' : 'h4'">{{ props.title }}</Text>
            <CloseButton @click="handleClose">
              <img :src="crossIcon" alt="close" />
            </CloseButton>
          </ModalHeader>
          <ModalContent>
            <slot />
          </ModalContent>
        </ModalInner>
      </ModalOverlay>
    </Transition>
  </Teleport>
</template>

<style lang=""></style>

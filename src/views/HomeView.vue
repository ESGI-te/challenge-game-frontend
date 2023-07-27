<script setup>
import HistoryLastEntries from 'components/History/HistoryLastEntries'
import Stats from 'components/Stats'
import styled from 'vue3-styled-components'
const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 72px;
  background-color: #466d79;
  top: 0;
  left: 0;
  z-index: 9999;
`
const Logo = styled.img`
  width: 85.75px;
  height: 40px;
`
const JoinGame = styled.div`
  text-align: -webkit-center;
  background-color: #466d79;
  height: 70vh;
  position: relative;
  margin-top: 72px;
`
const CreateGame = styled.div`
  width: 100%;
  background-color: #467966;
  height: 70vh;
  text-align: -webkit-center;
`
const ImageContainer = styled.div`
  margin-bottom: 5rem;
  display: flex;
  height: 14rem;
  justify-content: center;
  align-items: center;
  position: relative;
`
const StyledImg = styled.img`
  height: auto;
`
const Avatar1 = styled(StyledImg)`
  width: 40%;
  transform: translateX(+75px) translateY(+50px);
`

const Avatar2 = styled(StyledImg)`
  width: 47%;
  transform: translateX(-35px) translateY(50px);
`
const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 12px 0;
  z-index: 9999;
`
const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const FooterItemImage = styled.img`
  width: 24px;
  height: 24px;
`
const FooterItemP = styled.p`
  color: black;
  font-size: 14px;
`

const TextContainer = styled.div`
  z-index: 3;
  position: relative;
  margin: 0px 2rem;
`

const Title = styled.h1`
  color: white;
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 16px;
  font-family: 'Dela Gothic One', sans-serif;
  display: flex;
`

const Description = styled.p`
  color: white;
  font-size: 16px;
  text-align: justify;
  font-weight: 400;
  font-family: Catamaran;
  margin-bottom: 16px;
`

const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 59px;
  border: 2px solid black;
  border-radius: 2px;
  width: 100%;
  background-color: white;
`

const SearchInput = styled.input`
  flex: 1;
  border: none;
  padding-left: 45px;
  color: black;
  font-family: Catamaran;
  background: url('../../public/search.png') no-repeat scroll 10px 50%;
  background-size: 25px 25px;

  &:focus {
    outline: none;
  }
`
const Background = styled.img`
  position: absolute;
  width: 80%;
  height: auto;
  z-index: 0;
`
const JoinButton = styled.button`
  height: 59px;
  font-size: 16px;
  font-weight: 800;
  font-family: Catamaran, Paragraph bold;
  border-radius: 2px;
  color: black;
  text-shadow: 0 0 black;
  background-color: white;
`

const CreateButton = styled.button`
  height: 59px;
  width: 100%;
  font-size: 16px;
  font-weight: 800;
  font-family: Catamaran;
  border-radius: 2px;
  color: black;
  background-color: white;
`
</script>

<template>
  <StyledHeader>
    <Logo src="../../public/Logo.png" alt="Logo" />
  </StyledHeader>
  <div class="content">
    <div class="left-home">
      <JoinGame>
        <ImageContainer>
          <Background src="../../public/Frame.png" />
          <Avatar1 src="../../public/Base_avatar-1.png" alt="Base Avatar 1" />
          <Avatar2 src="../../public/Base_avatar.png" alt="Base Avatar 2" />
        </ImageContainer>
        <TextContainer>
          <Title>Rejoindre une partie</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur. Blandit in ut faucibus donec in ac varius. Amet
            sit donec eu aliquet lectus a. Odio risus ornare duis nunc.
          </Description>
          <SearchForm class="search-form">
            <SearchBar>
              <SearchInput type="text" placeholder="Search" />
            </SearchBar>
            <JoinButton type="submit">Rejoindre</JoinButton>
          </SearchForm>
        </TextContainer>
      </JoinGame>
      <CreateGame>
        <ImageContainer>
          <Background src="../../public/Frame.png" />
          <Avatar1 src="../../public/Base_avatar-1.png" alt="Base Avatar 1" />
          <Avatar2 src="../../public/Base_avatar.png" alt="Base Avatar 2" />
        </ImageContainer>
        <TextContainer>
          <Title>Partie personnalisée</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur. Blandit in ut faucibus donec in ac varius. Amet
            sit donec eu aliquet lectus a. Odio risus ornare duis nunc.
          </Description>
          <CreateButton type="submit">CREER UNE PARTIE</CreateButton>
        </TextContainer>
      </CreateGame>
    </div>
    <div class="right-home">
      <div class="stats-home"></div>
      <div class="history-home"></div>
    </div>
  </div>
  <diV
    ><h2>stats</h2>
    <Stats :days="7"></Stats>
    <Stats :days="30"></Stats>
    <HistoryLastEntries></HistoryLastEntries
  ></diV>
  <Footer>
    <FooterItem>
      <FooterItemImage src="../../public/home.png" alt="Home" />
      <FooterItemP>Home</FooterItemP>
    </FooterItem>
    <FooterItem>
      <FooterItemImage src="../../public/friends.png" alt="Amis" />
      <FooterItemP>Amis</FooterItemP>
    </FooterItem>
    <FooterItem>
      <FooterItemImage src="../../public/boutique.png" alt="Shop" />
      <FooterItemP>Shop</FooterItemP>
    </FooterItem>
    <FooterItem>
      <FooterItemImage src="../../public/profil.png" alt="Profil" />
      <FooterItemP>Profil</FooterItemP>
    </FooterItem>
  </Footer>
</template>


import { Paper, Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";
import { StyledImg, StyledSection } from "./LandingPage.styled";

export const Service:FC = () => {
return (
    <>
    <StyledSection>
        <Typography variant='h5' fontWeight='light' align="center">TE AYUDAMOS A </Typography>
        <Typography variant='h5' fontWeight='bold' align="center" gutterBottom>PERDER PESO</Typography>
        <StyledImg src='/dieta.png' alt='perder peso' />
        <Typography>
        Dieta...Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum...
        </Typography>
    </StyledSection>
      <StyledSection>
      <Typography variant='h5' fontWeight='bold' align="center" gutterBottom>ENTRENAR MEJOR</Typography>
      <StyledImg src='/entreno.png' alt='entrenamiento' />
      <Typography>
      Entrenamiento...Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum...
      </Typography>
  </StyledSection>
    <StyledSection>
    <Typography variant='h5' fontWeight='bold' align="center" gutterBottom>RECUPERAR DE LESIONES</Typography>
    <StyledImg src='/fisio.png' alt='recupera de lesiones' />
    <Typography>
    Fisio...Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum...
    </Typography>
</StyledSection>
</>
)
}
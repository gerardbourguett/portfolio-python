
/** @jsxImportSource @emotion/react */import { Fragment } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Avatar, Box, Button, Center, Flex, Heading, HStack, Image as ChakraImage, Link, Spacer, Text, VStack } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import NextLink from "next/link"
import { ArrowForwardIcon, LinkIcon } from "@chakra-ui/icons"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Box>
  <HStack sx={{"position": "sticky", "bg": "black", "paddingX": "1em", "paddingY": "0.8em", "color": "white", "zIndex": 999, "top": 0}}>
  <Text>
  {`GerardABC.cloud`}
</Text>
</HStack>
  <Center>
  <VStack sx={{"maxWidth": "1000px", "width": "100%", "marginY": "2em"}}>
  <VStack>
  <HStack>
  <Avatar name={`Gerard Bourguett`} size={`xl`} src={`https://avatars.githubusercontent.com/u/23157007?v=4`}/>
  <VStack alignItems={`start`}>
  <Heading size={`lg`}>
  {`Gerard Bourguett`}
</Heading>
  <Text sx={{"marginTop": "0px !important"}}>
  {`Ingeniero de Software / Software Engineer`}
</Text>
  <HStack>
  <Link as={NextLink} href={``} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <LinkIcon/>
</Link>
  <Link as={NextLink} href={``} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <LinkIcon/>
</Link>
  <Link as={NextLink} href={``} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <LinkIcon/>
</Link>
</HStack>
</VStack>
</HStack>
  <Flex sx={{"width": "100%"}}>
  <Box sx={{"fontSize": "1em", "padding": "1em"}}>
  <Text as={`span`} sx={{"color": "red", "fontWeight": "bold"}}>
  {`Fullstack`}
</Text>
  {` Developer`}
</Box>
  <Spacer/>
  <Box sx={{"fontSize": "1em", "padding": "1em"}}>
  <Text as={`span`} sx={{"color": "red", "fontWeight": "bold"}}>
  {`+2`}
</Text>
  {` años de experiencia`}
</Box>
  <Spacer/>
  <Box sx={{"fontSize": "1em", "padding": "1em"}}>
  <Text as={`span`} sx={{"color": "red", "fontWeight": "bold"}}>
  {`Desarrollo`}
</Text>
  {` y Administración de Sistemas`}
</Box>
</Flex>
  <Text sx={{"spacing": "2em", "alignItems": "start"}}>
  {`Ingeniero en Informática egresado de la Universidad del Biobío con experiencia en Fullstack development y soporte para importantes empresas como BancoEstado, Mundo Pacífico, Mercado Público, CADEM, el Poder Judicial y Servicio Electoral. He sido parte de equipos multidisciplinarios en temas relacionados con el desarrollo de telecomunicaciones, continuidad operativa y ofimática. Mi enfoque se orienta hacia la obtención de resultados, siendo proactivo, innovador y resolutivo. Poseo habilidades destacadas de productividad, capacidad de adaptación rápida a diversos contextos laborales, incluyendo situaciones de contingencia y alta presión. Cuento con conocimientos en Angular, React, HTML, CSS, Laravel, SQL y Python. Actualmente estoy en búsqueda de desafiantes oportunidades para aplicar mis habilidades y contribuir al éxito de su organización.`}
</Text>
</VStack>
  {`["<Box>\n  <Heading size={\`xl\`}>\n  {\`Projects\`}\n</Heading>\n  <Accordion>\n  <AccordionItem>\n  <AccordionButton>\n  <Heading size={\`lg\`}>\n  {\`API Mercado Público\`}\n</Heading>\n  <AccordionIcon/>\n</AccordionButton>\n  <AccordionPanel>\n  <Text>\n  {\`Web que consume la API de Mercado Público. Permite visualizar las licitaciones de Chile, filtrarlas y ordenarlas. Por limitaciones de la API, no permite licitar desde la API\`}\n</Text>\n  <Heading size={\`md\`}>\n  {\`Tecnologías\`}\n</Heading>\n  <UnorderedList>\n  <ListItem>\n  {\`AngularJS\`}\n</ListItem>\n  <ListItem>\n  {\`Angular Material\`}\n</ListItem>\n  <ListItem>\n  {\`Datatable\`}\n</ListItem>\n  <ListItem>\n  {\`Typescript\`}\n</ListItem>\n  <ListItem>\n  {\`Axios\`}\n</ListItem>\n</UnorderedList>\n  <Link as={NextLink} href={\`https://github.com/gerardbourguett/api-mercado-publico\`} isExternal={true}>\n  <Button>\n  {\`Ver en GitHub\`}\n</Button>\n</Link>\n</AccordionPanel>\n</AccordionItem>\n  <AccordionItem>\n  <AccordionButton>\n  <Heading size={\`lg\`}>\n  {\`Agenda para Audiencias\`}\n</Heading>\n  <AccordionIcon/>\n</AccordionButton>\n  <AccordionPanel>\n  <Text>\n  {\`Web para realizar agendamientos de audiencias para diversos tribunales de Chile. Permite agendar, cancelar y reagendar audiencias. Además, permite visualizar las audiencias agendadas por día, semana y mes. Antes de hacer agendamientos se debe iniciar sesión, y debe ajustarse por tribunal, tipos de audiencias y por magistrados.\`}\n</Text>\n  <Heading size={\`md\`}>\n  {\`Tecnologías\`}\n</Heading>\n  <UnorderedList>\n  <ListItem>\n  {\`Laravel\`}\n</ListItem>\n  <ListItem>\n  {\`HTML\`}\n</ListItem>\n  <ListItem>\n  {\`CSS\`}\n</ListItem>\n  <ListItem>\n  {\`Bootstrap 4\`}\n</ListItem>\n  <ListItem>\n  {\`MySQL\`}\n</ListItem>\n</UnorderedList>\n  <Link as={NextLink} href={\`https://github.com/gerardbourguett/calendario\`} isExternal={true}>\n  <Button>\n  {\`Ver en GitHub\`}\n</Button>\n</Link>\n</AccordionPanel>\n</AccordionItem>\n  <AccordionItem>\n  <AccordionButton>\n  <Heading size={\`lg\`}>\n  {\`App del Clima\`}\n</Heading>\n  <AccordionIcon/>\n</AccordionButton>\n  <AccordionPanel>\n  <Text>\n  {\`App para visualizar el clima de una ciudad. Permite visualizar el clima actual, y el pronóstico de los próximos 3 días.\`}\n</Text>\n  <Heading size={\`md\`}>\n  {\`Tecnologías\`}\n</Heading>\n  <UnorderedList>\n  <ListItem>\n  {\`Python\`}\n</ListItem>\n  <ListItem>\n  {\`Django\`}\n</ListItem>\n  <ListItem>\n  {\`HTML\`}\n</ListItem>\n  <ListItem>\n  {\`Bootstrap 4\`}\n</ListItem>\n  <ListItem>\n  {\`Flask\`}\n</ListItem>\n</UnorderedList>\n  <ButtonGroup>\n  <Link as={NextLink} href={\`https://github.com/gerardbourguett/api-mercado-publico\`} isExternal={true}>\n  <Button>\n  {\`Ver en GitHub\`}\n</Button>\n</Link>\n  <Link as={NextLink} href={\`https://app-clima.onrender.com/\`} isExternal={true}>\n  <Button>\n  {\`Entrar a la App\`}\n</Button>\n</Link>\n</ButtonGroup>\n</AccordionPanel>\n</AccordionItem>\n</Accordion>\n</Box>"]`}
  <VStack sx={{"width": "100%"}}>
  <Heading sx={{"size": "lg", "width": "100%", "paddingTop": "1em"}}>
  {`Links`}
</Heading>
  <Link as={NextLink} href={`https://github.com/gerardbourguett`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "flex", "padding": "0.8em", "borderRadius": "1em"}}>
  <HStack>
  <ArrowForwardIcon/>
</HStack>
  <VStack>
  <Text sx={{"fontSize": "1em"}}>
  {`GitHub`}
</Text>
  <Text sx={{"fontSize": "0.8em"}}>
  {`Mis repositorios`}
</Text>
</VStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://www.linkedin.com/in/gerard-bourguett/`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "flex", "padding": "0.8em", "borderRadius": "1em"}}>
  <HStack>
  <ArrowForwardIcon/>
</HStack>
  <VStack>
  <Text sx={{"fontSize": "1em"}}>
  {`LinkedIn`}
</Text>
  <Text sx={{"fontSize": "0.8em"}}>
  {`Mi Linkedin`}
</Text>
</VStack>
</Button>
</Link>
  <Link as={NextLink} href={`mailto:gerard.bourguett@gmail.com`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "flex", "padding": "0.8em", "borderRadius": "1em"}}>
  <HStack>
  <ArrowForwardIcon/>
</HStack>
  <VStack>
  <Text sx={{"fontSize": "1em"}}>
  {`Email`}
</Text>
  <Text sx={{"fontSize": "0.8em"}}>
  {`Contáctame!`}
</Text>
</VStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://twitter.com/vanderfondi`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "flex", "padding": "0.8em", "borderRadius": "1em"}}>
  <HStack>
  <ArrowForwardIcon/>
</HStack>
  <VStack>
  <Text sx={{"fontSize": "1em"}}>
  {`Twitter`}
</Text>
  <Text sx={{"fontSize": "0.8em"}}>
  {`Sígueme en X`}
</Text>
</VStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://drive.google.com/file/d/1ZNFnMHxSc8tkZNUQZfa5s1HUogD3OTLX/view?usp=sharing`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "flex", "padding": "0.8em", "borderRadius": "1em"}}>
  <HStack>
  <ArrowForwardIcon/>
</HStack>
  <VStack>
  <Text sx={{"fontSize": "1em"}}>
  {`Resume`}
</Text>
  <Text sx={{"fontSize": "0.8em"}}>
  {`Descarga mi CV`}
</Text>
</VStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://twitch.tv/vanderfondi`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "flex", "padding": "0.8em", "borderRadius": "1em"}}>
  <HStack>
  <ArrowForwardIcon/>
</HStack>
  <VStack>
  <Text sx={{"fontSize": "1em"}}>
  {`Twitch`}
</Text>
  <Text sx={{"fontSize": "0.8em"}}>
  {`Directos de chill`}
</Text>
</VStack>
</Button>
</Link>
</VStack>
</VStack>
</Center>
  <VStack sx={{"marginBottom": "2em"}}>
  <ChakraImage src={`favicon.ico`}/>
  <Link as={NextLink} href={`https://reflexjs.org`} sx={{"target": "_blank", "textDecoration": "none", "_hover": {}}}>
  {`Made with Reflex`}
</Link>
  <Text>
  {`© Developed by Gerard Bourguett from Chile. 2021 - 2023`}
</Text>
</VStack>
</Box>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}

import reflex as rx

from portfolio.components.styles.styles import Size as Size
from portfolio.components.botones_sociales import botones_sociales as botones_sociales
from portfolio.components.about_me import about_me as about_me


def header() -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.avatar(
                name="Gerard Bourguett",
                src="https://avatars.githubusercontent.com/u/23157007?v=4",
                size="xl",
            ),
            rx.vstack(
                rx.heading("Gerard Bourguett", size="lg"),
                rx.text(
                    "Ingeniero de Software / Software Engineer",
                    margin_top="0px !important",
                ),
                rx.hstack(
                    botones_sociales("https://x.com/vanderfondi"),
                    botones_sociales("https://x.com/vanderfondi"),
                    botones_sociales("https://x.com/vanderfondi"),
                ),
                align_items="start",
            ),
        ),
        rx.flex(
            about_me("Fullstack", "Developer"),
            rx.spacer(),
            about_me("+2", "años de experiencia"),
            rx.spacer(),
            about_me("Desarrollo", "y Administración de Sistemas"),
            width="100%",
        ),
        rx.text(
            "Ingeniero en Informática egresado de la Universidad del Biobío con experiencia en Fullstack development y soporte para importantes empresas como BancoEstado, Mundo Pacífico, Mercado Público, CADEM, el Poder Judicial y Servicio Electoral. He sido parte de equipos multidisciplinarios en temas relacionados con el desarrollo de telecomunicaciones, continuidad operativa y ofimática. Mi enfoque se orienta hacia la obtención de resultados, siendo proactivo, innovador y resolutivo. Poseo habilidades destacadas de productividad, capacidad de adaptación rápida a diversos contextos laborales, incluyendo situaciones de contingencia y alta presión. Cuento con conocimientos en Angular, React, HTML, CSS, Laravel, SQL y Python. Actualmente estoy en búsqueda de desafiantes oportunidades para aplicar mis habilidades y contribuir al éxito de su organización.",
            spacing=Size.LARGE.value,
            align_items="start",
        ),
    )

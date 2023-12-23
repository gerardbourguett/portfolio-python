import reflex as rx
from portfolio.components.botones import botones
from portfolio.components.heading import heading


def links() -> rx.Component:
    return rx.vstack(
        heading("Links"),
        botones("GitHub", "Mis repositorios", "https://github.com/gerardbourguett"),
        botones(
            "LinkedIn", "Mi Linkedin", "https://www.linkedin.com/in/gerard-bourguett/"
        ),
        botones("Email", "Contáctame!", "mailto:gerard.bourguett@gmail.com"),
        botones("Twitter", "Sígueme en X", "https://twitter.com/vanderfondi"),
        botones(
            "Resume",
            "Descarga mi CV",
            "https://drive.google.com/file/d/1ZNFnMHxSc8tkZNUQZfa5s1HUogD3OTLX/view?usp=sharing",
        ),
        botones("Twitch", "Directos de chill", "https://twitch.tv/vanderfondi"),
        width="100%",
    )

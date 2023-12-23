import reflex as rx
import portfolio.components.styles.styles as styles


def botones_sociales(url: str) -> rx.Component:
    return rx.link(
        rx.icon(tag="link"),
        href="",
        is_external=True,
    )

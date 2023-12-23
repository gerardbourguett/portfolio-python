import reflex as rx
import portfolio.components.styles.styles as styles


def heading(text: str) -> rx.Component:
    return rx.heading(
        text,
        style=styles.heading_style,
    )

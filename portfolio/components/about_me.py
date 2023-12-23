import reflex as rx
import portfolio.components.styles.styles as styles
from portfolio.components.styles.styles import Size as Size


def about_me(title: str, body: str) -> rx.Component:
    return rx.box(
        rx.span(title, color="red", font_weight="bold"),
        f" {body}",
        font_size=Size.MEDIUM.value,
        padding=Size.MEDIUM.value,
    )

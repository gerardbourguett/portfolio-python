import reflex as rx
from portfolio.components.styles.styles import Size as Size


def navbar() -> rx.Component:
    return rx.hstack(
        rx.text("GerardABC.cloud"),
        position="sticky",
        bg="black",
        padding_x=Size.MEDIUM.value,
        padding_y=Size.SMALL.value,
        color="white",
        z_index=999,
        top=0,
    )

import reflex as rx
import datetime

from portfolio.components.styles.styles import Size as Size

year = datetime.date.today().year


def footer() -> rx.Component:
    return rx.vstack(
        rx.image(
            src="favicon.ico",
        ),
        rx.link("Made with Reflex", href="https://reflexjs.org", target="_blank"),
        rx.text(
            f"© Developed by Gerard Bourguett from Chile. 2021 - {year}",
        ),
        margin_bottom=Size.LARGE.value,
    )

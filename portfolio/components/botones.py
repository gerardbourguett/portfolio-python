import reflex as rx
import portfolio.components.styles.styles as styles


def botones(title: str, body: str, url: str) -> rx.Component:
    return rx.link(
        rx.button(
            rx.hstack(
                rx.icon(tag="arrow_forward"),
            ),
            rx.vstack(
                rx.text(title, style=styles.button_title_style),
                rx.text(
                    body,
                    style=styles.button_subtitle_style,
                ),
            ),
        ),
        href=url,
        is_external=True,
        width="100%",
    )

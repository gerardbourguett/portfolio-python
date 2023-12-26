import reflex as rx
from portfolio.components.navbar import navbar
from portfolio.views.header.header import header
from portfolio.views.links.links import links
from portfolio.components.footer import footer
from portfolio.views.projects.projects import projects

import portfolio.components.styles.styles as styles


class State(rx.State):
    pass


def index() -> rx.Component:
    return rx.box(
        navbar(),
        rx.center(
            rx.vstack(
                header(),
                projects(),
                links(),
                max_width=styles.MAX_WIDTH,
                width="100%",
                margin_y=styles.Size.LARGE.value,
            ),
        ),
        footer(),
    )


app = rx.App(
    style=styles.BASE_STYLE,
)
app.add_page(index)
app.compile()

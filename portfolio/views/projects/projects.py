import reflex as rx

from portfolio.components.styles.styles import Size as Size


def projects() -> rx.Component:
    return (
        (
            rx.box(
                rx.heading("Proyectos", size="xl"),
                rx.accordion(
                    rx.accordion_item(
                        rx.accordion_button(
                            rx.heading("API Mercado Público", size="lg"),
                            rx.accordion_icon(),
                        ),
                        rx.accordion_panel(
                            rx.text(
                                "Web que consume la API de Mercado Público. Permite visualizar las licitaciones de Chile, filtrarlas y ordenarlas. Por limitaciones de la API, no permite licitar desde la API"
                            ),
                            rx.heading("Tecnologías", size="md"),
                            rx.unordered_list(
                                rx.list_item("AngularJS"),
                                rx.list_item("Angular Material"),
                                rx.list_item("Datatable"),
                                rx.list_item("Typescript"),
                                rx.list_item("Axios"),
                            ),
                            rx.link(
                                rx.button("Ver en GitHub"),
                                href="https://github.com/gerardbourguett/api-mercado-publico",
                                is_external=True,
                            ),
                        ),
                    ),
                    rx.accordion_item(
                        rx.accordion_button(
                            rx.heading("Agenda para Audiencias", size="lg"),
                            rx.accordion_icon(),
                        ),
                        rx.accordion_panel(
                            rx.text(
                                "Web para realizar agendamientos de audiencias para diversos tribunales de Chile. Permite agendar, cancelar y reagendar audiencias. Además, permite visualizar las audiencias agendadas por día, semana y mes. Antes de hacer agendamientos se debe iniciar sesión, y debe ajustarse por tribunal, tipos de audiencias y por magistrados."
                            ),
                            rx.heading("Tecnologías", size="md"),
                            rx.unordered_list(
                                rx.list_item("Laravel"),
                                rx.list_item("HTML"),
                                rx.list_item("CSS"),
                                rx.list_item("Bootstrap 4"),
                                rx.list_item("MySQL"),
                            ),
                            rx.link(
                                rx.button("Ver en GitHub"),
                                href="https://github.com/gerardbourguett/calendario",
                                is_external=True,
                            ),
                        ),
                    ),
                ),
            ),
        ),
    )

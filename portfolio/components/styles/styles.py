from enum import Enum
import reflex as rx


# Constantes
MAX_WIDTH = "1000px"
PADDING = "1em"


# Sizes
class Size(Enum):
    SMALL = "0.8em"
    MEDIUM = "1em"
    LARGE = "2em"
    XLARGE = "4em"
    XXLARGE = "8em"
    XXXLARGE = "16em"


# Styles

BASE_STYLE = {
    rx.Button: {
        "width": "100%",
        "height": "100%",
        "display": "flex",
        "padding": Size.SMALL.value,
        "border_radius": Size.MEDIUM.value,
    },
    rx.Link: {"text_decoration": "none", "_hover": {}},
}

button_title_style = dict(
    font_size=Size.MEDIUM.value,
)

button_subtitle_style = dict(
    font_size=Size.SMALL.value,
)

heading_style = dict(
    size="lg",
    width="100%",
    padding_top=Size.MEDIUM.value,
)

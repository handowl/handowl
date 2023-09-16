import menu from "../files/menu.json" assert {type: 'json'};
document.addEventListener('DOMContentLoaded', on_page_loaded);

function on_page_loaded(event) {
    fill_content();
}

function fill_content() {
    console.log(menu);
}
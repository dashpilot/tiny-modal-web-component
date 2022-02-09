# tiny-modal-web-component

Lightweight and zero-dependancy modal web component made with Svelte

## Demo

<https://tiny-modal-web-component.vercel.app/>

## Usage

Just slot the modal-content within the web component, like so:

    <tiny-modal show="false" id="modal1">
        This is some modal content
    </tiny-modal>

To launch the modal, just add a data-attribute of `data-show="{id-of-modal}"` to your launch-button:

    <button data-show="modal1">Launch Modal</button>

To prevent the modal content from flashing onto the screen on page load, add the following style to your CSS:

    tiny-modal{
        display: none;
    }

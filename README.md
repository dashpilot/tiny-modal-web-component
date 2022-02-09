# tiny-modal-web-component

Lightweight modal web component made with Svelte

## Demo

<https://tiny-modal-web-component.vercel.app/>

## Usage

Grab the files from CDN:
```
<script src="https://cdn.jsdelivr.net/gh/dashpilot/tiny-modal-web-component@1.0.1/dist/assets/index.js"></script>
<script src="https://cdn.jsdelivr.net/gh/dashpilot/tiny-modal-web-component@1.0.1/dist/assets/vendor.js"></script>
```

Then just slot the modal-content within the web component, like so:

    <tiny-modal show="false" id="modal1">
        This is some modal content
    </tiny-modal>

To launch the modal, just add a data-attribute of `data-show="{id-of-modal}"` to your launch-button:

    <button data-show="modal1">Launch Modal</button>

To prevent the modal content from flashing onto the screen on page load, add the following style to your CSS:

    tiny-modal{
        display: none;
    }

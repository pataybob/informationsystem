function _createModal(options){
    const modal = document.createElement('div')
    modal.classList.add('vmodal')
    modal.insertAdjacentHTML('afterbegin', `html
        <div class="modal-overlay">
            <div class="modal-window">
                <div class="modal-header">
                    <span class="modal__title">Modal</span>
                    <span class="modal__close">&times;</span>
                </div>
                <div class="modal-body">
                    <p>Lorem ipsum dolor sit.</p>
                    <p>Lorem ipsum dolor sit.</p>
                </div>
                <div class="modal-footer">
                    <button>OK</button>
                    <button>Cancel</button>
                </div>
            </div>
        </div>
    `)
    document.body.appendChild(modal)
    return modal
        
}


$.modal = function(options) {
    const $modal= _createModal(options);



    return{
        open(){},
        close(){},
        destroy(){}
    }

}
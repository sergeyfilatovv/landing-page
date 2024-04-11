const elements = {
    form: document.getElementById('form'),
    formItemOne: document.getElementById('1'),
    formItemTo: document.getElementById('2'),
    formItemFri: document.getElementById('3'),
    formNodes: document.getElementById('form-group'),
    formModal: document.getElementById('form-modal'),
    overlay: document.getElementById('overlay')

}



function openModal(){
    elements.formModal.classList.add('form-modal--active')
    elements.overlay.classList.add('overlay--active')
}

function closeModal(){
    elements.formModal.classList.remove('form-modal--active')
    elements.overlay.classList.remove('overlay--active')
}

function cleanInput(){
    elements.formItemOne.value = ''
    elements.formItemTo.value = ''
    elements.formItemFri.value = ''

    Array.from(elements.formNodes.children).forEach((noda)=>{
        console.log(noda)
        noda.classList.remove('form__item--accent')
    })
}



export {elements, openModal, closeModal,cleanInput}
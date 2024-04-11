import * as view from '../mvc/view.js'

view.elements.form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const arrayNodes = Array.from(view.elements.formNodes.children)

    arrayNodes.forEach((noda)=>{
       if(noda.value !== '' ){
        noda.classList.add('form__item--accent')
       }
       else{
        noda.classList.add('form__item--error')
       }

       if(view.elements.formItemOne.value !== '' && view.elements.formItemTo.value !== '' && view.elements.formItemFri.value !== '' ){
        view.openModal()
       }
       
    })

})

view.elements.overlay.addEventListener('click',()=>{
    view.closeModal()
    view.cleanInput()
})




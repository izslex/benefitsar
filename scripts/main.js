function slider() {
    const orders = document.querySelector('#orders')

    orders.addEventListener('click', event => {
        const target = event.target.closest('.order')
        if (target === null) return
        const index = [...target.parentElement.children].indexOf(target)
        orders.dataset.current = index
    })
}

function online() {
    const online = document.querySelector('#online')
    const options = { hour: '2-digit', timeZone: 'Europe/Moscow' }
    const hours = parseInt((new Date()).toLocaleString('ru-RU', options))
    if (hours >= 9 && hours <= 20) online.dataset.active = ''
}

function form() {
    const form = document.querySelector('#form')
    const pages = [...form.children]

    pages.forEach((page, index) => {
        page.addEventListener('click', event => {
            const action = event.target.dataset.action
            if (action === 'next') {
                if (page.dataset.valid !== '') return
                if (index === pages.length - 1) return
                delete pages[index].dataset.active
                pages[index + 1].dataset.active = ''
            }
        })

        page.addEventListener('input', event => {
            if (event.target.type === 'text') {
                if (event.target.value.length) {
                    page.dataset.valid = ''
                } else {
                    delete page.dataset.valid
                }
            }
            if (event.target.type === 'radio') {
                page.dataset.valid = ''
            }
        })
    })

    form.querySelector('#amount')
        .addEventListener('keypress', event => {
            if (!/[0-9]/.test(event.key)) {
                event.preventDefault()
            }
        })
    
    form.addEventListener('submit', event => {
        event.preventDefault()
        // handle form submit
    })
}

slider()
online()
form()

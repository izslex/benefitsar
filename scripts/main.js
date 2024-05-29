function online() {
    const online = document.querySelector('#online')
    const options = { hour: '2-digit', timeZone: 'Europe/Moscow' }
    const hours = parseInt((new Date()).toLocaleString('ru-RU', options))
    if (hours >= 9 && hours <= 20) online.dataset.active = ''
}

online()

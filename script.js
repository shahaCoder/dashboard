const arr = [
    {
        title: 'Переписать проект на Vue 3',
        description: 'Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
        date: 2022,
        time: '12:01',
        isDone: 'Выполнено'
    },
    {
        title: 'Переписать проект на Vue 3',
        description: 'Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
        date: 2022,
        time: '12:01',
        isDone: 'Выполнено'
    },
    {
        title: 'Переписать проект на Vue 3',
        description: 'Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
        date: 2022,
        time: '12:01',
        isDone: 'Не выполнено'
    },
    {
        title: 'Переписать проект на Vue 3',
        description: 'Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
        date: 2022,
        time: '12:01',
        isDone: 'Не выполнено'
    },
    {
        title: 'Переписать проект на Vue 3',
        description: 'Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
        date: 2022,
        time: '12:01',
        isDone: 'Выполнено'
    },
    {
        title: 'Переписать проект на Vue 3',
        description: 'Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
        date: 2022,
        time: '12:01',
        isDone: 'Не выполнено'
    },
    {
        title: 'Переписать проект на Vue 3',
        description: 'Quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
        date: 2022,
        time: '12:01',
        isDone: 'Выполнено'
    },
]

const table = document.querySelector('.table')
const tile = document.querySelector('.text')


table.onclick = () => {
    tbl.style.display = 'block'
    place2.style.display = 'none'
    tile.style.color = 'black'
    table.style.color = 'blue'
    reload(arr)
}
tile.onclick = () => {
    tbl.style.display = 'none'
    place2.style.display = 'flex'
    tile.style.color = 'blue'
    table.style.color = 'black'
    reload2(arr)
}





const tbl = document.querySelector('table')
const place = document.querySelector('.tbd')
let thead = document.querySelector('thead')
function reload(array) {
    place.innerHTML = '' 
    thead.style.opacity = '1'
    for(let item of array) {
        place.innerHTML += `
        
        <tbody>
                    <tr>
                        <td class="tt">${item.title}</td>
                        <td class="text">${item.description}</td>
                        <td>${item.date}</td-text>
                        <td>${item.time}</td>
                        <td>${item.isDone}</td>
                    </tr>
                </tbody>
        
        
        `
    }
}
reload(arr)

let place2 = document.querySelector('.flex-cont')

function reload2(array2) {
    place2.innerHTML = '' 
    for(let item of array2){
        place2.innerHTML += `
        <div class="containertwo">
                <h1 class="rewrite">${item.title}</h1>
                <p class="some-text">${item.description}</p>
                <div class="bottom-block">
                    <p>${item.date}</p>
                    <p>${item.time}</p>
                </div>
                <p>${item.isDone}</p>
            </div>
        
        `
    }
}

// reload2(arr)

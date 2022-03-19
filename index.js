function newImage(url){
    let image = document.createElement('img')
    image.src = url
    document.body.append(image)
    return image
}

function move(image) {
    image.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        image.style.left = left + 'px'
        image.style.bottom = bottom + 'px'
    }

    return {
        to: moveToCoordinates
    }
}

move(newImage('assets/green-character.gif')).to(100, 350)
move(newImage('assets/tree.png')).to(300, 250)
move(newImage('assets/pillar.png')).to(200, 550)
move(newImage('assets/pine-tree.png')).to(200, 100)
move(newImage('assets/crate.png')).to(100, 200)
move(newImage('assets/well.png')).to(100, 175)

function newItem(url){
    let item = newImage(url)
    item.addEventListener('click', () => {
        item.remove()
        let inventoryItem = document.createElement('img')
        inventoryItem.src = url;
        inventory.append(inventoryItem)
    })
    return item
    }



newItem('assets/sword.png', 500, 555)
newItem('assets/shield.png', 500, 300)
newItem('assets/staff.png', 400, 500)

function newInventory(){
    let inventory = document.createElement('div')
    inventory.style.position = 'fixed'
    inventory.style.bottom = '0px';
    inventory.style.left = '0px'
    inventory.style.width = '100%'
    inventory.style.height = '100px'
    inventory.style.display = 'flex'
    inventory.style.flexDirection = 'row'
    inventory.style.alignItems = 'center'
    inventory.style.justifyContent = 'space-evenly'
    inventory.style.border = '2px solid black'
    inventory.style.backgroundColor = 'brown'
    document.body.append(inventory)
    return inventory
}

const inventory = newInventory()


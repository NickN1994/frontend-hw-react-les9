function soldTV (inventory) {

    let tvcounter = 0;

    for (let i = 0; i < inventory.length; i++) {
        tvcounter = tvcounter + inventory[i].sold;

    }
    return tvcounter
}

export default soldTV;
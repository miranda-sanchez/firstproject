const band = {
    vocals: 'Robert Plant',
    guitar: 'Jimmy Page',
    bass: 'John Paul Jhones',
    drums: 'John Bonham'
};

function sings ({vocals}){
    return `${vocals} sings`
}

console.log(sings(band));
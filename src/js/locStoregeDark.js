function save(key , value){
    try{
const sterializedData = JSON.stringify(value)
localStorage.setItem(key, sterializedData)
    }

    catch (err) {
console.log(err)
    }
}

function load(key){
    try{

const serializedState = localStorage.getItem(key)
return serializedState === null ? undefined : JSON.parse(serializedState)


    }

    catch (err) {
console.log(err)
    }
}


export{ save, load }
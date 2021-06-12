let arr = ['Sun','Moon','Star',['Canada','Nigeria','Japan'],['red','blue','green']]

const numGen = () => {
    let num = Math.floor(Math.random() * 3)
    return num
}

const chooseStory = (number, arr) => {
    //console.log(number)
    if(number===0){
        let num = Math.floor(Math.random() * 3)
        return `Beautiful ${arr[num]}`
    }else if(number===1){
        //let num = Math.floor(Math.random() * 3) + 3
        let nextNum = Math.floor(Math.random() * 3)
        return `Ugly ${arr[3][nextNum]}`
    }else
        return `Bright ${arr[2]}`
}

console.log(chooseStory(numGen(),arr))
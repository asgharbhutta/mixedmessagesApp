let arr = ['Sun','Moon','Star',['Canada','Nigeria','Japan'],['red','blue','green']]

const numGen = () => {
    let num = Math.floor(Math.random() * 3)
    return num
}

const chooseStory = (number, arr) => {
    let num = Math.floor(Math.random() * 3)
    if(number===0){
        return `The ${arr[num]} is perfect in ${arr[3][num]} and the stars are ${arr[4][num]}`
    }else if(number===1){
        return `Goodbye ${arr[num]}, this country now belongs to ${arr[3][num]}`
    }else
        return `No more ${arr[num]} it's flag has changed to the color ${arr[4][num]}`
}

console.log(chooseStory(numGen(),arr))
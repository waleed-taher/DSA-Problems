const minDiff = (nums) => {
    let final = nums.map(num => {
        let arr= new Array()
        arr.push(num)
        return arr
    })
    let possComb = []
    let sum = []
    for(let i = 0; i < final.length; i++){
        for(let j = final.length-1; j>i; j--){
            if(possComb.includes(final[i].concat[final[j]]) && possComb.includes(final[j].concat(final[i])) ){
                console.log('yes')
            }
            possComb.push(final[i].concat(final[j]))
        }
        
        
    }
    console.log(possComb, )

}   

minDiff([3,9,7,3])
const ages = [1, 5, 9, 23, 56, 10, 47, 70, 10, 19, 23, 18]

const adults = ages.filter(function(age){
    return age >= 18
})

const children = ages.filter(function(age){
    return age < 18
})

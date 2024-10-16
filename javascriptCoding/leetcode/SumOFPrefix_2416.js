function sumOfPrefix(str) {
    const prefixCount={};

    //Count all prefixs
    for(const word of str)
    {
        let prefix ="";
        for(const char of word)
        {
            prefix+=char;
            if(!prefixCount[prefix])
            {
                prefixCount[prefix]=0;
            }
            prefixCount[prefix]++;
        }
    }

    //calculate score
    return str.map(word=>{
        let score =0;
        let prefix=""
        for(const char of word)
        {
            prefix+=char;
            score+=prefixCount[prefix];
        }
        return score;
    })
}
console.log(sumOfPrefix(["abc", "ab", "bc", "b"]));
//https://leetcode.com/problems/uncommon-words-from-two-sentences/description/


var uncommonFromSentences = function(s1, s2) {

    const map = new Map();
    for(const words of s1.split(" "))
    {
        if(!map.has(words))
        {
            map.set(words, 1)
        }
        else
        {
            map.set(words, map.get(words)+1);
        }
    }

    for(const words of s2.split(" "))
    {
        if(!map.has(words))
        {
            map.set(words, 1)
        }
        else
        {
            map.set(words, map.get(words)+1);
        }
    }

    const res=[];
    for(const [words, count] of map)
    {
        if(count===1)
        {
            res.push(words);
        }
    }

    return res;
};

console.log(uncommonFromSentences("this apple is sweet", "this apple is sour"));




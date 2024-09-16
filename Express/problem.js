function ListNode(val,next=null)
{
    this.val = val;
    this.next = next;
}

var addTwoNumber = function(l1, l2)
{
    let dummy = new ListNode();
    let current =dummy;
    let carry=0;

    while (l1 !==null||l2 !==null||carry !==0)
    {
        let sum=carry;
        if(l1 !==null)
        {
            sum+= l1.val;
            l1=l1.next;
     }

        if(l2 !== null)
        {
            sum+= l2.val;
            l2=l2.next;
        }

        carry = Math.floor(sum/10);
        current.next = new ListNode(sum%10);
        current =current.next;
    }

    return dummy.next
}


console.log(addTwoNumber("1", "2"));
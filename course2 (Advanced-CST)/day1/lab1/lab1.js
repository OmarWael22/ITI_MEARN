lnkdLstObj = {
    data: [],
    push: function (newData) {
        var length = this.data.length;
        if ( length == 0)
            return this.data.push({ val: newData });
        var lastVal = this.data[length - 1].val;
        if (newData <= lastVal)
            throw new Error("the value must be greater than the last value");
        else
            return this.data.push({ val: newData });
    },
    enqueue: function (newData) {
        var length = this.data.length;
        if ( length == 0)
            return this.data.push({ val: newData });
        var firstVal = this.data[0].val;
        if (newData >= firstVal)
            throw new Error("the value must be smaller than the first value");
        else
            return this.data.unshift({ val: newData });
    },
    dequeue: function () {
        if (this.data.length == 0)
            throw new Error("can't dequeue from empty array");
        return this.data.shift().val
    },
    insert: function (newData, idx) {
        var length = this.data.length;
        // 1. check boundries
        if (idx < 0 || idx > length)
            throw new Error("invalid index");
        // insert at head
        if (idx == 0) {
            if (length == 0)
                return this.enqueue(newData);
            else {
                var firstElm = this.data[idx].val
                if (newData < firstElm)
                    return this.enqueue(newData);
                else
                    throw new Error("The value must be smaller than the first element");
            }
        }
        // insert at tail
        if (idx == length) {
            var tail = this.data[idx-1].val;
            if (newData > tail)
                return this.push(newData);
            else
                throw new Error("The value must be greater than the last element");
        }
        // insert in middle
        if (newData > this.data[idx - 1].val && newData < this.data[idx].val)
            return this.data.splice(idx, 0, { val: newData });
        else
            throw new Error("the value must be less than the value of given index");

    },
    pop: function () {
        if (this.data.length == 0)
            throw new Error("can't pop from empty function")
        return this.data.pop().val;
    },
    remove : function (dataValue) {
        var found = this.data.find( (obj) => obj.val == dataValue);
        if (!found)
            throw new Error("the value is not found in the list");
        else
            this.data = this.data.filter(function (obj) {
            return obj.val != dataValue;
            });    
        
    },
    display: function () { 
        var text = ""
        this.data.forEach(element => {
            text += JSON.stringify(element) + " ";
            });
        console.log(text);
    }

};
lnkdLstObj.push(1);
lnkdLstObj.push(3);
// lnkdLstObj.insert(2,1)
// lnkdLstObj.insert(4, 0)
// lnkdLstObj.insert(7,2);
lnkdLstObj.enqueue(0)
// lnkdLstObj.pop()
lnkdLstObj.remove(1)
lnkdLstObj.remove(3);
lnkdLstObj.display()
console.log(lnkdLstObj);

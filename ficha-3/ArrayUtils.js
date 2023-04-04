module.exports = {
    isEmpty:function (array) {
        return array.length == 0;
    },

    max:function (maxNumber) {
            var maxNumber = 0;
            for (let i = 0; i < numbers.length; i++) {
              if (numbers[i] > maxNumber) {
                maxNumber = numbers[i];
              }
            }
            return maxNumber;
    },

    min: function (numbers) {
        var minNumber = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
          if (numbers[i] < minNumber) {
            minNumber = numbers[i];
          }
        }
        return minNumber;
    },

    average:function(array){
        var soma =0;
        for (let i = 0; i < array.length;i++){
            soma += array[i];
        }
        return soma / array.length;
    },

    indexOf:function(array, value){
        for (let i = 0; i < array.length; i++) {
            if (array[i] == value) {
                return i;
            }
        return -1;            
        }
    },

    subArray: function (array, startIndex, endIndex){
        let subA = [];
        for (let i = startIndex ; i <= array[endIndex]; i++) {
                subA.push(array[i]);

            }            
    },

    isSameLength: function(a1, a2){
        return a1.length == a2.length;
    },

    reverse: function(array){
        let a1 = [];
        for (let i = array.length -1; i >= 0 ; i--) {
            a1.push(array[i]);
        }
        return a1;
    },

    swap:function(array, index1, index2){
        var tmp = array[index1];
        array[index1] = array[index2];
        array[index2]= tmp;    
        return array;
    },

    contains:function(array,value){
        return this.indexOf(array,value) != -1;
    },

    concatenate:function(array1,array2){
        for (let i = 0; i < array2.length; i++) {
            array1.push(array2[i]);
        }
        return array1 ;
    }

    
};
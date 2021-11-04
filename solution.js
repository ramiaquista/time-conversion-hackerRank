function timeConversion(s) {
    const format = s.slice(8,10)
    const arr = s.slice(0,8).split(':');
    
    if (format === 'PM') {
        if(arr[0] === '12') {
          arr[0] ='12'
        } else {
          arr[0] = Number(arr[0]) + 12;
        }
    } else {
        if(arr[0] === '12') {
            arr[0] = '00';
        }
    }
    
    return arr.join(':');

}

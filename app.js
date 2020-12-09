setInterval(function test(){
    let d = new Date();
    let timeDom = document.getElementById('time');
    let ampm = 'am';
    let hour = d.getHours();
    if(hour > 12){
        hour = hour - 12;
        ampm = 'pm';
    }
    if(hour < 10) hour = '0'+ hour;
    let min = d.getMinutes();
    if(min < 10) min = '0'+ min;
    let opacity = 0;
    if(d.getSeconds() % 2 == 0) opacity = 1;
    timeDom.innerHTML = hour + '<span style = "opacity: '+ opacity +'">:</span>' + min + "<small>"+ ampm +"</small>";
    let weekDay = [
        'sunday',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday'
    ];
    
    let month = [
        'jan',
        'feb',
        'mar',
        'apr',
        'may',
        'jun',
        'july',
        'aug',
        'sep',
        'act',
        'nov',
        'dec'
    ];
    document.querySelector('.day').innerHTML = weekDay[d.getDay()] + ', ' + month[d.getMonth()] + d.getDate() +', ' + d.getFullYear();
},1000);

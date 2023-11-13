import data from './data.json' assert {type: 'json'};

let date = new Date();
let day = date.getDay();

let bars = data.map((el, i) => {
  //set index == day
  i++;
  if(i == 7){
    i = 0
  }; 

  return `
  <div class="bar ${el.day}">
    <p class="amount">$${el.amount}</p>
    <div class="bar-height" style="height: ${el.amount * 3}px;background-color: ${(i == day) ? 'hsl(186, 34%, 60%)' : 'hsl(10, 79%, 65%)'}"></div>
    <small>${el.day}</small>
  </div>
  `
})


$('.graph').html(bars);



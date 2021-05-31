'usse strict' ;
let DH =['6:00AM','7:00AM','8:00AM','9:00AM','10:00AM','11:00AM','12:00PM','1:00PM','2:00PM','3:00PM','4:00PM','5:00PM','6:00PM','7:00PM','total:'];
let gvar=document.getElementById('main');
function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}


const Seattle ={
  shoploc: 'Seattle',
  min:23 ,
  max:65 ,
  averagecookies:6.3 ,
  cookPerHour :[],
  Avegcook:[],
  total :0 ,

  cusPerHour :function(){
    for(let i=0;i<DH.length;i++){
      let RD=randomValue(this.min,this.max);
      this.cookPerHour.push(RD);
    }
    console.log(this.cookPerHour);
  } ,

  numcook :function(){
    let numofcookies=this.cookPerHour *Math.ceil( this.averagecookies) ;
    this.Avegcook.push(numofcookies);
    console.log(this.Avegcook);
  } ,

  totalcook :function(){

    for(let i=0;i<this.Avegcook.length;i++){

      this.total=this.total + this.cookPerHour[i];
    }
    this.cookPerHour.push(this.total);


  },
  render:function(){
    let h3=gvar.appendChild(document.createElement('h3'));
    h3.textContent=this.shoploc;

    let ul=gvar.appendChild(document.createElement('ul'));
    for(let i=0;i<DH.length;i++){
      let li=document.createElement('li');
      ul.appendChild(li);
      li.textContent=`${DH[i]} ${this.cookPerHour[i]}`;
    }

  }




};

Seattle.cusPerHour();
Seattle.numcook();
Seattle.totalcook();
Seattle.render();

//  Tokyo


const Tokyo ={
  shoploc: 'Tokyo',
  min:3 ,
  max:24 ,
  averagecookies:1.2 ,
  cookPerHour :[],
  Avegcook:[],
  total :null ,

  cusPerHour :function(){
    for(let i=0;i<DH.length;i++){
      let RD=randomValue(this.min,this.max);
      this.cookPerHour.push(RD);
    }
    console.log(this.cookPerHour);
  } ,

  numcook :function(){
    let numofcookies=this.cookPerHour * Math.ceil(this.averagecookies) ;
    this.Avegcook.push(numofcookies);
    console.log(this.Avegcook);
  } ,

  totalcook :function(){

    for(let i=0;i<this.Avegcook.length;i++){

      this.total=this.total + this.cookPerHour[i];
    }
    this.cookPerHour.push(this.total);


  },
  render:function(){
    let h3=gvar.appendChild(document.createElement('h3'));
    h3.textContent=this.shoploc;

    let ul=gvar.appendChild(document.createElement('ul'));
    for(let i=0;i<DH.length;i++){
      let li=document.createElement('li');
      ul.appendChild(li);
      li.textContent=`${DH[i]} ${this.cookPerHour[i]}`;
    }

  }




};

Tokyo.cusPerHour();
Tokyo.numcook();
Tokyo.totalcook();
Tokyo.render();


// Dubai
const Dubai={
  shoploc: 'Dubai',
  min:11 ,
  max:38 ,
  averagecookies:3.7 ,
  cookPerHour :[],
  Avegcook:[],
  total :null ,

  cusPerHour :function(){
    for(let i=0;i<DH.length;i++){
      let RD=randomValue(this.min,this.max);
      this.cookPerHour.push(RD);
    }
    console.log(this.cookPerHour);
  } ,

  numcook :function(){
    let numofcookies=this.cookPerHour *Math.ceil(this.averagecookies) ;
    this.Avegcook.push(numofcookies);
    console.log(this.Avegcook);
  } ,

  totalcook :function(){

    for(let i=0;i<this.Avegcook.length;i++){

      this.total=this.total + this.cookPerHour[i];
    }
    this.cookPerHour.push(this.total);


  },
  render:function(){
    let h3=gvar.appendChild(document.createElement('h3'));
    h3.textContent=this.shoploc;

    let ul=gvar.appendChild(document.createElement('ul'));
    for(let i=0;i<DH.length;i++){
      let li=document.createElement('li');
      ul.appendChild(li);
      li.textContent=`${DH[i]} ${this.cookPerHour[i]}`;
    }

  }




};

Dubai.cusPerHour();
Dubai.numcook();
Dubai.totalcook();
Dubai.render();

// Paris
const Paris={
  shoploc: 'Paris',
  min:20 ,
  max:38 ,
  averagecookies:2.3 ,
  cookPerHour :[],
  Avegcook:[],
  total :null ,

  cusPerHour :function(){
    for(let i=0;i<DH.length;i++){
      let RD=randomValue(this.min,this.max);
      this.cookPerHour.push(RD);
    }
    console.log(this.cookPerHour);
  } ,

  numcook :function(){
    let numofcookies=this.cookPerHour *Math.ceil(this.averagecookies) ;
    this.Avegcook.push(numofcookies);
    console.log(this.Avegcook);
  } ,

  totalcook :function(){

    for(let i=0;i<this.Avegcook.length;i++){

      this.total=this.total + this.cookPerHour[i];
    }
    this.cookPerHour.push(this.total);


  },
  render:function(){
    let h3=gvar.appendChild(document.createElement('h3'));
    h3.textContent=this.shoploc;

    let ul=gvar.appendChild(document.createElement('ul'));
    for(let i=0;i<DH.length;i++){
      let li=document.createElement('li');
      ul.appendChild(li);
      li.textContent=`${DH[i]} ${this.cookPerHour[i]}`;
    }

  }




};

Paris.cusPerHour();
Paris.numcook();
Paris.totalcook();
Paris.render();

// Lima
const Lima={
  shoploc: 'Lima',
  min:2 ,
  max:16 ,
  averagecookies:4.6 ,
  cookPerHour :[],
  Avegcook:[],
  total :null ,

  cusPerHour :function(){
    for(let i=0;i<DH.length;i++){
      let RD=randomValue(this.min,this.max);
      this.cookPerHour.push(RD);
    }
    console.log(this.cookPerHour);
  } ,

  numcook :function(){
    let numofcookies=this.cookPerHour *Math.ceil(this.averagecookies) ;
    this.Avegcook.push(numofcookies);
    console.log(this.Avegcook);
  } ,

  totalcook :function(){

    for(let i=0;i<this.Avegcook.length;i++){

      this.total=this.total + this.cookPerHour[i];
    }
    this.cookPerHour.push(this.total);


  },
  render:function(){
    let h3=gvar.appendChild(document.createElement('h3'));
    h3.textContent=this.shoploc;

    let ul=gvar.appendChild(document.createElement('ul'));
    for(let i=0;i<DH.length;i++){
      let li=document.createElement('li');
      ul.appendChild(li);
      li.textContent=`${DH[i]} ${this.cookPerHour[i]}`;
    }

  }




};

Lima.cusPerHour();
Lima.numcook();
Lima.totalcook();
Lima.render();




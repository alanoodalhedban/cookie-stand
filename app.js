'usse strict' ;
let DH =['6:00AM','7:00AM','8:00AM','9:00AM','10:00AM','11:00AM','12:00PM','1:00PM','2:00PM','3:00PM','4:00PM','5:00PM','6:00PM','7:00PM'];
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
  total :null ,

  cusPerHour :function(){
    for(let i=0;i<DH.length;i++){
      let RD=randomValue(this.min,this.max);
      this.cookPerHour.push(RD);
    }
    console.log(this.cookPerHour);
  } ,

  numcook :function(){

    for(let i=0;i<this.cookPerHour.length;i++){

    let numofcookies=Math.ceil(this.cookPerHour[i] *this.averagecookies) ;
    this.Avegcook.push(numofcookies);
    }
    console.log(this.Avegcook);
  } ,

  totalcook :function(){

    for(let i=0;i<this.Avegcook.length;i++){

      this.total=this.total + this.Avegcook[i];
    }
    this.Avegcook.push(this.total);
   console.log(this.total)

  },
  render:function(){
    let h3=gvar.appendChild(document.createElement('h3'));
    h3.textContent=this.shoploc;

    let ul=gvar.appendChild(document.createElement('ul'));
    for(let i=0;i<DH.length;i++){
      let li=document.createElement('li');
      ul.appendChild(li);
      li.textContent=`${DH[i]} ${this.Avegcook[i]}`;
    }
    let tli=document.createElement('li');
    ul.appendChild(tli);
    tli.textContent=`total ${this.total}`;
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
    for(let i=0;i<this.cookPerHour.length; i++){
      let numofcookies=Math.ceil(this.cookPerHour[i] *this.averagecookies) ;
      this.Avegcook.push(numofcookies);
    }
    
    console.log(this.Avegcook);
  } ,

  totalcook :function(){

    for(let i=0;i<this.Avegcook.length;i++){

      this.total=this.total + this.Avegcook[i];
    }
    this.Avegcook.push(this.total);
    console.log(this.total)


  },
  render:function(){
    let h3=gvar.appendChild(document.createElement('h3'));
    h3.textContent=this.shoploc;

    let ul=gvar.appendChild(document.createElement('ul'));
    for(let i=0;i<DH.length;i++){
      let li=document.createElement('li');
      ul.appendChild(li);
      li.textContent=`${DH[i]} ${this.Avegcook[i]}`;
    }
    let tli=document.createElement('li');
    ul.appendChild(tli);
    tli.textContent=`total ${this.total}`;
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
    for(let i=0;i<this.cookPerHour.length;i++){
      let numofcookies=Math.ceil(this.cookPerHour[i] *this.averagecookies );
      this.Avegcook.push(numofcookies);
    }
    
    
    console.log(this.Avegcook);
  } ,

  totalcook :function(){

    for(let i=0;i<this.Avegcook.length;i++){

      this.total=this.total + this.Avegcook[i];
    }
    this.Avegcook.push(this.total);
    console.log(this.total)


  },
  render:function(){
    let h3=gvar.appendChild(document.createElement('h3'));
    h3.textContent=this.shoploc;

    let ul=gvar.appendChild(document.createElement('ul'));
    
    for(let i=0;i<DH.length;i++){
      let li=document.createElement('li');
      ul.appendChild(li);
      li.textContent=`${DH[i]} ${this.Avegcook[i]}`;
    }
    let tli=document.createElement('li');
    ul.appendChild(tli);
    tli.textContent=`total ${this.total}`;
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
    for(let i=0;i<this.cookPerHour.length;i++){
      let numofcookies=Math.ceil(this.cookPerHour[i] *this.averagecookies) ;
      this.Avegcook.push(numofcookies);

    }
    
    console.log(this.Avegcook);
  } ,

  totalcook :function(){

    for(let i=0;i<this.Avegcook.length;i++){

      this.total=this.total + this.Avegcook[i];
    }
    this.Avegcook.push(this.total);
    console.log(this.total)


  },
  render:function(){
    let h3=gvar.appendChild(document.createElement('h3'));
    h3.textContent=this.shoploc;

    let ul=gvar.appendChild(document.createElement('ul'));
    for(let i=0;i<DH.length;i++){
      let li=document.createElement('li');
      ul.appendChild(li);
      li.textContent=`${DH[i]} ${this.Avegcook[i]}`;
    }
    let tli=document.createElement('li');
    ul.appendChild(tli);
    tli.textContent=`total ${this.total}`;
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
    for(let i=0;i<this.cookPerHour.length;i++){
      let numofcookies=Math.ceil(this.cookPerHour[i] * this.averagecookies) ;
      this.Avegcook.push(numofcookies);
    }
    
    console.log(this.Avegcook);
  } ,
  
  totalcook :function(){
  
    for(let i=0;i<this.Avegcook.length;i++){
  
      this.total=this.total + this.Avegcook[i];
    }
    this.Avegcook.push(this.total);
    console.log(this.total)
  
  
  },
  render:function(){
    let h3=gvar.appendChild(document.createElement('h3'));
    h3.textContent=this.shoploc;
  
    let ul=gvar.appendChild(document.createElement('ul'));
    for(let i=0;i<DH.length;i++){
      let li=document.createElement('li');
      ul.appendChild(li);
      li.textContent=`${DH[i]} ${this.Avegcook[i]}`;
    }
    let tli=document.createElement('li');
    ul.appendChild(tli);
    tli.textContent=`total ${this.total}`;
  }
  
  
  
  
};
  
Lima.cusPerHour();
Lima.numcook();
Lima.totalcook();
Lima.render();
  
  


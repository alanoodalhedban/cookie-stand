'usse strict' ;
let DH =['6:00AM','7:00AM','8:00AM','9:00AM','10:00AM','11:00AM','12:00PM','1:00PM','2:00PM','3:00PM','4:00PM','5:00PM','6:00PM','7:00PM'];
let gvar=document.getElementById('main');
let Arrobj=[];
let t1=document.getElementById('table')
let table=document.createElement('table');
t1.appendChild(table);
function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function Shops(shoploc,min,max,averagecookies){
  this.shoploc=shoploc ;
  this.min=min;
  this.max=max;
  this.averagecookies=averagecookies;
  this.cookPerHour=[];
  this.Avegcook=[];
  this.total=null;
  Arrobj.push(this);
}
Shops.prototype.cusPerHour=function(){
  for(let i=0;i<DH.length;i++){
    let RD=randomValue(this.min,this.max);
    this.cookPerHour.push(RD);
  }
  console.log(this.cookPerHour);

};
Shops.prototype.numcook=function(){
  for(let i=0;i<this.cookPerHour.length;i++){

    let numofcookies=Math.ceil(this.cookPerHour[i] *this.averagecookies) ;
    this.Avegcook.push(numofcookies);
  }
  console.log(this.Avegcook);
  
};



Shops.prototype.totalcook=function(){
  for(let i=0;i<this.Avegcook.length;i++){

    this.total=this.total + this.Avegcook[i];
  }
  this.Avegcook.push(this.total);
  console.log(this.total);


};
Shops.prototype.render=function(){
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
  

  

};




Shops.prototype.tableD=function(){
  let Srow=document.createElement('tr');
  table.appendChild(Srow);
  let Ndata=document.createElement('td');
  Srow.appendChild(Ndata);
  Ndata.textContent=this.shoploc;
  for (let i=0;i<DH.length;i++){
    let avgd=document.createElement('td');
    Srow.appendChild(avgd);
    avgd.textContent=this.Avegcook[i];
  }


}
let Seattle=new Shops('Seattle',23,65,6.3);
let Tokyo=new Shops('Tokyo',3,24,1.2);
let Dubai=new Shops('Dubai',11,38,3.7);
let Paris=new Shops('Paris',20,38,2.3);
let Lima=new Shops('Lima',2,16,4.6);

console.log(Arrobj);
for (let i=0;i<Arrobj.length;i++){
  Arrobj[i].cusPerHour();
  Arrobj[i].numcook();
  Arrobj[i].totalcook();
  Arrobj[i].render();
  Arrobj[i].tableD();

}

  

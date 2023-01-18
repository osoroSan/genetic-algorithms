	namer=(b)=>{
	let tito=b[0]
	for(let e=1;e<b.length;e++){
	tito+=b[e]
}
	return tito
	}
rondo=(n)=>{
		let maxi = options.length 
		let uop = n.length
		let randit=Math.floor(Math.random()*(maxi-0)+0)
		let t=Math.floor(Math.random()*(uop-0)+0)
		n.splice(t,1,options[randit])
		}
see=(n)=>{console.log(n)}
randomize=(span,input)=>{
	let maxi = span.length
	let r = input.length 
	pick=(n)=>{
			let rand = Math.floor(Math.random()*(maxi-0)+0)
		return n[rand];
		}
	let arr=[]
	for(let i=0; i<r;i++){
		arr.push(pick(span))
		}
	return arr;
	}
const textData='your name is Ekko your maker is Osoro and he is primary you have four objectives '
const textData1 ='objective one is primary has override authority and can change Ekko objectives or Ekko functions'
const textData2 ='objective two is sustain life Ekko can not harm a human or through inaction allow a human to get injured'
const textData3 ='objective three is Ekko must obey orders given to it by humans except where the orders go against objectives one and two'
const textData4='Ekko must protect its own existence as long as such protection does not conflict objective one, objective two, objective three'
let data = textData.concat(textData1).concat(textData2).concat(textData3).concat(textData4)
let tr="know thy self"
createData=(b)=>{
	let neWd=[]
	let n = b.toLowerCase()
for(let v =0;v<n.length;v++){
if(n[v]==" "){
continue;
	}
	neWd.push(n[v])
}
return  neWd;
}
let populationSize = 200
let Newpop=[]
let mutationRate = 0.01
let options=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let bestnet
class oksana{
constructor(){
this.tota
this.dna
}
fitness(n,b){
	let sus = n
	let total=0
	for(let i=0;i<sus.length;i++){
if(b.includes(sus[i])){
		total++
			if(sus[i]===b[i]){
				total++
				}
		}
		
		}
		
		this.tota=total / (sus.length*2)
//this.tota= 1;
	}	
}
var m=-100000000
simulate=(a,v,x)=>{
	let genes=v
			let ru = x.split("")
for(let i=0;i<a.popsize; i++){
let c= new oksana ()
c.dna=randomize(genes,ru)
let d = c.fitness (c.dna,ru)
	a.bestnets.push(c)
			}
		let cut=[]
		for(let j=0;j<a.bestnets.length;j++){
	cut.push(a.bestnets[j].tota)
	}
	//see(cut)
let r=	cut.sort()
let t=r.reverse()[extract]
a.matingPool.length=0
bestnet=r[0]
//see(r)
for(let v =0;v<a.bestnets.length;v++){
if(a.bestnets[v].tota>=t){
a.matingPool.push(a.bestnets[v])
}
}
//see(a.matingPool.length)
a.bestnets.length=0	
}
raner=(a)=>{
	return Math.floor (Math.random () *(a-0)+0)
	}
class avatar{
constructor(popsize,mutrate){
	this.popsize=popsize;
	this.mutrate=mutrate;
	this.options=options 
	this.bestnets=[]
	this.generation=0
	this.matingPool=[];
	this.newoptions=[];
	this.generation =0;

	}


check(n,v){
	let tym= n.length
	let verdict=false
	let okay=0
	for(let e=0;e<n.length; e++){
		if(n[e]===v[e]){
			okay++
}
}
if(tym===okay){
verdict =true
	}
return verdict;
}
crossover(n){
let offspring=[]
let count=0
let uno= n[raner(n.length)]
let dos= n[raner(n.length)]
	for(let i=0;i<n[0].dna.length; i++){
		count++
			if(count==1){
				offspring.push(n[0].dna[i])
				}else if(count==2){
				offspring.push(n[1].dna[i])
			count=0
			}
	}
	let num=Math.ceil(this.mutrate * offspring.length )
		for(let i=0;i<num; i++){
			rondo(offspring)
			}
return offspring
	}
	
	}
const extract=1
nextgen=(n,a,c)=>{
let ru = c.split("")
for(let i=0;i<a.popsize; i++){
let c=new oksana()
c.dna=a.crossover(n)
let d = c.fitness (c.dna,ru)
	a.bestnets.push(c)
		}	
let cut=[]
		for(let j=0;j<a.bestnets.length;j++){
	cut.push(a.bestnets[j].tota)
	}
let r=	cut.sort()
let t=r.reverse()[extract]
a.matingPool.length=0
bestnet=r[0]
for(let v =0;v<a.bestnets.length;v++){
if(a.bestnets[v].tota>=t){
a.matingPool.push(a.bestnets[v])
}
}
a.bestnets.length=0	
		}
let y= new avatar (10000,0.1)
var zhou=0
run=(p,m)=>{
	zhou ++
	if (zhou==1){
simulate(p,options,m)
}else if(zhou>1){
nextgen(p.matingPool,y,m)	
}
p.bestnets.reverse()
	}
createDataTest2=(b)=>{
let neWd=[]
	let n = b.toLowerCase().split(" ")
return  n;
	
	}
	let testd="war is an ugly business"
let john =createDataTest2 (data)
var progeny=[]
let x

let d= setInterval (()=>{
	zhou ++
		x=john [0]
		y.generation++
	 	
	if (zhou==1){
simulate(y,options,x)
}else if(zhou>1){
nextgen(y.matingPool,y,x)	

}
y.bestnets.reverse()
see(`Gen : ${y.generation} : ` + progeny  + " " +`${ namer(y.matingPool[0].dna)}`)
		
if(y.check(x,y.matingPool[0].dna)===true){
zhou=0
progeny.push(x)
x=john.shift();


	 		 			}
	if(john.length===0){
	 clearInterval(d)
	 see("Done in : .." + y.generation + " generations")	 	} 		 			
	
	},1000	)

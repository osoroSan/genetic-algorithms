c=(v)=>{console.log(v)}
add=(a,b)=>{
	let d=a[0]+b[0]
	let f=a[1]+b[1]
	return [d,f]
	}
	sub=(a,b)=>{
	let d=a[0]-b[0]
	let f=a[1]-b[1]
	return [d,f]
	}
	mag=(a,b)=>{
	let d=a[0]*b
	let f=a[1]*b
	return [d,f]
	}
	score=(a,b)=>{
		let d
	//	c(b)
		let g=sub(b,a)
		d=Math.abs(g[0])+Math.abs(g[1])
	return 1/d
	}
var warheads=[]
var pool=[]
const populationSize =5000
const mutationRate = 0.01
var tango =[200,10]
const life=400
const extract=5
const champions=[]
var height=500
var width=500
class rocket {
	constructor (){
		this.ac=[0,0]
	 this.pos=[width/2,height/2]
  this.vel=[0,0]
  this.dna
  this.rating
	
		}
	update(){
	for(let i =0;i<this.dna.length;i++){
	this.ac=add(this.ac,mag(this.dna[i],0.1))
	this.vel=add(this.vel,this.ac)
	let dos =add(this.pos,this.vel)
	this.pos=[Math.floor(dos[0]),Math.floor(dos[1])]
	this.ac=mag(this.ac,0)
	}
	//c(this.pos)
	}
fitness(f){
this.rating=score(this.pos,f)
	}
	
}
rand=(a,b)=>{
	 let d=Math.floor(Math.random()*(a-b)+b)
	let f=Math.floor(Math.random()*(a-b)+b)
	return [d,f]
	}

cdna=()=>{
	let zhou=[]
	for(let i =0;i<life;i++){
		zhou[i]=rand(5,-5)
		}
		return zhou
	}
init=(p)=>{
	for(let i =0;i<populationSize;i++){
		let x= new rocket()
		x.dna=cdna()
  x.update()
  x.fitness(p)
		warheads.push(x)
	}
	let cut=[]
	for(let j=0;j<warheads.length;j++){
	cut.push(warheads[j].rating)
	}
let r=	cut.sort()
let t=r.reverse()[extract]
pool.length =0
for(let v =0;v<warheads.length;v++){
	if(warheads[v]>=0.33){
		pool.push(warheads[v])
		pool.push(warheads[v])
		}else if(warheads[v].rating>=t){
pool.push(warheads[v].dna)
}
}

warheads.length=0
}
cross=(n)=>{
//c(n)
	let kid=[]
	let jun=Math.floor(Math.random()*(n.length-0)+0)
	let mun=Math.floor(Math.random()*(n.length-0)+0)
let xx=n[jun]
let xy=n[mun]
let count=0

	for(let i =0;i<xx.length;i++){
		count ++
			if(count==1){
				kid.push(xx[i])
				}else if(count==2){
					kid.push(xy[i])
					count=0
					}
		}
					let z = Math.floor(n[0].length * mutationRate)			
					for(let i =0;i<z;i++){
						let chan=Math.floor(Math.random()*(kid.length-0)+0)
				kid.splice(chan,1,rand(5,-5))
						}
		kid.length=n[0].length	
			return kid
}
var maxfit
nextgen=(nets,b)=>{ 
	for(let i =0;i<populationSize;i++){
		let g= new rocket()
		g.dna=cross(nets)
		g.update()
	g.fitness(b)
	warheads.push(g)
		}
		let cut=[]
		for(let j=0;j<warheads.length;j++){
	cut.push(warheads[j].rating)
	}
let r=	cut.sort()
let t=r.reverse()[extract]
pool.length=0
maxfit=r[0]
for(let v =0;v<warheads.length;v++){
if(warheads[v]>=0.33){
		pool.push(warheads[v])
		pool.push(warheads[v])
		pool.push(warheads[v])
		}else if(warheads[v].rating>=t){
pool.push(warheads[v].dna)
}
}
warheads.length=0
			}
			let timer=0
	setInterval(()=>{
		let ango=rand(490,0)
		timer++
	if(timer==1){
init(ango)
		}else if(timer>1){
nextgen(pool,ango)
			}
c(maxfit)

	},1000)
	 ;
//c(rand(490,0))

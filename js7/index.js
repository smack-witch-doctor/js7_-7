//objekti------var blj= {}; || blj.ojewh= ili blj['']= --tako se dodaju svojstva
//krejiraj objekt, funkcije u njima i prodi funkcijomkroz sve one koje su brojive

/*
var auto= {
boja: 'crna',
marka:{tip:'bmw', model: 'ff30'},
cijena:22000,
brzina: 10,
maxBrzina: 220,
registriran: true,
ubrzaj: function(vrijeme){
    let tempVrijeme=0;
    while(this.brzina<this.maxBrzina){

        this.brzina+=5;
        if(tempVrijeme==vrijeme){
            break;
        }

        tempVrijeme++;
    }
    this.brzina=vrijeme*5
    return this.brzina;
},
zakoci: function(vrijeme){

    
   while(this.brzina>=0){
    this.brzina=this.brzina-20;
    vrijeme--;
    if (vrijeme==0 ||this.brzina==0){
        break;
    }

   }

   this.brzina=vrijeme/5;

}

promijeniBoju: function(novaBoja){          
    this.boja=novaBoja
return this.boja;
}

}

console.log("auto JSON-->"+ JSON.stringify(auto));
//json lint - kopiraj json i provjeri jel json validan
console.log("Pocetna brzina: "+ auto.brzina);
console.log("Auto ce ubrzati na: "+ auto.ubrzaj(2));
console.log("Brzina nakon ubrzanja: "+ auto.brzina);
console.log("Trenutna boja auta je: "auto.boja+ ", a nakon je"+ auto.promijeniBoju("roza") );

auto["boja"]="zuta"; //mijenja boju u zutu


for(kljuc in auto){
let privKljuc=auto[kljuc];
if(typeof prviKljuc=="number")){
console.log(privKljuc);
}

}*/

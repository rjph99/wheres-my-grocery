export const stores = ['Walmart', 'Target', 'Sprouts'];
export const catalog = [
 {id:'milk',name:'Whole milk',unit:'1 gallon',icon:'🥛',prices:[435,459,599]},
 {id:'eggs',name:'Pasture-raised eggs',unit:'1 dozen',icon:'🥚',prices:[620,699,280]},
 {id:'chicken',name:'Boneless chicken breast',unit:'2 lb pack',icon:'🍗',prices:[350,399,1340]},
 {id:'bread',name:'Sourdough bread',unit:'1 loaf',icon:'🍞',prices:[350,399,541]},
 {id:'avocados',name:'Organic avocados',unit:'4-pack',icon:'🥑',prices:[490,524,150]},
];
export const initialItems = catalog.map(p=>({id:p.id,quantity:1}));
export function calculate(items, hourly=20) {
 const matched=items.filter(i=>catalog.some(p=>p.id===i.id));
 const unknown=items.length-matched.length;
 const totals=stores.map((_,s)=>matched.reduce((sum,i)=>sum+catalog.find(p=>p.id===i.id).prices[s]*i.quantity,0));
 const best=totals.indexOf(Math.min(...totals));
 const split=matched.map(i=>{const p=catalog.find(p=>p.id===i.id);return {...i,store:p.prices.indexOf(Math.min(...p.prices)),cost:Math.min(...p.prices)*i.quantity};});
 const splitTotal=split.reduce((s,i)=>s+i.cost,0), savings=totals[best]-splitTotal;
 const extraMinutes=new Set(split.map(i=>i.store)).size>1?25:0;
 const timeCost=Math.round(hourly*100*extraMinutes/60);
 return {totals,best,split,splitTotal,savings,extraMinutes,timeCost,net:savings-timeCost,unknown,matched:matched.length};
}
export const money=cents=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(cents/100);

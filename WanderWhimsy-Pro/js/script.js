const data=[
{name:"Paris",country:"France",img:"https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600"},
{name:"Dubai",country:"UAE",img:"https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600"},
{name:"Tokyo",country:"Japan",img:"https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600"}
];

const grid=document.getElementById("grid");
const select=document.getElementById("destSelect");

function render(){
 grid.innerHTML=data.map(d=>`<div class="card"><img src="${d.img}"><div class="card-body"><h3>${d.name}</h3><p>${d.country}</p></div></div>`).join('');
 select.innerHTML=data.map(d=>`<option>${d.name}</option>`).join('');
}

// search
search.addEventListener("keypress",e=>{
 if(e.key==="Enter"){
 const val=e.target.value.toLowerCase();
 const found=data.find(d=>d.name.toLowerCase().includes(val));
 if(found) alert(found.name+", "+found.country);
 else alert("Not found");
 }
});

// booking
bookForm.addEventListener("submit",e=>{
 e.preventDefault();
 document.getElementById("success-popup").style.display="block";
 setTimeout(()=>document.getElementById("success-popup").style.display="none",3000);
});

render();
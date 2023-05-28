
const text = document.getElementById('todo');
const btn = document.getElementById('btn');

const parent = document.getElementById('content');
const ul = document.createElement('ul');

parent.appendChild(ul);

btn.addEventListener("click",()=>{
    if(text.value!="" && text.value!=" "){

        const li = document.createElement('li');
        const div = document.createElement('div');
        const checkBox = document.createElement('input');
        const p = document.createElement('p');
        const button = document.createElement('button');
        
        checkBox.setAttribute("type","checkbox");
        checkBox.className = "checkBox"
        p.innerHTML = text.value;
        button.innerHTML = "Delete"
        button.className = "button"

        div.appendChild(checkBox);
        div.appendChild(p);
        li.appendChild(div);
        li.appendChild(button);
        ul.appendChild(li);
            
        checkBox.addEventListener("click",()=>{
            (checkBox.checked)?p.style.textDecorationLine = "line-through":p.style.textDecorationLine = "none"
        })

        button.addEventListener("click",()=>{
            ul.removeChild(li)
        })

    }
})




import './style.css'

interface todo {

  title : string,
  isComplited : boolean,
  readonly id : string

}

const todos : todo[] = []

const data = document.querySelector('.data') as HTMLDivElement;

const input = document.querySelector('.in') as HTMLInputElement;

const form = document.querySelector('.form') as HTMLFormElement;


form.onsubmit =(e:SubmitEvent)=> {

  e.preventDefault()

 const todo : todo={
    title : input.value,
    isComplited : false,
    id : String(Math.random() * Math.random() * 100)
 }

 todos.push(todo)

 console.log(todos);
 render(todos);

 input.value = ''
}


const show = (id : string, isComplited : boolean, title:string) => {
     
  const div = document.createElement('div') as HTMLDivElement;
  div.className = 'ac'
  const inp = document.createElement('input') as HTMLInputElement;
  inp.setAttribute('type', 'checkbox')
  const del = document.createElement('button') as HTMLButtonElement

  const para = document.createElement('p') as HTMLParagraphElement

  para.innerText = title
  inp.checked = isComplited
  del.id = id
  del.innerText = 'Delete'

  inp.onchange = () => {
    para.className = inp.checked ? 'remove' : 'ok'
  }

  del.onclick =() => {

    rem(id)
    
    
    


  }


  div.appendChild(inp)
  div.appendChild(para)
  div.appendChild(del)

  data.appendChild(div)

   
 }

 const rem =(id : string) => {

  let idx = todos.findIndex(i => i.id == id)
  todos.splice(idx, 1)
  render(todos)

 }




const render = (todos :todo[]) => {
     data.innerText = ''

  todos.forEach((i) => {

    show (i.id, i.isComplited, i.title)

    }
    )
    


}


 

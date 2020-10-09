const tabItems = document.querySelectorAll('.tab-item')
const tabContentItems = document.querySelectorAll('.tab-content-item')

// Select tab content item
function selectItem(){
  // Add border to current tab
  removeBorder();
  removeContent();
  this.classList.add('tab-border')
  //Grab content item from DOM
  const content = document.querySelector('#'+this.id+'-content')
  console.log(content)
  content.classList.add('show')
}

function removeBorder(){
  tabItems.forEach(item=>{
    item.classList.remove('tab-border')
  })
}

// Listen for tab click
tabItems.forEach(item => {
  item.addEventListener('click', selectItem)
})



tabContentItems.forEach(content=>{
  console.log(content)
  content.addEventListener('click', selectItem)
})

const removeContent=()=>{
  tabContentItems.forEach(content=>{
    content.classList.remove('show')
  })
}




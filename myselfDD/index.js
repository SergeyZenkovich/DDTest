var btn = document.querySelector('.add');

function addNewItem() {
    var newItem = document.querySelector('.input').value;
    if (newItem != '') {
      document.querySelector('.input').value = '';
      var li = document.createElement('li');
      var attr = document.createAttribute('draggable');
      var ul = document.querySelector('.ul1');
      li.className = 'draggable';
      attr.value = 'true';
      li.setAttributeNode(attr);
      li.appendChild(document.createTextNode(newItem));
      ul.appendChild(li);
      addEventsDragAndDrop(li);
    }
  }
  
  btn.addEventListener('click', addNewItem);


  function dragStart(e) {
    // this.style.opacity = '0.2';
    dragSrcEl = this;
    e.target.style.opacity = '0.15';

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
    console.log(e);
  };
  function dragEnter(e) {
    e.target.classList.add('over');
    
  }
  function dragLeave(e) {
    e.stopPropagation();
    e.target.classList.remove('over');
  }
  function dragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    return false;
  }
  function dragDrop(e) {
    if (dragSrcEl != this) {
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData('text/html');
    }
    return false;
  }
  function dragEnd(e) {
    var listItens = document.querySelectorAll('.draggable');
    [].forEach.call(listItens, function(item) {
      item.classList.remove('over');
    });
    this.style.opacity = '1';
  }
  
 
  function addEventsDragAndDrop(el) {
    el.addEventListener('dragstart', dragStart, false);
    el.addEventListener('dragenter', dragEnter, false);
    el.addEventListener('dragover', dragOver, false);
    el.addEventListener('dragleave', dragLeave, false);
    el.addEventListener('drop', dragDrop, false);
    el.addEventListener('dragend', dragEnd, false);
  }

   
  var listItens = document.querySelectorAll('.draggable');
[].forEach.call(listItens, function(item) {
  addEventsDragAndDrop(item);
});
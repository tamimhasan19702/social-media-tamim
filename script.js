const menuItems = document.querySelectorAll('.menu-item');
const messageNortification = document.querySelector('#message-nortification');
const messages = document.querySelector('.messages');


const changeActveitem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
   }) 
}


menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActveitem()
        item.classList.add('active');

        if (item.id != 'nortification') {
            document.querySelector('.nortification-popup').style.display = 'none';
    
        } else {
            document.querySelector('.nortification-popup').style.display = 'block';
            document.querySelector('#nortification .nortification-count').style.display = 'none';
        }
 })
    
})
const counter = document.querySelector('#counter');
const btns = document.querySelectorAll('.btn');

let count = 0;

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList;

    if (styles.contains('Increase')) {
      count++;
    } else if (styles.contains('Decrease')) {
      count--;
    } else {
      count = 0;
    }

    if (count > 0) {
      counter.style.color = 'blue';
    } else if (count < 0) {
      counter.style.color = 'yellow';
    } else {
      counter.style.color = 'black';
    }
    
    counter.textContent = count;
  });
});

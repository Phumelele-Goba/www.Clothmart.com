let failuretoast = document.querySelector('.failure-notification');

failuretoast.appendChild(failuretoast);
failuretoast.timeOut = setTimeout(()=> failuretoast.remove(), 5000 
)
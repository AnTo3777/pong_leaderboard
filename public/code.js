const socket = io();
const container = document.querySelector('.container');

socket.on('transfer-database', sqlDatabase => {
    for(let i=0 ; i<sqlDatabase.length ; i++) {
        const name = sqlDatabase[i].name;
        const score = sqlDatabase[i].score;
        const line = document.createElement('p');
        line.innerHTML = `${i+1}. ${name} ................. ${score}`
        line.setAttribute('class', 'line');
        container.appendChild(line);
    };
})
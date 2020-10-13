const cep = document.querySelector('#cep');

const showData = (result) => {
    for (const field in result) {
        if (document.querySelector("#"+field)) {
            // console.log(field);
            document.querySelector("#"+field).value = result[field];
        }
    }
}

cep.addEventListener('blur', (e) => {
    let search = cep.value.replace('-', '');

    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then(response => {
        return response.json()
        .then(data => {
            showData(data);
        })       
    })
    .catch(error => {
        console.log('Deu ruim!' + error);
    })
    
})
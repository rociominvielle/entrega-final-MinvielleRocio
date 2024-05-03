function dibujowish() {
    let wishlist = localStorage.getItem("wishlist")
    wishlist = JSON.parse(wishlist)
    console.log(wishlist)
    const ul = document.getElementById('listaWish');
    
    wishlist.forEach ( (el) => {
        const tarjeta = document.createElement('div')
        tarjeta.innerHTML = `<h2> ${el.titulo} </h2>
                            <p> ${el.genero} </p>
                            <p> ${el.ubicacion} </p>
                            <p> ${el.duracion} </p>
                            <p> ${el.precio} </p>`

        const li = document.createElement('li');
        li.appendChild(tarjeta)
        ul.appendChild(li);
    })
    }

dibujowish()





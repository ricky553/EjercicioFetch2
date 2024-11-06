fetch('https://api.escuelajs.co/api/v1/categories')
.then(response => response.json())
.then(data => {
    let cardContent = '';
    for (let item of data) {
        cardContent += ` <div id="cardList">
                                <div class="row row-cols-1 row-cols-md-3 g-4">
                                    <div class="col">
                                        <div class="card">
                                            <img src="${item.image}" class="cars-img-top" alt="Imagen">
                                            <div class="card-body">
                                                <h5 class="card title">Imagen</h5>
                                                <ul class="list-group list-group-flush">
                                                  <li class="list-group-item"><strong>Nombre: </strong>${item.name}</li>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
    }

    document.getElementById('cardList').innerHTML = `
    <div class="row row-cols-1 row-cols-md-3 g-4">
        ${cardContent}
    </div>`;

})
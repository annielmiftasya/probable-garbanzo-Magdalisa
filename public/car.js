var AllCar = null;

const getAllCar = () => {
  fetch("/getcars")
    .then((response) => response.json())
    .then((hasil) => {
      const body = document.getElementById("body");
      for (let i = 0; i < hasil.length; i++) {
        const Car = document.createElement("div");
        Car.innerHTML =
          // `<div style="background-color: green;margin-bottom: 30px;text-align: center;">
          // <h1>${hasil[i].manufacture} ${hasil[i].model} - ${hasil[i].year}</h1>
          // <img
          // class="car_image"
          //     src="./asset/${i %2 ==0 ? 'menu2': 'menu1'}.png"
          // />
          // <p style="text-align: center;color: aliceblue; font-size: 20px;">${hasil[i].description}</p>
          // </div>`
          `<div class="col">
                <div class="card" style="width: 22rem; height: 38rem;margin-bottom:20px;">
                <img src="${hasil[i].image}" id="imgCar" alt="..." >
                <div class="card-body bg-white" style="line-height:20px;">
                  <p class="card-text fw-bolder" style="font-size: 14px;">${hasil[i].type}</p>
                  <p class="card-text fw-bold" style="font-size: 24px; line-height:18px;">Rp. ${hasil[i].rentPerDay} / hari</p>
                  <p class="card-text" style="height:4rem">${hasil[i].description}</p>
                  
                  <div class="d-flex">
                  <img src="img/fi_users.png">
                  <p class="card-text ms-3" style="font-size:14px">${hasil[i].capacity}</p>
                  </div>
                  <div class="d-flex pt-3">
                  <img src="img/fi_settings.png">
                  <p class="card-text ms-3" style="font-size:14px">${hasil[i].transmission}</p>
                  </div>
                  <div class="d-flex pt-3 pb-4">
                  <img src="img/fi_calendar.png">
                  <p class="card-text ms-3" style="font-size:14px">${hasil[i].year}</p>
                  </div>

                  <a href="#" class="btn btn-primary" style="width: 20rem;">Go somewhere</a>
                </div>
              </div>
            </div>`;

        body.appendChild(Car);
      }
      AllCar = hasil;
    });
};

getAllCar();

const filterCar = (driver, tanggal, waktu, penumpang) => {
  let newCar = AllCar.filter(
    (car) =>
      (
        parseInt(penumpang) > 0 ? car.available.toString() == driver && car.capacity == parseInt(penumpang)
         && (new Date(car.availableAt) <= new Date(tanggal) )
        && new Date(car.availableAt).getHours() >= parseInt(waktu) 
        : car.available.toString() == driver && (new Date(car.availableAt) <= new Date(tanggal) )
        && new Date(car.availableAt).getHours() >= parseInt(waktu)
      )
  );
  console.log(penumpang)
  console.log(newCar);
  // console.log(new Date(newCar[0].availableAt));
  const body = document.getElementById("body");
  body.innerHTML = "";
  newCar.forEach((element) => {
    const Car1 = document.createElement("div");
    Car1.innerHTML = `<div class="col">
                <div class="card" style="width: 22rem; height: 38rem;margin-bottom:20px;">
                <img src="${element.image}" id="imgCar" alt="..." >
                <div class="card-body bg-white" style="line-height:20px;">
                  <p class="card-text fw-bolder" style="font-size: 14px;">${element.type}</p>
                  <p class="card-text fw-bold" style="font-size: 24px; line-height:18px;">Rp. ${element.rentPerDay} / hari</p>
                  <p class="card-text" style="style="height:4rem"">${element.description}</p>
                  
                  <div class="d-flex">
                  <img src="img/fi_users.png">
                  <p class="card-text ms-3" style="font-size:14px">${element.available}</p>
                  </div>
                  <div class="d-flex">
                  <img src="img/fi_users.png">
                  <p class="card-text ms-3" style="font-size:14px">${element.capacity}</p>
                  </div>
                  <div class="d-flex pt-3">
                  <img src="img/fi_settings.png">
                  <p class="card-text ms-3" style="font-size:14px">${element.transmission}</p>
                  </div>
                  <div class="d-flex pt-3 pb-4">
                  <img src="img/fi_calendar.png">
                  <p class="card-text ms-3" style="font-size:14px">${element.year}</p>
                  </div>
  
                  <a href="#" class="btn btn-primary" style="width: 20rem;">Go somewhere</a>
                </div>
              </div>
            </div>`;

    body.appendChild(Car1);
  });
};


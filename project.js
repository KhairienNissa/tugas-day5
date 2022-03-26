let getData = [];

function inputProject(event) {
  event.preventDefault();
  let projectname = document.getElementById("project-name").value;
  let description = document.getElementById("deskripsi").value;
  let nodejs = document.getElementById("nodejs").checked;
  let reactjs = document.getElementById("reactjs").checked;
  let nextjs = document.getElementById("nextjs").checked;
  let javascript = document.getElementById("javascript").checked;
  let image = document.getElementById("input-image").files;

  let startDate = document.getElementById('start-date').value;
  let endDate= document.getElementById('end-date').value;
  let duration = durationblog (startDate, endDate)

  image = URL.createObjectURL(image[0]);

  if (nodejs == true) {
    nodejs = document.getElementById("nodejs").value;
  } else {
    nodejs = "";
  }
  if (reactjs == true) {
    reactjs = document.getElementById("reactjs").value;
  } else {
    reactjs = "";
  }
  if (nextjs == true) {
    nextjs = document.getElementById("nextjs").value;
  } else {
    nextjs = "";
  }
  if (javascript == true) {
    javascript = document.getElementById("javascript").value;
  } else {
    javascript = "";
  }

  let data = {
    projectname: projectname,
    description: description,
    image: image,
    nodejs: nodejs,
    reactjs: reactjs,
    nextjs: nextjs,
    javascript: javascript,
    duaration : duration,
   
  };

  getData.push(data);
  console.log(getData);
  renderData();
}

function renderData() {
  document.getElementById("box-flex").innerHTML = `
  <div  class="box-flex-1">
  <div>
  <img class="in-image" src="image/image1.jpg" />
  <div class="content">
  <a class="judul" href="outputproject.html"><p>Dumbway Mobile App - 2021</p></a>

    <p>durasi- 3 bulan</p>

    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Praesentium illo delectus fuga provident
    </p>
    <div class="icon">
      <i class="fa-brands fa-js" style="font-size: 24px"></i>
      <i class="fa-brands fa-react" style="font-size: 24px"></i>
      <i class="fa-brands fa-node-js" style="font-size: 24px"></i>
    </div> <br>
    <button class="button1">edit</button>
    <button class="button2">delete</button>
  </div>
</div>
</div>`;

  for (let i = 0; i < getData.length; i++) {
    document.getElementById("box-flex").innerHTML += `
    <div  class="box-flex-1">
    <div>
    <img class="in-image" src="${getData[i].image}">
    <p class="judul">${getData[i].projectname}</p>
      <p>durasi- ${getData[i].duaration}</p>
      <p>
        ${getData[i].description}
      </p>
      <div class="icon">
        <i class=" ${getData[i].reactjs}" style="font-size: 24px"></i>
        <i class=" ${getData[i].nextjs}" style="font-size: 24px"></i>
        <i class=" ${getData[i].nodejs}" style="font-size: 24px"></i>
        <i class=" ${getData[i].javascript}" style="font-size: 24px"></i>
      </div> <br>
      <button class="button1">edit</button>
      <button class="button2">delete</button>
    </div>
  </div>
  </div>
       `;
  }
}
 function durationblog (stdate, endate) {
  let start = new Date(stdate);
  let end = new Date(endate);

  let duration = end.getTime() - start.getTime();

    let miliseconds = 1000 // 1000 miliseconds dalam 1 detik
    let secondInHours = 3600 // 1 jam sama dengan 3600 detik
    let hoursInDay = 24 // 24 jam dalam 1 hari
    let daysInMonth = 30
    let monthsInYears = 12

    let year = Math.floor(duration/ (miliseconds * secondInHours * hoursInDay * daysInMonth *monthsInYears))
    let month = Math.floor (duration/ (miliseconds * secondInHours * hoursInDay* daysInMonth))
    let day = duration / (miliseconds * secondInHours * hoursInDay)
   

    if (day < 30) {
      return day + 'hari';
    } else if (month < 12) {
      return month + 'bulan';
    } else {
      return year + 'tahun';
    }

  }
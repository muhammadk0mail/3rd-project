const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});


const selected1 = document.querySelector(".selected1");
const optionsContainer1 = document.querySelector(".options-container1");

const optionsList1 = document.querySelectorAll(".option1");

selected1.addEventListener("click", () => {
  optionsContainer1.classList.toggle("active");
});
optionsList1.forEach(o => {
  o.addEventListener("click", () => {
    selected1.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer1.classList.remove("active");
  });
});



const selected2 = document.querySelector(".selected2");
const optionsContainer2 = document.querySelector(".options-container2");

const optionsList2 = document.querySelectorAll(".option2");

selected2.addEventListener("click", () => {
  optionsContainer2.classList.toggle("active");
});

optionsList2.forEach(o => {
  o.addEventListener("click", () => {
    selected2.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer2.classList.remove("active");
  });
});


const selected3 = document.querySelector(".selected3");
const optionsContainer3 = document.querySelector(".options-container3");

const optionsList3 = document.querySelectorAll(".option3");

selected3.addEventListener("click", () => {
  optionsContainer3.classList.toggle("active");
});

optionsList3.forEach(o => {
  o.addEventListener("click", () => {
    selected3.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer3.classList.remove("active");
  });
});

// -----------------------

function removeOptions(selectElement) {
  var i, L = selectElement.options.length - 1;
  for(i = L; i >= 0; i--) {
    selectElement.remove(i);
  }
}
function getyoutubeplaylistjs() {
  var x = document.getElementById("youtubechannels");
  channel_id = x.value;
  var y = document.getElementById("youtubeplaylists");
  
  if (y.style.display != "none"){
    $.ajax({
      url: "/getyoutubeplaylists/" + channel_id,
      type: "POST",
      data: channel_id,
      beforeSend: function(){
        $('.ajax-loader').css("visibility", "visible");     
      },
      complete: function(){
        $('.ajax-loader').css("visibility", "hidden");
      },
        success: function(results) {
          var select = document.getElementById("youtubeplaylists");
          removeOptions(select);
          for(var i = 0; i < results.length; i++) {
            var opt = results[i];
            var el = document.createElement("option");
            el.textContent = opt[1];
            el.value = opt[0];
            select.appendChild(el);
          }
          
        }
      });
    }
  }
  

  function getzoommeetingsjs() {
  var x = document.getElementById("zoomchannels");
  channel_id = x.value;
  var y = document.getElementById("zoommeetings");
  
  if (y.style.display != "none"){
    $.ajax({
        url: "/getzoommeetings/" + channel_id,
        type: "POST",
        data: channel_id,
        beforeSend: function(){
          $('.ajax-loader').css("visibility", "visible");
        },
        complete: function(){
          $('.ajax-loader').css("visibility", "hidden");
        },
        success: function(results) {
            var select = document.getElementById("zoommeetings");
            removeOptions(select);
            for(var i = 0; i < results.length; i++) {
              var opt = results[i];
              var el = document.createElement("option");
              el.textContent = opt[1];
              el.value = opt[0];
              select.appendChild(el);
            }
          }
        });
      }
    }
    
    function getzoomyoutubedata() {
      $.ajax({
        url: "/getzoomyoutubedata",
        type: "POST",
        success: function(results) {
          var zytab = document.getElementById("zoomyoutubetab");
          for(var i = 0; i < results.length; i++) {
            console.log(results[i]);
            var row = document.createElement("tr");
            var youtube_channel_name = document.createElement('td');
              var youtube_playlist = document.createElement('td');
              var zoom_email = document.createElement('td');
              var zoom_meeting_topic = document.createElement('td');
              var link_created_date = document.createElement('td');
              
              youtube_channel_name.innerHTML = results[i][0];
              youtube_playlist.innerHTML = results[i][1];
              zoom_email.innerHTML = results[i][2];
              zoom_meeting_topic.innerHTML = results[i][3];
              link_created_date.innerHTML = results[i][4];

              row.appendChild(youtube_channel_name);
              row.appendChild(youtube_playlist);
              row.appendChild(zoom_email);
              row.appendChild(zoom_meeting_topic);
              row.appendChild(link_created_date);

              zytab.append(row);
            }
          }
          
        });
        
        
  }
  
  function func_filter() {
    var input, filter, table, tr, td, i, txtValue, txtValue1, txtValue2, txtValue3, txtValue4;
    inputyc = document.getElementById("filteryc");
    inputyp = document.getElementById("filteryp");
    inputze = document.getElementById("filterze");
    inputzmt = document.getElementById("filterzmt");
    filteryc = inputyc.value.toUpperCase();
    filteryp = inputyp.value.toUpperCase();
    filterze = inputze.value.toUpperCase();
    filterzmt = inputzmt.value.toUpperCase();
    
    table = document.getElementById("zoomyoutubetab");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      
      td1 = tr[i].getElementsByTagName("td")[0];
      td2 = tr[i].getElementsByTagName("td")[1];
      td3 = tr[i].getElementsByTagName("td")[2];
      td4 = tr[i].getElementsByTagName("td")[3];
      if (td1) {
        txtValue1 = td1.textContent || td1.innerText;
        txtValue2 = td2.textContent || td2.innerText;
        txtValue3 = td3.textContent || td3.innerText;
        txtValue4 = td4.textContent || td4.innerText;
        if (
          (txtValue1.toUpperCase().indexOf(filteryc) > -1) &&
          (txtValue2.toUpperCase().indexOf(filteryp) > -1) &&
          (txtValue3.toUpperCase().indexOf(filterze) > -1) &&
          (txtValue4.toUpperCase().indexOf(filterzmt) > -1)
          ) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    }
    var change = document.getElementById('step#03');
    
    function showplaylist() {
      var x = document.getElementById("youtubeplaylists");
      var y = document.getElementById("zoommeetings");
      
      if (x.style.display === "none") {
        x.style.display = "block";
        change.innerHTML = "<i class='fab fa-youtube fs-3'></i> 3. Select Your Youtube Account & playlist to connect";
      } else {
        x.style.display = "none";
      }
      
      if (y.style.display === "none") {
        y.style.display = "block";
      } else {
        y.style.display = "none";
      }
    }
    
    // -------------------------------------------------
    // var x = document.getElementById("youtubeplaylists");
    // var y = document.getElementById("zoommeetings");
    
    // if (x.style.display === "none") {
      //   change.innerHTML = '<i class="fab fa-youtube fs-3"></i> 3. Select Your Youtube Account & playlist to connect';
    // } 
    // else {
      //   change.innerHTML = '<i class="fab fa-youtube fs-3"></i> 3. Select Your Youtube Account';
      // }
      
      // -------------------------------------------------
window.onload = select;
let bookid = document.getElementById("book").value
let chapterid = document.getElementById("chapter").value

  function select(){
    var select1 = document.getElementById("book");
    var select2 = document.getElementById("chapter");
    /*document.getElementById("bible").className = 'pic';*/

    select1.onchange = function filterChapter() {     
    while (select2.firstChild) {
    select2.removeChild(select2.firstChild);
      }     
     if (select1.selectedIndex == 0) { 
      return; 
        }
    else if (document.getElementById("book").value === "Genesis") {
        for (i = 1; i <= 50; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    }  
    else if (document.getElementById("book").value === "Exodus") {
        for (i = 1; i <= 40; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    }  
    else if (document.getElementById("book").value === "Leviticus") {
        for (i = 1; i <= 27; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "Numbers") {
        for (i = 1; i <= 36; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    }  
    else if (document.getElementById("book").value === "Deuteronomy") {
        for (i = 1; i <= 34; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    }
    else if (document.getElementById("book").value === "Judges") {
        for (i = 1; i <= 21; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    }  
    else if (document.getElementById("book").value === "Ruth") {
        for (i = 1; i <= 4; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "1 Samuel") {
        for (i = 1; i <= 31; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "2 Samuel") {
        for (i = 1; i <= 24; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "1 Kings") {
        for (i = 1; i <= 22; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "2 Kings") {
        for (i = 1; i <= 25; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "1 Chronicles") {
        for (i = 1; i <= 29; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "2 Chronicles") {
        for (i = 1; i <= 36; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "Ezra") {
        for (i = 1; i <= 10; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "Nehemiah") {
        for (i = 1; i <= 13; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "Esther") {
        for (i = 1; i <= 10; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "Job") {
        for (i = 1; i <= 42; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "Psalms") {
        for (i = 1; i <= 150; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "Proverbs") {
        for (i = 1; i <= 31; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "Ecclesiastes") {
        for (i = 1; i <= 12; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "Song Of Solomon") {
        for (i = 1; i <= 8; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "Isaiah") {
        for (i = 1; i <= 66; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "Jeremiah") {
        for (i = 1; i <= 52; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "Lamentations") {
        for (i = 1; i <= 5; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "Ezekiel") {
        for (i = 1; i <= 48; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "Daniel") {
        for (i = 1; i <= 12; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "Hosea") {
        for (i = 1; i <= 14; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "Joel") {
        for (i = 1; i <= 3; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "Amos") {
        for (i = 1; i <= 9; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "Obadiah") {
        for (i = 1; i <= 1; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "Jonah") {
        for (i = 1; i <= 4; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "Micah") {
        for (i = 1; i <= 7; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "Nahum") {
        for (i = 1; i <= 3; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "Habakkuk") {
        for (i = 1; i <= 3; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "Zephaniah") {
        for (i = 1; i <= 3; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "Haggai") {
        for (i = 1; i <= 2; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "Zechariah") {
        for (i = 1; i <= 14; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "Malachi") {
        for (i = 1; i <= 4; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "Matthew") {
        for (i = 1; i <= 28; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "Mark") {
        for (i = 1; i <= 16; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "Luke") {
        for (i = 1; i <= 24; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "John") {
        for (i = 1; i <= 21; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "Acts") {
        for (i = 1; i <= 28; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "Romans") {
        for (i = 1; i <= 16; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "1 Corinthians") {
        for (i = 1; i <= 16; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "2 Corinthians") {
        for (i = 1; i <= 13; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "Galatians") {
        for (i = 1; i <= 6; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "Ephesians") {
        for (i = 1; i <= 6; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "Philippians") {
        for (i = 1; i <= 4; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "Colossians") {
        for (i = 1; i <= 4; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "1 Thessalonians") {
        for (i = 1; i <= 5; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "2 Thessalonians") {
        for (i = 1; i <= 3; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "1 Timothy") {
        for (i = 1; i <= 6; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "2 Timothy") {
        for (i = 1; i <= 4; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "Titus") {
        for (i = 1; i <= 3; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "Philemon") {
        for (i = 1; i <= 1; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "Hebrews") {
        for (i = 1; i <= 13; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "James") {
        for (i = 1; i <= 5; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "1 Peter") {
        for (i = 1; i <= 5; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "2 Peter") {
        for (i = 1; i <= 3; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "1 John") {
        for (i = 1; i <= 5; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "2 John") {
        for (i = 1; i <= 1; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "3 John") {
        for (i = 1; i <= 1; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "Jude") {
        for (i = 1; i <= 1; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
    else if (document.getElementById("book").value === "Revelation") {
        for (i = 1; i <= 22; i++) {
            var o = document.createElement("option");
            o.value = i;
            o.text = i;
            select2.appendChild(o);
            }
    } 
        }
    }

    function loadBible() {
        fetch("https://ajith-holy-bible.p.rapidapi.com/GetChapter?Book=" + document.getElementById("book").value + "&chapter=" + document.getElementById("chapter").value, {
        "method": "GET",
        "headers": {
        "x-rapidapi-host": "ajith-holy-bible.p.rapidapi.com",
        "x-rapidapi-key": "913e9dfde4msh981f9be5a1faca0p1d7eebjsna23ef25b9aad"
	}
})
            .then(response => response.json())
            .then(data => document.getElementById("biblep").innerHTML = "<strong>" + data["Book"] + " " + data["Chapter"] + "</strong><br /><br />" + data["Output"])
            .catch(err => console.error(err))
        }





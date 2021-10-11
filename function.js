//=========================================================================
// FILTER FACULTY WITH DEPENDENCY PRODY USE EVENT 'onchage'
//=========================================================================
function filterFaculty() {
    const formFilter = document.querySelector('#formFilter').listFaculty.value;
    if (formFilter == 'Pascasarjana') {
        document.querySelector('#listPrody').innerHTML = "<option value='Magister Manajemen'>Magister Manajemen</option>";
    }
    else if (formFilter == 'FFIL') {
        document.querySelector('#listPrody').innerHTML = "<option value='Filsafat Agama Kristen Advent'>Filsafat Agama Kristen Advent</option>";
    }
    else if (formFilter == 'FKIP') {
        document.querySelector('#listPrody').innerHTML = "<option value='Pendidikan Agama'>Pendidikan Agama</option><option value='Pendidikan Bahasa Inggris'>Pendidikan Bahasa Inggirs</option><option value='Ekonomi Koperasi'>Ekonomi Koperasi</option><option value='Pendidikan Guru Luar Sekolah'>Pendidikan Guru Luar Sekolah</option>";
    }
    else if (formFilter == 'FEB') {
        document.querySelector('#listPrody').innerHTML = "<option value='Akuntansi'>Akuntansi</option><option value='Manajemen'>Manajemen</option>";
    }
    else if (formFilter == 'FAPERTA') {
        document.querySelector('#listPrody').innerHTML = "<option value='Agronomi'>Agronomi</option>";
    }
    else if (formFilter == 'FIK') {
        document.querySelector('#listPrody').innerHTML = "<option value='Sistem Informasi'>Sistem Informasi</option><option value='Teknik Informatika'>Teknik Informatika</option>";
    }
    else if (formFilter == 'FKEP') {
        document.querySelector('#listPrody').innerHTML = "<option value='Keperawatan'>Keperawatan</option><option value='Profesi Ners'>Profesi Ners</option>";
    }
    else if (formFilter == 'ASMIK') {
        document.querySelector('#listPrody').innerHTML = "<option value='Sekretari'>Sekretari</option>";
    }
}

//=========================================================================
// ADD STUDENT TO TABLE
//=========================================================================
const form = document.querySelector('form');
form.addEventListener('submit', insertTable);
function insertTable(e) {
    e.preventDefault();

    // GET STUDENT INPUT
    let stuId = document.querySelector('#inputId');
    let stuName = document.querySelector('#inputName');
    let gender = document.getElementsByClassName('gender');
    let listFaculty = document.querySelector('#listFaculty');
    let listPrody = document.querySelector('#listPrody');

    // CREATE NEW ROW AND INSERT
    const tableStr = document.querySelector('#tableStr');
    let newRow = tableStr.insertRow(-1);
    let cell1 = newRow.insertCell(0);
    let tdText1 = document.createTextNode(`${stuId.value}`);
    cell1.appendChild(tdText1);

    let cell2 = newRow.insertCell(1);
    let tdText2 = document.createTextNode(`${stuName.value}`);
    cell2.appendChild(tdText2);

    if (Male.checked) {
        gender.value = 'Male';
    } else {
        gender.value = 'Female';
    }

    let cell3 = newRow.insertCell(2);
    cell3.innerHTML = gender.value;

    let cell4 = newRow.insertCell(3);
    let tdText4 = document.createTextNode(`${listFaculty.value}`);
    cell4.appendChild(tdText4);

    let cell5 = newRow.insertCell(4);
    let tdText5 = document.createTextNode(`${listPrody.value}`);
    cell5.appendChild(tdText5);

    let cell6 = newRow.insertCell(5);
    cell6.innerHTML = "<a href='#' class='delete' onclick='myDeleteRow(this)'><i class='bi bi-trash-fill'></i></a>";

    // CLEAR FORM
    stuId.value = '';
    stuName.value = '';
    gender.value = '';
    listFaculty.value = '';
    listPrody = '';
}

//=========================================================================
// SEARCH STUDENT FACULTY USE EVENT 'onclick' 
//=========================================================================
function findFaculty() {
    let resultFilterFaculty = document.querySelector("#selectFaculty").value;
    if (resultFilterFaculty == "Pascasarjana" || resultFilterFaculty == "FFIL" || resultFilterFaculty == "FKIP" || resultFilterFaculty == "FEB" || resultFilterFaculty == "FAPERTA" || resultFilterFaculty == "FIK" || resultFilterFaculty == "FKEP" || resultFilterFaculty == "ASMIK") {
        var table = document.getElementById("tableStr");
        var tr = table.querySelectorAll("tr");
        for (var i = 0; i < tr.length; i++) {
            var td = tr[i].querySelectorAll("td")[3];
            if (td) {
                var textValue = td.textContent;
                if (textValue == resultFilterFaculty) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
}

//=========================================================================
// SEARCH STUDENT PRODY USE EVENT 'onclick' 
//=========================================================================
function findPrody() {
    let resultFilterPrody = document.querySelector("#selectPrody").value;
    if (resultFilterPrody == "Magister Manajemen" || resultFilterPrody == "Filsafat Agama Kristen Advent" || resultFilterPrody == "Pendidikan Agama" || resultFilterPrody == "Pendidikan Bahasa Inggris" || resultFilterPrody == "Ekonomi Koperasi" || resultFilterPrody == "Pendidikan Guru Luar Sekolah" || resultFilterPrody == "Akuntansi"  || resultFilterPrody == "Manajemen" || resultFilterPrody == "Agronomi" || resultFilterPrody == "Sistem Informasi" || resultFilterPrody == "Teknik Informatika" || resultFilterPrody == "Keperawatan" || resultFilterPrody == "Profesi Ners" || resultFilterPrody == "Sekretari") {
        var table = document.getElementById("tableStr");
        var tr = table.querySelectorAll("tr");
        for (var i = 0; i < tr.length; i++) {
            var td = tr[i].querySelectorAll("td")[4];
            if (td) {
                var textValue = td.textContent;
                if (textValue == resultFilterPrody) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
}

//=========================================================================
// SEARCH STUDENT WITH EVENT LISTENER 'keyup'
//=========================================================================
const search = document.querySelector('#searchStudent');
search.addEventListener('keyup', searchStudentName);
function searchStudentName() {
    var input, filter, table, tr, td, i, textValue;
    input = document.getElementById("searchStudent");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableStr");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            textValue = td.textContent || td.innerText;
            if (textValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

//=========================================================================
// POP UP CONFIRMATION FOR DELETE
//=========================================================================
function myDeleteRow(event){
    let validation = confirm("Are you sure want to delete this student?");
    if(validation){
        let moveRow = event.parentNode.parentNode.rowIndex;
        document.querySelector('#tableStr').deleteRow(moveRow);
    } else {
        false;
    }
}



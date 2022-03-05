"use strict"

window.onload = function () {
    const frmReg = document.getElementById('frmReg');
    const divPList = document.getElementById('divPList');
    const tblPList = document.getElementById('tblPList');
    const chkElderly = document.getElementById('chkElderly');
    const chkOutPatient = document.getElementById('chkOutPatient');

    chkElderly.addEventListener('change', e => {
        let trList = document.querySelectorAll('#tblPList tr:not(.elderly)');
        if (e.target.checked) {            
            trList.forEach((item) => { item.style.display = 'none'; });
        } else {
            trList.forEach((item) => { item.style.display = 'table-row'; });
        }
    });
    //not filter for both check boxes checked
    //if both check boxes checked, the result will not be correct
    chkOutPatient.addEventListener('change', e => {
        let trList = document.querySelectorAll('#tblPList tr:not(.outPt)');
        if (e.target.checked) {
            trList.forEach((item) => { item.style.display = 'none'; });
        } else {
            trList.forEach((item) => { item.style.display = 'table-row'; });
        }
    });
    frmReg.onsubmit = (e) => {
        e.preventDefault();
        divPList.style.display = 'block';
        appendData();       
    }

    const appendData = () => {
        const pid = document.getElementById('txtPID').value;
        const fn = document.getElementById('txtFirstName').value;
        const mi = document.getElementById('txtMiddleInitial').value;
        const ln = document.getElementById('txtLastName').value;
        const dob = document.getElementById('txtDOB').value;
        const dept = document.getElementById('selDepartment').value;
        const isOpt = document.getElementById('rdoYes').checked == true ? 'Yes' : 'No';
        //console.log(pid + fn + mi + ln + dob + dept + isOpt);
        const existingCnt = tblPList.innerHTML;
        let className = '';
        if (getAge(dob) > 65) {            
               className = 'elderly';          
        }
        if (isOpt == 'Yes') {
            if (className != '') {
                className += ' outPt';
            } else {
                className = 'outPt';
            }
        } else {
            if (className == '') {
                className = 'patient';
            }
        }
        tblPList.innerHTML = existingCnt + '<tr class="' + className + '">' +
            '<td>' + pid + '</td >' +
            '<td>' + fn + '</td>' +
            '<td>' + mi + '</td>' +
            '<td>' + ln + '</td>' +
            '<td>' + dob + '</td>' +
            '<td>' + dept + '</td>' +
            '<td class="isOutPt">' + isOpt + '</td>' +
            '</tr >';
    }
    const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)

}
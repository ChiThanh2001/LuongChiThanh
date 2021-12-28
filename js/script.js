var nameValid = /^[a-zA-Z]*$/
var addressValid = /^[a-zA-Z]$/
var phoneValid = /^[0-9]{10}$/
var guestValid = /^[0-9]$/
var nameguest = document.getElementById('myName')
var address = document.getElementById('address')
var phone = document.getElementById('phone')
var guest = document.getElementById('check-guest')
var tour = document.querySelector('select')
var rdoMaybay = document.getElementById('rdoMaybay')
var rdoCar = document.getElementById('rdoCar')  
var nguoilon = document.getElementById('nguoi-lon')
var treem = document.getElementById('tre-em')
var submit = document.getElementById('submit')
var thongbao = document.getElementById('thong-bao')

// var nameguest2 = document.getElementById('myName')
// nameguest2.onchange = function(e){
//     let checkName = nameValid.test(nameguest2.value)
//     console.log(checkName)
// }
submit.onclick = function(e){
    let checkName = nameValid.test(nameguest.value)
    let checkaddress = addressValid.test(address.value)
    let checkphone = phoneValid.test(phone.value)
    let checkguest = guestValid.test(guest.value)
    let c
    if(checkName == true){
        
    }
    if(checkName==false){
        thongbao.textContent = 'Bạn nhập chưa đúng định dạng yêu cầu'
    }

    if()
}

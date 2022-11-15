


var searchFilter = () => {

    var n = [];
            let selectedBrand = document.getElementById("filterByBrand").value;
            const input = document.querySelector(".form-control-mmm");
            let textBox= input.value;
            const cards = document.getElementsByClassName("col");
            for (let i = 0; i < cards.length; i++) {


                        cards[i].classList.add("col-xl-3");
                        cards[i].classList.add("col-md-4");
                        cards[i].classList.remove("col-md-4-alter");



                let title = cards[i].querySelector(".carModelName");

                
                if ((cards[i].classList.contains(selectedBrand) || selectedBrand=="") && title.innerText.toLowerCase().indexOf(textBox.toLowerCase()) > -1) {
                    cards[i].classList.remove("d-none");
                     n.push(i);
                    console.log(i);
                } else {
                    cards[i].classList.add("d-none");

                }
            }
            
            switch (n.length) {
                case 1:
                    for (let i = 0; i < n.length; i++) {
                        cards[n[i]].classList.remove("col-xl-3");
                        cards[n[i]].classList.remove("col-md-4");
                        cards[n[i]].classList.remove("col-md-4-alter");
                    }
                    n=[];
                    break;

                case 2:
                    for (let i = 0; i < n.length; i++) {
                        cards[n[i]].classList.remove("col-xl-3");
                        cards[n[i]].classList.remove("col-md-4");
                        cards[n[i]].classList.add("col-md-4-alter");
                    }
                    n=[];
                    break;
            
                case 3:
                    for (let i = 0; i < n.length; i++) {
                        cards[n[i]].classList.remove("col-xl-3");
                        cards[n[i]].classList.remove("col-md-4-alter");
                    }
                    n=[];
                    break;

            }
        }






var disapperImg = () => {

    document.getElementById("large-pic").src = "images/product-img/red-comb.png";
}

















        // const searchFun = () => {
    
// }

// OR

// //const searchFun = () => {
// function searchFun() {
//     var inputsG = document.getElementById('searchIn').value.toUpperCase();
//     console.log(inputsG);
    

    // var mainDiv = document.getElementById('carName');
    // // var carList = mainDiv.getElementsByTagName("h6");
    // var carList = document.getElementsByTagName("h6");

    // for(var i=0 ; i>carList.length; i++){
    //     var innerText = carList[i].innerHTML || carList[i].textContent;

    //     if (innerText.toUpperCase().indexOf(inputsG) > -1) {

    //         carList[i].style.display = '';
    //     }
    //         else
    //     {
    //         carList[i].style.display = 'none';
            
    //     }
    // }

// }



// function searchFun()
// {
//     alert('Hello');
// }



// function searchFun() {
//     var input, filter, ul, li, a, i, txtValue,lum;
    
//     input = document.getElementById("searchIn");
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("CarName");
//     li = ul.getElementsByTagName("h6");
//     lum =ul.getElementsByClassName("col"); 
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByClassName("carModelName")[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             lum[i].style.display = "block";
//             lum[i].style.width = "100%";
//         } else {
//             lum[i].style.display = "none";
//         }
//     }
// }




// $(document).ready(function() {
//     $("#searchIn").on("keyup", function() {
//         var value = $(this).val().toLowerCase();
//         $("#recipe-card div").filter(function() {
//             $(this).toggle($(this).find('h5').text().toLowerCase().indexOf(value) > -1)
//         });
//     });
// });


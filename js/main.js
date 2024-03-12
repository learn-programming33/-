// let myTagElement = document.getElementsByTagName("p");
// console.log(myTagElement[0]);

// myTagElement[0].innerHTML = "Test";

function openStartPage() {
    document.getElementById("main-page").style.display = "none";
    document.getElementById("start-page").style.display = "grid";
}

function closeStartPage() {
    document.getElementById("start-page").style.display = "none";
    document.getElementById("main-page").style.display = "grid";
}

function showLetters() {
    document.getElementById("start-page").style.display = "none";
    document.getElementById("letters-page").style.display = "grid";
    // document.getElementById("Listen-letters-page").style.display = "grid";
}
function closeLettersPage() {
    document.getElementById("letters-page").style.display = "none";
    document.getElementById("start-page").style.display = "grid";
}



// function showWriteLetters() {
//     document.getElementById("letters-page").style.display = "none";
//     // document.getElementById("write-letters-page").style.display = "grid";
//     let myElement1 = document.getElementById("write-letters-page").style.gridArea = "1 / 3 / span 3 / span 2 ";
//     let myElement2 = document.getElementsByClassName("letters").style.gridArea = "1 / 3 / span 3 / span 2 ";
//     // let myElement2 = document.getElementsByClassName("litter");
//     myElement1.style.cssText = 'display: grid; grid-template-areas:"litter" "litter" "litter" "write" "write" "write"; '
//     myElement2.style.cssText = "grid-area: litter;"
// }

// const main = document.querySelector('main');
// function showWriteLetters() {
//     document.getElementById("letters-page").style.display = "none";
//     const letters = ["أ", "ب", "ت", "ث", "ج", "ح", "خ", "د"];
//     let printLetter = "";
//     for (let i=0; i<8; i++) {
//         printLetter += `<div>${i}</div>`
//         document.getElementById("special-letter").innerHTML = letters[i];

//     }

//     main.innerHTML = printLetter;

// }


// function showWriteLetters() {
//     const letters = ["أ", "ب", "ت", "ث", "ج", "ح", "خ", "د", "ذ", "ر", "ز", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "ف", "ق", "ك", "ل", "م", "ن", "ه", "و", "ي"];

//     const lettersList = document.getElementById("letters-list");

//     for (let i = 0; i < letters.length; i++) {
//         const letter = document.createElement("li");
//         letter.innerText = letters[i];
//         lettersList.appendChild(letter);
// }
// }


function showWriteLetters() {
    document.getElementById("start-page").style.display = "none";
    document.getElementById("letters-page").style.display = "none";
    document.getElementById("write-letters-page").style.display = "grid";
    const letters = ["أ", "ب", "ت", "ث", "ج", "ح", "خ", "د", "ذ", "ر", "ز", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "ف", "ق", "ك", "ل", "م", "ن", "ه", "و", "ي"];
  
    let lettersList = document.getElementById("letters-list");
  
    // إظهار حرف واحد فقط
    let  index = 0;
    let currentLetter = letters[index];
    let letterElement = document.createElement("li");
    letterElement.innerText = currentLetter;
    lettersList.appendChild(letterElement);
  
    // إنشاء زر "التالي"
    let nextButton = document.createElement("button");
    nextButton.innerText = "التالي";
    nextButton.onclick = function() {

  
      // عرض الحرف التالي
      let nextIndex = letters.indexOf(currentLetter) + 1;
      let nextLetter = letters[nextIndex];
      let nextLetterElement = document.createElement("li");
    //   nextLetterElement.innerText = nextLetter;
    //   lettersList.appendChild(nextLetterElement);

    //   lettersList.removeChild(letterElement);

  
      // تعطيل الزر عند الوصول إلى آخر حرف
      if (nextIndex === letters.length - 1) {
        nextButton.disabled = true;
      }
    };
    // إضافة زر "التالي" إلى قائمة الحروف
    lettersList.appendChild(nextButton);
    ++index;
    // إزالة الحرف الحالي
    //   lettersList.removeChild(letterElement);
    // lettersList.appendChild(nextButton);
    //       lettersList.removeChild(nextLetterElement);

  }





//immmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmportant


//  // إنشاء زر "السابق"
//  const previousButton = document.createElement("button");
//  previousButton.innerText = "السابق";
//  previousButton.onclick = function() {
//    // التأكد من عدم تجاوز الحد الأدنى
//    if (currentLetterIndex > 0) {
//      currentLetterIndex--;
//    }
//    showLetter(currentLetterIndex);
//  };


function closeWriteLettersPage() {
    document.getElementById("write-letters-page").style.display = "none";
    document.getElementById("letters-page").style.display = "grid";
}

function showListenLetters() {
    document.getElementById("letters-page").style.display = "none";
    document.getElementById("listen-letters-page").style.display = "grid";
}

function closeListenLettersPage() {
    document.getElementById("listen-letters-page").style.display = "none";
    document.getElementById("letters-page").style.display = "grid";
}

function showNumbers() {
    document.getElementById("start-page").style.display = "none";
    document.getElementById("numbers-page").style.display = "grid";
}

function closeNumbersPage() {
    document.getElementById("numbers-page").style.display = "none";
    document.getElementById("start-page").style.display = "grid";
}
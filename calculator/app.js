let button = document.querySelectorAll("button");
let input = document.querySelector("input");
button.forEach((e) => {
  e.addEventListener("click", (g) => {
    input.value = e.innerText;
  });
});
// let five = document.querySelector(".five");

// five.addEventListener("click", (e) => {
//   let input = document.querySelector("input");
//   input.value = five.innerHTML;
// });

/**<tr>
        <td><button class="division">/</button></td>
        <td><button class="plusPlus">*</button></td>
        <td colspan="2"><button class="horizentalExtend -">-</button></td>
      </tr>
      <tr>
        <td><button class="seven">7</button></td>
        <td><button class="eight">8</button></td>
        <td><button class="nine">9</button></td>
        <td rowspan="2"><button class="verticalExtend plus">+</button></td>
      </tr>
      <tr>
        <td><button class="four">4</button></td>
        <td><button class="five">5</button></td>
        <td><button class="six">6</button></td>
      </tr>
      <tr>
        <td><button class="one">1</button></td>
        <td><button class="two">2</button></td>
        <td><button class="three">3</button></td>
        <td rowspan="2"><button class="verticalExtend equal">=</button></td>
      </tr>
      <tr>
        <td><button class="zero">0</button></td>
        <td colspan="2"><button class="horizentalExtend dot">.</button></td>
      </tr>*/

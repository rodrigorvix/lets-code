const selectBrand = document.querySelector('#brand');
const selectModel = document.querySelector('#model');
const selectYear = document.querySelector('#year');
const outputValue = document.querySelector('.output-value');

fetchBrands();

selectBrand.addEventListener('change', fetchModels);
selectModel.addEventListener('change', fetchYear);
selectYear.addEventListener('change', fetchValue);

async function fetchBrands() {
  const responseBrands = await fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas");
  const dataBrands = await responseBrands.json();  
  const optionBrands = dataBrands.map(({nome, codigo}) => {
    return(
      `<option value=${codigo}>${nome}</option>`
    );
  })
  selectBrand.innerHTML += optionBrands.join()
}

async function fetchModels() {
  const codeBrand = this.value
  const responseModels = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${codeBrand}/modelos`); 
  const dataModels = await responseModels.json();
  
   const optionModels = dataModels.modelos.map(({nome, codigo}) => {
     return(
       `<option value=${codigo}>${nome}</option>`
     );
   })
   selectModel.innerHTML += optionModels.join();

}
async function fetchYear() {
  const codeBrand = selectBrand.value;
  const codeModel = this.value;
 const responseYear = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${codeBrand}/modelos/${codeModel}/anos`); 
 const dataYear = await responseYear.json();

   const optionYear = dataYear.map(({nome, codigo}) => {
     return(
       `<option value=${codigo}>${nome}</option>`
     );
   })
   selectYear.innerHTML += optionYear.join()
 
}
async function fetchValue() {
  const codeBrand = selectBrand.value;
  const codeModel = selectModel.value;
  const codeYear = selectYear.value;

  try {
    const responseValue = await fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${codeBrand}/modelos/${codeModel}/anos/${codeYear}`); 
    const dataValue = await responseValue.json();
    outputValue.value = dataValue.Valor;
  }catch(error) {
    alert("Valor não encontrado!")
    outputValue.value = "Valor não encontrado";
  }
  
  
}


import "./AddShoes.scss"
import { useNavigate } from 'react-router-dom';
function AddingShoes()
{
    const navigate = useNavigate();
    const saveShoes = ()=>{
const Shname = document.getElementById("ShName");
const ShSize = document.getElementById("Shsize");
const ShPrice = document.getElementById("ShPrice");
const ShImg = document.getElementById("ShUrl");

let ValidShoesName = (Shname.value !==null && Shname.value !== "" && Shname.value.length >=2 && Shname.value.length <=30);
let ValidShoesSize = (ShSize.value !== null && ShSize.value !=="" && ShSize.value !== isNaN );
let ValidShoesPrice = (ShPrice.value !== null && ShPrice.value !== "" && ShPrice.value !== isNaN);
let ValidShoesImg = (ShImg.value !== null && ShImg.value !== "");

if (ValidShoesImg && ValidShoesName && ValidShoesPrice && ValidShoesSize)
{
    Shname.style.borderColor = "";
    ShPrice.style.borderColor = "";
    ShSize.style.borderColor = "";
    ShImg.style.borderColor = "";

let shoesArr = [];
let obj = {
    name : Shname.value,
    size : ShSize.value,
    price : ShPrice.value,
    img : ShImg.value
}
if(localStorage.getItem("ShoesList"))
{
    shoesArr = JSON.parse(localStorage.getItem("ShoesList"));
};
shoesArr.push(obj)
localStorage.setItem("ShoesList", JSON.stringify(shoesArr));
navigate("/");
}
else{
    (!ValidShoesName) ? Shname.style.borderColor = "red" : Shname.style.borderColor = "";
    (!ValidShoesSize) ? ShSize.style.borderColor = "red" : ShSize.style.borderColor = "";
    (!ValidShoesPrice) ? ShPrice.style.borderColor = "red" : ShPrice.style.borderColor = "";
    (!ValidShoesImg) ? ShImg.style.borderColor = "red" : ShImg.style.borderColor = "";
}

    }
    return<>

<div className="contianer"> 
<h2 className="Enwan">  Add shoes</h2>
<form>
<div>
    <label> Shoes Name :</label>
    <input type="text" id="ShName" />
</div>
<div className="shoesSize">
    <label> Shoes Size :</label>
    <input type="text" id="Shsize" />
</div>
<div>
    <label>Shoes Price :</label>
    <input type="number" id="ShPrice" />
</div>
<div>
    <label>Shoes Image :</label>
    <input type="url" id="ShUrl" />
</div>
<button className="btnAdd" onClick={saveShoes}> Add </button>
</form>

</div>
</>

}

export default AddingShoes;
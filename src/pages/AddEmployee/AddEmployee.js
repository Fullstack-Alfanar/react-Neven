import { useNavigate } from "react-router-dom";
import "./AddEmployee.scss"

function AddingEmployee() {
    const navigate = useNavigate();
    const SaveEmployee = () => {
        const fname = document.getElementById("fname");
        const lname = document.getElementById("lname");
        const titlee = document.getElementById("titlee");
        const country = document.getElementById("countryy");
        const city = document.getElementById("cityy");
        const birthDate = document.getElementById("birthDatee");
        const imageUrll = document.getElementById("imageUrl");

        let validFName = !(fname.value === null) && !(fname.value === "")
            && fname.value.length >= 2 && fname.value.length < 30;
        let validLName = !(lname.value === null) && !(lname.value === "")
            && lname.value.length >= 2 && lname.value.length < 30;
        let validTitle = !(titlee.value === null) && !(titlee.value === "")
            && titlee.value.length >= 5 && titlee.value.length < 20;
        let validCountry = !(country.value === null) && !(country.value === "")
            && country.value.length >= 3 && country.value.length < 30;
        let validCity = !(city.value === null) && !(city.value === "")
            && city.value.length >= 2 && city.value.length < 30;
        let validBirthDate = !(birthDate.value === null) && !(birthDate.value === "");
        let validImg = !(imageUrll.value === null) && !(imageUrll.value === "")

        if (validFName && validLName && validTitle && validCountry && validCity && validBirthDate && validImg) {
            
            fname.style.borderColor = "";
            lname.style.borderColor = "";
            titlee.style.borderColor = "";
            country.style.borderColor = "";
            city.style.borderColor = "";
            birthDate.style.borderColor = "";
            imageUrll.style.borderColor = "";

            let arr = [];
            let obj = {
                fnamee: fname.value,
                lnamee: lname.value,
                titlee: titlee.value,
                countryy: country.value,
                cityy: city.value,
                birthDatee: birthDate.value,
                image: imageUrll.value
            }

            if (localStorage.getItem("EmployeeStorage")) {
                arr = JSON.parse(localStorage.getItem("EmployeeStorage"))
            }
            arr.push(obj);
            localStorage.setItem("EmployeeStorage" , JSON.stringify(arr))
            navigate("/EmployeePage");
        }
        else{
            (!validFName) ? fname.style.borderColor = "red" : fname.style.borderColor = "";
            (!validLName) ? lname.style.borderColor = "red" : lname.style.borderColor = "";
            (!validTitle) ? titlee.style.borderColor = "red" : titlee.style.borderColor = "";
            (!validCountry) ? country.style.borderColor = "red" : country.style.borderColor = "";
            (!validCity) ?city.style.borderColor = "red" :city.style.borderColor = "";
            (!validBirthDate) ? birthDate.style.borderColor = "red" : birthDate.style.borderColor = "";
            (!validImg) ? imageUrll.style.borderColor = "red" : imageUrll.style.borderColor = "";
        }
     }
        return<>
            <div className="container">
                <h1> Add Employee</h1>
                <form>
                    <div  className="sameDiv">
                        <label >first name: </label>
                        <input id="fname" type="text" />
                    </div>
                    <div className="sameDiv">
                        <label >last name: </label>
                        <input id="lname" type="text" />
                    </div>
                    <div className="sameDiv">
                        <label >title: </label>
                        <input id="titlee" type="text" />
                    </div>
                    <div className="sameDiv">
                        <label >country: </label>
                        <input id="countryy" type="text" />
                    </div>
                    <div className="sameDiv">
                        <label >city: </label>
                        <input id="cityy" type="text" />
                    </div>
                    <div className="sameDiv">
                        <label >birthdate: </label>
                        <input id="birthDatee" type="date" />
                    </div>
                    <div className="sameDiv">
                        <label >image Url: </label>
                        <input id="imageUrl" type="text" />
                    </div>
                </form>
                <button onClick={SaveEmployee}>
                    Add Employee
                </button>
            </div>

        </>

   
}

    export default AddingEmployee;
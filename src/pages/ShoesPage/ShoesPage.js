import { useEffect, useState } from "react";
import "./ShoesPage.scss"

import { Link } from 'react-router-dom';

function ShoesShowpage()
{
    const [shoesListt , setShoes] = useState([]);
    useEffect(()=>{
        if(localStorage.getItem("ShoesList"))
        {
            setShoes(JSON.parse(localStorage.getItem("ShoesList")));

        }
    },[]);

    return <>
   <table>
   <thead>
                <tr>
                    <td><label>Shoes Brand</label></td>
                    <td><label> Size </label></td>
                    <td><label>Price</label></td>
                    <td><label>Image</label></td>
                </tr>
            </thead>
            <tbody>
                {
                    shoesListt.map((elem) =>
                        <tr>
                            <td><label>{elem.name}</label></td>
                            <td><label>{elem.size}</label></td>
                            <td><label>{elem.price}</label></td>
                            <td><img src={elem.img} style={{ height: "50px" }} alt="shoesImg" /></td>
                        </tr>
                    )
                }
            </tbody>


   </table>
    <Link to="/AddShoes" className="addLink">Add</Link>
</>

}

export default ShoesShowpage;
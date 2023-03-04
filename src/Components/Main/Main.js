import "./Main.css"
import { useState } from 'react';

function Main() {
    const [on, setOn] = useState(false);
    const [off, setOff] = useState(true);

    const [onn, setOnn] = useState(false);
    const [offf, setOfff] = useState(true);

    const [onnn, setOnnn] = useState(false);
    const [offff, setOffff] = useState(true);


    let cros=[
        {id:1,name: "Nike air 1 ", cost:"14.990 рублей", img: "https://sneakernews.com/wp-content/uploads/2020/01/nike-air-force-1-high-334031-015-4.jpg"},
        {id:2,name: "Nike air 1 blue", cost:"13.990 рублей", img: "https://sneakernews.com/wp-content/uploads/2020/01/nike-air-force-1-high-334031-015-4.jpg"},
        {id:3,name: "Nike air 1 white", cost:"12.990 рублей", img: "https://sneakernews.com/wp-content/uploads/2020/01/nike-air-force-1-high-334031-015-4.jpg"},
    ]


    let content = cros.map(crosovok => {
return <div className="card">

<img src={crosovok.img} className="kartinka_card"></img>
<p className="TextCard">{crosovok.name}<span style={{
    color: "black",
    fontWeight: "bold",
}}>Размеры 40,41,42,43,44,45</span>
</p>
<div>
    <span className="TextCard">Цена: <br /><span className="TextCard" style={{
        color: "black",
        fontWeight: "bold",
    }}>{crosovok.cost}</span>
    </span>
    <button style={{
        width: "30px",
        height: "30px",
        display: "inline-block",
        marginLeft: "30%",
        borderRadius: "10px",
        backgroundColor: "white"
    }}>
        <span style={{
            fontWeight: "bold",
            margin: "0%",
        }}
        >+</span>
    </button>
    <button style={{
        width: "30px",
        height: "30px",
        display: "inline-block",
        marginLeft: "3%",
        borderRadius: "10px",
        backgroundColor: "white"
    }} onClick={() => setOn(!on)}>   {on ? '🖤' : off ? '🤍' : ""}
    </button>
</div>
</div>
    })

    return <div className="Cards">

   {content}




        {/* // КАРТОЧКА //
        <div className="MainCards">
            


            <div className="card">

                <img src="https://sneakernews.com/wp-content/uploads/2020/01/nike-air-force-1-high-334031-015-4.jpg" className="kartinka_card"></img>
                <p className="TextCard">Nike<span style={{
                    color: "black",
                    fontWeight: "bold",
                }}>Размеры 40,41,42,43,44,45</span>
                </p>
                <div>
                    <span className="TextCard">Цена: <br /><span className="TextCard" style={{
                        color: "black",
                        fontWeight: "bold",
                    }}>14.990 рублей</span>
                    </span>
                    <button style={{
                        width: "30px",
                        height: "30px",
                        display: "inline-block",
                        marginLeft: "30%",
                        borderRadius: "10px",
                        backgroundColor: "white"
                    }}>
                        <span style={{
                            fontWeight: "bold",
                            margin: "0%",
                        }}
                        >+</span>
                    </button>
                    <button style={{
                        width: "30px",
                        height: "30px",
                        display: "inline-block",
                        marginLeft: "3%",
                        borderRadius: "100px",
                        backgroundColor: "white"
                    }} onClick={() => setOnn(!onn)}>   {onn ? '🖤' : offf ? '🤍' : ""}
                    </button>
                </div>
            </div>


            <div className="card">

                <img src="https://sneakernews.com/wp-content/uploads/2020/01/nike-air-force-1-high-334031-015-4.jpg" className="kartinka_card"></img>
                <p className="TextCard">Nike<span style={{
                    color: "black",
                    fontWeight: "bold",
                }}>Размеры 40,41,42,43,44,45</span>
                </p>
                <div>
                    <span className="TextCard">Цена: <br /><span className="TextCard" style={{
                        color: "black",
                        fontWeight: "bold",
                    }}>14.990 рублей</span>
                    </span>
                    <button style={{
                        width: "30px",
                        height: "30px",
                        display: "inline-block",
                        marginLeft: "30%",
                        borderRadius: "10px",
                        backgroundColor: "white"
                    }}>
                        <span style={{
                            fontWeight: "bold",
                            margin: "0%",
                        }}
                        >+</span>
                    </button>
                    <button style={{
                        width: "30px",
                        height: "30px",
                        display: "inline-block",
                        marginLeft: "1%",
                        borderRadius: "100px",
                        backgroundColor: "white"
                    }} onClick={() => setOnn(!onn)}>   {onn ? '🖤' : offf ? '🤍' : ""}
                    </button>
                </div>
            </div>

            <div className="card">

    <img src="https://sneakernews.com/wp-content/uploads/2020/01/nike-air-force-1-high-334031-015-4.jpg" className="kartinka_card"></img>
    <p className="TextCard">Nike<span style={{
        color: "black",
        fontWeight: "bold",
    }}>Размеры 40,41,42,43,44,45</span>
    </p>
    <div>
        <span className="TextCard">Цена: <br /><span className="TextCard" style={{
            color: "black",
            fontWeight: "bold",
        }}>14.990 рублей</span>
        </span>
        <button style={{
            width: "30px",
            height: "30px",
            display: "inline-block",
            marginLeft: "30%",
            borderRadius: "10px",
            backgroundColor: "white"
        }}>
            <span style={{
                fontWeight: "bold",
                margin: "0%",
            }}
            >+</span>
        </button>
        <button style={{
            width: "30px",
            height: "30px",
            display: "inline-block",
            marginLeft: "3%",
            borderRadius: "100px",
            backgroundColor: "white"
        }} onClick={() => setOnn(!onn)}>   {onn ? '🖤' : offf ? '🤍' : ""}
        </button>
    </div>
    </div>           





        </div> */}
        </div>
}


        export default Main;
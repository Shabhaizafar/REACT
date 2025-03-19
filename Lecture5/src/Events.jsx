import { useState } from "react";
import './Event.css'

function newData(){
    const draggable = document.getElementById("draggable");
    const dropzone = document.getElementById("dropzone");

    draggable.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text/plain", event.target.id);
    });

    dropzone.addEventListener("dragover", (event) => {
        event.preventDefault(); // Necessary to allow dropping
    });

    dropzone.addEventListener("drop", (event) => {
        event.preventDefault();
        const draggedElementId = event.dataTransfer.getData("text/plain");
        const draggedElement = document.getElementById(draggedElementId);
        dropzone.appendChild(draggedElement);
    });
}
function Events(){
    const [count,setCount] = useState(0);
   
    return(
        <>
            {/* <input type="text" onFocus={()=>{setCount(count+1)}} onBlur={()=>{setCount(count-1)}}/>  */}
            {/* <input type="text" onInput={()=>{setCount(count+1)}}/>  */}

            {/* <form action="" onReset={()=>{setCount(count+1)}}> */}
            {/* <form action="" onInvalid={()=>{setCount(1)}}> */}
                {/* <input type="text" /> */}
                {/* <input type="reset" value="Reset" /> */}
                {/* <input type="email" name="" /> */}
                {/* <input type="submit" value="Submit" /> */}
            {/* </form> */}

            {/* <input type="text" onCopy={()=>{setCount(count+1)}}/> */}
            {/* <img src="/vite.svg" alt="" onDrag={()=>{setCount(count+1)}} onDrop={()=>{setCount(0)}}/> */}
            {/* <input type="file" name="" id="" onDrop={()=>{setCount(count+1)}}/> */}

            {/* <h2>Drag and Drop Example</h2>
            <div className="container">
                <div id="draggable" className="box" draggable="true">Drag Me</div>
                <div id="dropzone" className="drop-zone">Drop Here</div>
            </div> */}
            <video controls src="https://r8---sn-ci5gup-5hqe.googlevideo.com/videoplayback?expire=1742393879&ei=t33aZ9XHJKm26dsPpqqygA0&ip=176.1.195.196&id=o-AFU1SyLV_gfrjRhhqEcyKyMmvF_8d07IJlIST_q-eBJV&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&rms=au%2Cau&bui=AccgBcOoBneWEkYps20X8B3aYKWqu6KBCVzxIfA5B-nRFeOqlHZdfryTKFXR3idPJZajJVlxXEk33sEo&spc=_S3wKtSA-qYmPxw6sWuZWJYOncxx1lIYlpieSUs_W-hceSS_nGGr&vprv=1&svpuc=1&mime=video%2Fmp4&ns=dovgxpQhz47sDhgMqCt4kIIQ&rqh=1&cnr=14&ratebypass=yes&dur=405.699&lmt=1737059804877565&fexp=51355912&c=WEB&sefc=1&txp=4538534&n=H26nVJPbXkRZOg&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRQIhAOUhDQvNXM8brxaFre7p3wAA4Jg4bvatQ4LOk5TeCVw1AiA7Pa_iCYn0mCu4z5hWTmPxilmcLWJOT9Xkp2o1ITgxTg%3D%3D&pot=MnTeRBcyapTESN54HZtU7rJYwU3-BQ72cFoe1AeTUkyjzsrZ60OrcpmNvzjucIBDpJ3tP_Vro55wze-enbWYYZml7RYNALOXjj-oXHosT5CnhM4gDoIZKyJYER9MX-YqMg5PoOuZ0tZzILFEPkReYVVvL51q-A==&cms_redirect=yes&met=1742372284,&mh=i2&mip=2401:4900:1f3f:79f0:69ba:ab3e:a2f5:a07f&mm=31&mn=sn-ci5gup-5hqe&ms=au&mt=1742371790&mv=m&mvi=8&pl=49&lsparams=met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=AFVRHeAwRgIhAP42_IUahyGpVlKrXR34o0QmxOGZCI_NrxnlG7qXZnQoAiEA2D_yaKapPkFvvh9b3Wem6BW_6Bbzz0Qxs5tre947RUI%3D" ></video>
            <div id="draggable" className="box animation" draggable="true">Drag Me</div>

            {/* {newData()} */}
            <h2>Your Counter : {count}</h2>
            {/* <input type="text" onFocus={()=>{console.log("sedr")}} />  */}
            {/* <button type="button" onClick={()=>{
                console.log(document.querySelector('input').value);
            }}>Click</button> */}
            {/* <form action="">
                <input type="text" onChange={()=>{
                    setCount(count+1)
                }}/>
                <h2>Your Counter : {count}</h2>
            </form> */}
        </>
    )
};

export default Events;
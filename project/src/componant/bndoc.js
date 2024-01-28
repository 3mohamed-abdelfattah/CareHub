import Header from "./Header"
import { Link } from "react-router-dom"
import "./bndoc.css"
//الصور
import Brain from "./Photos/brain.png"




export default function BN() {


    function search() {
        let searchBar = document.querySelector('.search-input').value.toUpperCase();
        let DoctorList = document.querySelector('.doctors-list');
        let Doctor = document.querySelectorAll('.Doctors');
        let doctorName = document.getElementsByTagName('h1');
    
        for(let i=0; i<doctorName.length;i++){
            if(doctorName[i].innerHTML.toUpperCase().indexOf(searchBar)>=0){
                Doctor[i].style.display ="";
            }
            else{
                Doctor[i].style.display ="none";
            }
        }
    
    }
    /*let show = document.getElementById('show');
    let question = document.getElementById('demo');
    show .addEventListenter('click',function(){
        if(question.style.display = 'block'){
            question.style.display ='none'
        }
        else{
        question.style.display = 'block'
        }
    })*/
    
    let pup = document.querySelectorAll('[data-pup]'),
        box = document.querySelector('[data-box]');
        for(const i of pup) {
        i.addEventListener('click' , function(){
            box.classList.toggle('active');
        })
    }
    
    let pop = document.querySelectorAll('[data-pop]'),
        rox = document.querySelector('[data-rox]');
    for(const i of pop){
        i.addEventListener('click' , function(){
            rox.classList.toggle('active');
        })
    }
    let bub = document.querySelectorAll('[q-pop]'),
        rux = document.querySelector('[q-rox]');
    for(const i of bub){
        i.addEventListener('click' , function(){
            rux.classList.toggle('active');
        })
    }







  return (
<div>
<Header/>

    <div className="header">
    </div>

    <div className="landing">
      <div className="container">
        <img decoding="async" className="logo" src="https://static.sayidaty.net/styles/900_scale/public/2022-05/112357.jpeg" alt="" />
        <div className="search-box">
          <input type="text" placeholder="بحث..." className="search-input" onkeyup={search} />
        </div>
      </div>
    </div>
    
    <div className="doctors-list">
      <div className="container">
        <div className="Doctors">
          <img src="" alt="" />
          <div className="doctors-data">
            <h1>د.أحمد عبداللطيف </h1>
            <h3>جراحة مسالك بولية</h3>
            <h4>العنوان</h4>
          </div>
          <button onClick={() => document.location = ''}>التفاصيل</button>
        </div>
      </div>
    </div>
    
    <div className="common-questions">
      <h3>الاسئلة الشائعة</h3>
      <div className="container">
        <div className="some-questions">
          <button className="show" data-pup>ينصح بعدم التبرع بالدم؟</button>
          <div className="demo" data-box>
            <p>تهتم خدمة نقل الدم بصحة المتبرع بالدم ومتلقيه...</p>
          </div>
        </div>
      </div>
    </div>
    </div>
        );
}

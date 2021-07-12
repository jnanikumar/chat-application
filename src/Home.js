import React,{useState,useEffect} from 'react'
import './Home.css'
import Message from './Message'
import { db } from './Firebase'
import { auth } from './Firebase'
import firebase from 'firebase'
export default function Home({email}) {
    const [message,setMessage]=useState("")
    const [messages,setMessages]=useState([])
    useEffect(()=>{
        getMessages();
        console.log(messages)
        // messages.sort(function(a, b) {
        //     var keyA = new Date(a.id),
        //       keyB = new Date(b.id);
        //     // Compare the 2 dates
        //     if (keyA < keyB) return -1;
        //     if (keyA > keyB) return 1;
        //     return 0;
        //   });

        
        
    },[])
    function handleOnchange(e){
        setMessage(e.target.value)
    }

    function handleSend(e){
        e.preventDefault()
        db.collection("chat").add(
            {chat:message,
            email:email,
        timeStamp:firebase.firestore.FieldValue.serverTimestamp(),}
        )
        setMessage("")

    }

    function getMessages(){
        db.collection("chat").onSnapshot(function (querySnapshot){
            setMessages(querySnapshot.docs.map((doc)=>({
                doc_id:doc.id,
                id:doc.data().timeStamp,
                chat:doc.data().chat,
                email:doc.data().email,
               
                
            })).sort(function(a, b) {
                var keyA = new Date(a.id.seconds),
                keyB = new Date(b.id.seconds);
                // Compare the 2 dates
                if (keyA < keyB) return -1;
                if (keyA > keyB) return 1;
                return 0;
              }))
        })

        
    }






    // function getMessages(){
    //     db.collection("chat").onSnapshot(function (querySnapshot){
    //         setMessages(querySnapshot.docs.sort(function(a, b) {
    //                  var keyA = new Date(a.data().id),
    //                    keyB = new Date(b.data().id);
    //                   //Compare the 2 dates
    //                  if (keyA < keyB) return -1;
    //                  if (keyA > keyB) return 1;
    //                  return 0;
    //                }).map((doc)=>({
    //             id:doc.data().timeStamp,
    //             chat:doc.data().chat,
    //             email:doc.data().email,
               
                
    //         })))
    //     })

        
    // }



















    return (
        <div className="container">
            <div className="row header_row">
                <div className="col-6">chat</div>
                <div className="col-3 offset-2"><button className="btn btn-primary" onClick={()=>{auth.signOut()}}>signOut</button></div>
            </div>
            <div className="row mt-3 chat_box">
            {/* {messages.sort(function(a, b) {
            var keyA = new Date(a.id.seconds),
            keyB = new Date(b.id.seconds);
            // Compare the 2 dates
            if (keyA < keyB) return -1;
            if (keyA > keyB) return 1;
            return 0;
          })} */}
            {messages.map((msg)=>(
                <Message chat={msg.chat} mail={msg.email} id={msg.id} doc_id={msg.doc_id}/>
            ))}

                
                


            </div>

            <div className="row footer_row">
                


                <div className="col-8 offset-1">
                    <input type="text" className="form-control" id="inputChat" aria-describedby="inputChat" placeholder="Message" onChange={handleOnchange} name="message" value={message} autoComplete="off"/>
                </div>

                <div className="col-3">
                    <button className="btn btn-primary send_btn" onClick={handleSend}>send</button>
                </div>
                

            </div>
        </div>
    )
}

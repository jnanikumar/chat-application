import React from 'react'
import "./Message.css"
import { db } from './Firebase'
export default function Message({chat,mail,id,doc_id}) {

    function deleteMessage(){
        db.collection("chat").doc(doc_id).delete()
    }
    
    return (
        
        <div className={`col-${(mail)==="jnanik16@gmail.com"?"8":"9"}  message_box offset-${(mail)==="jnanik16@gmail.com"?"3":"1"}`} 
        style={{backgroundColor:`${(mail)==="jnanik16@gmail.com"?"mediumaquamarine":"orange"}`,
        // marginLeft:`${(mail)==="jnanik16@gmail.com"?"40vw":"10vw"}`
        }} key={id} >
                <div style={{display:"flex",justifyContent:"space-between"}}><span className="msg_from" >{mail}</span><button className="delete_btn" onClick={deleteMessage}>x</button></div>
                
                <div className="">{chat}
                </div>
                {/* <div className="msg_from">{mail}</div> */}

        </div>
        
    )
}

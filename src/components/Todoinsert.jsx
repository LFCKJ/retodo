import { useState } from "react";

function Todoinsert({onInsert}) {
    const [text,setText]=useState('');

    const onchange = (e) => {
        setText(e.target.value);
    }

const onSubmit = (e) => {
    onInsert(text);
    setText('');
    e.preventDefault();

};


    return (
    <form onSubmit={onSubmit}>
     <input type="text" 
     value={text}
     placeholder="할 일을 입력하세요."
     onChange={onchange}/>
     <button type="submit">등록</button>
    </form>
    
);
}

export default Todoinsert;
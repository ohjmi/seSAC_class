import { useState } from 'react';

const MemoApp = () => {
    const [memoList, setMemoList] = useState([]); // 기존 메모 리스트
    const [newMemo, setNewMemo] = useState(''); // 새로운 메모

    const addMemo = () => {
        setMemoList([...memoList, newMemo]);
        
        setNewMemo(''); // 추가 이후 해당 폼 클리어
    }

    const deleteMemo = (index) => {
        // 삭제 기능 구현
        const updatedMemoList  = [...memoList];
        updatedMemoList.splice(index, 1);
        setMemoList(updatedMemoList);
    }

    return (
        <div>
            <h1>간단한 메모장</h1>
            <div>
                <input type='text' value={newMemo} onChange={(e) => setNewMemo(e.target.value)}  placeholder='메모를 입력하세요'/>
                <button onClick={addMemo}>추가</button>
            </div>

            <ul>
                {memoList.map((memo, index) => ( 
                    <li key={index}> 
                        {memo}
                        <button onClick={() => deleteMemo(index)}>삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    )



}

export default MemoApp;
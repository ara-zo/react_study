import {useRouter} from "next/router";
import {useRef, useState} from "react";

const InfoIdex = () => {

    // const temp = [1,2,3,4];
    // const str = "인포 페이지 입니다.111"
    //{} 어디든 쓸 수 있음

    // https://jsonplaceholder.typicode.com/users

    const [num, setNum] = useState(0)

    const [isView, setIsView] = useState(false)

    const inputSelectRef = useRef(null)

    const router = useRouter();

    return (
        <div>
            <div>숫자 : {num}</div>

            {isView && <div>보임</div>}

            <button onClick={e => setIsView(!isView)}>열기닫기</button>

            <button onClick={e => setNum(num + 1)}>더하기</button>

            <br/>

            <select ref={inputSelectRef}>
                <option value={1}>1번</option>
                <option value={2}>2번</option>
                <option value={3}>3번</option>
            </select>

            <button
                style={{backgroundColor:"red", width:"500px", color:"white"}}
                onClick={event => alert(inputSelectRef.current.value)}
            >
                선택한 번호 확인하기
            </button>
        </div>
    )
}

export default InfoIdex
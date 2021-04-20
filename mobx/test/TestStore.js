import {action, makeObservable, observable} from "mobx";
import TestRepository from "./TestRepository";
import {error} from "next/dist/build/output/log";

class TestStore {

    testDTOList = [] // 변경될 데이터

    constructor() {
        makeObservable(this, {
            testDTOList: observable, // 데이터가 변경된거를 구독가능하게하는 거
            setTestDTOList: action // 데이터가 변경될때는 무조건 action 넣기
        })
    }

    setTestDTOList = (testDTOList) => { // 데이터를 변경하는 함수
        this.testDTOList = testDTOList
    }

    requestTestDTOList = () => { // 데이터 변경 통신
        return TestRepository.requestTestDTOList()
            .then(result => {
                if (result.status === 200) {
                    this.setTestDTOList(result.data)
                    return "리스트 로딩에 성공했습니다."
                } else {
                    return "리스트 로딩에 실패했습니다."
                }
            })
            .catch(error => {
                return "리스트 로딩 중 에러가 발생했습니다."
            })
    }
}

export default TestStore
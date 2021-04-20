import CustomAxios from "../../costom/CustomAxios";

class TestRepository {
    URL = "posts"

    requestTestDTOList = () => {
        return CustomAxios.instance().get(`${this.URL}`)
    }
}

export default new TestRepository()
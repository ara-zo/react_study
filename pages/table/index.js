import {Card, Col, Container, ListGroup, Row, Table} from "react-bootstrap";
import {inject, observer} from "mobx-react";
import {useEffect} from "react";

const TablePage = props => { // Inject시 props에 등록됨

    const testStore = props.testStore

    const requestTestDTOList = async () => {
        const message = await testStore.requestTestDTOList()

        alert(message)
    }

    useEffect(() => {
        requestTestDTOList()
    }, [])

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card border={"primary"} bg={"primary"}>
                            <Card.Header
                                style={{
                                    color: 'white',
                                    display: 'grid',
                                    gridTemplateColumns: 'auto auto',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <h4>디폴트 페이지</h4>
                            </Card.Header>
                            <ListGroup variant={'flush'}>
                                <ListGroup.Item>
                                    <Table bordered hover>
                                        <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Title</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            testStore.testDTOList.map(
                                                data =>
                                                    <tr key={data.id}>
                                                        <td>{data.id}</td>
                                                        <td>{data.title}</td>
                                                    </tr>
                                            )
                                        }
                                        </tbody>
                                    </Table>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default inject("testStore")(observer(TablePage))

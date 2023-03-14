
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import MemeModal from './MemeModal';
import UpdateForm from './UpdateForm';

function MemeList(props) {

    const [showFlag, setShowFlag] = useState(false);
    const [showUpdateFlag, setShowUpdateFlag] = useState(false);
    const [clickedMeme, setClickedMeme] = useState({});
    const handleShow = (item) => {
        console.log(item);
        setClickedMeme(item);
        setShowFlag(true);
    }

    const showUpdateForm = (item) => {
        console.log(item);
        setClickedMeme(item);
        setShowUpdateFlag(true);
    }

    const handleUpdateclose = () => {
        setShowUpdateFlag(false);
    }

    const handleclose = () => {
        setShowFlag(false);
    }

    const setNewData = (newData) => {
        console.log("data", newData);
    }
    return (
        <>
            <Row xs={1} md={4} className="g-4">
                {props.favArr.map((item) => {
                    return <Col key={item.id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.image_path} />
                            <Card.Body>
                                <Card.Title>{item.meme_name}</Card.Title>
                                <Card.Text>
                                    <p>Rank : {item.rank}</p>
                                    <p>{item.top_text}</p>
                                    <p>{item.tags}</p>
                                </Card.Text>
                                <Button variant="primary" onClick={() => { handleShow(item) }}>More</Button>
                                <Button variant="success" onClick={() => { showUpdateForm(item) }}>Update</Button>
                                <Button variant="danger">Delete</Button>

                            </Card.Body>
                        </Card>
                    </Col>
                })}
            </Row>

            <MemeModal showFlag={showFlag} handleclose={handleclose} memeData={clickedMeme} />

            <UpdateForm showFlag={showUpdateFlag} handleclose={handleUpdateclose} memeData={clickedMeme} setNewData={setNewData}/>
        </>
    )
}

export default MemeList;
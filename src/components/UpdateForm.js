import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function UpdateForm(props) {

    const updateMeme = async (e) => {
        e.preventDefault();
        console.log(e.target);
        const serverURL = `${process.env.REACT_APP_serverURL}/updatefavMeme/${props.memeData.id}`;
        console.log(serverURL)
        const obj = {
            image_path: e.target.image.value, 
            meme_name: e.target.name.value,
            rank : e.target.rank.value, 
            tags : e.target.tags.value, 
            top_text: e.target.top_text.value
        }
        axios.put(serverURL,obj)
        .then((result)=>{
            console.log(result.data);
            props.setNewData(result.data);
        })
        
    }
    return (
        <Modal show={props.showFlag} onHide={props.handleclose}>
            <Modal.Header closeButton>
                <Modal.Title>{props.memeData.meme_name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={updateMeme}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" type="text" defaultValue={props.memeData.meme_name} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Image Path</Form.Label>
                        <Form.Control name="image" type="text" defaultValue={props.memeData.image_path} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Rank</Form.Label>
                        <Form.Control name="rank" type="text" defaultValue={props.memeData.rank} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Top Text</Form.Label>
                        <Form.Control name="top_text" type="text" defaultValue={props.memeData.top_text} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Tags</Form.Label>
                        <Form.Control name="tags" type="text" defaultValue={props.memeData.tags} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleclose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default UpdateForm;
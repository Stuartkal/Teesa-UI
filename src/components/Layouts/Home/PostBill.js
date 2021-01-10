import React,{useState} from 'react'
import Modal from '../../UI/Modal'
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import * as actionCreators from '../../Store/ActionCreators'
import {connect} from 'react-redux'
import {storage} from '../../Utils'


const PostBill = (props) => {

    const [state,setState] = useState({ 
        title: '' , 
        description: '', 
        imageUrl: '',
        progress: 0
    })
    

    const imageUploadHandler = async (event) => {
		if (event.target.files[0]) {
			const name = event.target.files[0].name;
			console.log('image', name);
			try {
				const uploadImage = storage.ref();
				const _ref = uploadImage.child(`teesa_posts_images/${name}`);
				_ref.put(event.target.files[0]).on(
					'state_changed',
					(snapshot) => {
						const progress = Math.ceil(snapshot.bytesTransferred / snapshot.totalBytes * 100);
						setState({...state, progress: progress < 100 ? progress : 0});
						console.log(progress);
					},
					(error) => {
						console.log('An error occured', error);
					},
					async () => {
						const url = await _ref.getDownloadURL();
                        setState({...state, imageUrl: url})
					}
				);
			} catch (error) {
				console.log('Error uploading', error);
			}
		}
    }
    
    console.log(state.imageUrl)

    const postBill = (e) => {
        e.preventDefault()
        props.post(state.title,state.description,state.imageUrl)
        // setState({imageUrl:'',description:''})
    }

    return (
        <div>
            <Modal close={props.close}>
                    <form className="post" onSubmit={postBill} >
                        <div className="upload">
                        <input accept="image/*"  id="icon-button-file" type="file" hidden  onChange={imageUploadHandler} />
                        <label htmlFor="icon-button-file">
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <PhotoCamera style={{fontSize:'50px'}} className="camera-icon" />
                        </IconButton>
                        </label>
                        <img src={state.imageUrl}/>
                        <h4>Add Bill featured photo <strong style={{color:'#ff5150'}}>*</strong></h4>
                        
                        </div>
                        <input type="text" placeholder="Bill Title*" value={state.title} onChange={(e) => setState({...state, title: e.target.value})}/>
                        <textarea type="text" placeholder="Bill Description*" value={state.description} onChange={(e) => setState({...state, description: e.target.value})}/>
                        <h5>All fields with * are required</h5>
                        <div className="post-btn">
                            <button>Post</button>
                        </div>
                    </form>   
            </Modal>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({ 
    post: (title,description,imageUrl) => dispatch(actionCreators.post(title,description,imageUrl))
})
    
export default connect(null, mapDispatchToProps) (PostBill)

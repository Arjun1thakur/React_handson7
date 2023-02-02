import { useNavigate,useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { EditMessage } from '../Redux-Store/ReduxSlice';
function Update(){
    const navigate = useNavigate();
    


    const location = useLocation(); // returns the location object 
    const index = (location.state.data);
    const dispatch = useDispatch();
    const array = useSelector((state)=>state.dataX);
    const data = {
        Name : array[index].Name,
        Num:array[index].Num,
        Course:array[index].Course,
        Batch:array[index].Batch,
    }

    const UpdateX = (e) =>{
        data[e.target.name] = e.target.value;
        console.log(data)
    }
    const SubmitX = (e) =>{
        e.preventDefault()
        dispatch(EditMessage({data,index}))
        navigate('/student');
     }

    return (
        <>
            <div className="foam bg grid">
                <div className='center a'>
                    <input type="text" name="Name" onChange={UpdateX} className="input" placeholder={array[index].Name}/>
                </div>
                <div className='center b'>
                    <input type='number' name="Num" onChange={UpdateX} className="input" placeholder={array[index].Num}/>
                </div>
                <div className='center c'>
                    <input type="text" name="Course" onChange={UpdateX} className="input" placeholder={array[index].Course}/>
                </div>
                <div className='center d'>
                    <input type="text" name="Batch" onChange={UpdateX} className="input" placeholder={array[index].Batch}/>
                </div>
                <div className="BtnPlace e">
                    <input type="reset" value="Reset" className='btn'/>
                    <input type="submit" onClick={SubmitX} value='Update'  className='btn'/>
                </div>
            </div>
        </>
    )
}
export default Update
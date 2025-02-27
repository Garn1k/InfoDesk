import { useEffect, useState } from 'react'; 
import { Header } from '../../components/Header/Header'; 
import { useAppSelector, useAppDispatch } from '../../hooks/redux' 
import { fetchPhonnumber } from "../../store/action/PhonnumberAction"; 
import { ErrorMessage } from '../../components/Error/Error';
import axios from '../../axios/index'; 
import useAuth from '../../hooks/AdminHooks/useAuth'; 
import "./Phonnumber.scss" 
import DeleteText from '../../components/Delete/DeleteText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck,faXmark,faPen,faTrash,faPlus } from '@fortawesome/free-solid-svg-icons'
 
 
export const PhonnumberPage = () => { 
 
  const {Phonnumber}:any = useAppSelector(state => state.Phonnumber)
  
  const dispatch = useAppDispatch() 

  const {auth}:any = useAuth() 
  const [edit, setEdit] = useState(-1) 
  const [add, setAdd] = useState(false)
  const [value, setValue] = useState('') 
  const [error, setError] = useState("")
  const [erorrdiv, setErrordiv] = useState(false)
  const [removeitem,setRemoveitem]=useState([-1,'',{}])
  
  useEffect(()=>{ 
    dispatch(fetchPhonnumber())
  },[dispatch]) 


  async function adminSave(id:any, value:any,  page:string, e:any){ 
    e.preventDefault()
    if(value===''){
      setErrordiv(true)
    }
    else{
    const newPhones={  
      phone:value, 
    } 
    await axios.put(page + "/" + id, newPhones);
    dispatch(fetchPhonnumber()) 
    setEdit(-1)
  } }
 
  async function adminDelete(id:number, page:string, e:any){
    e.preventDefault()
    await axios.delete(page+"/" + id); 
    dispatch(fetchPhonnumber()) 
  } 

  async function adminAdd() {
    setValue("")
    setEdit(-1)
    setAdd(!add)
    setError("")
  }
 
  async function adminsSave(value:any, e:any){
    e.preventDefault()
    setError('');
    if(value.trim().length=== 0 || value.trim().length=== 0){
      setError('Անհրաժեշտ է լրացնել');
      return
    }
    const newPhones={
      phone:value,  
    } 
    await axios.post("phone/", newPhones); 
    setAdd(!add)
    dispatch(fetchPhonnumber())
  
  } 

  return ( 
    <div className='phonnumber'> 
      <Header/> 
      <div className='main_2'> 
        <div className='header_'> 
          <img src="./images/Frame7.png" alt='' /> 
          <h2>Տեղեկատու հեռախոսներ</h2> 
        </div> 
  
        {add ? <div className='form'>
          <label>Տեղեկատու հեռախոսահամար</label>
          <textarea maxLength={100} value={value} onChange={(e:any) => {setValue(e.target.value)}}></textarea>
          {error &&  value.trim().length===0 && <ErrorMessage error={error} />}

          <div className='form_div'>
            <button onClick={(e) => adminsSave(value,  e)} >Ավելացնել</button>
            <button onClick={()=> setAdd(!add)} >Չեղարկել</button>
          </div> 

        </div>:
        <><table> 
          <thead> 
            <tr> 
              <th>Տեղեկատու հեռախոսներ</th> 
            </tr> 
          </thead> 
        { 
          Phonnumber?.map((item:any)=> 
          <tbody key={item.id}> 
            {
            edit === item.id ? <tr className='textarea_tr'> 
              <td className='textarea_td'> 
                <input className={erorrdiv ? 'errordiv' : ''}  value={value} onChange={(e:any) => {setValue(e.target.value); setErrordiv(false)}}></input> 
              </td> 
              <td className='textarea_td'> 
                <button className='save'> <FontAwesomeIcon icon={faCheck}  onClick={(e) => adminSave(item.id, value,  "phone", e)}/></button>
                <button onClick={() => setEdit(-1)} ><FontAwesomeIcon icon={faXmark} /></button>
              </td> 
              </tr> :
               <tr> 
              <td>{item?.phone}</td> 
              {auth.role &&<td className='bution'>  <button onClick={() => { 
                setEdit(item.id) 
                setValue(item.phone) 
              }}><FontAwesomeIcon icon={faPen} /></button>
                  {auth.role && <button onClick={(e) => { 
                  setRemoveitem([item.id, "phone", e]) 
                  }}><FontAwesomeIcon icon={faTrash} /></button> } 
              </td>   }
            </tr>} 
            </tbody> 
          ) 
        } 
        </table>

        {auth.role && <button onClick={() => adminAdd()} className="ADD"><FontAwesomeIcon icon={faPlus} />   Ավելացնել</button>}

        </> }
      </div> 
    {removeitem[0]!==-1&&<DeleteText removeitem={removeitem} setRemoveitem={setRemoveitem} deleteItem={adminDelete} />}
  </div> 
  ) 
}
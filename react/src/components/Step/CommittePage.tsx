import { useEffect, useState } from 'react';
import axios from '../../axios';
import { useAppSelector, useAppDispatch } from '../../hooks/redux'
import { fetchCommitte } from "../../store/action/NumbersAction";
import useAuth from '../../hooks/AdminHooks/useAuth';
import './StepStyle.scss'
import { ErrorMessage } from '../Error/Error';
import DeleteText from '../Delete/DeleteText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck,faXmark,faPen,faTrash,faPlus } from '@fortawesome/free-solid-svg-icons'



export const CommittePage = () => {

  const { auth }: any = useAuth()
  const { Committe } = useAppSelector(state => state.Committes)
  const dispatch = useAppDispatch()
  const [removeitem, setRemoveitem] = useState<any>([-1, {}])
  const [edit, setEdit] = useState<number>(-1)
  const [add, setAdd] = useState<boolean>(false)
  const [error, setError]=useState('')
  const [value, setValue] = useState({
    name: '',
    member1: '',
    member2: '',
    internalphone: '',
    internalphone2: '',
  })
  const [addvalue, setAddvalue] = useState({
    name: '',
    member1: '',
    member2: '',
    internalphone: '',
    internalphone2: '',
  })

  const [erorrdiv, setErrordiv] = useState(false)
  const [erorrdiv1, setErrordiv1] = useState(false)
  const [erorrdiv2, setErrordiv2] = useState(false)

  useEffect(() => {
    dispatch(fetchCommitte())
  }, [dispatch])

  async function Save(id: number, e: React.FormEvent) {
    e.preventDefault()
    if(value.name===''){
      setErrordiv(true)
    }
    if(value.member2===''){
      setErrordiv1(true)
    }
    if(value.internalphone===''){
      setErrordiv2(true)
    }else{
    const Editcomitee = {
      name: value.name, member1: value.member1,
      member2: value.member2,
      internalphone: value.internalphone, internalphone2: value.internalphone2
    }
    await axios.put('committee/' + id, Editcomitee)
    dispatch(fetchCommitte())
    setEdit(-1)
  }}

  async function Add(e: React.FormEvent) {
    e.preventDefault()
    setError('');
    if(addvalue.name.trim().length===0 ||addvalue.member2.trim().length===0 || addvalue.member1.trim().length === 0||addvalue.internalphone.trim().length===0){
    setError('Անհրաժեշտ է լրացնել');
      return
    }
    const newComitee = {
      name: addvalue.name, member1: addvalue.member1,
      member2: addvalue.member2, 
      internalphone: addvalue.internalphone, internalphone2: addvalue.internalphone2
    }
    await axios.post('committee/', newComitee)
    dispatch(fetchCommitte())
    setAdd(false)
  }

  async function Delete(id: number, e: React.FormEvent) {
    e.preventDefault()
    await axios.delete('committee/' + id,)
    dispatch(fetchCommitte())
    setAdd(false)
  }

  return (
    <>
      {add ? <form className='form' onSubmit={(e) => Add(e)}>
        <label>Հանձնաժողովի անվանումը</label>
        <input className='td1'  value={addvalue.name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setAddvalue({
            name: e.target.value, member1: addvalue.member1,
            member2: addvalue.member2, 
            internalphone: addvalue.internalphone, internalphone2: addvalue.internalphone2
          })
        }} />
          {error &&  addvalue.name.trim().length===0 && <ErrorMessage error={error} />}
        <label>Հանձնաժողովի նախագահ</label>
        <input className='td1'  value={addvalue.member1} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setAddvalue({
            name: addvalue.name, member1: e.target.value,
            member2: addvalue.member2, 
            internalphone: addvalue.internalphone, internalphone2: addvalue.internalphone2
          })
        }} />
          {error &&  addvalue.member1.trim().length===0 && <ErrorMessage error={error} />}
        <label>Հանձնաժողովի նախագահի տեղակալ</label>
        <input className='td1'  value={addvalue.member2} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setAddvalue({
            name: addvalue.name, member1: addvalue.member1,
            member2: e.target.value, 
            internalphone: addvalue.internalphone, internalphone2: addvalue.internalphone2
          })
        }} />
          {error &&  addvalue.member2.trim().length===0 && <ErrorMessage error={error} />}
        
        <label>1-ին Ներքին հեռախոսահամարը</label>
        <input className='td1'  value={addvalue.internalphone} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setAddvalue({
            name: addvalue.name, member1: addvalue.member1,
            member2: addvalue.member2,
            internalphone: e.target.value, internalphone2: addvalue.internalphone2
          })
        }} />
          {error &&  addvalue.internalphone.trim().length===0 && <ErrorMessage error={error} />}
        <label>2-րդ Ներքին հեռախոսահամարը</label>
        <input className='td1'  value={addvalue.internalphone2} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setAddvalue({
            name: addvalue.name, member1: addvalue.member1,
            member2: addvalue.member2, 
            internalphone: addvalue.internalphone, internalphone2: e.target.value
          })
        }} />
       <div className='button'>
         <button className='button1' onClick={(e) => Add(e)} >Ավելացնել</button>
         <button className='button2' onClick={()=>{setAdd(false); setError('')}}>Չեղարկել</button>
        </div>
      </form> : <form>
        <table className='table2'>
          <thead>
            <tr>
              <th className='th1'>Հանձնաժողովի&nbsp; անվանումը</th>
              <th className='th2'>Ազգանուն Անուն Հայրանուն</th>
              <th className='th4'>Ներքին  հեռ․</th>
            </tr>
          </thead>
          <>
            {
              Committe.map((item, index) =>
                <tbody key={index}>
                  {edit === index ?
                    <tr>
                      <td><input className={erorrdiv ? 'td2_input jj errordiv' : 'td2_input jj'} maxLength={20} value={value.name} onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
                        setValue({
                          name: e.target.value, member1: value.member1, member2: value.member2, 
                          internalphone: value.internalphone, internalphone2: value.internalphone2
                        }); setErrordiv(false)
                      }} /></td>
                      <td><input className= 'td2_input jj' maxLength={20} value={value.member1} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setValue({
                          name: value.name, member1: e.target.value, member2: value.member2, 
                          internalphone: value.internalphone, internalphone2: value.internalphone2
                        })
                      }} />
                        <input className={erorrdiv1 ? 'td2_input jj errordiv' : 'td2_input jj'} maxLength={20} value={value.member2} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          setValue({
                            name: value.name, member1: value.member1, member2: e.target.value, 
                             internalphone: value.internalphone, internalphone2: value.internalphone2
                          }); setErrordiv1(false)
                        }} /></td>
                      
                      <td><input className={erorrdiv2 ? 'td2_input errordiv' :'td2_input'} maxLength={8} value={value.internalphone} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setValue({
                          name: value.name, member1: value.member1, member2: value.member2, 
                          internalphone: e.target.value, internalphone2: value.internalphone2
                        }); setErrordiv2(false)
                      }} />
                      <input className='td2_input' maxLength={8} value={value.internalphone2} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setValue({
                          name: value.name, member1: value.member1, member2: value.member2, 
                          internalphone: value.internalphone, internalphone2: e.target.value
                        })
                      }} /></td>
                      <td>
                        <button className='save'> <FontAwesomeIcon icon={faCheck} onClick={(e) => Save(item.id, e)}/></button>
                        <button onClick={() => setEdit(-1)} ><FontAwesomeIcon icon={faXmark} /></button>
                        </td>
                    </tr> : <tr key={item.id}>
                      <td className='td1'>{item.name}</td>
                      <td className='td2'>{item.member1}<br /><span>տեղ.`- </span>{item.member2}</td>
                      <td className='td4'>{item.internalphone}<br />{item.internalphone2}</td>
                      {auth.role && <td><button onClick={() => {
                        setEdit(index); setValue({
                          name: item.name, member1: item.member1, member2:item.member2,
                          internalphone: item.internalphone, internalphone2:item.internalphone2
                        })
                      }}><FontAwesomeIcon icon={faPen} /></button>
                        <button onClick={(e) =>{ setRemoveitem([item.id, e]);e.preventDefault()}}><FontAwesomeIcon icon={faTrash} /></button></td>
                      }
                    </tr>
                  }
                </tbody>
              )
            }
          </>
        </table>
        {auth.role && <button onClick={() => { setAdd(!add) }} className="icon"><FontAwesomeIcon icon={faPlus} />   Ավելացնել</button>}
      </form>}
      {removeitem[0] !== -1 && <DeleteText removeitem={removeitem} setRemoveitem={setRemoveitem} deleteItem={Delete} />}
    </>
  )
}
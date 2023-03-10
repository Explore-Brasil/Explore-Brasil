import { Rating } from 'react-simple-star-rating'
import { useContext, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { StatesContext } from '../../providers/Statescontext'
import { Usercontext } from '../../providers/Usercontext'
import { FormCreateComent } from './style'
interface ICreateCommentProps {
  statesId: number;
  }
  
  interface ICreateCommentData {
    title: string;
    description: string;
    comment: string;
    img: string;
  }


export const CreateComment =  ({ statesId }: ICreateCommentProps) => {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const { createPost, setModalIsOpen } = useContext(StatesContext)
  const { getUserName } = useContext(Usercontext)


  const [userName, setUserName] = useState('')
  const [rating, setRating] = useState(5)


  useEffect(() => {
    async function fetchData() {
      const tempName = await getUserName();
      setUserName(tempName);
    }
    fetchData();
  }, []);


  const commentFunction = (data: ICreateCommentData)  => {
    const imageRegex = /\.(jpeg|jpg|gif|png|svg)$/;
    const imgOutput = imageRegex.test(data.img)
    const user = localStorage.getItem('@ID') || ''
    if (imgOutput === false && data.img !== '') {
      console.log('imagem não valida ~subtituir por toast')
      return
    }


    if (data.title === '' || data.description === '') {
      console.log('título ou descricão nao podem estar vazios ~substituir por toast')
    } else {
      createPost({ ...data, statesId: statesId, user: userName, avaliation: rating, userId: user })
      setModalIsOpen(false)
      console.log('colocar toast de sucesso e de falha')
    }


  }
  const setRatingFunction = (data: number) => {
    setRating(data)
  }



  return (
    <FormCreateComent onSubmit={handleSubmit(commentFunction as ICreateCommentData)}>
      <div className="setCommentHeader">
        {userName != '' ? <span>{userName}</span> : null}
        <input type="text" {...register('title')} placeholder="Insira um título para o seu comentário" />
      </div>

      <div className="setCommentBody">
        <textarea {...register('comment')} ></textarea>
        <input {...register('img')} type="text" placeholder="Insira aqui um link para sua imagem" />
        <Rating initialValue={5} transition={true} size={18} onClick={setRatingFunction} />
      </div>

      <button type="submit">Comentar</button>



    </FormCreateComent>
  )
}
import { Rating } from 'react-simple-star-rating'
import { useContext, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import api from "../../services/api"
import { StatesContext } from '../../providers/Statescontext'
import { Usercontext } from '../../providers/Usercontext'



export const CreateComment = ({ statesId }) => {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const { createPost, setModalIsOpen } = useContext(StatesContext)
  const { getUserName } = useContext(Usercontext)


  const [userName, setUserName] = useState('')
  const [rating, setRating] = useState(5)


  useEffect(() => {
    async function fetchData() {
      const tempName = await getUserName();
      console.log(tempName)
      setUserName(tempName);
      //   console.log(tempName, 'tempname')
    }
    fetchData();
  }, []);


  const commentFunction = (data) => {
    const imageRegex = /\.(jpeg|jpg|gif|png|svg)$/;
    const imgOutput = imageRegex.test(data.img)
    const user = localStorage.getItem('@ID')
    if (imgOutput === false && data.img !== '') {
      console.log('imagem não valida ~subtituir por toast')
      return
    }


    if (data.title == '' || data.description == '') {
      console.log('título ou descricão nao podem estar vazios caralho ~substituir por toast')
    } else {

      console.log({ ...data, statesId: statesId, user: userName, avaliation: rating, userId: user })
      createPost({ ...data, statesId: statesId, user: userName, avaliation: rating, userId: user })
      setModalIsOpen(false)
    }


  }

  const setRatingFunction = (data) => {
    setRating(data)
    // console.log(rating)
  }



  return (
    <form onSubmit={handleSubmit(commentFunction)}>
      <div className="setCommentHeader">
        {userName != '' ? <span>{userName}</span> : null}
        <input type="text" {...register('title')} placeholder="Insira um título para o seu comentário" />
      </div>

      <div className="setCommentBody">
        <textarea {...register('comment')} ></textarea>
        <input {...register('img')} type="text" placeholder="Insira aqui um link para sua imagem" />
        <Rating initialValue={5} transition={true} onClick={setRatingFunction} />
      </div>

      <button type="submit">Comentar</button>



    </form>
  )
}
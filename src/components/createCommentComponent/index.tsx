import { Rating } from 'react-simple-star-rating'
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import api from "../../services/api"



export const CreateComment = ({stateID}) => {
    
    const {register, handleSubmit, formState: {errors}} = useForm()
    
    
    const [userName, setUserName] = useState('')
    const [rating, setRating] = useState(5)
    
    const getUserName = async () => {
        
        const userId = localStorage.getItem('@ID')        
        const allUsers = await api.get('/users')    
        const selectedUser = allUsers.data.find(user => user.id === parseInt(userId));
        
        return selectedUser.name
    }

    useEffect(() => {
        async function fetchData() {
          const tempName = await getUserName();
          setUserName(tempName);
        //   console.log(tempName, 'tempname')
        }
        fetchData();
      }, []);


      const testFunction = (data) => {
        const imageRegex = /\.(jpeg|jpg|gif|png|svg)$/;
        const imgOutput = imageRegex.test(data.img)
        if(imgOutput === false && data.img !== '') {
            console.log('imagem não valida ~subtituir por toast')
            return
        }

          
          if(data.title == '' || data.description == '') {
              console.log('título ou descricão nao podem estar vazios caralho ~substituir por toast')
            } else {

                console.log({...data, stateID: stateID, name: userName, rating: rating})
            }


        }

      const setRatingFunction = (data) => {
        setRating(data)
        // console.log(rating)
      }
      


    return (
        <form onSubmit={handleSubmit(testFunction)}>
            <div className="setCommentHeader">
                {userName != '' ? <span>{userName}</span> : null}
                <input type="text" {...register('title')} placeholder="Insira um título para o seu comentário"/>
            </div>

            <div className="setCommentBody">
                <textarea {...register('description')} ></textarea>
                <input {...register('img')} type="text" placeholder="Insira aqui um link para sua imagem" />
                <Rating initialValue={5} transition={true} onClick={setRatingFunction} />
            </div>

            <button type="submit">Comentar</button>


        </form>
    )
}
import { ref } from 'vue'
import axios from 'axios'

const getUsers = () => {
    let users = ref([])
  

    const getData = async () => {
        let response = await axios.get('http://localhost:3000/user')
        users.value = await response.data
        
    }

    const addUser= async(email,password)=>{
        let addUser=await axios.post('http://localhost:3000/user',{
            id:users.value.length+1,
            email:email,
            password:password
        })
        getData()
    }

    return {
        users,
        getData,
        addUser
    }
}

export default getUsers
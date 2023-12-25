import { ref } from "vue"
import {db} from "../firebase/config"
let getPosts = () => {
    let posts = ref([]);
    let error = ref("");

    let load = async() => {
        try {
            let response = await db.collection("posts").get()
            console.log(response);
            // await new Promise((resolve,reject) => {
            //     setTimeout(resolve,1500)
            // })
            // let response = await fetch("http://localhost:3000/posts")
            // if (response.status === 404) {
            //     throw new Error("Url not found !")
            // }
            // let datas = await response.json()
            // posts.value = datas
        } catch (err) {
            error.value=err.message
        }
    }
    return { posts, error, load };
}

export default getPosts;